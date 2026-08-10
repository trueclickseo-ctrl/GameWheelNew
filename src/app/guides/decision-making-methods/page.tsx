import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, Layers, CheckSquare, RefreshCw, BarChart2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Decision-Making Methods: Frameworks, Heuristics & Randomization",
  description: "Explore structured decision-making frameworks. From the Eisenhower Matrix to analytical models and randomized selection tools, discover how to conquer choice fatigue.",
};

export default function DecisionMakingMethods() {
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
        <div className="neo-card bg-retro-blue p-8 md:p-12 mb-12 text-cream">
          <span className="px-3 py-1 bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Strategy & Productivity
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            A Masterclass in Decision-Making Methods
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Should you analyze, trust your gut, or delegate to probability? Learn the formal models of choice theory, cognitive biases, and how to know when to let a coin flip settle the score.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: The Spectrum of Decisions */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Layers className="w-8 h-8 text-retro-orange" />
                1. The Spectrum of Choices: High-Stakes vs. Low-Stakes
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Every single day, the average human makes approximately 35,000 decisions. These decisions range from trivial micro-choices (what clothes to wear, which route to drive, what to eat) to life-altering, high-stakes decisions (which job offer to accept, whether to purchase a home, how to invest capital).
                </p>
                <p>
                  The mistake most people make is treating all choices with the same level of cognitive gravity. Applying a heavy analytical framework to a low-stakes decision results in analysis paralysis—spending hours debating dinner options, leaving you drained and exhausted before facing truly important choices.
                </p>
                <p>
                  Effective decision-makers categorize their decisions. High-stakes choices require analytical structures, medium-stakes benefit from collaborative or intuitive frameworks, and low-stakes decisions are best automated or delegated to random chance tools like <Link href="/flip-a-coin/" className="font-bold underline hover:text-retro-orange">Flip a Coin</Link> to preserve mental energy.
                </p>
              </div>
            </section>

            {/* Section 2: Structured Decision Frameworks */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <BarChart2 className="w-8 h-8 text-retro-mint" />
                2. Analytical Decision-Making Frameworks
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  When facing significant business or personal choices, relying solely on intuition is risky. Here are the leading structured models developed by management theorists:
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>The Rational Decision-Making Model:</strong> A step-by-step process involving identifying the problem, establishing decision criteria, weighting the criteria, generating alternatives, rating each alternative, and choosing the optimal path. This model is highly logical but requires significant time and data.
                  </li>
                  <li>
                    <strong>The Eisenhower Matrix:</strong> A 2x2 grid that categorizes tasks by Urgency and Importance. It helps you decide what to Do immediately, Plan for later, Delegate to others, or Eliminate entirely.
                  </li>
                  <li>
                    <strong>The Vroom-Yetton Decision Model:</strong> A situational leadership tree that guides you to choose the best decision-making style (autocratic, consultative, or collaborative) based on your team&apos;s context and commitment requirements.
                  </li>
                </ul>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-mint text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;Whenever you see a successful business, someone once made a courageous decision.&quot;
              </p>
              <p className="text-sm font-bold">— Peter F. Drucker</p>
            </div>

            {/* Section 3: The Power of Strategic Randomization */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <RefreshCw className="w-8 h-8 text-retro-blue" />
                3. Strategic Randomization: Breaking the Paradox of Choice
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  While it may seem counter-intuitive to leave decisions to chance, randomization has a rich history as a valid decision methodology. Known historically as <em>sortition</em> or <em>cleromancy</em>, ancient societies (including democratic Athens) used random lots to select government officials and resolve disputes to prevent corruption and gridlock.
                </p>
                <p>
                  In modern cognitive science, randomization serves as a circuit breaker for the brain. When you have two equivalent alternatives—such as deciding what restaurant to order from—your brain can enter an infinite loop of evaluation. Neither option is objectively better than the other, so logic fails to find an answer.
                </p>
                <p>
                  By spinning a wheel, rolling a die, or using <Link href="/flip-a-coin/" className="font-bold underline hover:text-retro-blue">Flip a Coin</Link>, you force an external resolution. An interesting byproduct is the &quot;instinct check&quot;: the second the coin lands on heads, if you feel a wave of disappointment, you immediately realize that you actually wanted tails. Thus, random tools can act as mirrors to clarify your true desires.
                </p>
              </div>
            </section>

            {/* Section 4: Choosing the Right Tool */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <CheckSquare className="w-8 h-8 text-retro-yellow text-retro-navy" />
                4. Match the Method to the Moment
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To optimize your productivity and reduce fatigue, follow this simple diagnostic checklist:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Is the impact long-term (&gt; 6 months)?</strong> Use the Analytical Rational Model. Do the research.</li>
                  <li><strong>Does the decision affect multiple stakeholders?</strong> Use the Vroom-Yetton framework. Consult the team.</li>
                  <li><strong>Are the consequences minor, and are the options equally weighted?</strong> Delegate it. Load up our <Link href="/templates/food/" className="font-bold underline hover:text-retro-orange">Food Templates</Link>, populate the options, spin, and move on with your day.</li>
                </ol>
                <p>
                  Mastering the art of decision-making isn&apos;t just about making the right choices; it&apos;s about spending the right amount of energy on the choices you make.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-orange p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Choice Statistics</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  <span>35,000 daily decisions made by average adults</span>
                </li>
                <li className="flex items-center gap-2">
                  <Layers className="w-5 h-5 flex-shrink-0" />
                  <span>90% of daily choices are low-stakes and repetitive</span>
                </li>
                <li className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 flex-shrink-0" />
                  <span>Coin flips resolve gridlock in less than 3 seconds</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Resolve Your Choice</h3>
              <p className="text-sm opacity-90">
                Facing a quick heads-or-tails dilemma or deciding what to eat? Use our targeted decision aids.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/flip-a-coin/" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Flip a Coin <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/food/" className="neo-btn bg-retro-mint text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Food Templates <ArrowRight className="w-4 h-4" />
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
