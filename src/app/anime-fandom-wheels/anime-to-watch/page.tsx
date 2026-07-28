import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/anime-fandom-wheels/anime-to-watch/",
  },
  title: "Anime to Watch Wheel | Random Anime Generator | GameWheelClub",
  description: "Can't decide what anime to watch next? Spin the Anime to Watch Wheel to get a random recommended series instantly. Free and easy decision maker.",
};

export default function AnimeToWatchWheelPage() {
  const animeList = [
    "One Piece",
    "Naruto",
    "Attack on Titan",
    "Jujutsu Kaisen",
    "Demon Slayer",
    "My Hero Academia",
    "Death Note",
    "Fullmetal Alchemist: Brotherhood"
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
          <span className="text-retro-orange">Anime to Watch</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Watchlist Decider
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Anime to Watch Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Overwhelmed by your massive watchlist? Spin the wheel and let fate select your next anime series!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={animeList} storageKey="gamewheelclub-anime-to-watch-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Overcome Watchlist Paralysis
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                With hundreds of new series streaming every season and legendary masterpieces consisting of hundreds of episodes, choosing what anime to watch can feel like a full-time job. You scroll through streaming services, read endless reviews, check community scores, and end up watching nothing at all. This phenomenon is known as choice paralysis.
              </p>
              <p>
                Our <strong>Anime to Watch Wheel</strong> solves this exact problem. By loading it with top-tier anime recommendations—ranging from shonen giants to dark psychological thrillers—you can eliminate decision fatigue instantly. Let a simple click determine your next cinematic adventure.
              </p>
              <p>
                Want to fine-tune the wheel to only include specific genres (like romance, isekai, or sports anime)? Use the edit panel on the wheel to tailor the list to your mood. For other general decision-making needs, feel free to use the <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or browse our complete collection at <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Wheels</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              How to Binge with This Wheel
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>The 3-Episode Rule:</strong> Spin the wheel to get a random anime, and commit to watching at least the first 3 episodes. If you love it, continue! If not, spin again.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Watch Parties:</strong> Can&apos;t agree with friends on what to watch during movie night? Let the wheel make the ultimate, democratic decision.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Expand Your Horizons:</strong> Keep a diverse range of genres on the wheel. You might discover an amazing slice-of-life or mecha anime you otherwise wouldn&apos;t have clicked.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Remove and Spin:</strong> Once you finish a series, remove it from the wheel options and spin again to keep your binge list fresh and exciting.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
