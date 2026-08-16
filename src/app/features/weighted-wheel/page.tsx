import type { Metadata } from "next";
import Link from "next/link";
import { Scale, Compass, Percent, Calculator, BookOpen, AlertCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Weighted Decision Wheels | Probability-Based Spinners | GameWheelClub",
  description: "Explore the mathematics and logic of weighted decision wheels. Learn how probability distribution, cumulative weights, and roulette selection power custom choice wheels.",
};

export default function WeightedWheelFeature() {
  return (
    <>
      
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider mb-2 opacity-75">
            <Link href="/" className="hover:text-retro-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-retro-navy dark:text-cream">Features</span>
            <span>/</span>
            <span className="text-retro-orange">Weighted Wheel</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Weighted Decision Wheels: The Math & Logic of Custom Probability
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-3xl leading-relaxed">
            Not all choices are created equal. Discover how GameWheelClub lets you assign specific weight values to items, shifting the balance of chance with rigorous mathematical precision.
          </p>
        </div>

        {/* Hero Alert/Highlight Card */}
        <section className="neo-card p-6 bg-retro-yellow text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <Scale className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Unleashing Probability-Based Decisions</h2>
              <p className="text-sm font-medium leading-relaxed">
                Standard decision wheels divide chance equally among all options. But real life requires nuance. By setting custom weights, you can run fair giveaways where ticket counts matter, assign priorities to tasks, or construct games with varying item drop rates. Let&apos;s dive deep into the algorithms and systems that power this feature.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: What is a Weighted Wheel? */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            1. Understanding Weighted Randomization
          </h2>
          <p className="font-medium leading-relaxed">
            In standard random selection, every option on a wheel has an identical slice size and, consequently, an equal likelihood of being chosen. If you have 4 options, each has a 25% chance of winning. While this is perfect for basic choices like deciding what to eat for dinner, it fails when outcomes have differing values, probabilities, or importances.
          </p>
          <p className="font-medium leading-relaxed">
            A <strong>weighted decision wheel</strong> alters this equation by associating a numerical value, or &quot;weight,&quot; with each option. The angular width of each slice is proportional to its weight relative to the sum of all weights on the wheel. Consequently, an option with a weight of 10 is ten times more likely to be selected than an option with a weight of 1, occupying ten times the visual space and probability surface.
          </p>
          <p className="font-medium leading-relaxed">
            Our core tools, including the <Link href="/decision-wheel/" className="font-bold underline decoration-retro-blue hover:text-retro-blue">Decision Wheel</Link> and the custom <Link href="/wheel-of-names/" className="font-bold underline decoration-retro-mint hover:text-retro-mint">Wheel of Names</Link>, fully support weighted calculations. This makes it possible to model complex scenarios, classroom grading structures, or interactive events with a single spin.
          </p>
        </section>

        {/* Section 2: The Mathematics Behind the Spin */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            2. The Mathematics of Weighted Selection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-4">
              <p className="leading-relaxed">
                To build an unbiased weighted spinner, we rely on a method known in computer science as <strong>Fitness Proportionate Selection</strong> (or more commonly, <strong>Roulette Wheel Selection</strong>). The algorithmic implementation works as follows:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Sum the Weights:</strong> First, we calculate the total sum of all individual weights in the system.
                  <div className="p-2 bg-white dark:bg-slate-800 rounded neo-border font-mono text-center my-2 text-xs">
                    Total Weight (W) = &Sigma; w<sub>i</sub>
                  </div>
                </li>
                <li>
                  <strong>Normalize Probabilities:</strong> The probability of selecting a specific item is its individual weight divided by the total weight.
                  <div className="p-2 bg-white dark:bg-slate-800 rounded neo-border font-mono text-center my-2 text-xs">
                    P(item<sub>i</sub>) = w<sub>i</sub> / W
                  </div>
                </li>
                <li>
                  <strong>Generate a Random Float:</strong> We pull a highly random floating-point value between 0 (inclusive) and 1 (exclusive) using standard browser cryptography or PRNG algorithms.
                </li>
                <li>
                  <strong>Traverse the Cumulative Distribution Function (CDF):</strong> We multiply our random float by the total weight, generating a target number. We then iterate through the items, keeping a running sum of weights until the cumulative sum exceeds or equals the target.
                </li>
              </ol>
            </div>
            
            <div className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-retro-blue" />
                  Algorithm Example
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  Let&apos;s assume we have three options with the following weights:
                </p>
                <ul className="space-y-2 text-xs font-mono bg-cream dark:bg-slate-800 p-3 rounded border border-retro-navy/20 mb-4">
                  <li>Option A: Weight = 5 (50% chance)</li>
                  <li>Option B: Weight = 3 (30% chance)</li>
                  <li>Option C: Weight = 2 (20% chance)</li>
                  <li>Total Weight = 10</li>
                </ul>
                <p className="text-sm leading-relaxed">
                  The CDF intervals are:
                </p>
                <ul className="space-y-1 text-xs font-mono bg-cream dark:bg-slate-800 p-3 rounded border border-retro-navy/20">
                  <li>Option A: [0.0 to 5.0)</li>
                  <li>Option B: [5.0 to 8.0)</li>
                  <li>Option C: [8.0 to 10.0)</li>
                </ul>
                <p className="text-sm mt-3 leading-relaxed">
                  If the random generator outputs <code>0.73</code>, our target is <code>7.3</code> (0.73 * 10). Since 7.3 falls into the interval [5.0 to 8.0), <strong>Option B</strong> is the winner!
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-retro-navy/10 dark:border-cream/10 text-xs text-retro-orange flex items-center gap-2">
                <Percent className="w-4 h-4" />
                This guarantees visual slice size and landing chance match exactly.
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Practical Applications */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            3. Real-World Applications for Weighted Wheels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium">
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-mint">
              <h3 className="font-black text-lg mb-2">Classroom Dynamics</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Teachers can assign weights based on student participation. Students who haven&apos;t participated recently can get higher weights (higher probability of being called on), encouraging a balanced classroom experience without losing randomness.
              </p>
            </div>
            
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-blue">
              <h3 className="font-black text-lg mb-2">Giveaways & Raffles</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                If people buy multiple raffle tickets, weight allows you to represent each person with a single slice corresponding to their tickets rather than entering their name 50 times. It streamlines the wheel structure and enhances visual clarity.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-orange">
              <h3 className="font-black text-lg mb-2">Game Design & Loot</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Tabletop game masters or developers can use the wheel as a visual representation of loot drop rates. Legendary items can be assigned low weights (e.g., 1), while common items get high weights (e.g., 50), creating exciting mechanics.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Step-by-Step Guide */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            4. Step-by-Step Guide to Spinning with Weights
          </h2>
          <div className="space-y-4 font-medium">
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">1</span>
              <p className="flex-1">
                Navigate to our core <Link href="/decision-wheel/" className="font-bold underline hover:text-retro-orange">Decision Wheel</Link>.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">2</span>
              <p className="flex-1">
                Toggle the &quot;Weighted Options&quot; mode in the setting pane next to the spinner.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">3</span>
              <p className="flex-1">
                Input your items. Along with the item name, you will see a numeric weight input. Enter any integer or decimal value (e.g., 1.5, 5, or 100).
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">4</span>
              <p className="flex-1">
                Watch the wheel dynamically redraw. Observe how options with larger numbers consume larger visual wedges of the circular diagram.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">5</span>
              <p className="flex-1">
                Click &quot;Spin&quot;. The physics simulator will apply initial velocity, damping forces, and pointer selection using the calculated mathematical regions.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 font-medium">
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-orange">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Can I use decimal numbers or only whole integers for weights?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                You can absolutely use decimals! Our algorithm converts all weights into floating-point numbers. If you want to set a weight of 0.5 for a rare outcome and 9.5 for a common one, the wheel will calculate the proportions perfectly.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Does a higher weight guarantee that an option will be picked?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                No, a higher weight only increases the probability of selection. Even an item with 99% weight can theoretically lose to an item with 1% weight, just like drawing a single ticket out of a bag of a hundred. This is what keeps the spinner exciting and mathematically random.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-mint">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Is the wheel visual output representation proportional to the weight values?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes. The angles of the wheel slices are calculated dynamically using the ratio of each option&apos;s weight to the sum of all weights. If Option A represents 40% of the weight sum, it will occupy exactly 144 degrees (0.40 * 360) of the full circle.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-yellow">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                How does this differ from the default selection mode?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                The default mode is simply a special case of the weighted wheel where every single item is automatically assigned a weight of exactly 1.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-cream dark:bg-slate-800 neo-border p-8 rounded-xl">
          <h2 className="text-2xl font-black mb-4">Ready to Test Your Custom Odds?</h2>
          <p className="text-sm font-medium mb-6 max-w-xl mx-auto opacity-90">
            Set up custom odds, build your weighted values list, and see how the mathematical distribution handles your options in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/decision-wheel/" className="neo-btn px-6 py-3 bg-retro-orange text-retro-navy hover:bg-opacity-90">
              Go to Decision Wheel
            </Link>
            <Link href="/wheel-of-names/" className="neo-btn px-6 py-3 bg-retro-mint text-retro-navy hover:bg-opacity-90">
              Try Wheel of Names
            </Link>
          </div>
        </section>
      </main>

      
    </>
  );
}
