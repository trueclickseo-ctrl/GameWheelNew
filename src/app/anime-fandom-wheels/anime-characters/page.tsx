import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Anime Characters Wheel | Spin Random Anime Characters | GameWheelClub",
  description: "Spin the free Anime Characters Wheel to randomize popular heroes and villains from top series like DBZ, Naruto, One Piece, MHA, and Demon Slayer.",
};

export default function AnimeCharactersWheelPage() {
  const characters = [
    "Goku (Dragon Ball)",
    "Naruto Uzumaki (Naruto)",
    "Monkey D. Luffy (One Piece)",
    "Izuku Midoriya (My Hero Academia)",
    "Tanjiro Kamado (Demon Slayer)",
    "Eren Yeager (Attack on Titan)",
    "Saitama (One Punch Man)",
    "Levi Ackerman (Attack on Titan)"
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
          <span className="text-retro-orange">Anime Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Random Character Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Anime Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Settle anime debates, draft character matchups, or pick your next avatar by spinning the wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-anime-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Ultimate Anime Character Randomizer
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Anime represents some of the most dynamic storytelling and iconic character designs in modern media. From the world-shaking power of Goku to the stealthy tactics of Naruto and the free-spirited dreaming of Luffy, every fan has their favorites. However, sometimes choosing between them is next to impossible. That is where our <strong>Anime Characters Wheel</strong> comes into play.
              </p>
              <p>
                Whether you are setting up a hypothetical crossover battle, looking for a cosplay idea, drawing fanart, or running an anime trivia challenge, this interactive tool makes character selection effortless. By clicking spin, the generator uses a fair, browser-based algorithm to pick one of the options with absolute randomness.
              </p>
              <p>
                Want to make your own custom list? You can edit the options directly on the wheel to add characters from your favorite niche series. For creating completely custom decision boards, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Category</Link> page to explore other presets.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Creative Ways to Use This Wheel
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Would Win Debates:</strong> Spin the wheel twice to select two combatants, then debate with friends about who would emerge victorious in a battle to the end.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Art & Writing Challenges:</strong> Push your creative boundaries by spinning a character and drawing them in a completely different genre or universe.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Cosplay Drafts:</strong> Unsure which outfit to build next for the upcoming convention? Let the wheel decide your next major cosplay project.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Community Games:</strong> Streamers and content creators can use this wheel to pick characters live for games, tier lists, or reaction videos.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
