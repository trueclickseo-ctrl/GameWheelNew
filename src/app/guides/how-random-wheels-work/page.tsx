import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Cpu, Scale, Settings, Activity, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How Random Wheels Work: Mathematics, Algorithms & Physics",
  description: "Dive deep into the science behind virtual spin wheels. Explore Pseudo-Random Number Generators (PRNGs), friction deceleration physics, and algorithmic fairness.",
};

export default function HowRandomWheelsWork() {
  return (
    <>
      
      
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
        <div className="neo-card bg-retro-yellow p-8 md:p-12 mb-12 text-retro-navy">
          <span className="px-3 py-1 bg-retro-navy text-cream font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Technical Guide
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            Behind the Spin: How Random Wheels Actually Work
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Ever wondered how a virtual wheel calculates its winner? Discover the mathematics of pseudorandom number generators, the equations of simulated friction, and the programming principles that guarantee an unbiased selection.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: The Core Mechanism */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Cpu className="w-8 h-8 text-retro-orange" />
                1. The Core Mechanism: From Math to Motion
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  At first glance, a digital spinner wheel appears to be a simple simulation of a physical wheel. You click a button, the wheel begins to spin rapidly, and then it gradually slows down until a pointer marks the winning segment. However, in the realm of computer science, translating physical rotation into digital code requires bridging two distinct domains: deterministic programming and random mathematics.
                </p>
                <p>
                  A physical wheel relies on physical friction, aerodynamic resistance, the stiffness of the pointer peg, and the unevenness of the manual force applied by the spinner. In contrast, a virtual wheel operates in an environment governed by strict mathematical algorithms. To simulate a spin, the application must calculate two primary components: the final target angle (which determines the winner) and the animation curve (which creates the visual suspense).
                </p>
                <p>
                  The lifecycle of a spin starts not with movement, but with the selection of the outcome. Long before the wheel visualizes its first rotation on your screen, the software has already determined exactly where it will land. The visual spin is a beautifully choreographed display engineered to match this predetermined result, satisfying our human desire for anticipation and dramatic tension.
                </p>
              </div>
            </section>

            {/* Section 2: PRNGs vs TRNGs */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Scale className="w-8 h-8 text-retro-mint" />
                2. PRNGs vs. TRNGs: The Quest for True Fairness
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To understand digital fairness, we must explore the distinction between Pseudo-Random Number Generators (PRNGs) and True Random Number Generators (TRNGs). Computers are inherently logical machines designed to execute predictable instructions. Generating a truly unpredictable number is a surprisingly difficult task.
                </p>
                <p>
                  <strong>Pseudo-Random Number Generators (PRNGs):</strong> These are algorithms that use mathematical formulas to produce sequences of numbers that appear random. A PRNG starts with a starting value called a &quot;seed.&quot; If you know the seed and the algorithm, you can predict every subsequent number with 100% accuracy. For standard web applications, JavaScript&apos;s default <code>Math.random()</code> function uses a PRNG algorithm called <em>xorshift128+</em> or similar variants. While highly efficient, standard PRNGs are not cryptographically secure and can occasionally show subtle patterns over millions of iterations.
                </p>
                <p>
                  <strong>True Random Number Generators (TRNGs):</strong> These generators capture physical noise from physical processes—such as radioactive decay, thermal fluctuations in semiconductors, or atmospheric noise—and convert it into numbers. TRNGs are completely unpredictable because they rely on the chaotic nature of the physical universe.
                </p>
                <p>
                  For a decision-making tool like the <Link href="/wheel-of-names/" className="font-bold underline hover:text-retro-orange">Wheel of Names</Link>, a high-quality PRNG is perfectly sufficient. To ensure high levels of fairness, advanced wheels can utilize the Web Cryptography API (<code>window.crypto.getRandomValues</code>), which grabs entropy from the operating system&apos;s underlying hardware noise. This guarantees that your raffle, name selection, or dinner decision is secure against manipulation.
                </p>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-mint text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;Anyone who considers arithmetical methods of producing random digits is, of course, in a state of sin.&quot;
              </p>
              <p className="text-sm font-bold">— John von Neumann, 1951</p>
            </div>

            {/* Section 3: The Physics of Simulated Friction */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Settings className="w-8 h-8 text-retro-blue" />
                3. The Physics of Simulated Friction
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To make the spin feel authentic, developers implement physics engines in miniature. Instead of relying on a constant speed that suddenly halts, a natural spin follows a deceleration curve. The physics of rotation involve torque, angular velocity, and friction.
                </p>
                <p>
                  The velocity of the wheel over time can be represented by a differential equation where deceleration is proportional to the current speed. In digital animation, this is commonly achieved using an easing function. A cubic-ease-out or exponential-ease-out curve is applied to the rotation angle. The basic formula for the wheel&apos;s angle at time \(t\) can be modeled as:
                </p>
                <div className="neo-card p-4 bg-white dark:bg-slate-800 text-center font-mono text-sm border-2 border-retro-navy dark:border-cream">
                  Angle(t) = TargetAngle * (1 - Math.pow(2, -10 * (t / TotalDuration)))
                </div>
                <p>
                  This formula ensures that the wheel starts at high speed and gradually glides into its final landing position. The illusion is completed by adding auditory feedback—clicking sounds that speed up and slow down in direct synchronization with the segments crossing the pointer. This multisensory experience mimics the physical pegs hitting a plastic flapper, increasing the release of dopamine in the brains of the spectators.
                </p>
              </div>
            </section>

            {/* Section 4: Probability Distribution */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Activity className="w-8 h-8 text-retro-orange" />
                4. Uniform Probability Distribution
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  For a wheel to be fair, each segment must have an equal chance of being selected relative to its size. In a standard wheel where all segments are equal in width, this is known as a uniform probability distribution. If there are \(N\) segments, the probability \(P\) of any specific segment winning is exactly:
                </p>
                <div className="neo-card p-4 bg-white dark:bg-slate-800 text-center font-mono text-xl border-2 border-retro-navy dark:border-cream">
                  P = 1 / N
                </div>
                <p>
                  To achieve this computationally, the algorithm first selects a random number \(R\) between 0 and 1. It then multiplies \(R\) by 360 to find the landing angle. By dividing 360 by the number of segments, the code determines which index corresponds to that angle. Crucially, the landing spot within a specific slice is also randomized to prevent the pointer from constantly landing exactly in the middle of a slice, which would look unnatural.
                </p>
                <p>
                  In custom templates such as <Link href="/templates/classroom/" className="font-bold underline hover:text-retro-blue">Classroom Templates</Link>, maintaining this exact probability distribution is what allows educators to distribute tasks, call on students, or hand out rewards with absolute impartiality.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-blue p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Spin Science</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <Compass className="w-5 h-5 flex-shrink-0" />
                  <span>360 degrees of rotation mapped dynamically</span>
                </li>
                <li className="flex items-center gap-2">
                  <Scale className="w-5 h-5 flex-shrink-0" />
                  <span>Cryptographically secure OS entropy API</span>
                </li>
                <li className="flex items-center gap-2">
                  <Activity className="w-5 h-5 flex-shrink-0" />
                  <span>Verified 1/N probability uniform distribution</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Test the Science</h3>
              <p className="text-sm opacity-90">
                Put these algorithms to the test with our live, client-side tools. Zero delays, zero bias.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/wheel-of-names/" className="neo-btn bg-retro-orange text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Wheel of Names <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/classroom/" className="neo-btn bg-retro-mint text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Classroom Templates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </>
  );
}
