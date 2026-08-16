import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Creative & Entertainment Decision Wheels | SpinVerse",
  description: "Unlock creative inspiration instantly. Spin to choose a movie genre or picker, get random drawing ideas, spin an arrow pointer, or get TBR book prompts.",
};

export default function creativewheelsHubPage() {
  const wheels = [
    { name: "Movie Picker Wheel", href: "/creative-wheels/movie-picker/", desc: "Resolve what to watch tonight by spinning movie genres." },
    { name: "Drawing Idea Wheel", href: "/creative-wheels/drawing-idea-wheel/", desc: "Generate weird, cute, and funny prompts for your next sketch." },
    { name: "Arrow Spin Wheel", href: "/creative-wheels/arrow-spin/", desc: "Spin a compass pointer to pick a random cardinal or ordinal direction." },
    { name: "TBR Prompts Wheel", href: "/creative-wheels/tbr-prompts/", desc: "Select your next book reading choice using To-Be-Read (TBR) prompts." },
    { name: "Music Genre Wheel", href: "/creative-wheels/music-genre-wheel/", desc: "Spin to pick what music style to play or research." }
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Creative & Entertainment</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Creative & Entertainment
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Unlock creative inspiration instantly. Spin to choose a movie genre or picker, get random drawing ideas, spin an arrow pointer, or get TBR book prompts.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {wheels.map((w) => (
            <div key={w.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{w.name}</h3>
                <p className="text-sm opacity-80 mb-6">{w.desc}</p>
              </div>
              <Link
                href={w.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Launch Wheel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      
    </>
  );
}
