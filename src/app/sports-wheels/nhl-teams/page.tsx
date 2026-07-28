import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Disc, Play, Shield } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/sports-wheels/nhl-teams/",
  },
  title: "NHL Teams Wheel Spinner | Random NHL Hockey Team Picker",
  description: "Spin the NHL Teams Wheel to select a random professional hockey franchise. Great for NHL video games, bracket setups, and trivia.",
};

export default function NHLTeamsWheelPage() {
  const nhlTeams = [
    "Edmonton Oilers",
    "Florida Panthers",
    "New York Rangers",
    "Colorado Avalanche",
    "Toronto Maple Leafs",
    "Boston Bruins",
    "Tampa Bay Lightning",
    "Carolina Hurricanes",
    "Dallas Stars",
    "Vancouver Canucks",
    "Vegas Golden Knights",
    "Detroit Red Wings",
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/sports-wheels/" className="hover:text-retro-orange">Sports Wheels</Link>
          <span>/</span>
          <span className="text-retro-orange">NHL Teams</span>
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
            Ice Hockey Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            NHL Teams Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Pick a random professional NHL team instantly. Perfect for NHL franchise mode challenges, exhibition matches, and playoff brackets.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={nhlTeams} storageKey="gamewheelclub-nhl-teams-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the NHL Franchise Randomizer?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                The National Hockey League boasts some of the fastest-paced athletic action in all of sports, culminating in the battle for the historic Stanley Cup. If you are playing an exhibition match against a friend or setting up a local tournament bracket, selecting teams at random is the best way to keep matches balanced and exciting.
              </p>
              <p>
                The <strong>NHL Teams Wheel</strong> features prominent clubs like the Edmonton Oilers, Florida Panthers, Colorado Avalanche, and Vegas Golden Knights. You can customize the wheel to include only Eastern or Western Conference teams, or narrow down the selection to your favorite division.
              </p>
              <p>
                For custom decisions outside of hockey, feel free to use our <Link href="/decision-wheel/" className="text-retro-mint underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Page</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun Game Modes & Challenges
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  EA Sports NHL Franchise Rebuild
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Ready to test your hockey general manager skills? Spin the wheel to select a random franchise to rebuild from scratch in Franchise Mode.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Disc className="w-5 h-5 flex-shrink-0" />
                  Local 1v1 Matchup Picker
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Avoid arguments over team selection. Spin the wheel to decide which teams you and your opponent will control on the virtual ice.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  Playoff Bracket Sweepstakes
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Assign teams to friends randomly for bracket pools, where each player roots for their drawn team throughout the Stanley Cup playoffs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
