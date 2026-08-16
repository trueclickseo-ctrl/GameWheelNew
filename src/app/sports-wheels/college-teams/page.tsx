import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Landmark, Award, Swords } from "lucide-react";

export const metadata = {
  title: "College Teams Wheel Spinner | Random NCAA Team Picker",
  description: "Spin the College Teams Wheel to randomly select a top NCAA university team. Perfect for college football (CFB) simulation, basketball brackets, and pick&apos;em leagues.",
};

export default function CollegeTeamsWheelPage() {
  const collegeTeams = [
    "Alabama Crimson Tide",
    "Georgia Bulldogs",
    "Ohio State Buckeyes",
    "Michigan Wolverines",
    "Texas Longhorns",
    "Oregon Ducks",
    "Notre Dame Fighting Irish",
    "Clemson Tigers",
    "LSU Tigers",
    "Penn State Nittany Lions",
    "USC Trojans",
    "Florida State Seminoles",
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
          <span className="text-retro-orange">College Teams</span>
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
            NCAA Selectors
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            College Teams Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Pick a random university team from the NCAA FBS division. Great for College Football 25 Dynasty choices or NCAA basketball bracket predictions!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={collegeTeams} storageKey="gamewheelclub-college-teams-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the College Teams Selector?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                College athletics, especially football and basketball, are filled with incredible traditions, intense rivalries, and unmatched fan passion. With over 130 teams in the FBS alone, picking one at random can inject massive excitement into your gaming or bracket setups.
              </p>
              <p>
                The <strong>College Teams Wheel</strong> includes top-tier schools such as Alabama, Georgia, Ohio State, Michigan, Texas, and Notre Dame. It provides a fun, unbiased way to decide which school to lead in EA Sports College Football Dynasty mode or who to support during Bowl Season and March Madness.
              </p>
              <p>
                To generate random decisions on other topics, check out our general <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-blue underline font-bold">Games Page</Link> for additional options.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun Use Cases for College Fans
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Landmark className="w-5 h-5 flex-shrink-0" />
                  College Football Dynasty Setup
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Ready for a new coaching challenge? Spin the wheel to decide which university you should sign a contract with to begin your coaching career.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Swords className="w-5 h-5 flex-shrink-0" />
                  NCAA Matchup Challenges
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel twice to select two rival teams, and play out the simulated matchup in your video games or view historical stats to debate who wins.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  Tailgate Games & Brackets
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Perfect for selecting random teams for betting pools, tailgate trivia, or predicting underdog winners during college championship weeks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
