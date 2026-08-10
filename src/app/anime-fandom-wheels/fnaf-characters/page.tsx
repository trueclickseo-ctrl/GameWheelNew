import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "FNAF Characters Wheel | Spin Random Animatronics | GameWheelClub",
  description: "Spin the FNAF Characters Wheel to pick a random animatronic from Five Nights at Freddy's. Free, interactive, and customizable.",
};

export default function FnafCharactersWheelPage() {
  const animatronics = [
    "Freddy Fazbear",
    "Bonnie",
    "Chica",
    "Foxy",
    "Golden Freddy",
    "Springtrap",
    "The Puppet",
    "Mangle"
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/anime-fandom-wheels/" className="hover:text-retro-orange">Anime & Fandom</Link>
          <span>/</span>
          <span className="text-retro-orange">FNAF Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Animatronic Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            FNAF Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select a random animatronic from Scott Cawthon&apos;s legendary horror franchise!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={animatronics} storageKey="gamewheelclub-fnaf-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Enter Fazbear&apos;s Fright
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Since its launch in 2014, Scott Cawthon&apos;s <em>Five Nights at Freddy&apos;s</em> (FNAF) has become a global pop-culture phenomenon. Spanning multiple games, books, and a feature film, the lore of Fazbear Entertainment is deep and mysterious. Animatronics like Freddy, Bonnie, Chica, and Foxy have haunted the nightmares of players, while characters like Springtrap and the Puppet drive the complex lore.
              </p>
              <p>
                Our <strong>FNAF Characters Wheel</strong> lets you randomly pick an animatronic instantly. Whether you are running a fan theories stream, deciding which animatronic to draw, looking for cosplay ideas, or drafting characters for custom gameplay challenges, this tool is fast and completely fair.
              </p>
              <p>
                You can easily add new characters (like Toy Freddy, Withered Bonnie, or Circus Baby) directly to the wheel options. For creating custom multi-option boards, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Fazbear Activities
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Drawing Challenges:</strong> Spin to select an animatronic and draw them in a completely different art style, or design a humanized version.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Ultimate Custom Night:</strong> Let the wheel choose which animatronics you must activate for your next custom night run.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Lore Debates:</strong> Spin two animatronics and discuss their origins, chronological appearances, or connections within the FNAF timeline.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Matchups:</strong> Use this spinner to randomly assign characters that players must answer trivia questions about during game nights.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
