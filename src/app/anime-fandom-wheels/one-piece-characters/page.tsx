import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "One Piece Characters Wheel | Spin Random Pirates | GameWheelClub",
  description: "Spin the One Piece Characters Wheel to select a random pirate from the Straw Hat crew, Yonko, or Marines. Free, fast, and customizable.",
};

export default function OnePieceCharactersWheelPage() {
  const characters = [
    "Monkey D. Luffy",
    "Roronoa Zoro",
    "Nami",
    "Vinsmoke Sanji",
    "Tony Tony Chopper",
    "Nico Robin",
    "Shanks",
    "Trafalgar D. Water Law",
    "Portgas D. Ace",
    "Kaido"
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
          <span className="text-retro-orange">One Piece Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Grand Line Randomizer
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            One Piece Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Set sail on the Grand Line and spin the wheel to select a random character from Eiichiro Oda&apos;s masterpiece!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-one-piece-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Explore the World of One Piece
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Spanning over a thousand chapters and episodes, <em>One Piece</em> features one of the largest and most beloved casts of characters in fictional history. From the rubbery protagonist Monkey D. Luffy to dangerous emperors of the sea like Kaido and legendary figures like Shanks, the series has no shortage of fascinating personalities.
              </p>
              <p>
                Our <strong>One Piece Characters Wheel</strong> helps you randomize character selection for any fan activity. Whether you are running a podcast, arranging battle matchups, picking cosplay options, or playing a trivia game, this interactive wheel yields a completely random choice instantly.
              </p>
              <p>
                You can easily add new pirates, marines, or revolutionary army members by editing the inputs on the wheel. For setting up generic, custom-themed selection boards, use our main <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Pirate Activities
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Bounty Battles:</strong> Spin twice to select two pirates, then look up or estimate their bounties to discuss who would win in a direct confrontation.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Who Is Your Captain?</strong> Spin the wheel to determine who would be the captain of your crew if you were transported to the Grand Line.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Fan Art Challenges:</strong> Draw the selected character in the artistic style of a completely different anime or cartoon series.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Matchups:</strong> Use this spinner to randomly assign characters that players must answer trivia questions about during game nights.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
