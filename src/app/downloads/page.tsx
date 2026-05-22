import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Downloads',
};

export default function DownloadsPage() {
  return (
    <main className="downloads-page">
      <h1>Downloads</h1>
      <p>Use these local resources for teaching materials and starter files.</p>
      <h2>Materials</h2>
      <ul>
        <li>
          <a href="/downloads/materials/ai-ethics-workshop-materials.txt" target="_blank" rel="noreferrer">
            AI ethics workshop materials
          </a>
        </li>
        <li>
          <a href="/downloads/materials/creative-coding-activities.txt" target="_blank" rel="noreferrer">
            Creative coding activities
          </a>
        </li>
        <li>
          <a href="/downloads/materials/css-fundamentals-worksheets.txt" target="_blank" rel="noreferrer">
            CSS fundamentals worksheets
          </a>
        </li>
        <li>
          <a href="/downloads/materials/introduction-to-html-lesson-plan.txt" target="_blank" rel="noreferrer">
            Introduction to HTML lesson plan
          </a>
        </li>
        <li>
          <a href="/downloads/materials/understanding-ai-beginner-guide.txt" target="_blank" rel="noreferrer">
            Understanding AI beginner guide
          </a>
        </li>
        <li>
          <a href="/downloads/materials/web-safety-exercise-pack.txt" target="_blank" rel="noreferrer">
            Web safety exercise pack
          </a>
        </li>
      </ul>
      <h2>Resources</h2>
      <ul>
        <li>
          <a href="/downloads/resources/cheat-sheet.txt" target="_blank" rel="noreferrer">
            Cheat sheet
          </a>
        </li>
        <li>
          <a href="/downloads/resources/code-examples.txt" target="_blank" rel="noreferrer">
            Code examples
          </a>
        </li>
        <li>
          <a href="/downloads/resources/course-slides.txt" target="_blank" rel="noreferrer">
            Course slides
          </a>
        </li>
        <li>
          <a href="/downloads/resources/project-starter-files.txt" target="_blank" rel="noreferrer">
            Project starter files
          </a>
        </li>
      </ul>
    </main>
  );
}