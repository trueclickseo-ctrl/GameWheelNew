import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Target, Award, Play } from "lucide-react";

export const metadata = {
  title: "MLB Teams Wheel Spinner | Random Major League Baseball Team Picker",
  description: "Spin the MLB Teams Wheel to randomly select a baseball franchise. Perfect for fantasy leagues, baseball video games, and playoff predictions.",
};

export default function MLBTeamsWheelPage() {
  const mlbTeams = [
    "Los Angeles Dodgers",
    "New York Yankees",
    "Atlanta Braves",
    "Houston Astros",
    "Philadelphia Phillies",
    "Texas Rangers",
    "Chicago Cubs",
    "Boston Red Sox",
    "New York Mets",
    "San Francisco Giants",
    "Baltimore Orioles",
    "Seattle Mariners",
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
          <span className="text-retro-orange">MLB Teams</span>
        </div>

        {/* Back Link */}
        <Link
          href="/sports-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sports Wheels
        </Link>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            Baseball Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            MLB Teams Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Choose a random Major League Baseball franchise instantly. Ideal for MLB The Show challenges, fantasy draft selections, and stadium road trips!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={mlbTeams} storageKey="gamewheelclub-mlb-teams-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the Baseball Franchise Picker?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Major League Baseball holds a special place in history with a 162-game regular season and a historic playoff structure. Sometimes, choosing who to root for or which team to play with can feel like a curveball.
              </p>
              <p>
                Our <strong>MLB Teams Wheel</strong> features prominent clubs from both the American and National Leagues, such as the Dodgers, Yankees, Braves, and Astros. It provides a simple, clean interface to generate random selections for gaming, fantasy drafts, or trivia.
              </p>
              <p>
                If you need to make custom decisions beyond baseball, use our general <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Page</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun Baseball Challenges
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  MLB The Show Franchise Mode
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Can&apos;t settle on a team for your next multi-season franchise rebuild? Spin the wheel to let fate choose your club and manage them to a World Series trophy.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Target className="w-5 h-5 flex-shrink-0" />
                  Fantasy Draft Orders
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Ensure a completely fair and transparent division of teams or pick orders for your local fantasy baseball leagues.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-blue text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  Summer Road Trip Planner
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Ready to visit a new stadium this season? Spin the wheel to decide which team&apos;s home ballpark you will travel to next!
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
