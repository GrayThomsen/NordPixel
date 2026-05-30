'use client';

import Editor, { type OnMount } from '@monaco-editor/react';
import type * as Monaco from 'monaco-editor';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { FilePlus2, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { weblabLanguage } from '../../context/weblabLanguage';

type EditorTab = 'html' | 'css' | 'js';

type FileKind = EditorTab;

type ProjectFile = {
  id: string;
  name: string;
  kind: FileKind;
  content: string;
};

type LabProject = {
  version: 2;
  mode: 'full';
  name: string;
  updatedAt: string;
  files: ProjectFile[];
};

type LegacyLabProject = {
  version: 1;
  name: string;
  updatedAt: string;
  files: {
    html: string;
    css: string;
    js: string;
  };
};

const STORAGE_KEY = 'nordpixel-weblab-current';
const LAST_SAVE_KEY = 'nordpixel-weblab-last-save';
const DIRTY_STATE_KEY = 'nordpixel-weblab-is-dirty';
const HTML_VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);
const HTML_COMPLETION_TAGS = [
  'div',
  'section',
  'article',
  'main',
  'header',
  'footer',
  'nav',
  'aside',
  'p',
  'span',
  'button',
  'form',
  'label',
  'ul',
  'ol',
  'li',
  'a',
  'strong',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'script',
  'style',
  'table',
  'thead',
  'tbody',
  'tr',
  'td',
] as const;
function getBoilerplateTitleFromFileName(fileName: string) {
  const trimmed = fileName.trim();
  const withoutExtension = trimmed.replace(/\.html?$/i, '');
  const fallback = withoutExtension || 'index';
  return fallback.replace(/[<>]/g, '');
}

