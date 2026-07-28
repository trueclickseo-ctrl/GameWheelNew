import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Shield, Award, HelpCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/sports-wheels/best-teams/",
  },
  title: "Best Sports Teams Wheel Spinner | Legendary Team Picker",
  description: "Spin the Best Teams Wheel to pick a legendary team in sports history. Preloaded with the 1992 Dream Team, 1996 Chicago Bulls, 1972 Dolphins, and more.",
};

export default function BestTeamsWheelPage() {
  const legendaryTeams = [
    "1992 Dream Team",
    "1996 Chicago Bulls",
    "1972 Miami Dolphins",
    "1985 Chicago Bears",
    "1970 Brazil World Cup Team",
    "2009 FC Barcelona",
    "1927 NY Yankees",
    "2007 New England Patriots",
    "1998 NY Yankees",
    "2017 GS Warriors",
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
          <span className="text-retro-orange">Best Teams</span>
        </div>

        {/* Back Link */}
        <Link
          href="/sports-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sports Wheels
        </Link>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            Hall of Fame
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Best Sports Teams Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Which squad was truly the greatest of all time? Spin the wheel to randomly select a legendary sports team across basketball, football, soccer, and baseball.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={legendaryTeams} storageKey="gamewheelclub-best-teams-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              The Ultimate Debate: Who is the G.O.A.T. Squad?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Every sport has its defining dynasty—the single team that came together to perform at an untouchable level, leaving an indelible mark on history. Settle debates, organize trivia rounds, or select retro matchup seeds using our preloaded <strong>Best Sports Teams Wheel</strong>.
              </p>
              <p>
                This spinner features legends like the 1992 USA Olympic &quot;Dream Team&quot;, Jordan&apos;s 1996 Chicago Bulls, the undefeated 1972 Miami Dolphins, and Pep Guardiola&apos;s treble-winning 2009 FC Barcelona. Easily add your own favorites or narrow the selection down to a specific sport.
              </p>
              <p>
                For custom decision making, feel free to use our <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Page</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Great Ways to Use the Wheel
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  Classic Matchup Debates
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel twice to select two legendary teams from different eras or sports, and argue with friends which squad would win or dominated their competition more.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  Retro Video Game Matchups
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  In games like NBA 2K or FC which allow classic/retro rosters, use the wheel to choose your team for historical exhibition matches.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  Sports Trivia Selector
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Select a team at random. Contestants must name as many players, coaches, or championship details from that specific team as they can in 60 seconds.
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
