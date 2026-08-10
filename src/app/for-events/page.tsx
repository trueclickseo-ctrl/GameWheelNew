import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, Calendar } from "lucide-react";

export const metadata = {
  title: "Random Choice Tools for Events & Parties | GameWheelClub",
  description: "Host memorable parties, giveaways, and social events. Settle group games, spin for raffle winners, and choose trivia topics instantly.",
};

export default function ForEventsPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4" />
            Social Gatherings
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Random Choice Tools for Events
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Bring excitement and energy to your next party, social meetup, or online raffle with pre-built event selectors.
          </p>
        </section>

        <section className="neo-card p-8 bg-white dark:bg-retro-navy space-y-6">
          <h2 className="text-2xl font-black font-display flex items-center gap-2">
            <Sparkles className="text-retro-orange w-6 h-6" /> Settle Games & Giveaways Fairly
          </h2>
          <div className="prose dark:prose-invert font-medium text-base space-y-4 leading-relaxed">
            <p>
              Hosting a successful party or online giveaway requires keeping participants engaged. When drawing raffle winners, displaying a digital <strong>Giveaway Spinner Wheel</strong> on a shared monitor or stream makes the moment transparent and dramatic.
            </p>
            <p>
              Our tool runs entirely client-side, making it highly secure. Settle who takes the first turn in board games or choose random categories for Charades.
            </p>
          </div>

          <h2 className="text-2xl font-black font-display pt-4">Essential Event Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/templates/party-games/truth-or-dare/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Truth or Dare Wheel</span>
              <span className="text-xs font-semibold opacity-85">The ultimate classic party icebreaker game.</span>
            </Link>
            <Link href="/templates/party-games/charades-ideas/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Charades Category Picker</span>
              <span className="text-xs font-semibold opacity-85">Randomly choose topic categories for acting out.</span>
            </Link>
            <Link href="/templates/food/dinner-picker/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Dinner Decision Wheel</span>
              <span className="text-xs font-semibold opacity-85">Settle group meal disputes and pick dinner spots.</span>
            </Link>
            <Link href="/templates/party-games/would-you-rather/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Would You Rather Spinner</span>
              <span className="text-xs font-semibold opacity-85">Generate fun hypothetical prompts for groups.</span>
            </Link>
          </div>

          <h2 className="text-2xl font-black font-display pt-4">More Randomizer Tools</h2>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/wheel-of-names/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Custom Name Picker
            </Link>
            <Link href="/flip-a-coin/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Flip a Coin
            </Link>
            <Link href="/dice-roller/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Dice Roller
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
