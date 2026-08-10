import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Users, Zap, HelpCircle } from "lucide-react";

export const metadata = {
  title: "NFL Players Wheel Spinner | Random NFL Player Picker",
  description: "Spin the NFL Players Wheel to select a random active star NFL football player. Ideal for fantasy drafts, trivia, and team building challenges.",
};

export default function NFLPlayersWheelPage() {
  const nflPlayers = [
    "Patrick Mahomes",
    "Lamar Jackson",
    "Josh Allen",
    "Christian McCaffrey",
    "Justin Jefferson",
    "Travis Kelce",
    "Joe Burrow",
    "CeeDee Lamb",
    "Tyreek Hill",
    "Amon-Ra St. Brown",
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
          <span className="text-retro-orange">NFL Players</span>
        </div>

        {/* Back Link */}
        <Link
          href="/sports-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sports Wheels
        </Link>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            Gridiron Stars
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            NFL Players Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Spin to choose randomly from the league&apos;s most elite players. Great for trivia challenges, fantasy picks, and player debates!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={nflPlayers} storageKey="gamewheelclub-nfl-players-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the Random NFL Player Picker?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Whether you are holding a football-themed trivia night, selecting players for a draft challenge, or trying to pick which superstar to build your Madden ultimate team around, the <strong>NFL Players Wheel</strong> simplifies the choice.
              </p>
              <p>
                This selector features top-tier talent like Patrick Mahomes, Lamar Jackson, Josh Allen, Christian McCaffrey, and Justin Jefferson. Our randomizing algorithm ensures that every single spin is completely unbiased and fair.
              </p>
              <p>
                To explore other randomizers, you can visit our <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link> or head back to the <Link href="/games/" className="text-retro-orange underline font-bold">Games Hub</Link> to check out other sports categories.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun Ways to Use the Wheel
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Zap className="w-5 h-5 flex-shrink-0" />
                  Madden Ultimate Team (MUT) Draft
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Challenge your friends to a MUT challenge where the wheel determines which superstar player you must acquire or build your squad around first.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  Sports Trivia Challenges
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel during trivia night. The contestant must answer a set of trivia questions specifically about the NFL player that the wheel lands on.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  Player vs. Player Debates
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel twice to select two superstar players, then debate with your friends who has the better career projection or stats!
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
