import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/animal-wheels/",
  },
  title: "Animal & Nature Randomizer Wheels | GameWheelClub",
  description: "Select random animals for games, education, and drawings. Spin the animal wheels to discover what animal you are or pick farm creatures.",
};

export default function animalwheelsHubPage() {
  const wheels = [
    { name: "Random Animal Generator Wheel", href: "/animal-wheels/random-animal-generator", desc: "Spin to get a random wild animal. Preloaded with majestic land and sea beasts." },
    { name: "What Animal Are You Wheel", href: "/animal-wheels/what-animal-are-you", desc: "Discover your spiritual animal personality with this fun spirit animal wheel." },
    { name: "Farm Animals Wheel", href: "/animal-wheels/farm-animals-wheel", desc: "Spin to pick typical barnyard and farm animals. Excellent for toddler learning." }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Animals & Nature</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Animals & Nature
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Select random animals for games, education, and drawings. Spin the animal wheels to discover what animal you are or pick farm creatures.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {wheels.map((w) => (
            <div key={w.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{w.name}</h3>
                <p className="text-sm opacity-80 mb-6">{w.desc}</p>
              </div>
              <Link
                href={w.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Launch Wheel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
