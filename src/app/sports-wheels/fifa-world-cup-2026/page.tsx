import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Globe, Flag, Sparkles } from "lucide-react";

export const metadata = {
  title: "FIFA World Cup 2026 Wheel Spinner | Random Country Picker",
  description: "Spin the World Cup 2026 Wheel to randomly select a qualified soccer nation. Great for tournament sweeps, group predictions, and match simulations.",
};

export default function FIFAWorldCup2026Page() {
  const worldCupTeams = [
    "USA",
    "Canada",
    "Mexico",
    "Argentina",
    "France",
    "England",
    "Brazil",
    "Spain",
    "Germany",
    "Portugal",
    "Italy",
    "Morocco",
    "Japan",
    "Senegal",
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
          <span className="text-retro-orange">FIFA World Cup 2026</span>
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
            United 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            FIFA World Cup 2026 Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Get ready for the biggest sporting event in history across North America. Spin the wheel to randomly select a qualifying nation!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={worldCupTeams} storageKey="gamewheelclub-worldcup-2026-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              The Road to the 2026 World Cup
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                The FIFA World Cup 2026 will mark a historic milestone as the tournament expands to 48 nations. Co-hosted by the USA, Canada, and Mexico, this tournament will host matches in iconic cities and stadiums, creating an unparalleled global festival of soccer.
              </p>
              <p>
                Our <strong>FIFA World Cup 2026 Wheel</strong> is preloaded with prominent qualified and qualifying powerhouse nations including the three hosts, defending champions Argentina, and heavyweight challengers France, England, Brazil, and Spain. You can customize the entries to set up group sweepstakes or select teams for EA Sports FC matchups.
              </p>
              <p>
                For regular choices or other sports categories, check out our general <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link> or return to the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Page</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Fun World Cup Game Ideas
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Globe className="w-5 h-5 flex-shrink-0" />
                  Office & Friend Sweepstakes
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Assign teams to participants randomly before the tournament kicks off. Watch the matches and track who gets bragging rights as their team advances.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-orange text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Flag className="w-5 h-5 flex-shrink-0" />
                  Group Stage Simulations
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the wheel repeatedly to assemble random groups of four. Predict who makes the knockout stage or simulate matches in soccer video games.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  Watch-along Country Selector
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Can&apos;t decide who to support in a neutral match? Spin the wheel to decide which national team you will root for in the upcoming game!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}
