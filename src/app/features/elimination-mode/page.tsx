import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Trash2, Shuffle, CheckCircle, HelpCircle, RefreshCw, Trophy, Users } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/features/elimination-mode/",
  },
  title: "Elimination Mode | Exhaustive Choice Selection | GameWheelClub",
  description: "Learn how Elimination Mode converts standard decision wheels into interactive raffle systems and sequential drawing boards by removing winners on each spin.",
};

export default function EliminationModeFeature() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider mb-2 opacity-75">
            <Link href="/" className="hover:text-retro-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-retro-navy dark:text-cream">Features</span>
            <span>/</span>
            <span className="text-retro-orange">Elimination Mode</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Elimination Mode: The Physics of Exhaustive Winner Selection
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-3xl leading-relaxed">
            Eliminate duplicates, select multiple distinct winners, or narrow down a massive list of options using our dynamic slice-removal logic.
          </p>
        </div>

        {/* Hero Alert/Highlight Card */}
        <section className="neo-card p-6 bg-retro-mint text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <Trash2 className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Exhaustive Random Selection</h2>
              <p className="text-sm font-medium leading-relaxed">
                When spinning standard wheels, the same outcome can land multiple times. But in giveaways, classroom turn-taking, or task assignment, you need each option selected exactly once. Elimination Mode solves this by instantly pruning the winning item from the wheel and dynamically recalculating the remaining slices.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Concept */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            1. What is Elimination Mode?
          </h2>
          <p className="font-medium leading-relaxed">
            In standard probability configurations, each event is independent. Spinning a wheel does not affect future spins, meaning that if you have 10 names on a wheel, a single name could theoretically win three times in a row. This property is known as <strong>sampling with replacement</strong>.
          </p>
          <p className="font-medium leading-relaxed">
            However, many scenarios demand <strong>sampling without replacement</strong>. In this model, once an option is selected, it is removed from the pool of active candidates. Subsequent selections are made exclusively from the remaining items. On a spinner wheel, this manifests as a dynamic visual event: the winning wedge disappears, the circle shifts and recalibrates, and the wheel adapts to its new configuration.
          </p>
          <p className="font-medium leading-relaxed">
            This mechanic is particularly powerful for selecting drawing orders, classroom chores, group presentations, or raffle prizes. Using our <Link href="/wheel-of-names/" className="font-bold underline decoration-retro-blue hover:text-retro-blue">Wheel of Names</Link> tool, you can enable elimination mode to run smooth multi-stage drawings without manual entry changes.
          </p>
        </section>

        {/* Section 2: Mathematical Probability Shifts */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            2. The Mathematical Mechanics: Hypergeometric Probability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-4">
              <p className="leading-relaxed">
                When you eliminate items, the probability of selecting any remaining item changes with every single spin. This introduces a shifting probability chain:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Initial State:</strong> If there are <em>N</em> options on the wheel, the chance of picking option <em>i</em> on the first spin is exactly <code>1 / N</code>.
                </li>
                <li>
                  <strong>Second Spin:</strong> After the first winner is eliminated, the remaining count becomes <code>N - 1</code>. The chance of picking any remaining option increases to <code>1 / (N - 1)</code>.
                </li>
                <li>
                  <strong>General Iteration:</strong> On spin <em>k</em> (where 1 is the first spin), the probability of choosing any surviving option is:
                  <div className="p-2 bg-white dark:bg-slate-800 rounded neo-border font-mono text-center my-2 text-xs">
                    P(Winner) = 1 / (N - k + 1)
                  </div>
                </li>
                <li>
                  <strong>Exhaustion Limit:</strong> Eventually, when only 1 item remains (spin <em>N</em>), its probability is <code>1 / 1</code>, or 100%.
                </li>
              </ul>
            </div>

            <div className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-retro-mint animate-spin" style={{ animationDuration: '4s' }} />
                  Probability Chain Simulation
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Let&apos;s trace a wheel with 5 items (A, B, C, D, E). The probability transitions are:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="border-b-2 border-retro-navy dark:border-cream">
                        <th className="py-2">Spin #</th>
                        <th className="py-2">Items Left</th>
                        <th className="py-2">Probability</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-retro-navy/10 dark:border-cream/10">
                        <td className="py-2">Spin 1</td>
                        <td className="py-2">5</td>
                        <td className="py-2">20% (1/5)</td>
                      </tr>
                      <tr className="border-b border-retro-navy/10 dark:border-cream/10">
                        <td className="py-2">Spin 2</td>
                        <td className="py-2">4</td>
                        <td className="py-2">25% (1/4)</td>
                      </tr>
                      <tr className="border-b border-retro-navy/10 dark:border-cream/10">
                        <td className="py-2">Spin 3</td>
                        <td className="py-2">3</td>
                        <td className="py-2">33.3% (1/3)</td>
                      </tr>
                      <tr className="border-b border-retro-navy/10 dark:border-cream/10">
                        <td className="py-2">Spin 4</td>
                        <td className="py-2">2</td>
                        <td className="py-2">50% (1/2)</td>
                      </tr>
                      <tr>
                        <td className="py-2">Spin 5</td>
                        <td className="py-2">1</td>
                        <td className="py-2">100% (1/1)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-retro-navy/10 dark:border-cream/10 text-xs opacity-80 italic">
                Notice how remaining items gain higher odds as the pool shrinks.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Applications */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            3. When to Enable Elimination Mode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium">
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-yellow">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-retro-orange" /> Raffle Prizes
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                If you have a list of raffle entrants and want to hand out 3 distinct prizes, elimination mode ensures that the first place winner doesn&apos;t accidentally win second and third place too. It automates the drawing process cleanly.
              </p>
            </div>
            
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-blue">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-retro-blue" /> Student Cold-Calling
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Teachers can load student rosters onto the wheel. Once a student answers a question, their name is eliminated from the active selection pool, ensuring that everyone in class gets exactly one turn before the wheel resets.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-mint">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <Shuffle className="w-5 h-5 text-retro-mint" /> Priority Task Sorting
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Faced with a massive list of tasks? Spin the wheel to select your first task. Once completed, eliminate it and spin again to select the next chore. This breaks down decision fatigue sequentially.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 font-medium">
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-orange">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Does removing an item delete it permanently?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                No. The item is only removed from the active wheel rendering for your current session. You can easily click the &quot;Reset Wheel&quot; button at any time to restore all originally inputted options.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Can I combine Elimination Mode with Weighted Wheels?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes! When combined, the wheel will eliminate the winner, sum up the remaining weights, and recalculate the slice proportions on the fly. This makes it possible to run weighted contests where winners are successively eliminated.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-mint">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                How many items can I eliminate?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                You can continue spinning and eliminating items until only one remains. At that point, the last option is automatically selected, and the system prompts you with a clean option to restore the wheel or clear the list.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-cream dark:bg-slate-800 neo-border p-8 rounded-xl">
          <h2 className="text-2xl font-black mb-4">Try Elimination Mode Now</h2>
          <p className="text-sm font-medium mb-6 max-w-xl mx-auto opacity-90">
            Set up your names list and spin. Watch slices pop off the wheel and the remaining slices grow larger in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wheel-of-names/" className="neo-btn px-6 py-3 bg-retro-mint text-retro-navy hover:bg-opacity-90">
              Spin Wheel of Names
            </Link>
            <Link href="/decision-wheel/" className="neo-btn px-6 py-3 bg-retro-blue text-retro-navy hover:bg-opacity-90">
              Go to Decision Wheel
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
