import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { Shield, Target, Activity, Award, UserCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Importance of Unbiased Selection: Fairness & Statistics",
  description: "Discover why unbiased selection is crucial. Explore the mathematics of fair choices, cognitive biases in human selectors, and real-world applications of sortition.",
};

export default function UnbiasedSelectionImportance() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-wider text-retro-orange hover:underline">
            Home
          </Link>
          <span className="mx-2 text-retro-navy/50 dark:text-cream/50">/</span>
          <span className="text-sm font-bold uppercase tracking-wider text-retro-navy dark:text-cream">
            Guides
          </span>
        </div>

        {/* Hero Banner */}
        <div className="neo-card bg-retro-mint p-8 md:p-12 mb-12 text-retro-navy">
          <span className="px-3 py-1 bg-retro-navy text-cream font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Science & Society
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            Why Unbiased Selection Matters
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Human choice is riddled with implicit cognitive biases. Explore how random math protects statistics, restores justice, guarantees educational equity, and builds trust.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: Human Bias */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <UserCheck className="w-8 h-8 text-retro-orange" />
                1. The Fallibility of Human Selection
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Humans like to think of themselves as rational, objective decision-makers. However, decades of research in cognitive psychology and behavioral economics prove otherwise. Our brains are hardwired with dozens of heuristics—mental shortcuts—that introduce unconscious bias into every decision.
                </p>
                <p>
                  Consider these common cognitive shortcuts:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Recency Bias:</strong> We favor items, names, or ideas that we have encountered most recently.</li>
                  <li><strong>Implicit Bias:</strong> Our subconscious preferences for specific genders, ethnicities, or personality styles affect who we call on in a classroom or select for a promotion.</li>
                  <li><strong>Spatial Bias:</strong> In physical environments, we are significantly more likely to choose items that are close to our dominant hand or right in front of our line of sight.</li>
                </ul>
                <p>
                  Because of these biases, true fairness cannot be achieved by a human selector. When a teacher tries to pick a student &quot;randomly&quot; from their head, or when an auditor picks files to inspect, they are inevitably following predictable, biased patterns. To achieve true fairness, we must offload selection to randomized mathematical algorithms.
                </p>
              </div>
            </section>

            {/* Section 2: Mathematical Randomization */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Activity className="w-8 h-8 text-retro-blue" />
                2. Mathematics as a Shield for Statistical Integrity
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  In fields like statistics, clinical trials, and market research, unbiased selection is not just an ethical preference; it is a mathematical requirement. If a clinical trial does not assign participants to treatment and control groups using a random, double-blind process, the trial&apos;s results are scientifically invalid.
                </p>
                <p>
                  Without random selection, researchers introduce confounding variables. For example, if a doctor unconsciously assigns healthier patients to a new experimental drug, the drug will appear more effective than it actually is.
                </p>
                <p>
                  Similarly, in financial auditing, inspectors must verify records without predictable patterns. If companies know exactly which files are likely to be inspected (e.g., only high-value invoices), they can easily hide fraud in other areas. Using a secure <Link href="/random-number-generator/" className="font-bold underline hover:text-retro-orange">Random Number Generator</Link> to pull samples ensures that every record has an equal chance of audit, keeping organizations transparent and compliant.
                </p>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-yellow text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;Randomness is not the absence of order; it is a mathematical framework that ensures every possibility is treated with absolute equity.&quot;
              </p>
              <p className="text-sm font-bold">— Scientific Sampling Methods Journal</p>
            </div>

            {/* Section 3: Sortition and Justice */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Shield className="w-8 h-8 text-retro-mint" />
                3. Sortition and the Architecture of Democracy
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  In political theory, the use of random selection to populate assemblies or choose leaders is known as <em>sortition</em>. In ancient Athens, the birthplace of democracy, elections were considered oligarchic because they favored the wealthy, the famous, and the eloquent. Instead, the Athenians used a randomization device called a <em>kleroterion</em> to select citizens for juries and administrative councils.
                </p>
                <p>
                  Today, we see sortition in action through the jury duty system. Jurors are selected at random from voter registration and driver lists. This guarantees that the jury represents a diverse cross-section of the community, protecting the trial from institutional or political bias.
                </p>
                <p>
                  By utilizing random selection, we prevent power from concentrating in the hands of a select few, ensuring that everyone has an equal voice in civic life.
                </p>
              </div>
            </section>

            {/* Section 4: Daily Life Fairness */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Target className="w-8 h-8 text-retro-yellow text-retro-navy" />
                4. Everyday Equity: Classrooms and Communities
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  In everyday life, random selection builds trust. In a classroom, when a teacher uses a digital wheel to call on students, it eliminates any perception of favoritism. The student who sits in the back row has the exact same probability of being chosen as the student sitting in the front row.
                </p>
                <p>
                  This simple, transparent mechanism is easy to implement. By setting up <Link href="/templates/classroom/" className="font-bold underline hover:text-retro-blue">Classroom Templates</Link> or list randomizers, anyone can introduce fairness to their classroom, team meetings, or family game nights, ensuring that every voice is valued equally.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-blue p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Integrity Auditing</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <span>Eliminates 100% of human selection patterns</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-5 h-5 flex-shrink-0" />
                  <span>Ensures statistical validity in clinical trial samples</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  <span>Sortition has historical roots dating back to 500 BC</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Generate Fairly</h3>
              <p className="text-sm opacity-90">
                Generate random numbers or select names with mathematically guaranteed, browser-secured fairness.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/random-number-generator/" className="neo-btn bg-retro-orange text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Number Generator <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/classroom/" className="neo-btn bg-retro-mint text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Classroom Templates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
