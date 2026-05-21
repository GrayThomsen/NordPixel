import Link from 'next/link';

export default function Page() {
  return (
    <main className="landing">
      <section className="landing__hero">
        <p className="landing__eyebrow">Digital learning studio</p>
        <h1>Build, test, and save small web projects directly in NordPixel.</h1>
        <p className="landing__lead">
          The editor is local-first. Projects stay in your browser until you export them as a
          <strong> .nordpixel.json</strong> file.
        </p>
        <div className="landing__actions">
          <Link href="/editor" className="landing__button landing__button--primary">
            Open Editor
          </Link>
          <Link href="/downloads" className="landing__button landing__button--ghost">
            Open Downloads
          </Link>
        </div>
      </section>
    </main>
  );
}