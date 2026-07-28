import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Calculator, ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/learn/math-behind-random-wheels/",
  },
  title: "The Math Behind Random Wheels — Probability & Equations | GameWheelClub",
  description: "Learn the mathematical principles governing decision wheels: uniform probability distributions, weighted probabilities, expected value, and Pascal-Fermat correspondence.",
};

export default function MathBehindRandomWheelsPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            Pillar 2: Mathematical Foundations
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            The Math Behind Random Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 leading-relaxed">
            Discover how discrete probability distributions, expected value equations, and the Pascal-Fermat correspondence govern every spin of the wheel.
          </p>
        </section>

        {/* Article Body */}
        <article className="prose dark:prose-invert max-w-none neo-card p-8 bg-white dark:bg-retro-navy space-y-8 font-medium">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              1. Uniform Probability Distribution
            </h2>
            <p>
              When a wheel is divided into N equal slices, each option A has an identical probability of being selected on any given spin. Mathematically, this is modeled as a <strong>Discrete Uniform Distribution</strong>:
            </p>
            <div className="my-4 p-4 bg-cream dark:bg-retro-navy/60 border-2 border-retro-navy dark:border-cream rounded-lg text-center font-mono font-bold text-lg">
              P(A) = 1 / N
            </div>
            <p>
              For example, on a 5-slice wheel, the theoretical probability of landing on any single slice is exactly P(A) = 1/5 = 0.20 or 20%.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              2. Weighted Wheel Mathematics
            </h2>
            <p>
              When slices have custom weights assigned to them, the probability of selecting option $i$ with positive weight $w_i$ is proportional to its weight relative to the sum of all weights:
            </p>
            <div className="my-4 p-4 bg-cream dark:bg-retro-navy/60 border-2 border-retro-navy dark:border-cream rounded-lg text-center font-mono font-bold text-lg">
              {"P(A_i) = w_i / \\sum w_j"}
            </div>
            <p>
              If Option A has weight 3, Option B has weight 2, and Option C has weight 5, the total weight sum is $3 + 2 + 5 = 10$. The probability of Option A winning is $3 / 10 = 30\%$.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              3. The 1654 Pascal-Fermat Correspondence
            </h2>
            <p>
              Modern probability theory was formally founded in 1654 through a series of letters exchanged between French mathematicians <strong>Blaise Pascal</strong> and <strong>Pierre de Fermat</strong>. They solved the famous &quot;Problem of Points&quot; (how to divide stakes fairly in an interrupted game of chance), establishing the principles of expected value:
            </p>
            <div className="my-4 p-4 bg-cream dark:bg-retro-navy/60 border-2 border-retro-navy dark:border-cream rounded-lg text-center font-mono font-bold text-lg">
              {"E[X] = \\sum (x_i · P(x_i))"}
            </div>
            <p>
              This foundation allows us to quantify long-term statistical expected outcomes for games, raffles, and random choices.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              4. Law of Large Numbers (LLN)
            </h2>
            <p>
              The <strong>Law of Large Numbers</strong> states that as the number of independent spins $N$ increases, the observed empirical frequency of an option converges toward its theoretical probability $P(A)$. While 10 spins may produce minor variance, 1,000 spins will closely mirror theoretical probabilities.
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