function createHtmlBoilerplate(fileName: string) {
  const title = getBoilerplateTitleFromFileName(fileName);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <h1>Hello Student</h1>
      <p>Start building your page.</p>
    </main>
    <script src="script.js"></script>
  </body>
</html>`;
}

const CSS_BOILERPLATE = `*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

img, video {
  max-width: 100%;
  display: block;
}`;

function createFileId() {
  return globalThis.crypto?.randomUUID?.() ?? `file-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createFile(kind: FileKind, name: string, content: string): ProjectFile {
  return {
    id: createFileId(),
    kind,
    name,
    content,
  };
}

function createFullStarterFiles() {
  return [
    createFile('html', 'index.html', createHtmlBoilerplate('index.html')),
    createFile('css', 'styles.css', CSS_BOILERPLATE),
    createFile('js', 'script.js', ''),
  ];
}

function createStarterProject(): LabProject {
  return {
    version: 2,
    mode: 'full',
    name: 'my-project',
    updatedAt: '',
    files: createFullStarterFiles(),
  };
}

function inferKindFromName(name: string): FileKind {
  const lower = name.trim().toLowerCase();
  if (lower.endsWith('.css')) {
    return 'css';
  }
  if (lower.endsWith('.js')) {
    return 'js';
  }

  return 'html';
}

function ensureFileExtension(name: string, kind: FileKind) {
  const trimmed = name.trim().replace(/[\\/]+/g, '-');
  if (!trimmed) {
    return '';
  }

  if (/\.(html?|css|js)$/i.test(trimmed)) {
    return trimmed;
  }

  const extension = kind === 'html' ? '.html' : `.${kind}`;
  return `${trimmed}${extension}`;
}

function makeUniqueFileName(existingNames: string[], requestedName: string, kind: FileKind) {
  const baseName = ensureFileExtension(requestedName, kind);
  if (!baseName) {
    return '';
  }

  const normalizedNames = new Set(existingNames.map((name) => name.toLowerCase()));
  if (!normalizedNames.has(baseName.toLowerCase())) {
    return baseName;
  }

  const extensionMatch = baseName.match(/(\.[^.]+)$/);
  const extension = extensionMatch?.[1] ?? '';
  const stem = extension ? baseName.slice(0, -extension.length) : baseName;
  let counter = 2;
  let nextName = `${stem}-${counter}${extension}`;

  while (normalizedNames.has(nextName.toLowerCase())) {
    counter += 1;
    nextName = `${stem}-${counter}${extension}`;
  }

  return nextName;
}

function getInitialActiveFileId(files: ProjectFile[]) {
  return files.find((file) => file.kind === 'html')?.id ?? files[0]?.id ?? '';
}

function escapeInlineContent(value: string, closingTag: string) {
  return value.replaceAll(closingTag, `<\\/${closingTag.slice(2)}`);
}

function getFileLookupName(name: string) {
  return name.trim().replace(/[?#].*$/, '').split(/[\\/]/).pop()?.toLowerCase() ?? '';
}

function findProjectFileByReference(files: ProjectFile[], reference: string, kind?: FileKind) {
  const lookup = getFileLookupName(reference);
  if (!lookup) {
    return null;
  }

  return (
    files.find((file) => {
      if (kind && file.kind !== kind) {
        return false;
      }

      return file.name.toLowerCase() === lookup || getFileLookupName(file.name) === lookup;
    }) ?? null
  );
}

function isLocalReference(reference: string) {
  return !/^(?:https?:)?\/\//i.test(reference) && !reference.startsWith('data:') && !reference.startsWith('blob:');
}

const PREVIEW_NAV_INTERCEPTOR = `
<script data-nordpixel-nav>
  (function () {
    function isBlockedHref(href) {
      var value = String(href || '').trim().toLowerCase();
      return (
        !value ||
        value.charAt(0) === '#' ||
        value.startsWith('http:') ||
        value.startsWith('https:') ||
        value.startsWith('//') ||
        value.startsWith('mailto:') ||
        value.startsWith('tel:') ||
        value.startsWith('javascript:')
      );
    }

    function interceptClicks(e) {
      var target = e.target.closest('a[href]');
      if (!target) return;
      var href = target.getAttribute('href');
      if (isBlockedHref(href)) return;
      e.preventDefault();
      try {
        window.parent.postMessage({ type: 'nordpixel-navigate', target: href }, '*');
      } catch (_) {}
    }
    document.addEventListener('click', interceptClicks);
  })();
</script>`;

function injectNavInterceptor(html: string): string {
  const bodyClose = html.search(/<\/body>/i);
  if (bodyClose !== -1) {
    return html.slice(0, bodyClose) + PREVIEW_NAV_INTERCEPTOR + '\n' + html.slice(bodyClose);
  }
  return html + PREVIEW_NAV_INTERCEPTOR;
}

function extractDocumentTitle(html: string): string {
  const match = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) {
    return '';
  }

  return match[1].replace(/\s+/g, ' ').trim();
}

function buildFullPreviewDocument(project: LabProject, activeFile: ProjectFile | undefined) {
  const htmlFile = activeFile?.kind === 'html' ? activeFile : project.files.find((file) => file.kind === 'html');
  const htmlContent = htmlFile?.content ?? createHtmlBoilerplate(htmlFile?.name ?? 'index.html');

  const withStyles = htmlContent.replace(
    /<link\b([^>]*?)>/gi,
    (match, rawAttributes: string) => {
      const relMatch = rawAttributes.match(/\brel\s*=\s*["']?([^"'\s>]+)["']?/i);
      const hrefMatch = rawAttributes.match(/\bhref\s*=\s*["']([^"']+)["']/i);
      const rel = relMatch?.[1]?.toLowerCase() ?? '';
      const href = hrefMatch?.[1] ?? '';

      if (rel !== 'stylesheet' || !href || !isLocalReference(href)) {
        return match;
      }

      const stylesheet = findProjectFileByReference(project.files, href, 'css');
      if (!stylesheet) {
        return '';
      }

      return `<style data-nordpixel-inline="${stylesheet.name}">${escapeInlineContent(stylesheet.content, '</style>')}</style>`;
    },
  );

  const withScripts = withStyles.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (match, rawAttributes: string, innerContent: string) => {
      const srcMatch = rawAttributes.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
      const src = srcMatch?.[1] ?? '';

      if (!src || !isLocalReference(src)) {
        return match;
      }

      const scriptFile = findProjectFileByReference(project.files, src, 'js');
      if (!scriptFile) {
        return '';
      }

      const inlineAttributes = rawAttributes.replace(/\s+src\s*=\s*["'][^"']+["']/i, '');
      const inlineContent = escapeInlineContent(scriptFile.content, '</script>');

      if (!inlineContent.trim() && !innerContent.trim()) {
        return `<script${inlineAttributes}></script>`;
      }

      return `<script${inlineAttributes}>${inlineContent}</script>`;
    },
  );

  return injectNavInterceptor(withScripts);
}

const PREVIEW_TAB_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NordPixel Preview</title>
    <style>
      :root { color-scheme: light; }
      body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif; }
      .previewShell {
        display: grid;
        grid-template-rows: auto 1fr;
        min-height: 100vh;
      }
      .previewShellBar {
        padding: 0.5rem 0.75rem;
        border-bottom: 1px solid #d8d8d8;
        font-size: 0.85rem;
        color: #4f4f4f;
        background: #fafafa;
      }
      #preview-frame {
        width: 100%;
        height: 100%;
        border: 0;
      }
    </style>
  </head>
  <body>
    <div class="previewShell">
      <div class="previewShellBar">Live preview from NordPixel WebLab</div>
      <iframe id="preview-frame" title="Live preview frame"></iframe>
    </div>
    <script>
      const frame = document.getElementById('preview-frame');
      window.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'nordpixel-preview-update') {
          if (event.origin !== window.location.origin) {
            return;
          }

          frame.srcdoc = event.data.payload || '';
          if (typeof event.data.pageTitle === 'string' && event.data.pageTitle.trim()) {
            document.title = event.data.pageTitle.trim();
          } else {
            document.title = 'NordPixel Preview';
          }
          return;
        }

        if (event.data && event.data.type === 'nordpixel-navigate') {
          if (!window.opener) {
            return;
          }

          window.opener.postMessage(event.data, window.location.origin);
        }
      });

      if (window.opener) {
        window.opener.postMessage({ type: 'nordpixel-preview-ready' }, window.location.origin);
      }
    </script>
  </body>
