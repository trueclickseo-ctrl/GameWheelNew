import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Star, Heart, Flame } from "lucide-react";

export const metadata = {
  title: "NBA Players Wheel Spinner | Random NBA Player Picker",
  description: "Spin the NBA Players Wheel to pick a random active basketball superstar. Perfect for fantasy sports, trivia night, and player comparison debates.",
};

export default function NBAPlayersWheelPage() {
  const nbaPlayers = [
    "LeBron James",
    "Stephen Curry",
    "Nikola Jokić",
    "Giannis Antetokounmpo",
    "Luka Dončić",
    "Joel Embiid",
    "Jayson Tatum",
    "Kevin Durant",
    "Anthony Edwards",
    "Shai Gilgeous-Alexander",
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
          <span className="text-retro-orange">NBA Players</span>
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
            All-Stars Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            NBA Players Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Decide randomly between the absolute elite basketball talents in the NBA today. Settle comparisons, select player focus, or start debates.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={nbaPlayers} storageKey="gamewheelclub-nba-players-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Spin for NBA Superstars?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                The NBA is a league driven by superstars. With generational legends sharing the court with emerging phenoms, there is never a shortage of jaw-dropping plays, statistical records, or award races. But sometimes, when setting up fan contests, picking players for cards, or just comparing stats, we want to leave the choice to chance.
              </p>
              <p>
                Our <strong>NBA Players Wheel</strong> is preloaded with MVP candidates and champions like LeBron James, Stephen Curry, Nikola Jokić, Giannis Antetokounmpo, and Luka Dončić. It offers a mathematically fair option selector for sports broadcasters, trivia hosts, and dedicated fans.
              </p>
              <p>
                If you are looking to make custom selections, feel free to use our <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Page</Link> to check out other sports wheels.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun Activities to Try
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Flame className="w-5 h-5 flex-shrink-0" />
                  Trivia Focus Selector
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel during basketball trivia games to select which superstar player the next round of questions will be centered on.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  M2K Draft Challenges
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Compete with friends by spinning the wheel to determine who is your franchise franchise player or draft focus for online challenges.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Heart className="w-5 h-5 flex-shrink-0" />
                  Player Debate Night
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel to choose two active stars. Debate their overall rankings, defensive impact, or stats with your friends.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
