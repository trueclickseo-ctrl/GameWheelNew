import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Party & Social Game Wheels | SpinVerse",
  description: "Interactive wheels for social events, sleepovers, and parties. Spin for Truth or Dare questions, Spin the Bottle, Charades, and funny challenges.",
};

export default function partygamesHubPage() {
  const wheels = [
    { name: "Truth or Dare Wheel", href: "/party-games/truth-or-dare/", desc: "Spin the wheel to get classic Truth or Dare prompts for kids, teens, and families." },
    { name: "Extreme Truth or Dare Wheel", href: "/party-games/extreme-truth-or-dare/", desc: "Spin for highly challenging, intensive, and crazy truths and dares." },
    { name: "Adult Truth or Dare Wheel", href: "/party-games/adult-truth-or-dare/", desc: "Spin to choose spice, mature secrets, and provocative dares. Age-restricted interstitial included." },
    { name: "Spin the Bottle Wheel", href: "/party-games/spin-the-bottle/", desc: "A virtual spinner replacing physical bottle setups for classic games." },
    { name: "Charades Topics Wheel", href: "/party-games/charades-topics/", desc: "Get hilarious and creative topics for family charades games." },
    { name: "Scattergories Letters Wheel", href: "/party-games/scattergories-letters/", desc: "Spin to select a random letter for Scattergories and vocabulary games." },
    { name: "Questions Wheel", href: "/party-games/questions-wheel/", desc: "Spin for icebreaker questions, get-to-know-you topics, and conversational prompts." },
    { name: "Funny Dares Wheel", href: "/party-games/funny-dares/", desc: "Get goofy, simple, and funny physical challenge dares." },
    { name: "Song Association Wheel", href: "/party-games/song-association/", desc: "Spin a keyword and try to sing a song containing that word in 10 seconds." },
    { name: "Things to Do When Bored Wheel", href: "/party-games/things-to-do-when-bored/", desc: "Spin to cure boredom with productive, creative, and physical activity prompts." },
    { name: "Punishment Wheel", href: "/party-games/punishment-wheel/", desc: "Spin to assign silly chores, forfeits, or penalties for board game losers." }
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Party & Social Games</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Party & Social Games
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Interactive wheels for social events, sleepovers, and parties. Spin for Truth or Dare questions, Spin the Bottle, Charades, and funny challenges.
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

      
    </>
  );
}
