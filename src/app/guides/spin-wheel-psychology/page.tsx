import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { Brain, Sparkles, Smile, Flame, Trophy, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Psychology of Spin Wheels: Suspense, Rewards & Choices",
  description: "Explore the psychological triggers behind spin wheels. Understand how decision fatigue, anticipation, and visual rewards make randomized selectors so engaging.",
};

export default function SpinWheelPsychology() {
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
            Psychological Study
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            Spin Wheel Psychology: Why We Love the Spin
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            What makes a rotating wheel of items so irresistible? Discover the neural mechanisms of anticipation, the relief of offloading choices, and the gamified design patterns that capture our attention.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: The Dopamine loop of anticipation */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Brain className="w-8 h-8 text-retro-orange" />
                1. The Dopamine Loop of Anticipation
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  At the heart of the spin wheel&apos;s appeal lies a fundamental neurotransmitter: dopamine. Commonly misunderstood as the chemical of pleasure, dopamine is actually the molecule of anticipation and motivation. It is released not when we receive a reward, but during the search and wait for it.
                </p>
                <p>
                  When you press &quot;Spin&quot; on a tool like the <Link href="/decision-wheel/" className="font-bold underline hover:text-retro-orange">Decision Wheel</Link>, a gap between action and outcome is created. During those 4 to 8 seconds of rotation, the brain enters a state of high arousal. Will it land on the jackpot? Will it pick your name? Will it choose pizza or salad? The uncertainty triggers a spike in dopamine, focusing your attention entirely on the screen.
                </p>
                <p>
                  This reward-prediction error model is well documented in behavioral psychology. When the outcome is uncertain, our brains pay closer attention to learn patterns. The visual slowing of the wheel stretches this anticipation to its absolute limit, transforming a mundane choice into a thrilling, micro-gamified event.
                </p>
              </div>
            </section>

            {/* Section 2: Overcoming Decision Fatigue */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-retro-blue" />
                2. Overcoming Decision Fatigue & Analysis Paralysis
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Modern life presents us with an overwhelming number of choices. From thousands of movies on streaming platforms to hundreds of dishes on delivery apps, we suffer from what psychologist Barry Schwartz coined the &quot;Paradox of Choice.&quot; Too many options lead to anxiety, high expectations, and ultimately, decision fatigue.
                </p>
                <p>
                  When we experience decision fatigue, our executive functioning drains. We find it harder to make rational decisions, often defaulting to habits or making no choice at all. This is where a randomized selection wheel becomes a powerful therapeutic utility.
                </p>
                <p>
                  By offloading the final selection to an objective, randomized algorithm, we experience instant cognitive relief. We bypass the internal debates, the pros-and-cons lists, and the fear of regret. Interestingly, if the wheel lands on an option and you feel disappointed, it reveals your true, subconscious preference—allowing you to confidently choose the other option!
                </p>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-yellow text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;The paradox of choice is that more options don&apos;t make us freer; they make us paralyzed, and less satisfied with our ultimate decisions.&quot;
              </p>
              <p className="text-sm font-bold">— Barry Schwartz</p>
            </div>

            {/* Section 3: Gamification in Modern Interfaces */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Trophy className="w-8 h-8 text-retro-mint" />
                3. Gamification and the Power of Visual & Sound Rewards
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Why do we prefer wheels over standard text generators? The answer lies in sensory feedback and gamification. A text generator simply displays a word immediately. There is no journey, no friction, and minimal excitement.
                </p>
                <p>
                  A spin wheel, on the other hand, utilizes rich visual and auditory cues:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>The Easing Deceleration:</strong> Simulates gravity and kinetic energy, making the digital object feel real and physical.</li>
                  <li><strong>Color Contrast:</strong> Alternating vibrant segments (like retro-orange, mint, and blue) prevents visual fatigue and keeps the eyes tracking the rotation.</li>
                  <li><strong>The Auditory Clicker:</strong> The click sound rate is mapped directly to the rotation speed. As the clicks slow down, our heart rate and focus align with the rhythm.</li>
                </ul>
                <p>
                  These elements are widely utilized in templates like <Link href="/templates/party-games/" className="font-bold underline hover:text-retro-blue">Party Games Templates</Link>, where the collective focus of the room is drawn entirely to the screen, building shared energy and instant laughter.
                </p>
              </div>
            </section>

            {/* Section 4: The Near-Miss Effect */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Flame className="w-8 h-8 text-retro-orange" />
                4. The Psychology of the &apos;Near Miss&apos;
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  One of the most powerful psychological phenomena related to spinning wheels is the &quot;near-miss&quot; effect. This occurs when the wheel stops just a fraction of a degree away from a highly desired segment, landing instead on an adjacent option.
                </p>
                <p>
                  Neurological scans show that the brain processes a near-miss similarly to a win, triggering a surge of motivation to try again. In games, raffles, and promotions, this effect drives high levels of engagement. It makes participants feel that they were &quot;so close,&quot; encouraging repeat interactions.
                </p>
                <p>
                  Ultimately, the spin wheel bridges math, design, and neurology. By understanding these principles, we can design better educational tools, exciting promotional events, and less stressful daily lives.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-orange p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Mind Mechanics</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <Smile className="w-5 h-5 flex-shrink-0" />
                  <span>Dopamine triggers during the suspense phase</span>
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-5 h-5 flex-shrink-0" />
                  <span>Resolves anxiety from choice paralysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 flex-shrink-0" />
                  <span>Sensory feedback increases engagement by 40%</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Spin and Decide</h3>
              <p className="text-sm opacity-90">
                Save your mental energy and let the wheel choose. Give it a spin today!
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/decision-wheel/" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Decision Wheel <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/party-games/" className="neo-btn bg-retro-yellow text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Party Templates <ArrowRight className="w-4 h-4" />
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
