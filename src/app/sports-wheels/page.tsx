import Link from "next/link";
import { Trophy, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Sports Wheel Spinners | GameWheelClub",
  description: "Browse 12 preloaded sports decision wheels including NFL team pickers, NBA player randomizers, World Cup brackets, and golf clubs.",
};

export default function SportsCategoryPage() {
  const wheels = [
    { name: "NFL Teams Wheel", href: "/sports-wheels/nfl-teams", desc: "Spin to pick a random NFL franchise. Great for fantasy draft orders." },
    { name: "NFL Players Wheel", href: "/sports-wheels/nfl-players", desc: "Select randomly from top active football players in the NFL league." },
    { name: "NFL Positions Wheel", href: "/sports-wheels/nfl-positions", desc: "Randomly pick positions like quarterback, linebacker, or safety." },
    { name: "College Teams Wheel", href: "/sports-wheels/college-teams", desc: "Select NCAA college football and basketball divisions randomly." },
    { name: "Football Players Wheel", href: "/sports-wheels/football-players", desc: "Spin to select world football (soccer) star players randomly." },
    { name: "NBA Teams Wheel", href: "/sports-wheels/nba-teams", desc: "Choose a random NBA franchise for exhibition games or drafts." },
    { name: "NBA Players Wheel", href: "/sports-wheels/nba-players", desc: "Spin to select a random active NBA basketball player." },
    { name: "MLB Teams Wheel", href: "/sports-wheels/mlb-teams", desc: "Pick a random Major League Baseball franchise." },
    { name: "NHL Teams Wheel", href: "/sports-wheels/nhl-teams", desc: "Settle exhibition matches with a random NHL hockey team." },
    { name: "Golf Club Wheel", href: "/sports-wheels/golf-wheel", desc: "Spin to decide which club to hit next during practice or challenges." },
    { name: "FIFA World Cup 2026", href: "/sports-wheels/fifa-world-cup-2026", desc: "Simulate groups or pick countries qualifying for the 2026 tourney." },
    { name: "Best Sports Teams", href: "/sports-wheels/best-teams", desc: "Pick historically legendary sports teams across multiple disciplines." },
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Sports Wheels</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            Sports Selectors
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Sports Randomizer Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Interactive preconfigured tools built for fantasy leagues, draft pick simulators, challenges, and team debates.
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