</html>`;

function safeParseProject(raw: string): LabProject | null {
  try {
    const parsed = JSON.parse(raw) as Partial<LabProject | LegacyLabProject>;

    if (parsed.version === 2 && Array.isArray(parsed.files)) {
      const files = parsed.files.filter(
        (file): file is ProjectFile =>
          !!file &&
          typeof file.id === 'string' &&
          typeof file.name === 'string' &&
          (file.kind === 'html' || file.kind === 'css' || file.kind === 'js') &&
          typeof file.content === 'string',
      );

      if (files.length === 0) {
        return null;
      }

      return {
        version: 2,
        mode: 'full',
        name: typeof parsed.name === 'string' && parsed.name.trim().length > 0 ? parsed.name : 'my-project',
        updatedAt:
          typeof parsed.updatedAt === 'string' && parsed.updatedAt.trim().length > 0
            ? parsed.updatedAt
            : new Date().toISOString(),
        files,
      };
    }

    if (parsed.version === 1 && parsed.files) {
      return {
        version: 2,
        mode: 'full',
        name: typeof parsed.name === 'string' && parsed.name.trim().length > 0 ? parsed.name : 'my-project',
        updatedAt:
          typeof parsed.updatedAt === 'string' && parsed.updatedAt.trim().length > 0
            ? parsed.updatedAt
            : new Date().toISOString(),
        files: [
          createFile('html', 'index.html', parsed.files.html),
          createFile('css', 'styles.css', parsed.files.css),
          createFile('js', 'script.js', parsed.files.js),
        ],
      };
    }

    return null;
  } catch {
    return null;
  }
}

export function WebLab() {
  const { locale: siteLocale } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewTabRef = useRef<Window | null>(null);
  const htmlReferenceNamesRef = useRef<string[]>([]);
  const htmlCompletionProviderDisposableRef = useRef<{ dispose: () => void } | null>(null);
  const [activeFileId, setActiveFileId] = useState<string>(() => getInitialActiveFileId(createStarterProject().files));
  const [project, setProject] = useState<LabProject>(() => createStarterProject());
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [editingFileName, setEditingFileName] = useState<string>('');
  const [pendingDeleteFileId, setPendingDeleteFileId] = useState<string | null>(null);
  const [isNewSiteConfirmOpen, setIsNewSiteConfirmOpen] = useState(false);
  const [notice, setNotice] = useState<string>(() => weblabLanguage[siteLocale].weblab.statusDraftAutosave);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [lastSavedAt, setLastSavedAt] = useState<string>('');
  const [activeTimeZone, setActiveTimeZone] = useState(() =>
    new Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
  );
  const [previewRefreshNonce, setPreviewRefreshNonce] = useState(0);
  const [visiblePanes, setVisiblePanes] = useState({ explorer: true, editor: true, preview: true });
  const [isMobile, setIsMobile] = useState(false);
  const visiblePanesKey = `${visiblePanes.explorer ? '1' : '0'}${visiblePanes.editor ? '1' : '0'}${visiblePanes.preview ? '1' : '0'}`;
  const weblabText = weblabLanguage[siteLocale].weblab;
  const editorIntroCopy = weblabLanguage[siteLocale].editorIntro;
  const panelDefaults = useMemo(() => {
    const showExplorer = visiblePanes.explorer;
    const showEditor = visiblePanes.editor;
    const showPreview = visiblePanes.preview;

    if (showExplorer && showEditor && showPreview) {
      return { explorer: 20, editor: 40, preview: 40 };
    }

    if (showExplorer && showEditor) {
      return { explorer: 35, editor: 65, preview: 0 };
    }

    if (showExplorer && showPreview) {
      return { explorer: 35, editor: 0, preview: 65 };
    }

    if (showEditor && showPreview) {
      return { explorer: 0, editor: 50, preview: 50 };
    }

    if (showExplorer) {
      return { explorer: 100, editor: 0, preview: 0 };
    }

    if (showEditor) {
      return { explorer: 0, editor: 100, preview: 0 };
    }

    if (showPreview) {
      return { explorer: 0, editor: 0, preview: 100 };
    }

    return { explorer: 0, editor: 0, preview: 0 };
  }, [visiblePanes]);

  useEffect(() => {
    setNotice((current) =>
      current === weblabLanguage.en.weblab.statusDraftAutosave || current === weblabLanguage.da.weblab.statusDraftAutosave
        ? weblabText.statusDraftAutosave
        : current,
    );
  }, [weblabText.statusDraftAutosave]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 880px)');
    const applyViewportMode = () => {
      setIsMobile(media.matches);
    };
    applyViewportMode();
    media.addEventListener('change', applyViewportMode);

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = safeParseProject(saved);
      if (parsed) {
        setProject(parsed);
        setActiveFileId(getInitialActiveFileId(parsed.files));
        setNotice(weblabText.statusRecovered);
      }
    }

    const persistedSaveTime = window.localStorage.getItem(LAST_SAVE_KEY);
    if (persistedSaveTime) {
      setLastSavedAt(persistedSaveTime);
    }

    const persistedDirtyState = window.localStorage.getItem(DIRTY_STATE_KEY);
    if (persistedDirtyState === 'true' || persistedDirtyState === 'false') {
      setIsDirty(persistedDirtyState === 'true');
    }

    setIsHydrated(true);

    return () => {
      media.removeEventListener('change', applyViewportMode);
    };
  }, [weblabText.statusRecovered]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
  }, [isHydrated, project]);

  useEffect(() => {
    const syncTimeZone = () => {
      const nextTimeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
      setActiveTimeZone((current) => (current === nextTimeZone ? current : nextTimeZone));
    };

    const intervalId = window.setInterval(syncTimeZone, 30_000);
    window.addEventListener('focus', syncTimeZone);
    document.addEventListener('visibilitychange', syncTimeZone);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', syncTimeZone);
      document.removeEventListener('visibilitychange', syncTimeZone);
    };
  }, []);

  const activeFile = useMemo(() => {
    return project.files.find((file) => file.id === activeFileId) ?? project.files[0];
  }, [activeFileId, project.files]);

  const srcDoc = useMemo(() => {
    return buildFullPreviewDocument(project, activeFile);
  }, [activeFile, project]);

  useEffect(() => {
    if (project.files.some((file) => file.id === activeFileId)) {
      return;
    }

    setActiveFileId(getInitialActiveFileId(project.files));
  }, [activeFileId, project.files]);

  useEffect(() => {
    return () => {
      htmlCompletionProviderDisposableRef.current?.dispose();
      htmlCompletionProviderDisposableRef.current = null;
    };
  }, []);

  useEffect(() => {
    htmlReferenceNamesRef.current = project.files
      .filter((file) => file.kind === 'html')
      .map((file) => file.name);
  }, [project.files]);

  useEffect(() => {
    if (!editingFileId) {
      return;
    }

    const file = project.files.find((item) => item.id === editingFileId);
    if (!file) {
      cancelRenameFile();
      return;
    }

    setEditingFileName(file.name);
  }, [editingFileId, project.files]);

  const currentCode = activeFile?.content ?? '';
  const currentLanguage = activeFile?.kind === 'js' ? 'javascript' : activeFile?.kind ?? 'html';

  const insertClosingHtmlTag = useCallback(
    (
      editor: Parameters<OnMount>[0],
      monaco: Parameters<OnMount>[1],
      tagName: string,
      includeOpeningBracket: boolean,
    ) => {
      const position = editor.getPosition();
      if (!position) {
        return false;
      }

      const insertionText = includeOpeningBracket ? `></${tagName}>` : `</${tagName}>`;
      editor.executeEdits('nordpixel-html-close-tag', [
        {
          range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
          text: insertionText,
          forceMoveMarkers: true,
        },
      ]);

      editor.setPosition({
        lineNumber: position.lineNumber,
        column: includeOpeningBracket ? position.column + 1 : position.column,
      });
      return true;
    },
    [],
  );

  const handleEditorMount = useCallback<OnMount>((editor, monaco) => {
    if (!htmlCompletionProviderDisposableRef.current) {
      htmlCompletionProviderDisposableRef.current = monaco.languages.registerCompletionItemProvider('html', {
        triggerCharacters: ['<', '"', '\'', '/'],
        provideCompletionItems(
          model: Monaco.editor.ITextModel,
          position: Monaco.Position,
        ): Monaco.languages.ProviderResult<Monaco.languages.CompletionList> {
          const linePrefix = model
            .getValueInRange({
              startLineNumber: position.lineNumber,
              startColumn: 1,
              endLineNumber: position.lineNumber,
              endColumn: position.column,
            })
            .trimEnd();

          const hrefMatch = linePrefix.match(/\bhref\s*=\s*["']([^"']*)$/i);
          if (hrefMatch) {
            const hrefPrefix = hrefMatch[1] ?? '';
            const normalizedPrefix = hrefPrefix.toLowerCase();
            const htmlReferences = htmlReferenceNamesRef.current;
            const startColumn = Math.max(1, position.column - hrefPrefix.length);

            const hrefSuggestions = htmlReferences
              .filter((name) => name.toLowerCase().startsWith(normalizedPrefix))
              .map((name) => ({
                label: name,
                kind: monaco.languages.CompletionItemKind.File,
                insertText: name,
                range: {
                  startLineNumber: position.lineNumber,
                  startColumn,
                  endLineNumber: position.lineNumber,
                  endColumn: position.column,
                },
              }));

            return { suggestions: hrefSuggestions };
          }

          const tagMatch = linePrefix.match(/<([a-zA-Z][\w-]*)?$/);
          if (!tagMatch) {
            return { suggestions: [] };
          }

          const tagPrefix = tagMatch[1] ?? '';
          const range = {
            startLineNumber: position.lineNumber,
            startColumn: Math.max(1, position.column - tagPrefix.length - 1),
            endLineNumber: position.lineNumber,
            endColumn: position.column,
          };

          const suggestions = HTML_COMPLETION_TAGS.filter((tag) => tag.startsWith(tagPrefix)).map((tag) => ({
            label: tag,
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `<${tag}>$0</${tag}>`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range,
            sortText: tag,
          }));

          return { suggestions };
        },
      });
    }

    let isApplyingAutoClose = false;
    const closeTagDisposable = editor.onDidChangeModelContent((changeEvent) => {
      if (isApplyingAutoClose || changeEvent.isFlush) {
        return;
      }

      const model = editor.getModel();
      if (!model || model.getLanguageId() !== 'html') {
        return;
      }

      const position = editor.getPosition();
      if (!position || position.column <= 1) {
        return;
      }

      const linePrefix = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });

      const acceptedTagSuggestion = changeEvent.changes.some((change) => {
        if (!/^[a-zA-Z][\w-]*$/.test(change.text)) {
          return false;
        }

        return change.text.length > 1 || change.rangeLength > 0;
      });

      if (acceptedTagSuggestion) {
        const completionTagMatch = linePrefix.match(/<([a-zA-Z][\w-]*)$/);
        if (!completionTagMatch) {
          return;
        }

        const tagName = completionTagMatch[1].toLowerCase();
        if (
          HTML_VOID_TAGS.has(tagName) ||
          !HTML_COMPLETION_TAGS.includes(tagName as (typeof HTML_COMPLETION_TAGS)[number])
        ) {
          return;
        }

        const lineSuffix = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: position.column,
          endLineNumber: position.lineNumber,
          endColumn: model.getLineMaxColumn(position.lineNumber),
        });
        if (lineSuffix.startsWith('>') || lineSuffix.startsWith(`</${tagName}>`)) {
          return;
        }

        isApplyingAutoClose = true;
        insertClosingHtmlTag(editor, monaco, tagName, true);
        isApplyingAutoClose = false;
        return;
      }

      const insertedCloseBracket = changeEvent.changes.some(
        (change) => change.rangeLength === 0 && change.text === '>',
      );

      if (!insertedCloseBracket) {
        return;
      }
      const tagMatch = linePrefix.match(/<([a-zA-Z][\w-]*)(?:\s[^<>]*)?>$/);
      if (!tagMatch) {
        return;
      }

      const tagName = tagMatch[1].toLowerCase();
      if (HTML_VOID_TAGS.has(tagName) || /\/>$/.test(linePrefix)) {
        return;
      }

      isApplyingAutoClose = true;
      insertClosingHtmlTag(editor, monaco, tagName, false);
      isApplyingAutoClose = false;
    });

    editor.onDidDispose(() => closeTagDisposable.dispose());
  }, [insertClosingHtmlTag]);

  const pushPreviewUpdate = useCallback(
    (targetWindow?: Window | null) => {
      const target = targetWindow ?? previewTabRef.current;
      if (!target || target.closed) {
        previewTabRef.current = null;
        return;
      }

      const pageTitle = extractDocumentTitle(srcDoc);

      target.postMessage(
        {
          type: 'nordpixel-preview-update',
          payload: srcDoc,
          pageTitle,
        },
        window.location.origin,
      );
    },
    [srcDoc],
  );

  const formattedLastUpdate = useMemo(() => {
    if (!isHydrated || !project.updatedAt) {
      return '--';
    }

    const parsed = new Date(project.updatedAt);
    if (Number.isNaN(parsed.getTime())) {
      return '--';
    }

    const localeTag = siteLocale === 'da' ? 'da-DK' : 'en-GB';
    const time = new Intl.DateTimeFormat(localeTag, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: activeTimeZone,
    }).format(parsed);

    const parts = new Intl.DateTimeFormat(localeTag, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: activeTimeZone,
    }).formatToParts(parsed);

    const todayParts = new Intl.DateTimeFormat(localeTag, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: activeTimeZone,
    }).formatToParts(new Date());

    const day = parts.find((part) => part.type === 'day')?.value ?? '--';
    const month = parts.find((part) => part.type === 'month')?.value ?? '--';
    const year = parts.find((part) => part.type === 'year')?.value ?? '----';

    const todayDay = todayParts.find((part) => part.type === 'day')?.value;
    const todayMonth = todayParts.find((part) => part.type === 'month')?.value;
    const todayYear = todayParts.find((part) => part.type === 'year')?.value;

    const isToday = day === todayDay && month === todayMonth && year === todayYear;

    if (isToday) {
      return time;
    }

    return `${time} (${day}.${month}.${year})`;
  }, [activeTimeZone, isHydrated, project.updatedAt, siteLocale]);

  const formattedLastSave = useMemo(() => {
    if (!isHydrated || !lastSavedAt) {
      return weblabText.notSavedYet;
    }

    const parsed = new Date(lastSavedAt);
    if (Number.isNaN(parsed.getTime())) {
      return weblabText.notSavedYet;
    }

    return new Intl.DateTimeFormat(siteLocale === 'da' ? 'da-DK' : 'en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(parsed);
  }, [isHydrated, lastSavedAt, siteLocale, weblabText.notSavedYet]);

  const isRecoveredNotice =
    notice === weblabLanguage.en.weblab.statusRecovered || notice === weblabLanguage.da.weblab.statusRecovered;

  function markProjectChanged(updater: (prev: LabProject) => LabProject) {
    setProject((prev) => {
      const next = updater(prev);
      return {
        ...next,
        updatedAt: new Date().toISOString(),
      };
    });
    setIsDirty(true);
    window.localStorage.setItem(DIRTY_STATE_KEY, 'true');
  }

  function updateCode(value: string | undefined) {
    const next = value ?? '';
    if (activeFile?.kind === 'css' && /^\s*!$/.test(next)) {
      markProjectChanged((prev) => ({
        ...prev,
        files: prev.files.map((file) =>
          file.id === activeFileId ? { ...file, content: CSS_BOILERPLATE } : file,
        ),
      }));
      return;
    }
    if (activeFile?.kind === 'html' && /^\s*!$/.test(next)) {
      const boilerplate = createHtmlBoilerplate(activeFile?.name ?? 'index.html');
      markProjectChanged((prev) => ({
        ...prev,
        files: prev.files.map((file) =>
          file.id === activeFileId ? { ...file, content: boilerplate } : file,
        ),
      }));
      return;
    }

    markProjectChanged((prev) => ({
      ...prev,
      files: prev.files.map((file) => (file.id === activeFileId ? { ...file, content: next } : file)),
    }));
  }

  function handleSelectFile(fileId: string) {
    setPendingDeleteFileId(null);
    setActiveFileId(fileId);
  }

  function handleCreateFile() {
    const kind: FileKind = 'html';
    const nextName = makeUniqueFileName(project.files.map((file) => file.name), 'new-file.html', kind);

    const starterContent = '';

    const newFile = createFile(kind, nextName, starterContent);

    markProjectChanged((prev) => ({
      ...prev,
      files: [...prev.files, newFile],
    }));
    setActiveFileId(newFile.id);
    setEditingFileId(newFile.id);
    setEditingFileName(newFile.name);
    setNotice(`${weblabText.statusCreated} ${nextName}.`);
  }

  function handleRenameFile(fileId: string) {
    const file = project.files.find((item) => item.id === fileId);
    if (!file) {
      return;
    }

    setEditingFileId(fileId);
    setEditingFileName(file.name);
  }

  function commitRenameFile(fileId: string, requestedName: string) {
    const file = project.files.find((item) => item.id === fileId);
    if (!file) {
      return;
    }

    const nextKind = inferKindFromName(requestedName) || file.kind;
    const nextName = makeUniqueFileName(
      project.files.filter((item) => item.id !== fileId).map((item) => item.name),
      requestedName,
      nextKind,
    );

    if (!nextName) {
      setNotice(weblabText.statusRenameCancelled);
      return;
    }

    markProjectChanged((prev) => ({
      ...prev,
      files: prev.files.map((item) =>
        item.id === fileId ? { ...item, name: nextName, kind: nextKind } : item,
      ),
    }));
    setNotice(`${weblabText.statusRenamed} ${nextName}`);
  }

  function cancelRenameFile() {
    setEditingFileId(null);
    setEditingFileName('');
  }

  function handleDeleteFile(fileId: string) {
    if (project.files.length === 1) {
      setNotice(weblabText.statusKeepOneFile);
      setPendingDeleteFileId(null);
      return;
    }

    const file = project.files.find((item) => item.id === fileId);
    if (!file) {
      return;
    }

    const nextFiles = project.files.filter((item) => item.id !== fileId);
    markProjectChanged((prev) => ({
      ...prev,
      files: nextFiles,
    }));
    setPendingDeleteFileId(null);
    setActiveFileId((current) => (current === fileId ? getInitialActiveFileId(nextFiles) : current));
    setNotice(`${weblabText.statusDeleted} ${file.name}`);
  }

  function requestDeleteFile(fileId: string) {
    if (project.files.length === 1) {
      setNotice(weblabText.statusKeepOneFile);
      return;
    }

    setPendingDeleteFileId((current) => (current === fileId ? null : fileId));
  }

  function handleNewProject() {
    const nextProject = createStarterProject();
    const normalizedFiles = nextProject.files.map((file) => {
      if (file.kind === 'html' && file.name.toLowerCase() === 'index.html') {
        return {
          ...file,
          content: createHtmlBoilerplate('index.html'),
        };
      }

      return file;
    });

    setProject({
      ...nextProject,
      files: normalizedFiles,
      updatedAt: new Date().toISOString(),
    });
    setActiveFileId(getInitialActiveFileId(normalizedFiles));
    setIsNewSiteConfirmOpen(false);
    cancelRenameFile();
    setIsDirty(true);
    window.localStorage.setItem(DIRTY_STATE_KEY, 'true');
    setNotice(weblabText.statusStartedFresh);
  }

  function requestNewProjectReset() {
    setIsNewSiteConfirmOpen(true);
  }

  function handleProjectNameChange(event: ChangeEvent<HTMLInputElement>) {
    const nextName = event.currentTarget.value;
    markProjectChanged((prev) => ({
      ...prev,
      name: nextName,
    }));
  }

  function handleSave() {
    const next: LabProject = {
      ...project,
      updatedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(next, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    const safeName = next.name.trim().length > 0 ? next.name.trim() : 'my-project';
    anchor.href = url;
    anchor.download = `${safeName}.nordpixel.json`;
    anchor.click();
    URL.revokeObjectURL(url);

    const savedAt = new Date().toISOString();
    setLastSavedAt(savedAt);
    window.localStorage.setItem(LAST_SAVE_KEY, savedAt);
    setIsDirty(false);
    window.localStorage.setItem(DIRTY_STATE_KEY, 'false');
    setNotice(weblabText.statusSaved);
  }

  function handleImportRequest() {
    fileInputRef.current?.click();
  }

  function handleImportFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const content = typeof reader.result === 'string' ? reader.result : '';
      const parsed = safeParseProject(content);
      if (!parsed) {
        setNotice(weblabText.statusImportFailedInvalid);
        return;
      }

      setProject({
        ...parsed,
        updatedAt: new Date().toISOString(),
      });
      setActiveFileId(getInitialActiveFileId(parsed.files));
      setIsDirty(true);
      window.localStorage.setItem(DIRTY_STATE_KEY, 'true');
      setNotice(`${weblabText.statusImported}: ${parsed.name}`);
    };

    reader.onerror = () => {
      setNotice(weblabText.statusImportFailedRead);
    };

    reader.readAsText(file);
    event.currentTarget.value = '';
  }

  function openPreviewInNewTab() {
    let previewWindow = previewTabRef.current;
    if (!previewWindow || previewWindow.closed) {
      previewWindow = window.open('', '_blank');
    }

    if (!previewWindow) {
      setNotice(weblabText.statusPopupBlocked);
      return;
    }

    previewTabRef.current = previewWindow;

    if (!previewWindow.document.getElementById('preview-frame')) {
      previewWindow.document.open();
      previewWindow.document.write(PREVIEW_TAB_HTML);
      previewWindow.document.close();
    }

    pushPreviewUpdate(previewWindow);
    previewWindow.focus();
  }

  function handleRefreshPreview() {
    setPreviewRefreshNonce((current) => current + 1);
    pushPreviewUpdate(previewTabRef.current);
    setNotice(weblabText.statusPreviewRefreshed);
  }

  function togglePane(pane: 'explorer' | 'editor' | 'preview') {
    setVisiblePanes((current) => ({
      ...current,
      [pane]: !current[pane],
    }));
  }

  useEffect(() => {
    pushPreviewUpdate();
  }, [pushPreviewUpdate]);

  useEffect(() => {
    const handlePreviewReady = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return;
      }

      if (event.data && event.data.type === 'nordpixel-preview-ready') {
        pushPreviewUpdate(previewTabRef.current);
      }
    };

    window.addEventListener('message', handlePreviewReady);
    return () => {
      window.removeEventListener('message', handlePreviewReady);
    };
  }, [pushPreviewUpdate]);

  useEffect(() => {
    const handleNavMessage = (event: MessageEvent) => {
      if (!event.data || event.data.type !== 'nordpixel-navigate') {
        return;
      }
      const target = String(event.data.target ?? '').trim();
      if (!target) {
        return;
      }

      const noHash = target.split('#')[0] ?? '';
      const noQuery = noHash.split('?')[0] ?? '';
      const rawBasename = noQuery.split('/').pop() ?? noQuery;
      const basename = rawBasename.trim();
      if (!basename) {
        return;
      }

      const candidates = basename.toLowerCase().endsWith('.html')
        ? [basename.toLowerCase()]
        : [basename.toLowerCase(), `${basename.toLowerCase()}.html`];

      const targetFile = project.files.find(
        (f) => f.kind === 'html' && candidates.includes(f.name.toLowerCase()),
      );

      if (targetFile) {
        setActiveFileId(targetFile.id);
      }
    };

    window.addEventListener('message', handleNavMessage);
    return () => {
      window.removeEventListener('message', handleNavMessage);
    };
  }, [project.files]);

  return (
    <section className="weblab weblabFull">
      <header className="weblabToolbar">
        <div className="weblabTitleGroup">
          <div className="weblabTitleRow">
            <h1>{weblabText.title}</h1>
          </div>
          <p>{editorIntroCopy.text}</p>
        </div>
        <label className="weblabNameField">
          {weblabText.projectName}
          <input
            type="text"
            value={project.name}
            onChange={handleProjectNameChange}
            placeholder={weblabText.projectPlaceholder}
            maxLength={80}
          />
        </label>
        <div className="weblabControls">
          <div className="weblabActions">
            <button type="button" className="weblabNewButton" onClick={requestNewProjectReset}>
              {weblabText.newSite}
            </button>
            <button type="button" onClick={handleSave} className={isDirty ? 'isDirty' : ''}>
              {weblabText.save}
            </button>
            <button type="button" onClick={handleImportRequest}>
              {weblabText.import}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,.nordpixel.json,application/json"
              onChange={handleImportFile}
              hidden
            />
          </div>
          <div className="weblabMeta">
            <p>{weblabText.lastUpdate} {formattedLastUpdate}</p>
            <p>{weblabText.lastSave} {formattedLastSave}</p>
            {isRecoveredNotice ? (
              <p className="weblabMetaHint" title={weblabText.recoveredHint}>{notice}</p>
            ) : null}
          </div>
        </div>
      </header>

      {!isRecoveredNotice ? (
        <div className="weblabStatus">
          <p className="weblabStatusNote">{notice}</p>
        </div>
      ) : null}

      <div className="weblabViewbar" aria-label="View panes">
        <span className="weblabViewbarLabel">{weblabText.view}</span>
        <div className="weblabViewbarControls">
          <button
            type="button"
            className={visiblePanes.explorer ? 'weblabPaneToggle isOn' : 'weblabPaneToggle isOff'}
            onClick={() => togglePane('explorer')}
            aria-pressed={visiblePanes.explorer}
          >
            {weblabText.explorer}
          </button>
          <button
            type="button"
            className={visiblePanes.editor ? 'weblabPaneToggle isOn' : 'weblabPaneToggle isOff'}
            onClick={() => togglePane('editor')}
            aria-pressed={visiblePanes.editor}
          >
            {weblabText.code}
          </button>
          <button
            type="button"
            className={visiblePanes.preview ? 'weblabPaneToggle isOn' : 'weblabPaneToggle isOff'}
            onClick={() => togglePane('preview')}
            aria-pressed={visiblePanes.preview}
          >
            {weblabText.preview}
          </button>
        </div>
      </div>

      <div className="weblabWorkspace">
        {visiblePanes.explorer || visiblePanes.editor || visiblePanes.preview ? (
            <PanelGroup
              key={`${isMobile ? 'full-vertical' : 'full-horizontal'}-${visiblePanesKey}`}
              autoSaveId={`${isMobile ? 'weblab-full-mobile-layout-v2' : 'weblab-full-desktop-layout-v2'}-${visiblePanesKey}`}
              direction={isMobile ? 'vertical' : 'horizontal'}
            >
            {visiblePanes.explorer ? (
            <Panel id="full-explorer" order={1} defaultSize={panelDefaults.explorer} minSize={14} maxSize={40}>
              <div className="weblabExplorerShell">
                <div className="weblabPanelTopbar">
                  <p className="weblabPanelLabel">{weblabText.explorerPanel}</p>
                  <div className="weblabPanelActions">
                    <button type="button" onClick={handleCreateFile} className="weblabNewFileButton">
                      <FilePlus2 size={14} />
                      {weblabText.newFile}
                    </button>
                  </div>
                </div>
                <div className="weblabFileList" role="list" aria-label={weblabText.projectFiles}>
                  {project.files.map((file) => (
                    <div
                      key={file.id}
                      role="listitem"
                      className={activeFileId === file.id ? 'weblabFileRow isActive' : 'weblabFileRow'}
                      tabIndex={0}
                      onClick={() => handleSelectFile(file.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          handleSelectFile(file.id);
                        }
                      }}
                    >
                      {editingFileId === file.id ? (
                        <input
                          className="weblabFileRename"
                          type="text"
                          value={editingFileName}
                          autoFocus
                          onChange={(event) => setEditingFileName(event.currentTarget.value)}
                          onBlur={() => {
                            const trimmed = editingFileName.trim();
                            if (trimmed.length > 0 && trimmed !== file.name) {
                              commitRenameFile(file.id, trimmed);
                            }
                            cancelRenameFile();
                          }}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                              event.preventDefault();
                              const trimmed = editingFileName.trim();
                              if (trimmed.length > 0) {
                                commitRenameFile(file.id, trimmed);
                              }
                              cancelRenameFile();
                            }

                            if (event.key === 'Escape') {
                              event.preventDefault();
                              cancelRenameFile();
                            }
                          }}
                        />
                      ) : (
                      <button
                        type="button"
                        className="weblabFileEntry"
                        aria-selected={activeFileId === file.id}
                        onDoubleClick={() => handleRenameFile(file.id)}
                      >
                        <span className={`weblabFileIcon is-${file.kind}`}>{file.kind.toUpperCase()}</span>
                        <span className="weblabFileText">
                          <span className="weblabFileName">{file.name}</span>
                        </span>
                      </button>
                      )}
                      {pendingDeleteFileId === file.id ? (
                        <div className="weblabFileDeleteConfirm" onClick={(event) => event.stopPropagation()}>
                          <span>{weblabText.deletePrompt}</span>
                          <button
                            type="button"
                            className="weblabFileDeleteYes"
                            onClick={() => handleDeleteFile(file.id)}
                          >
                            {weblabText.yes}
                          </button>
                          <button
                            type="button"
                            className="weblabFileDeleteNo"
                            onClick={() => setPendingDeleteFileId(null)}
                          >
                            {weblabText.no}
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="weblabFileDelete"
                          aria-label={`${weblabText.deleteFile} ${file.name}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            requestDeleteFile(file.id);
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
            ) : null}

            {visiblePanes.explorer && (visiblePanes.editor || visiblePanes.preview) ? (
            <PanelResizeHandle className="weblabResizeHandle" />
            ) : null}

            {visiblePanes.editor ? (
            <Panel id="full-editor" order={2} defaultSize={panelDefaults.editor} minSize={22}>
              <div className="weblabEditorShell">
                <div className="weblabPanelTopbar">
                  <p className="weblabPanelLabel">{activeFile?.name ?? weblabText.code}</p>
                </div>
                <div className="weblabEditor" role="tabpanel" aria-label={`${activeFile?.name ?? weblabText.code} ${weblabText.fileEditor}`}>
                  <Editor
                    height="100%"
                    defaultLanguage="html"
                    language={currentLanguage}
                    value={currentCode}
                    onChange={updateCode}
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      scrollBeyondLastLine: false,
                      wordWrap: 'on',
                      automaticLayout: true,
                      tabSize: 2,
                      acceptSuggestionOnEnter: 'on',
                      linkedEditing: true,
                    }}
                    onMount={handleEditorMount}
                    theme="vs"
                  />
                </div>
              </div>
            </Panel>
            ) : null}

            {visiblePanes.editor && visiblePanes.preview ? (
            <PanelResizeHandle className="weblabResizeHandle" />
            ) : null}

            {visiblePanes.preview ? (
            <Panel id="full-preview" order={3} defaultSize={panelDefaults.preview} minSize={20}>
              <div className="weblabPreviewWrap">
                <div className="weblabPreviewTopbar">
                  <p className="weblabPreviewLabel">{weblabText.preview}</p>
                  <div className="weblabPreviewActions">
                    <button type="button" onClick={handleRefreshPreview}>
                      {weblabText.refresh}
                    </button>
                    <button type="button" onClick={openPreviewInNewTab}>
                      {weblabText.openTab}
                    </button>
                  </div>
                </div>
                <iframe
                  key={`inline-preview-${previewRefreshNonce}`}
                  title="WebLab preview"
                  className="weblabPreview"
                  sandbox="allow-scripts"
                  srcDoc={srcDoc}
                />
              </div>
            </Panel>
            ) : null}
            </PanelGroup>
          ) : (
            <div className="weblabWorkspaceEmpty">
              <p>{weblabText.allHidden}</p>
              <div className="weblabWorkspaceEmptyActions">
                <button type="button" onClick={() => setVisiblePanes({ explorer: true, editor: true, preview: true })}>
                  {weblabText.showAllPanes}
                </button>
              </div>
            </div>
          )
        }
      </div>

      {isNewSiteConfirmOpen ? (
        <div
          className="weblabConfirmOverlay"
          role="dialog"
          aria-modal="true"
          aria-label={weblabText.dialogConfirmNewSite}
          onClick={() => setIsNewSiteConfirmOpen(false)}
        >
          <div className="weblabConfirmModal" onClick={(event) => event.stopPropagation()}>
            <h2>{weblabText.dialogTitleNewSite}</h2>
            <p>{weblabText.dialogTextNewSite}</p>
            <div className="weblabConfirmActions">
              <button type="button" className="weblabConfirmYes" onClick={handleNewProject}>
                {weblabText.confirm}
              </button>
              <button type="button" className="weblabConfirmNo" onClick={() => setIsNewSiteConfirmOpen(false)}>
                {weblabText.cancel}
              </button>
            </div>
          </div>
        </div>
      ) : null}

    </section>
  );
}