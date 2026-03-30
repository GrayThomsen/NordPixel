// Simpel infoside med links til virksomheds- og personlig profil.
export default function AboutPage() {
  return (
    <section className="space-y-8 md:space-y-10">
      <header className="max-w-4xl space-y-4 md:space-y-5">
        <h1 className="leading-tight">Om os</h1>
        <p className="max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
          NordPixel arbejder i krydsfeltet mellem digital udvikling, undervisning og teknologiforståelse. Målet er at gøre
          den digitale verden mere konkret, anvendelig og relevant for skoler, lærere og elever.
        </p>
      </header>

      <div className="max-w-4xl space-y-10 md:space-y-12">
        <section className="space-y-4 border-b border-slate-800/80 pb-8 md:space-y-5">
          <h5 className="text-accent-orange/90">Om NordPixel</h5>
          <div className="space-y-4 text-base leading-relaxed text-slate-300 md:text-[1.05rem]">
            <p>
              NordPixel er bygget op omkring idéen om, at teknologi ikke bare skal forklares — den skal opleves, afprøves og
              bruges aktivt. Derfor udvikler virksomheden forløb, workshops og materialer, der omsætter web, programmering og
              digital forståelse til noget, man kan arbejde med i praksis.
            </p>
            <p>
              Fokus ligger især på udskolingen, hvor behovet for teknologiforståelse er voksende, men hvor mange skoler samtidig
              mangler tid, specialviden eller konkrete undervisningsformater. NordPixel hjælper med at bygge bro mellem
              faglighed, nysgerrighed og det, eleverne faktisk møder i deres digitale hverdag.
            </p>
            <p>
              Det handler ikke kun om at lære at kode. Det handler også om at forstå digitale værktøjer, tænke kritisk, skabe
              egne løsninger og få en fornemmelse for, hvad der foregår bag skærmen.
            </p>
          </div>
        </section>

        <section className="space-y-4 border-b border-slate-800/80 pb-8 md:space-y-5">
          <h5 className="text-accent-orange/90">Om instruktøren</h5>
          <div className="space-y-4 text-base leading-relaxed text-slate-300 md:text-[1.05rem]">
            <p>
              Jeg hedder Emil G. Thomsen, er webudvikler og multimediedesigner, og jeg hjælper folkeskoler med
              teknologiforståelse gennem praksisnære forløb.
            </p>
            <p>Jeg læser multimediedesign på Erhvervsakademi København (EK) og arbejder dagligt med webudvikling.</p>
            <p>
              Jeg har tidligere arbejdet som lærer i folkeskolen i Helsingør og har mange års erfaring med undervisning af børn
              og unge.
            </p>
            <p>
              Teknologiforståelse er et stort emne, og eleverne skal klædes ordentligt på til at arbejde i en mere teknologisk
              og digital verden.
            </p>
          </div>
        </section>

        <section className="space-y-4 md:space-y-5">
          <h5 className="text-accent-orange/90">Tilpasset forløb</h5>
          <div className="space-y-4 text-base leading-relaxed text-slate-300 md:text-[1.05rem]">
            <p>
              Alle klasser er forskellige og har forskellige behov. Forløb tilpasses for at styrke elevernes digitale
              kompetencer og give dem en bedre forståelse af, hvordan en computer “tænker”.
            </p>
            <p>
              Udvikling af læringsmateriale og metoder har høj prioritet, og derfor indgår dialog med skolen om fag, mål og
              rammer, så undervisningen matcher elevernes alderstrin og lokale virkelighed.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
