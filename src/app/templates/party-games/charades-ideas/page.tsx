import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Charades Ideas Wheel | Random Acting Topics Picker",
  description: "Spin the Charades wheel to get random acting ideas: Movies, TV Shows, Actions, Animals, and Famous People. Settle party game topics instantly.",
};

export default function CharadesIdeasPage() {
  const options = ["Movies", "TV Shows", "Actions", "Animals", "Famous People", "Objects", "Emotions", "Sports"];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/party-games/" className="hover:text-retro-orange">Party Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Charades Ideas</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Charades Ideas Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Stuck trying to think of something to act out? Spin the wheel to pick your category or topic instantly!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-charades-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Speed Up Game Night</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                <strong>Charades</strong> requires players to quickly think of recognizable movies, books, or animals to mimic. When players freeze up, it ruins the flow of the match.
              </p>
              <p>
                Our <strong>Charades Ideas Wheel</strong> solves this by instantly choosing categories or direct prompts. Add a countdown using our <Link href="/timer/" className="text-retro-orange underline font-bold">Timer</Link> to make rounds competitive.
              </p>
              <p>
                For other random games, try rolling simulated dice with our <Link href="/dice-roller/" className="text-retro-blue underline font-bold">Dice Roller</Link> or pick teams using the <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Dynamic Theme Options</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Customized option categories are great for family nights, kids parties, or holidays:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Add specific movie names.</li>
              <li>Include seasonal items (e.g. spooky things for Halloween).</li>
              <li>Toggle sound alerts so players know when time has run out.</li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
