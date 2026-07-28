import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Cpu, ArrowLeft, Brain, Shield, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/learn/science-of-decision-making/",
  },
  title: "Science of Decision Making & PRNG Algorithms | GameWheelClub",
  description: "Explore the computer science of Pseudorandom Number Generators (PRNGs), Web Crypto APIs, decision fatigue psychology, and anxiety reduction.",
};

export default function ScienceOfDecisionMakingPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Back Link */}
        <Link href="/learn/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-retro-orange mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Learn Hub
        </Link>

        {/* Hero Section */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4 text-white" />
            Pillar 3: Science & PRNG Tech
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            The Science of Decision Making & Cryptographic PRNGs
          </h1>
          <p className="text-lg font-medium opacity-90 leading-relaxed">
            Understanding the cognitive science of decision fatigue alongside the software engineering that guarantees unbiased computational randomness.
          </p>
        </section>

        {/* Article Body */}
        <article className="prose dark:prose-invert max-w-none neo-card p-8 bg-white dark:bg-retro-navy space-y-8 font-medium">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              1. What is Decision Fatigue?
            </h2>
            <p>
              In social psychology, <strong>Decision Fatigue</strong> refers to the deteriorating quality of decisions made by an individual after a long session of decision-making. Popularized by psychologists Roy F. Baumeister and John Tierney (<em>Willpower</em>, 2011), the brain consumes glucose and executive control reserves when weighing minor tradeoffs.
            </p>
            <p>
              By outsourcing trivial choices (such as what to eat for lunch, picking an icebreaker, or choosing a classroom participant) to a randomized wheel, individuals preserve executive cognitive energy for complex tasks.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              2. How Pseudorandom Number Generators (PRNGs) Work
            </h2>
            <p>
              Computers are inherently deterministic machines. To generate randomness, software utilizes <strong>Pseudorandom Number Generators (PRNGs)</strong>—mathematical algorithms that transform an initial <em>seed value</em> into an unpredictable sequence of numbers.
            </p>
            <p>
              Modern Web browsers utilize algorithms like the Mersenne Twister or xorshift variants. For enhanced cryptographic security, browsers access the native <code>crypto.getRandomValues()</code> API, which samples hardware entropy (such as thermal noise and CPU clock jitter) to generate true cryptographic randomness.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              3. Why Randomness Reduces Anxiety
            </h2>
            <p>
              When faced with overchoice (the burden of choosing between many appealing options), individuals experience regret and cognitive dissonance. A decision wheel acts as an external, unbiased referee.
            </p>
            <p>
              Interestingly, research shows that if a user feels disappointed by the wheel&apos;s outcome, it reveals their subconscious preference—helping them realize what option they actually preferred all along!
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
