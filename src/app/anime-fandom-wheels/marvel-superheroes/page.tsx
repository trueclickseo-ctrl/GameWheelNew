import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/anime-fandom-wheels/marvel-superheroes/",
  },
  title: "Marvel Superheroes Wheel | Spin Random Avengers | GameWheelClub",
  description: "Spin the Marvel Superheroes Wheel to randomly choose a hero from the Marvel Universe. Free, customizable, and perfect for comic and MCU fans.",
};

export default function MarvelSuperheroesWheelPage() {
  const heroes = [
    "Spider-Man",
    "Iron Man",
    "Thor",
    "Captain America",
    "Hulk",
    "Black Widow",
    "Wolverine",
    "Doctor Strange"
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
          <span className="text-retro-orange">Marvel Superheroes</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Hero Randomizer
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Marvel Superheroes Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Select a random Avenger, X-Men member, or street-level hero from the vast Marvel Universe!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={heroes} storageKey="gamewheelclub-marvel-superheroes-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Assemble Your Random Marvel Squad
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                From comic book pages to blockbusting cinematic universes, the Marvel Universe is filled with legendary heroes. Whether it&apos;s the web-slinging action of Spider-Man, the high-tech intelligence of Iron Man, or the magic of Doctor Strange, everyone has their favorite characters. But when it comes to playing games, planning fantasy drafts, or drafting debating matches, sometimes choosing a superhero can be a challenge.
              </p>
              <p>
                Our <strong>Marvel Superheroes Wheel</strong> is designed to pick a random hero instantly. It is preloaded with iconic figures like Wolverine, Captain America, and Thor to get you started immediately. 
              </p>
              <p>
                You can easily add your own niche characters (like Moon Knight, Daredevil, or Deadpool) directly into the wheel. For creating custom multi-option boards, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Exciting Ways to Spin This Wheel
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Wins a Duel?</strong> Spin twice to pick two heroes. Then, challenge your friends to argue who would win if they had to fight each other in an arena.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Comics To Read:</strong> Unsure where to start your comic journey? Spin the wheel and find a classic comic run featuring the character that lands.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Gaming Matchups:</strong> Pick your next character in games like Marvel Ultimate Alliance, Marvel Rivals, or LEGO Marvel.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Creative Drawing Prompts:</strong> Test your art skills by drawing the selected superhero in an alternate costume design.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
