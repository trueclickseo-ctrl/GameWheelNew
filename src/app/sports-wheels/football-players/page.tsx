import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Target, Star, HelpCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/sports-wheels/football-players/",
  },
  title: "Football Players Wheel Spinner | Random Soccer Star Picker",
  description: "Spin the Football Players Wheel to pick a random world soccer star like Messi, Ronaldo, Mbappé, or Haaland. Perfect for FC 24/FC 25 draft challenges.",
};

export default function FootballPlayersWheelPage() {
  const soccerPlayers = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Kylian Mbappé",
    "Erling Haaland",
    "Kevin De Bruyne",
    "Jude Bellingham",
    "Vinícius Jr",
    "Mohamed Salah",
    "Harry Kane",
    "Antoine Griezmann",
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
          <span className="text-retro-orange">Football Players</span>
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
            Global Football Stars
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Football Players Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-95 max-w-2xl mx-auto">
            Spin to select randomly from the world&apos;s most elite association football (soccer) superstars. Settle debates, pick FC targets, or challenge friends!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={soccerPlayers} storageKey="gamewheelclub-football-players-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the World Soccer Star Picker?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Soccer, or football as it is known globally, features some of the most talented athletes on the planet. From generational icons like Lionel Messi and Cristiano Ronaldo to modern goal-scoring machines like Kylian Mbappé and Erling Haaland, football fans are always debating who rules the pitch.
              </p>
              <p>
                Our <strong>Football Players Wheel</strong> provides an interactive way to randomly pick one of these world-class stars. Use it to select your next target in Ultimate Team, randomize career mode player choices, or organize draft challenges.
              </p>
              <p>
                If you are looking to randomize non-sports options, try our general <Link href="/decision-wheel/" className="text-retro-mint underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-blue underline font-bold">Games Page</Link> for additional options.
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
                  <Target className="w-5 h-5 flex-shrink-0" />
                  FC 24/FC 25 Ultimate Team Draft Challenge
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel before starting a draft to select your captain, or determine which player you must build your hybrid squad chemistry around.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  Fantasy League Captain Picker
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Stuck between selecting two superstars for your fantasy squad? Add them to the wheel and let a random spin settle your captain armband dilemma!
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-blue text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  Career Mode Challenges
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Choose a player at random, review their stats or team, and embark on a manager campaign to sign that player to your club no matter the cost!
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
