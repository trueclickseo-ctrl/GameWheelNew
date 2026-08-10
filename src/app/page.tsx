import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import { Sparkles, HelpCircle, Shield, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Decision Making Made Easy
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Spin the Wheel of Decisions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
            Stuck on a choice? Enter your list, hit spin, and let our custom spinner wheel pick a random winner transparently. Beautiful, retro, and 100% client-side.
          </p>
        </section>

        {/* Wheel Spinner Section */}
        <section className="mb-16">
          <WheelSpinner initialOptions={["Yes", "No"]} storageKey="gamewheelclub-wheel-home" />
        </section>

        {/* Core Info & Setup */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Why Use GameWheelClub?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Decision fatigue is real. A random decision wheel (often called a spinner wheel) is a simple, visual, and unbiased way to make a choice. It eliminates bias and overthinking by leaving the final outcome to pure, randomized mathematical probability.
              </p>
              <p>
                Whether you need to pick a name, decide a yes-no question, or choose between multiple ideas, our tools are built to be fast, simple, and responsive on all devices.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              How GameWheelClub Works
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-border bg-retro-mint flex items-center justify-center font-bold text-retro-navy">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg">Enter Your Options</h4>
                  <p className="text-sm opacity-80">Add options one by one, or paste a list of names/items into the bulk editor.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-border bg-retro-blue flex items-center justify-center font-bold text-retro-navy">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hit Spin</h4>
                  <p className="text-sm opacity-80">Click the spin button to set the wheel in motion with retro clicking sound effects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-border bg-retro-orange flex items-center justify-center font-bold text-retro-navy">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg">Get Your Winner</h4>
                  <p className="text-sm opacity-80">The pointer selects the final option fairly and transparently. No server manipulation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Math & Science Encyclopedia Section */}
        <section className="neo-card p-8 bg-cream dark:bg-slate-800 my-16 border-l-8 border-retro-orange">
          <h2 className="text-3xl font-black font-display mb-6">
            The Science & Math of the Spinner Wheel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-medium leading-relaxed">
            <div>
              <h3 className="font-extrabold text-lg mb-2 text-retro-orange">
                Rotational Dynamics & Easing
              </h3>
              <p className="mb-4">
                The motion of the wheel is modeled on physical rotational inertia and Coulomb friction. The deceleration matches:
                <br />
                <span className="block my-2 font-serif text-center bg-white dark:bg-retro-navy p-2 rounded border border-retro-navy/20 font-bold text-base">
                  {"\\(\\omega(t) = \\omega_0 \\cdot e^{-kt}\\)"}
                </span>
                Where <span className="font-serif">{"\\(\\omega_0\\)"}</span> represents the starting angular velocity and <span className="font-serif">{"\\(k\\)"}</span> is the friction factor. To maximize anticipation, our system utilizes a cubic Bezier curve easing:
                <br />
                <span className="block my-2 font-serif text-center bg-white dark:bg-retro-navy p-2 rounded border border-retro-navy/20 font-bold text-base">
                  {"\\(B(t) = 3(1-t)^2 t P_1 + 3(1-t) t^2 P_2 + t^3\\)"}
                </span>
                This generates a smooth slowdown mimicking a real physical roulette spinner. Read the scientific overview on the <a href="https://en.wikipedia.org/wiki/Rotational_kinematics" target="_blank" rel="noopener noreferrer" className="underline hover:text-retro-blue font-bold">Rotational Kinematics Wikipedia Page</a>.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-lg mb-2 text-retro-blue">
                Color Spacing via the Golden Angle
              </h3>
              <p className="mb-4">
                To guarantee that consecutive segments never have identical or clashing colors, we distribute sector hues dynamically using the <strong>Golden Angle</strong> derived from the Golden Ratio fraction:
                <br />
                <span className="block my-2 font-serif text-center bg-white dark:bg-retro-navy p-2 rounded border border-retro-navy/20 font-bold text-base">
                  {"\\(\\theta_{idx} = (idx \\times 137.508^\\circ) \\pmod{360^\\circ}\\)"}
                </span>
                This provides optimal color spacing and distinct adjacent sectors, regardless of the option count. Learn more about the biology and mathematics of this on the <a href="https://en.wikipedia.org/wiki/Golden_angle" target="_blank" rel="noopener noreferrer" className="underline hover:text-retro-blue font-bold">Golden Angle Wikipedia Page</a>.
              </p>
              <h3 className="font-extrabold text-lg mb-2 text-retro-mint">
                Uniform Probability Theory
              </h3>
              <p>
                Every sector on a uniform wheel has an identical probability of selection, modeled by the uniform probability distribution:
                <br />
                <span className="block my-2 font-serif text-center bg-white dark:bg-retro-navy p-2 rounded border border-retro-navy/20 font-bold text-base">
                  {"\\(P(X = x_i) = \\frac{1}{N}\\)"}
                </span>
                Where <span className="font-serif">{"\\(N\\)"}</span> is the count of wedges. For weighted distributions, the probability is proportional to individual slice weights. Reference the official <a href="https://mathworld.wolfram.com/UniformDistribution.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-retro-blue font-bold">Wolfram MathWorld Probability Distribution Guide</a>.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-retro-navy/10 dark:border-cream/10 text-center">
            <Link href="/blog/science-and-history-of-spin-wheels/" className="neo-btn bg-retro-yellow text-retro-navy px-6 py-3 font-bold text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform">
              Explore Our Wheel Math & History Encyclopedia <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy my-12">
          <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-center border-b-3 border-retro-navy dark:border-cream pb-3">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-retro-orange" />
                Is this decision wheel completely random?
              </h3>
              <p className="text-sm opacity-95">
                Yes, our wheel utilizes a secure pseudorandom number generator (PRNG) in JavaScript to guarantee completely unbiased outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-retro-mint" />
                Is my option list stored on the server?
              </h3>
              <p className="text-sm opacity-95">
                No, your options never leave your device. All calculations and storage happen locally on your browser using localStorage.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-retro-blue" />
                Can I use this for names and giveaways?
              </h3>
              <p className="text-sm opacity-95">
                Absolutely! Many teachers, content creators, and event coordinators use GameWheelClub to draw random names or giveaway winners.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
