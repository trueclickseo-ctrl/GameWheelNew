import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Shield, Play, HelpCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/sports-wheels/nfl-teams/",
  },
  title: "NFL Teams Wheel Spinner | Random NFL Team Picker",
  description: "Spin the NFL Teams Wheel to pick a random NFL franchise. Perfect for fantasy football draft orders, choosing a team to play in Madden, or choosing a new favorite team.",
};

export default function NFLTeamsWheelPage() {
  const nflTeams = [
    "Kansas City Chiefs",
    "San Francisco 49ers",
    "Philadelphia Eagles",
    "Buffalo Bills",
    "Dallas Cowboys",
    "Green Bay Packers",
    "Baltimore Ravens",
    "Miami Dolphins",
    "Detroit Lions",
    "Houston Texans",
    "Cincinnati Bengals",
    "New York Jets",
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
          <span className="text-retro-orange">NFL Teams</span>
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
            Gridiron Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            NFL Teams Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Stuck choosing which team to play with or need an unbiased selector for your fantasy football league? Spin the wheel to decide!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={nflTeams} storageKey="gamewheelclub-nfl-teams-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the Random NFL Team Picker?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Deciding on a single team out of the 32 national franchises can be surprisingly difficult. Whether you are setting up a challenge, picking teams for a video game match, or choosing who to support this Sunday, our <strong>NFL Teams Wheel</strong> handles the selection process fairly.
              </p>
              <p>
                This spinner is preloaded with popular, competitive teams from both the NFC and AFC—including the Kansas City Chiefs, San Francisco 49ers, Philadelphia Eagles, and Buffalo Bills. If you want to customize the list to include all 32 franchises, or narrow it down to just your local rivals, you can easily add or remove options right in the spinner menu.
              </p>
              <p>
                For custom decisions outside of football, try our general <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link> or browse the full directory of options on the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Hub</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              How to Play & Use Cases
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  Madden Franchise Challenges
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Can&apos;t agree on which team to build in rebuild mode? Spin the wheel to assign your franchise randomly and test your coach capabilities.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  Fantasy Draft Orders
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Assign divisions, conferences, or pick orders to league members fairly using our clean, mathematically randomized algorithm.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-blue text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  Neutral Fans Sunday Selector
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  If your team is out of the playoff race or has a bye week, spin to pick a team to cheer for during the Sunday afternoon slate!
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
