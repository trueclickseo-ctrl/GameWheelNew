import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Dandy's World Character Wheel | Spin Random Toons | GameWheelClub",
  description: "Spin the Dandy's World Wheel to select a random toon character. Free, customizable, and perfect for Roblox players.",
};

export default function DandysWorldWheelPage() {
  const characters = [
    "Dandy",
    "Poppy",
    "Boxten",
    "Glisten",
    "Astro",
    "Cosmo",
    "Razzle & Dazzle",
    "Goob"
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
          <span className="text-retro-orange">Dandy&apos;s World</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Toon Picker
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Dandy&apos;s World Character Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Can&apos;t decide which toon to play as in your next Garden run? Spin the wheel to randomize your pick!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-dandys-world-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Randomize Your Garden Run
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Roblox <em>Dandy&apos;s World</em> is an incredibly popular survival horror game where players cooperate as cartoon toons to collect ichor and escape twisted monsters. From balanced characters like Poppy and Boxten to high-stat characters like Astro and Cosmo, each toon brings unique stats and playstyles to the table.
              </p>
              <p>
                Our <strong>Dandy&apos;s World Character Wheel</strong> helps players break the monotony of playing the same toon. It is preloaded with popular toons like Dandy, Goob, Poppy, and Glisten. A single spin selects your next character randomly, adding a fun element of challenge to your lobbies.
              </p>
              <p>
                You can easily customize the wheel to include other toons or remove those you haven&apos;t unlocked yet. If you want to make an entirely customized list from scratch, use our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Gameplay Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Random Team Draft:</strong> Have your entire lobby spin the wheel to determine their characters, forcing everyone to adapt to random team comps.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Mastery Challenge:</strong> Spin to select a toon and commit to completing a full run or gaining a mastery star with that character.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Fan Art Challenges:</strong> Draw the selected toon in a humanized style or as a twisted version of themselves.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Matchups:</strong> Use this spinner to randomly assign characters that players must answer lore questions about.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
