# WebLab & Monaco Editor

## 📝 Hvad er WebLab?

WebLab er en browserbaseret kodeeditor hvor eleverne kan:
- Skrive HTML, CSS og JavaScript
- Se live preview under editing
- Gemme projekter lokalt i browseren
- Få auto-completion for HTML tags

## 🏗️ Monaco Integration

### Setup
```typescript
// WebLab.tsx
import Editor, { type OnMount } from '@monaco-editor/react';
import type * as Monaco from 'monaco-editor';
```

### Editor Initialisering
```typescript
const editorRef = useRef<Monaco.editor.IStandaloneCodeEditor | null>(null);

const handleEditorMount: OnMount = (editor, monaco) => {
  editorRef.current = editor;
  // Auto-completion og theme setup
};
```

## 📁 Fil-system Struktur

### File Types
```typescript
type ProjectFile = {
  id: string;           // Unik ID
  name: string;         // Filnavn med extension
  kind: 'html' | 'css' | 'js';  // Filtype
  content: string;      // Kode
};

type LabProject = {
  version: 2;
  mode: 'full';
  name: string;
  updatedAt: string;
  files: ProjectFile[];  // Array af filer
};
```

### Starter Project
```typescript
function createFullStarterFiles() {
  return [
    createFile('html', 'index.html', createHtmlBoilerplate('index.html')),
    createFile('css', 'styles.css', CSS_BOILERPLATE),
    createFile('js', 'script.js', ''),
  ];
}
```

## 💾 Storage og Persistence

### LocalStorage Keys
```typescript
const STORAGE_KEY = 'nordpixel-weblab-current';      // Projekt
const LAST_SAVE_KEY = 'nordpixel-weblab-last-save';  // Tidsstempel
const DIRTY_STATE_KEY = 'nordpixel-weblab-is-dirty'; // Usaved changes
```

### Save Flow
```typescript
function saveProject() {
  const project = {
    version: 2,
    mode: 'full',
    name: projectName,
    updatedAt: new Date().toISOString(),
    files: projectFiles,
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(project));
  window.dispatchEvent(new CustomEvent('weblab-saved'));
}
```

## 🎯 Auto-completion

### HTML Tags Auto-completion
```typescript
const HTML_COMPLETION_TAGS = [
  'div', 'section', 'article', 'main', 'header', 'footer',
  'nav', 'aside', 'p', 'span', 'button', 'form', 'label',
  'ul', 'ol', 'li', 'a', 'strong', 'em', 'h1', 'h2', 'h3',
  'h4', 'h5', 'h6', 'script', 'style', 'table', 'thead',
  'tbody', 'tr', 'td',
] as const;
```

### Void Tags (self-closing)
```typescript
const HTML_VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
  'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);
```

## 🖥️ Preview System

### HTML Preview
```typescript
// Index.html kode bliver renderet i <iframe>
<iframe
  srcDoc={htmlContent}
  style={{ width: '100%', height: '100%' }}
/>
```

### Combined View
```
┌─────────────────────────────┐
│   HTML | CSS | JS Tabs      │
├────────────┬────────────────┤
│            │                │
│   Editor   │   Preview      │
│            │   (iframe)     │
│            │                │
└────────────┴────────────────┘
```

## 🔄 Tutorials System

### Tutorial Struktur
```typescript
type TutorialTopic = {
  id: 'fileTypes' | 'preview' | 'semantic' | 'symbols';
  label: string;
  href: string;  // Link til JSON fil
};
```

### Tutorial Data Format (JSON)
```json
{
  "title": "Filtyper",
  "description": "Lær om HTML, CSS og JavaScript",
  "steps": [
    {
      "title": "Hvad er HTML?",
      "content": "HTML er markup for siden..."
    }
  ]
}
```

### Tutorials Location
```
public/weblab/tutorials/da/
├── filtyper-file-explorer.nordpixel.json
├── kodingssymboler-da-tastatur.nordpixel.json
├── preview-begraensninger.nordpixel.json
└── semantisk-html-og-meta.nordpixel.json
```

## 🎨 Editor Features

### Theme
```typescript
monaco.editor.defineTheme('nordpixel', {
  base: 'vs-dark',
  inherit: true,
  colors: { /* branding colors */ }
});
```

### Language Support
- HTML med syntax highlighting
- CSS med color preview
- JavaScript med IntelliSense

## 📊 Fil-operationer

### Opret Fil
```typescript
function addFile(fileName: string, fileKind: FileKind) {
  const uniqueName = makeUniqueFileName(existingNames, fileName, fileKind);
  const newFile = createFile(fileKind, uniqueName, '');
  setFiles([...files, newFile]);
}
```

### Slet Fil
```typescript
function deleteFile(fileId: string) {
  setFiles(files.filter(f => f.id !== fileId));
}
```

### Skift Tab
```typescript
function switchToFile(fileId: string) {
  setActiveFileId(fileId);
  // Monaco editor indlæser denne fils content
}
```

## 🔌 Resizable Panels

Bruger `react-resizable-panels` biblioteket for at kunne justere editor/preview split:

```tsx
<PanelGroup direction="horizontal">
  <Panel>{editor}</Panel>
  <PanelResizeHandle />
  <Panel>{preview}</Panel>
</PanelGroup>
```

## 💡 Vigtige Eksamen Punkter

1. **File Management**: Hvordan oprettes/slettes filer?
2. **Storage**: Hvad gemmes i localStorage?
3. **Preview**: Hvordan renderes koden?
4. **Auto-completion**: Hvilke tags har auto-completion?
5. **Tutorials**: Hvor kommer tutorial-data fra?
6. **State Management**: Hvordan håndteres åbne filer?
