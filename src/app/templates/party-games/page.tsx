import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Dices, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Party Games Wheel Templates | GameWheelClub",
  description: "Browse free decision wheels for group games, party challenges, trivia topics, and truth or dare cards. Settle choices instantly.",
};

export default function PartyGamesCategoryPage() {
  const templates = [
    { name: "Truth or Dare", href: "/templates/party-games/truth-or-dare", desc: "Classic party icebreaker—spin the wheel to randomly select Truth or Dare." },
    { name: "Would You Rather", href: "/templates/party-games/would-you-rather", desc: "Get group conversations moving by selecting random difficult hypothetical questions." },
    { name: "Charades Ideas", href: "/templates/party-games/charades-ideas", desc: "Select random acting topics: movies, animals, action scenes, and pop culture." },
    { name: "Party Trivia", href: "/templates/party-games/party-trivia", desc: "Pick random topics for trivia: science, pop culture, history, geography, and sports." },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <span className="text-retro-orange">Party Games</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Dices className="w-4 h-4" />
            Group Games Spinner Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Party Games & Icebreakers
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Get your next get-together, party, or classroom game moving in seconds with these pre-built templates.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {templates.map((t) => (
            <div key={t.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{t.name}</h3>
                <p className="text-sm opacity-80 mb-6">{t.desc}</p>
              </div>
              <Link
                href={t.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5"
              >
                Open Template <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
