import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/anime-fandom-wheels/one-piece-devil-fruits/",
  },
  title: "One Piece Devil Fruits Wheel | Spin for Devil Fruits | GameWheelClub",
  description: "Spin the One Piece Devil Fruits Wheel to randomly select which Devil Fruit power you would inherit in the world of anime. Free and customizable.",
};

export default function OnePieceDevilFruitsWheelPage() {
  const devilFruits = [
    "Gum-Gum Fruit (Gomu Gomu no Mi)",
    "Flame-Flame Fruit (Mera Mera no Mi)",
    "Rumble-Rumble Fruit (Goro Goro no Mi)",
    "Tremor-Tremor Fruit (Gura Gura no Mi)",
    "Op-Op Fruit (Ope Ope no Mi)",
    "Ice-Ice Fruit (Hie Hie no Mi)"
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
          <span className="text-retro-orange">One Piece Devil Fruits</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Superpower Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            One Piece Devil Fruits Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Which mystical fruit will you consume? Spin the wheel to claim your legendary pirate power!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={devilFruits} storageKey="gamewheelclub-one-piece-devil-fruits-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Inherit Your Mystical Ability
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                In the universe of <em>One Piece</em>, Devil Fruits are rare, mystical fruits scattered across the globe that grant their consumers immense superhuman abilities. The catch? You lose the ability to swim forever. From rubber bodies and fire control to turning into electricity or manipulating space, these powers define the top combatants of the Grand Line.
              </p>
              <p>
                This <strong>One Piece Devil Fruits Wheel</strong> is configured with legendary Devil Fruits such as the Gum-Gum Fruit, Flame-Flame Fruit, Tremor-Tremor Fruit, and the versatile Op-Op Fruit. Spin the wheel to determine what power you would inherit if you were a pirate in the Grand Line.
              </p>
              <p>
                You can easily add other Devil Fruits (like the Chop-Chop Fruit or the Dark-Dark Fruit) to the list. If you want to make an entirely customized board, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or head back to the <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom category</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Creative Play Scenarios
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>OC Character Creation:</strong> Spin to assign a random Devil Fruit power to your custom original pirate character.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Roleplay Campaigns:</strong> Use this wheel as a random drops generator in tabletop RPG campaigns set in the One Piece world.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Who Wins the Clash?</strong> Spin two different Devil Fruits and debate which of the two powers has the elemental advantage over the other.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Anime Night Game:</strong> Settle who gets what imaginary power among your friends during watch parties or discussion panels.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
