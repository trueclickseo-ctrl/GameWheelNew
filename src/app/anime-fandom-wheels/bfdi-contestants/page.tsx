import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "BFDI Contestants Wheel | Battle for Dream Island Randomizer | GameWheelClub",
  description: "Spin the BFDI Contestants Wheel to randomly select characters from Battle for Dream Island. Free, interactive, and customizable.",
};

export default function BfdiContestantsWheelPage() {
  const contestants = [
    "Firey",
    "Leafy",
    "Bubble",
    "Flower",
    "Gelatin",
    "Blocky",
    "Woody",
    "Teardrop",
    "Pen",
    "Eraser"
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/anime-fandom-wheels/" className="hover:text-retro-orange">Anime & Fandom</Link>
          <span>/</span>
          <span className="text-retro-orange">BFDI Contestants</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Contestant Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            BFDI Contestants Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select a random contestant from the web series Battle for Dream Island!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={contestants} storageKey="gamewheelclub-bfdi-contestants-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Explore Battle for Dream Island
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Created by Cary and Michael Huang, <em>Battle for Dream Island</em> (BFDI) is one of the most influential web animations in history, pioneering the entire &quot;Object Show&quot; genre. The series features personified household objects competing in various chaotic challenges to win Dream Island. Characters like Firey, Leafy, Bubble, and Blocky have won the hearts of millions of viewers.
              </p>
              <p>
                Our <strong>BFDI Contestants Wheel</strong> is designed to randomly select contestants for fan activities. Preloaded with iconic characters like Gelatin, Woody, Pen, and Eraser, this tool offers immediate, unbiased random selections.
              </p>
              <p>
                You can easily add new contestants (like Coiny, Tennis Ball, or Golf Ball) directly into the option list. For setting up generic custom decision wheels, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Object Show Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Wins the Challenge?</strong> Spin two contestants and debate which of the two would survive or succeed in a classic BFDI physical test.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Fan Art Challenges:</strong> Draw the selected object character in a humanized style or as a character in an action-themed game.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Who Gets Eliminated?</strong> Run simulated voting games by using the wheel to determine who is sent to the TLC (Tiny Loser Chamber).</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Matchups:</strong> Use this spinner to randomly assign characters that players must answer lore questions about during fan club meetups.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
