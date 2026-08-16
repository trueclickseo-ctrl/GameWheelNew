import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Disc, Sparkles, Swords } from "lucide-react";

export const metadata = {
  title: "NBA Teams Wheel Spinner | Random NBA Franchise Picker",
  description: "Spin the NBA Teams Wheel to pick a random professional basketball franchise. Ideal for NBA 2K challenges, fantasy draft selections, and sports trivia.",
};

export default function NBATeamsWheelPage() {
  const nbaTeams = [
    "Boston Celtics",
    "Los Angeles Lakers",
    "Golden State Warriors",
    "Milwaukee Bucks",
    "Denver Nuggets",
    "Miami Heat",
    "Phoenix Suns",
    "Philadelphia 76ers",
    "Dallas Mavericks",
    "New York Knicks",
    "Minnesota Timberwolves",
    "Oklahoma City Thunder",
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/sports-wheels/" className="hover:text-retro-orange">Sports Wheels</Link>
          <span>/</span>
          <span className="text-retro-orange">NBA Teams</span>
        </div>

        {/* Back Link */}
        <Link
          href="/sports-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sports Wheels
        </Link>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            Hardwood Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            NBA Teams Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Choose a random NBA franchise. Perfect for pick-up matches in NBA 2K, defining draft order lists, or deciding which team to build in career modes.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={nbaTeams} storageKey="gamewheelclub-nba-teams-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the Random NBA Team Picker?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                From coast to coast, the NBA consists of 30 franchises vying for the Larry O&apos;Brien Championship Trophy. If you are playing an exhibition match against a friend or setting up a local tournament bracket, selecting teams at random is the best way to keep matches balanced and exciting.
              </p>
              <p>
                The <strong>NBA Teams Wheel</strong> features historic powerhouses like the Boston Celtics and Los Angeles Lakers alongside modern title contenders like the Denver Nuggets and Golden State Warriors. You can customize the wheel to include only Eastern or Western Conference teams, or narrow down the selection to your favorite division.
              </p>
              <p>
                For non-sports decision making, check out our general <Link href="/decision-wheel/" className="text-retro-yellow underline font-bold">Decision Wheel</Link> or discover other interactive randomizers on our <Link href="/games/" className="text-retro-mint underline font-bold">Games Page</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun Game Modes
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Disc className="w-5 h-5 flex-shrink-0" />
                  NBA 2K Quick Play Challenges
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Avoid arguments over team selection. Spin the wheel to decide which teams you and your opponent will control on the virtual hardwood.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Swords className="w-5 h-5 flex-shrink-0" />
                  MyLeague Rebuild Picker
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Ready to prove your general manager prowess? Spin the wheel to select a random franchise to rebuild from scratch in MyNBA mode.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  Fantasy Draft Order
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Make your fantasy basketball draft order selection process completely transparent and randomized with a single spin of the wheel.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
