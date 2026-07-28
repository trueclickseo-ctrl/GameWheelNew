import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Layers, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/sports-wheels/nfl-positions/",
  },
  title: "NFL Positions Wheel Spinner | Random Football Position Picker",
  description: "Spin the NFL Positions Wheel to pick a random football role like Quarterback, Running Back, Wide Receiver, or Linebacker. Perfect for training and coaching.",
};

export default function NFLPositionsWheelPage() {
  const nflPositions = [
    "Quarterback",
    "Running Back",
    "Wide Receiver",
    "Tight End",
    "Offensive Tackle",
    "Defensive End",
    "Linebacker",
    "Cornerback",
    "Safety",
    "Kicker",
    "Punter",
    "Fullback",
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
          <span className="text-retro-orange">NFL Positions</span>
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
            Gridiron Roles
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            NFL Positions Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Need to assign roster positions, set up coaching drills, or randomize a career mode challenge? Spin the positions wheel to pick!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={nflPositions} storageKey="gamewheelclub-nfl-positions-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              The Roles and Positions of Football
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                American football is one of the most specialized sports in the world, with distinct responsibilities for every single position on the field. From the signal-calling Quarterback to the hard-hitting Linebacker and the precise Kicker, each position requires specific skills, sizes, and athletic capabilities.
              </p>
              <p>
                Our <strong>NFL Positions Wheel</strong> lets you randomly pick one of these core positions. This is highly useful for high school or youth football practices to keep training sessions fresh, or for esports enthusiasts playing Madden Superstar mode who want to leave their career path up to fate.
              </p>
              <p>
                If you are looking to randomize non-sports options, try our general <Link href="/decision-wheel/" className="text-retro-yellow underline font-bold">Decision Wheel</Link> or view our collections on the <Link href="/games/" className="text-retro-mint underline font-bold">Games Page</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Practical Applications
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Layers className="w-5 h-5 flex-shrink-0" />
                  Madden Superstar / Career Mode
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Can&apos;t decide which position to play in Madden&apos;s Face of the Franchise or Career mode? Spin the wheel to decide if you will be a Quarterback, Wide Receiver, or Linebacker.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  Youth Coaching Drills
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Introduce youth players to multiple roles on the field. Spin the wheel to assign which position drills they will practice today.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  Football Education
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel and test new football fans on the exact role and responsibility of that position in the game.
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
