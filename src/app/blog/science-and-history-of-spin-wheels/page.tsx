import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Compass, Award, ExternalLink, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Math, Science, and History of Spin Wheels | GameWheelClub",
  description: "Explore the equations, physical simulation laws, HSL color algorithms, and history of decision spinner wheels from Rota Fortunae to Merv Griffin.",
};

export default function ScienceAndHistoryOfSpinWheels() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Mathematics, Science, and History of the Spin Wheel",
    "description": "Explore the equations, physical simulation laws, HSL color algorithms, and history of decision spinner wheels from Rota Fortunae to Merv Griffin.",
    "datePublished": "2026-07-21T03:00:00+05:00",
    "author": {
      "@type": "Organization",
      "name": "GameWheelClub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GameWheelClub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gamewheelclub.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://gamewheelclub.com/blog/science-and-history-of-spin-wheels"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-wider text-retro-orange hover:underline">
            Home
          </Link>
          <span className="mx-2 text-retro-navy/50 dark:text-cream/50">/</span>
          <Link href="/blog" className="text-sm font-bold uppercase tracking-wider text-retro-navy/85 dark:text-cream/85 hover:underline">
            Blog
          </Link>
          <span className="mx-2 text-retro-navy/50 dark:text-cream/50">/</span>
          <span className="text-sm font-bold uppercase tracking-wider text-retro-navy dark:text-cream">
            Science & Math
          </span>
        </div>

        {/* Hero Banner */}
        <div className="neo-card bg-retro-blue p-8 md:p-12 mb-12 text-white">
          <span className="px-3 py-1 bg-retro-orange text-white font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Academic & History
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            The Mathematics & History of the Spin Wheel
          </h1>
          <p className="text-lg font-medium max-w-3xl leading-relaxed opacity-95">
            Spinning wheels have resolved queries, determined prizes, and symbolized fate for millennia. Delve into the equations of rotational motion, color distribution formulas, and cultural evolution.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Compass className="w-8 h-8 text-retro-orange" />
                1. The History of Spin Wheels
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Before random number generators and digital databases, humanity utilized mechanical rotation to access probability.
                </p>
                <h3 className="text-xl font-bold mt-6 mb-2">Rota Fortunae (The Wheel of Fortune)</h3>
                <p>
                  The philosophical concept of the <strong>Wheel of Fortune</strong> (<em>Rota Fortunae</em>) dates back to ancient Rome. Governed by the goddess Fortuna, the wheel symbolizes the unpredictable nature of fate. Influential philosophers like Boethius wrote about this in prison, describing how the wheel rotates dynamically—bringing kings low and elevating the commoner.
                </p>
                <blockquote className="border-l-4 border-retro-orange pl-4 italic my-4 opacity-80">
                  &quot;I know the many-sided faces of that monster, Fortune... I spin my wheel, and rejoice in the change.&quot; — Boethius, The Consolation of Philosophy (524 AD)
                </blockquote>
                <p>
                  For more on this historical concept, you can read the <a href="https://en.wikipedia.org/wiki/Rota_Fortunae" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-retro-blue inline-flex items-center gap-1">Rota Fortunae Wikipedia Entry <ExternalLink className="w-3.5 h-3.5" /></a>.
                </p>
                
                <h3 className="text-xl font-bold mt-6 mb-2">Pop Culture and Television Renaissance</h3>
                <p>
                  In the 18th century, roulette wheels revolutionized casino gaming. By the 20th century, the concept transitioned to broadcast entertainment. Created by Merv Griffin in 1975, the television game show <em>Wheel of Fortune</em> popularized large carnival-style wheel spins in living rooms globally. Today, digital spinner wheels are utilized for classroom rewards, gaming choices, and quick decisions.
                </p>
              </div>
            </section>

            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-retro-pink" />
                2. The Mathematics and Physics
              </h2>
              <div className="space-y-6 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  A premium digital spin wheel relies on two main fields of study: <strong>classical mechanics</strong> to simulate friction, and <strong>number theory</strong> to distribute vibrant, non-colliding colors.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">Physics Model: Angular Deceleration</h3>
                <p>
                  To make the wheel spin feel natural, we model the angular speed {"\\(\\omega\\)"} using a differential equation of friction:
                </p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg text-center font-serif text-lg neo-border">
                  {"\\(\\omega(t) = \\omega_0 \\cdot e^{-k \\cdot t}\\)"}
                </div>
                <p className="text-sm opacity-80 mt-2">
                  {"Where \\(\\omega_0\\) is the initial angular velocity, \\(k\\) is the friction coefficient, and \\(t\\) is time. As the time \\(t\\) progresses, the velocity slowly decays to zero. Alternatively, Web browsers utilize Cubic Bezier curves to model this deceleration:"}
                </p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg text-center font-serif text-lg neo-border">
                  {"\\(B(t) = (1-t)^3 P_0 + 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3 P_3\\)"}
                </div>
                <p className="text-sm opacity-80">
                  {"Our system utilizes a bezier curve profile represented by [0.15, 0.85, 0.35, 1.0], providing that satisfying, smooth casino sweep."}
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">Color Distribution: The Golden Angle</h3>
                <p>
                  {"To ensure that consecutive wedges do not share adjacent color palettes, our system dynamically generates colors using the Golden Angle derived from the Golden Ratio \\(\\Phi \\approx 0.6180339887\\):"}
                </p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg text-center font-serif text-lg neo-border">
                  {"\\(\\theta_i = (i \\times 137.5^\\circ) \\pmod{360^\\circ}\\)"}
                </div>
                <p className="text-sm opacity-80">
                  {"By adding a fraction of \\(137.5^\\circ\\) for each sector, we ensure that neighboring wedges have highly contrasting and unique colors, scaling to hundreds of wedges without repeats. For details on how the golden angle is utilized in biology and graphics, see the "}<a href="https://en.wikipedia.org/wiki/Golden_angle" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-retro-blue inline-flex items-center gap-1">{"Golden Angle Guide on Wikipedia"}<ExternalLink className="w-3.5 h-3.5" /></a>.
                </p>

                <h3 className="text-xl font-bold mt-6 mb-2">Probability Formula</h3>
                <p>
                  {"For a uniform wheel, the probability \\(P(X)\\) of selecting any wedge \\(x_i\\) is:"}
                </p>
                <div className="bg-cream dark:bg-slate-800 p-4 rounded-lg text-center font-serif text-lg neo-border">
                  {"\\(P(X = x_i) = \\frac{1}{N}\\)"}
                </div>
                <p className="text-sm opacity-80">
                  {"Where \\(N\\) is the total number of options on the wheel."}
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="neo-card bg-retro-orange p-6 text-white">
              <h3 className="font-display font-black text-2xl mb-4 flex items-center gap-2"><Award className="w-6 h-6" /> Key Formulas</h3>
              <ul className="space-y-4 text-xs font-semibold">
                <li className="border-b border-white/20 pb-2">
                  <span className="block opacity-75">Frictional Easing</span>
                  <span className="font-mono text-sm">{"\\(\\omega = \\omega_0 \\cdot e^{-kt}\\)"}</span>
                </li>
                <li className="border-b border-white/20 pb-2">
                  <span className="block opacity-75">Golden Angle Coloration</span>
                  <span className="font-mono text-sm">{"\\(\\theta = (idx \\times 137.5) \\pmod{360}\\)"}</span>
                </li>
                <li>
                  <span className="block opacity-75">Uniform Probability</span>
                  <span className="font-mono text-sm">{"\\(P(X) = 1 / N\\)"}</span>
                </li>
              </ul>
            </div>

            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl text-retro-navy dark:text-cream">Spin Now</h3>
              <p className="text-sm opacity-90">
                Experience dynamic color rendering and physics-based easing directly on our interactive tools.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/yes-no-wheel" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Yes or No Wheel <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/wheel-of-names" className="neo-btn bg-retro-pink text-white text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Wheel of Names <ArrowRight className="w-4 h-4" />
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
