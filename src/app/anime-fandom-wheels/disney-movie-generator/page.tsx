import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/anime-fandom-wheels/disney-movie-generator/",
  },
  title: "Disney Movie Generator Wheel | Spin a Random Movie | GameWheelClub",
  description: "Spin the Disney Movie Generator Wheel to randomly select a classic or modern Disney/Pixar movie for your next family movie night. Free and interactive.",
};

export default function DisneyMovieGeneratorWheelPage() {
  const movies = [
    "The Lion King",
    "Frozen",
    "Toy Story",
    "Aladdin",
    "Moana",
    "Beauty and the Beast",
    "Coco",
    "Tangled"
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
          <span className="text-retro-orange">Disney Movie Generator</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Movie Night Picker
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Disney Movie Generator Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Unsure what Disney classic or Pixar masterpiece to watch? Spin the wheel and let it choose!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={movies} storageKey="gamewheelclub-disney-movie-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Your Ultimate Disney Movie Randomizer
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                From the hand-drawn classics of the Disney Renaissance to the groundbreaking computer animation of Pixar, the Disney library is massive. With classics like <em>The Lion King</em> and <em>Aladdin</em> alongside newer sensations like <em>Frozen</em>, <em>Moana</em>, and <em>Coco</em>, finding the single best option for movie night can lead to long family debates.
              </p>
              <p>
                This interactive <strong>Disney Movie Generator Wheel</strong> helps you choose a movie without the arguments. Perfect for parents, couples, or nostalgic animation fans, a simple click randomly picks your feature presentation in seconds.
              </p>
              <p>
                Want to curate a special list with only 90s Disney movies, or maybe exclusively Pixar films? You can modify the wheel&apos;s options dynamically. If you want to make an entirely customized list from scratch, use our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Category</Link> page.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Why Use the Movie Wheel?
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>No More Arguing:</strong> Settle the &quot;what should we watch&quot; dispute in a completely fair and random manner.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Rediscover Forgotten Classics:</strong> Add older or underrated movies (like Treasure Planet or Atlantis) to step outside your usual viewing cycle.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Themed Movie Marathons:</strong> Spin multiple times to set a lineup of films for a weekend holiday marathon.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Completely Customizable:</strong> Easily type in your own choices, change inputs, or spin multiple times.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
