import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Target, ShieldAlert, Zap } from "lucide-react";

export const metadata = {
  title: "Golf Club Wheel Spinner | Random Club Picker Challenge",
  description: "Spin the Golf Wheel to randomly pick a golf club like Driver, 7-Iron, Pitching Wedge, or Putter. Perfect for range challenges and course games.",
};

export default function GolfWheelPage() {
  const golfClubs = [
    "Driver",
    "3-Wood",
    "5-Wood",
    "Hybrid",
    "4-Iron",
    "5-Iron",
    "6-Iron",
    "7-Iron",
    "8-Iron",
    "9-Iron",
    "Pitching Wedge",
    "Sand Wedge",
    "Putter",
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
          <span className="text-retro-orange">Golf Wheel</span>
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
            Links Challenges
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Golf Club Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Ready to spice up your golf practice or challenge your buddies on the course? Spin the golf wheel to determine which club you must hit next!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={golfClubs} storageKey="gamewheelclub-golf-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Try the Golf Club Challenge?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Golf is a game of precision, strategy, and versatility. While standard course play follows strict rules regarding club choices based on yardage, adding a touch of randomness to your practice sessions can greatly improve your creative shot-making ability.
              </p>
              <p>
                The <strong>Golf Club Wheel</strong> contains a full set of clubs including the Driver, woods, irons, wedges, and the putter. It is a fantastic tool for driving range challenges where you must hit whatever club the wheel lands on, forcing you to adjust your stance, swing speed, and target.
              </p>
              <p>
                To generate random decisions on other topics, check out our general <Link href="/decision-wheel/" className="text-retro-yellow underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Page</Link> for additional options.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              How to Play & Practice Modes
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Zap className="w-5 h-5 flex-shrink-0" />
                  Driving Range Challenge
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel before each shot at the practice range. You must hit the selected club, simulating the unpredictable nature of an actual round.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Target className="w-5 h-5 flex-shrink-0" />
                  One-Club Challenge Holes
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Play a par-3 or short par-4 hole with friends where everyone spins the wheel to determine the single club they must use from tee to green!
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  Worst-Club Recovery Practice
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Select a target distance and spin. Attempt to hit that distance using a completely unsuitable club picked by the wheel to build escape shot skills.
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
