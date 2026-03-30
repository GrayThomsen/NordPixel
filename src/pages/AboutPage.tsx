// Simpel infoside med links til virksomheds- og personlig profil.
export default function AboutPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl">Om os</h1>
        <p className="max-w-3xl text-lg text-slate-300">
          NordPixel arbejder i krydsfeltet mellem digital udvikling, undervisning og teknologiforståelse. Målet er at gøre
          den digitale verden mere konkret, anvendelig og relevant for skoler, lærere og elever.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-700 bg-gradient-darker/70 p-6 md:p-8">
        <h2 className="mb-4 text-2xl">Om NordPixel</h2>
        <p className="mb-4 text-slate-300">
          NordPixel er bygget op omkring idéen om, at teknologi ikke bare skal forklares — den skal opleves, afprøves og bruges
          aktivt. Derfor udvikler virksomheden forløb, workshops og materialer, der omsætter web, programmering og digital
          forståelse til noget, man kan arbejde med i praksis.
        </p>
        <p className="mb-4 text-slate-300">
          Fokus ligger især på udskolingen, hvor behovet for teknologiforståelse er voksende, men hvor mange skoler samtidig
          mangler tid, specialviden eller konkrete undervisningsformater. NordPixel hjælper med at bygge bro mellem faglighed,
          nysgerrighed og det, eleverne faktisk møder i deres digitale hverdag.
        </p>
        <p className="text-slate-300">
          Det handler ikke kun om at lære at kode. Det handler også om at forstå digitale værktøjer, tænke kritisk, skabe egne
          løsninger og få en fornemmelse for, hvad der foregår bag skærmen. NordPixel udvikler derfor undervisning, der både er
          jordnær, visuelt stærk og fagligt anvendelig.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-gradient-darker/70 p-6 md:p-8">
        <h2 className="mb-4 text-2xl">Om instruktøren</h2>
        <p className="mb-4 text-slate-300">
          Jeg hedder Emil G. Thomsen, er webudvikler og multimediedesigner, og jeg hjælper folkeskoler med
          teknologiforståelse gennem praksisnære forløb.
        </p>
        <p className="mb-4 text-slate-300">
          Jeg læser multimediedesign på Erhvervsakademi København (EK) og arbejder dagligt med webudvikling.
        </p>
        <p className="mb-4 text-slate-300">
          Jeg har tidligere arbejdet som lærer i folkeskolen i Helsingør og har mange års erfaring med undervisning af børn og
          unge.
        </p>
        <p className="text-slate-300">
          Teknologiforståelse er et stort emne, og eleverne skal klædes ordentligt på til at arbejde i en mere teknologisk og
          digital verden.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-gradient-darker/70 p-6 md:p-8">
        <h2 className="mb-4 text-2xl">Skræddersyet forløb</h2>
        <p className="mb-4 text-slate-300">
          Alle klasser er forskellige og har forskellige behov. Forløb tilpasses for at styrke elevernes digitale kompetencer og
          give dem en bedre forståelse af, hvordan en computer “tænker”.
        </p>
        <p className="text-slate-300">
          Udvikling af læringsmateriale og metoder har høj prioritet, og derfor indgår dialog med skolen om fag, mål og rammer,
          så undervisningen matcher elevernes alderstrin og lokale virkelighed.
        </p>
      </div>
    </section>
  );
}
