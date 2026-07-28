import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/geography-wheels/",
  },
  title: "Geography & Country Wheel Spinners | GameWheelClub",
  description: "Spin to select random countries, US states, European nations, or run the 64-country roulette challenge. Great for geography trivia and travel planning.",
};

export default function geographywheelsHubPage() {
  const wheels = [
    { name: "Country Wheel Spinner", href: "/geography-wheels/country-wheel", desc: "Pick a random nation worldwide for trivia, gaming regions, or projects." },
    { name: "64 Country Roulette", href: "/geography-wheels/64-country-roulette", desc: "The ultimate 64-country roulette wheel for gaming challenges and brackets." },
    { name: "US States Wheel", href: "/geography-wheels/us-states", desc: "Spin to choose from the 50 states of America randomly." },
    { name: "Europe Countries Wheel", href: "/geography-wheels/europe-countries", desc: "Randomly pick an European country for travel plans or educational research." }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Geography Wheels</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Geography Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Spin to select random countries, US states, European nations, or run the 64-country roulette challenge. Great for geography trivia and travel planning.
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
