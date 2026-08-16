import CoinFlipper from "@/components/CoinFlipper";
import Link from "next/link";
import { Coins, Sparkles } from "lucide-react";

export const metadata = {
  title: "Flip a Coin | Online Heads or Tails Generator",
  description: "Flip a virtual coin online. A simple, instant heads or tails decision generator with 3D-inspired animations.",
};

export default function FlipACoinPage() {
  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Coins className="w-4 h-4" />
            Heads or Tails
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Flip a Coin Online
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Can&apos;t settle a simple argument? Flip a virtual coin and let probability decide heads or tails instantly!
          </p>
        </section>

        <section className="mb-16">
          <CoinFlipper />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Coin Flipping Probability
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                The classic <strong>coin flip</strong> is the oldest method of resolving a binary decision. Mathematically, a fair coin flip offers a exact **50% probability** for Heads and a **50% probability** for Tails.
              </p>
              <p>
                Our generator uses a randomized rotation sequence to simulate the physics of a tossed coin, rendering the result completely transparently.
              </p>
              <p>
                For questions that require more than two options, try our customizable <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link> or the versatile <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Why Use an Online Coin Flip?
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>No Physical Coin Needed:</strong> Settle disputes, make choices, or start games instantly from your phone or laptop.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Unbiased Decisions:</strong> Eliminate human error or biased coin tosses with our verified PRNG algorithms.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Quick Link:</strong> Bookmark this page for quick access during matches or team drafts.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Educational Content Section */}
        <section className="border-t-3 border-retro-navy dark:border-cream pt-12 mt-16 text-retro-navy dark:text-cream">
          <h2 className="text-3xl md:text-5xl font-black font-display mb-2">
            The Probability Behind Coin Flips & Decision Wheels
          </h2>
          <h3 className="text-xl md:text-2xl font-bold opacity-80 mb-8">
            Theory, Formulas, Case Studies, and Current Research (for Teachers & Students)
          </h3>

          {/* 1. The Core Theory */}
          <div className="space-y-8 my-12">
            <div>
              <h3 className="text-2xl font-black font-display mb-4">1. The Core Theory</h3>
              <p className="font-medium text-base mb-4 leading-relaxed">
                Both a coin flip and a decision wheel are examples of <strong>random experiments</strong> — processes with more than one possible outcome where the specific result can't be predicted in advance, but the <em>pattern</em> of results over many trials can be.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="neo-card p-6 bg-white dark:bg-retro-navy">
                <h4 className="font-black font-display text-lg mb-3 text-retro-orange">1.1 Classical (Theoretical) Probability</h4>
                <p className="text-sm font-semibold mb-4 leading-relaxed">For equally likely outcomes:</p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg border border-retro-navy/10 font-mono text-center font-bold text-base my-2">
                  {"P(E) = n(E) / n(S)"}
                </div>
                <ul className="text-xs space-y-1.5 opacity-90 font-medium list-disc pl-4 mt-4">
                  <li><strong>n(E):</strong> Number of favorable outcomes</li>
                  <li><strong>n(S):</strong> Total number of outcomes in the sample space</li>
                  <li><strong>Coin Example:</strong> S = {'{Heads, Tails}'}, so P(Heads) = 1/2 = 0.5</li>
                  <li><strong>Decision Wheel:</strong> Geometric probability based on central angles: <span className="font-mono font-bold">{"P(sector) = θ / 360°"}</span> (where θ is central angle). Weighted wheels have unequal sectors.</li>
                </ul>
              </div>

              <div className="neo-card p-6 bg-white dark:bg-retro-navy">
                <h4 className="font-black font-display text-lg mb-3 text-retro-blue">1.2 Law of Large Numbers (LLN)</h4>
                <p className="text-sm font-semibold mb-4 leading-relaxed">As trials (n) increase, experimental frequency converges to theoretical probability:</p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg border border-retro-navy/10 font-mono text-center font-bold text-base my-2">
                  {"Experimental P(E) = (Occurrence count of E) / (Total trials)"}
                </div>
                <p className="text-xs opacity-90 font-medium leading-relaxed mt-4">
                  This justifies why flipping a coin many times causes the proportion of heads to approach 0.5. Flips remain independent (avoid the <em>Gambler's Fallacy</em>; past flips never influence future ones).
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="neo-card p-6 bg-white dark:bg-retro-navy">
                <h4 className="font-black font-display text-lg mb-3 text-retro-mint">1.3 Binomial Distribution</h4>
                <p className="text-sm font-semibold mb-2 leading-relaxed">For n independent trials with success probability p:</p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg border border-retro-navy/10 font-mono text-center font-bold text-sm my-2">
                  {"P(X = k) = C(n, k) · p^k · (1 − p)^(n−k)"}
                </div>
                <ul className="text-xs space-y-1 mt-4 font-medium">
                  <li>• <span className="font-mono">{"C(n, k) = n! / [k!(n−k)!]"}</span></li>
                  <li>• Mean: <span className="font-mono">{"μ = np"}</span></li>
                  <li>• Variance: <span className="font-mono">{"σ² = np(1 − p)"}</span></li>
                  <li>• Std Dev: <span className="font-mono">{"σ = √(np(1 − p))"}</span></li>
                </ul>
              </div>

              <div className="neo-card p-6 bg-white dark:bg-retro-navy">
                <h4 className="font-black font-display text-lg mb-3 text-retro-yellow">1.4 Testing Fairness: Chi-Square Test</h4>
                <p className="text-sm font-semibold mb-2 leading-relaxed">To test if a real coin/wheel matches theoretical fairness:</p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg border border-retro-navy/10 font-mono text-center font-bold text-base my-2">
                  {"χ² = Σ [ (O − E)² / E ]"}
                </div>
                <p className="text-xs opacity-90 font-medium leading-relaxed mt-4">
                  Where <strong>O</strong> is observed frequency, and <strong>E</strong> is expected frequency. Compare χ² against critical values at <span className="font-mono">df = categories - 1</span> to test fairness mathematically.
                </p>
              </div>
            </div>

            <div className="neo-card p-8 bg-cream dark:bg-slate-800 border-l-8 border-retro-orange">
              <h4 className="font-black font-display text-xl mb-3 text-retro-orange flex items-center gap-2">
                1.5 The Physics Layer: Coins Aren't Purely "Random"
              </h4>
              <p className="font-medium text-base leading-relaxed">
                A coin flip is technically a <strong>deterministic physical event</strong> — if you knew the exact force, angle, and spin, classical physics could predict the outcome. It only <em>behaves</em> like a random process because tiny variations in human tosses are unpredictable in practice.
              </p>
              <p className="font-medium text-base leading-relaxed mt-4">
                Mathematician Persi Diaconis (with Holmes and Montgomery) modeled this rigorously in 2007, proposing that a flipped coin <strong>wobbles ("precesses")</strong> around an axis, meaning it spends slightly more time in the air with its <em>starting</em> side up than its opposite side. This predicts a small <strong>"same-side bias"</strong> of about 50.8% rather than a heads/tails bias.
              </p>
            </div>
          </div>

          {/* 2. Latest Research */}
          <div className="my-16">
            <h3 className="text-2xl font-black font-display mb-6">2. Latest Research</h3>
            <div className="neo-card overflow-x-auto bg-white dark:bg-retro-navy mb-8">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-3 border-retro-navy dark:border-cream bg-retro-yellow/10 font-extrabold text-retro-navy dark:text-cream">
                    <th className="p-4 border-r-3 border-retro-navy dark:border-cream w-1/3">Finding</th>
                    <th className="p-4">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-retro-navy/10 dark:divide-cream/10 font-semibold">
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Heads vs. Tails is genuinely fair</td>
                    <td className="p-4 opacity-90">Large-scale data confirms P(heads) ≈ 0.500, 95% CI [0.498, 0.502]</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">But "same-side bias" is real</td>
                    <td className="p-4 opacity-90">Across 350,757 flips, coins landed on the same side they started 50.8% of the time, with a 95% credible interval of [0.506, 0.509] — a small but statistically decisive effect</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Physical mechanism</td>
                    <td className="p-4 opacity-90">The Diaconis-Holmes-Montgomery model attributes this to precession (wobble), which causes the coin to spend more time in the air with its initial side facing up</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Practical size of the effect</td>
                    <td className="p-4 opacity-90">In a betting scenario, knowing the coin's starting side and betting on it 1,000 times would net you about $19 on average — small, but not zero</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">The study itself</td>
                    <td className="p-4 opacity-90">A team of 48 people flipped 350,757 coins from 46 different currencies to rule out any design-specific bias</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose dark:prose-invert max-w-none text-xs font-semibold space-y-2 opacity-80 border-l-4 border-retro-navy dark:border-cream pl-4">
              <p className="font-extrabold uppercase tracking-wider text-[10px] opacity-60">Full Citations</p>
              <p>• Diaconis, P., Holmes, S., & Montgomery, R. (2007). <em>Dynamical Bias in the Coin Toss.</em> SIAM Review, 49(2), 211–235. <a href="https://doi.org/10.1137/S0036144504446436" target="_blank" rel="noopener noreferrer" className="underline hover:text-retro-orange">https://doi.org/10.1137/S0036144504446436</a></p>
              <p>• Bartoš, F., et al. (2023, updated 2025). <em>Fair Coins Tend to Land on the Same Side They Started: Evidence from 350,757 Flips.</em> Journal of the American Statistical Association. arXiv preprint: <a href="https://arxiv.org/abs/2310.04153" target="_blank" rel="noopener noreferrer" className="underline hover:text-retro-orange">https://arxiv.org/abs/2310.04153</a></p>
              <p className="mt-4 italic text-sm text-retro-navy dark:text-cream">
                <strong>On decision wheels specifically:</strong> there isn't a comparable large physics study, because a well-made wheel (or a digital random-number-generator wheel) has no analogous "starting position" effect — its fairness is a geometry and engineering question (equal sector angles, low-friction bearing, symmetric weight), verified with the same chi-square approach rather than a physics model. Digital wheels are typically fairness-tested with large-scale Monte Carlo simulation to confirm outcome frequencies converge to the theoretical angle-based probabilities.
              </p>
            </div>
          </div>

          {/* 3. Classroom Case Studies */}
          <div className="my-16">
            <h3 className="text-2xl font-black font-display mb-6">3. Classroom Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="neo-card p-6 bg-white dark:bg-retro-navy border-l-8 border-retro-blue">
                <span className="px-2 py-0.5 bg-retro-blue text-white rounded text-[10px] font-bold uppercase tracking-wider">Case Study 1</span>
                <h4 className="font-black font-display text-lg mt-2 mb-3">"Is Our Class Coin Fair?" (Chi-Square Activity)</h4>
                <p className="text-xs font-semibold opacity-90 leading-relaxed">
                  <strong>Level:</strong> Middle/high school statistics<br/>
                  <strong>Setup:</strong> Each student flips a coin 30 times, recording heads/tails. Pool class data (aim for 300+ flips total).<br/>
                  <strong>Analysis:</strong> Expected: E(Heads) = E(Tails) = n/2. Compute χ² = Σ(O−E)²/E, df = 1, compare to critical value 3.841 (α = 0.05).<br/>
                  <strong>Discussion:</strong> Almost every class will find the coin "fair" for heads/tails — this matches the DHM research finding. Great segue into: "So what did researchers find was biased?"
                </p>
              </div>

              <div className="neo-card p-6 bg-white dark:bg-retro-navy border-l-8 border-retro-mint">
                <span className="px-2 py-0.5 bg-retro-mint text-retro-navy rounded text-[10px] font-bold uppercase tracking-wider">Case Study 2</span>
                <h4 className="font-black font-display text-lg mt-2 mb-3">Replicating the "Same-Side Bias" (Research Skills)</h4>
                <p className="text-xs font-semibold opacity-90 leading-relaxed">
                  <strong>Level:</strong> AP Statistics / intro college stats<br/>
                  <strong>Setup:</strong> In pairs, one student notes which side is up before the flip; the other catches and records whether it landed the same side up. Aim for 100+ flips per pair, pool as a class.<br/>
                  <strong>Analysis:</strong> Compute observed proportion p̂ of same-side outcomes and build 95% confidence interval: <span className="font-mono font-bold">p̂ ± 1.96 · √(p̂(1−p̂)/n)</span>. Compare to published estimate of 0.508.<br/>
                  <strong>Discussion:</strong> With a small sample, most groups won't have enough power to detect the 0.8% effect — a great lesson in <strong>statistical power</strong>.
                </p>
              </div>

              <div className="neo-card p-6 bg-white dark:bg-retro-navy border-l-8 border-retro-yellow">
                <span className="px-2 py-0.5 bg-retro-yellow text-retro-navy rounded text-[10px] font-bold uppercase tracking-wider">Case Study 3</span>
                <h4 className="font-black font-display text-lg mt-2 mb-3">Designing a "Fair" Decision Wheel</h4>
                <p className="text-xs font-semibold opacity-90 leading-relaxed">
                  <strong>Level:</strong> Elementary/middle school<br/>
                  <strong>Task:</strong> Given 5 lunch options, students must design a spinner where pizza is twice as likely as the others.<br/>
                  <strong>Formula:</strong> If 4 items are equal weight w and pizza is 2w: total weight = 6w. Each equal item: angle = (w/6w)×360° = 60°; pizza: (2w/6w)×360° = 120°.<br/>
                  <strong>Extension:</strong> Simulate 100 spins (physically or digitally) and verify observed frequency converges to the designed 120°/360° = 33.3%.
                </p>
              </div>

              <div className="neo-card p-6 bg-white dark:bg-retro-navy border-l-8 border-retro-orange">
                <span className="px-2 py-0.5 bg-retro-orange text-white rounded text-[10px] font-bold uppercase tracking-wider">Case Study 4</span>
                <h4 className="font-black font-display text-lg mt-2 mb-3">Binomial Prediction Challenge</h4>
                <p className="text-xs font-semibold opacity-90 leading-relaxed">
                  <strong>Level:</strong> High school probability/stats<br/>
                  <strong>Task:</strong> "If we flip a coin 10 times, what's the probability of getting at least 7 heads?"<br/>
                  <strong>Calculation:</strong> P(X≥7) = P(7)+P(8)+P(9)+P(10) = C(10,7)(0.5)^10 + C(10,8)(0.5)^10 + C(10,9)(0.5)^10 + C(10,10)(0.5)^10 ≈ 0.1719 (≈17.2%).<br/>
                  <strong>Action:</strong> Run 10 flips 30 times (or simulate) and compare empirical distribution to the theoretical binomial distribution.
                </p>
              </div>

            </div>

            <div className="neo-card p-6 bg-white dark:bg-retro-navy border-l-8 border-retro-navy dark:border-cream mt-8">
              <span className="px-2 py-0.5 bg-retro-navy dark:bg-cream text-white dark:text-retro-navy rounded text-[10px] font-bold uppercase tracking-wider">Case Study 5</span>
              <h4 className="font-black font-display text-lg mt-2 mb-3">Cross-Cultural Bias Check (Extension/Discussion)</h4>
              <p className="text-xs font-semibold opacity-90 leading-relaxed">
                <strong>Level:</strong> Any level, discussion-based<br/>
                <strong>Question:</strong> "Why did researchers deliberately use 46 different currencies?" — leads to a discussion of <strong>controlling for confounding variables</strong> (e.g., coin weight distribution, design asymmetry, coin thickness) and why rigorous experimental controls matter even for simple experiments.
              </p>
            </div>
          </div>

          {/* 4. Quick-Reference Formula Sheet */}
          <div className="my-16">
            <h3 className="text-2xl font-black font-display mb-6">4. Quick-Reference Formula Sheet</h3>
            <div className="neo-card overflow-x-auto bg-white dark:bg-retro-navy">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-3 border-retro-navy dark:border-cream bg-retro-yellow/10 font-extrabold text-retro-navy dark:text-cream">
                    <th className="p-4 border-r-3 border-retro-navy dark:border-cream">Concept</th>
                    <th className="p-4">Formula</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-retro-navy/10 dark:divide-cream/10 font-semibold">
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Classical probability</td>
                    <td className="p-4 font-mono">P(E) = n(E) / n(S)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Wheel sector probability</td>
                    <td className="p-4 font-mono">P = θ / 360°</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Complement rule</td>
                    <td className="p-4 font-mono">P(not E) = 1 − P(E)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Independent events (AND)</td>
                    <td className="p-4 font-mono">P(A and B) = P(A) · P(B)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Either event (OR, mutually exclusive)</td>
                    <td className="p-4 font-mono">P(A or B) = P(A) + P(B)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Binomial probability</td>
                    <td className="p-4 font-mono">P(X = k) = C(n, k) · p^k · (1 − p)^(n−k)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Binomial mean / variance</td>
                    <td className="p-4 font-mono">μ = np, σ² = np(1 − p)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Confidence interval (proportion)</td>
                    <td className="p-4 font-mono">p̂ ± z · √(p̂(1 − p̂) / n)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-3 border-retro-navy dark:border-cream bg-cream/30 dark:bg-slate-800/30">Chi-square goodness of fit</td>
                    <td className="p-4 font-mono">χ² = Σ [ (O − E)² / E ]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs italic font-semibold opacity-75">
              *Note: the "same-side bias" finding is a real, peer-reviewed statistical effect, but it's small (~0.8 percentage points) and only applies to human hand-tossed coins where the starting side is visible before the catch — it's not relevant to coin-flip apps, coin-tossing machines calibrated differently, or wheels/spinners.
            </p>
          </div>
        </section>
      </main>

      
    </>
  );
}
