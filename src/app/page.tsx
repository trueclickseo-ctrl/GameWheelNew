import Link from "next/link";
import WheelSpinner from "@/components/WheelSpinner";
import { Sparkles, HelpCircle, Shield, Award, ArrowRight, ChevronRight, Dices } from "lucide-react";

export default function Home() {
  const popularWheels = [
    {
      title: "Wheel of Names",
      route: "/wheel-of-names/",
      category: "Popular Wheels",
      emoji: "⭐",
      description: "Random name picker and custom name drawing wheel for classrooms, raffles, and giveaways.",
    },
    {
      title: "Decision Wheel",
      route: "/decision-wheel/",
      category: "Popular Wheels",
      emoji: "🎡",
      description: "Enter your custom choices and spin to settle any decision instantly without overthinking.",
    },
    {
      title: "Yes or No Wheel",
      route: "/yes-no-wheel/",
      category: "Popular Wheels",
      emoji: "🎯",
      description: "Instant 50/50 decision maker for quick answers when you can't decide.",
    },
    {
      title: "NFL Teams Wheel",
      route: "/sports-wheels/nfl-teams-wheel/",
      category: "Sports Wheels",
      emoji: "⚽",
      description: "Pick a random NFL team for fantasy drafts, Madden challenges, or game day picks.",
    },
    {
      title: "What to Eat for Lunch",
      route: "/food-wheels/what-to-eat-for-lunch/",
      category: "Food Wheels",
      emoji: "🍕",
      description: "Can't agree on food? Spin to randomly choose meal ideas, fast food, or restaurants.",
    },
    {
      title: "Anime Characters Wheel",
      route: "/anime-fandom-wheels/anime-characters/",
      category: "Anime & Fandom",
      emoji: "🎯",
      description: "Randomize popular anime heroes, villains, and matchup challenges from top series.",
    },
    {
      title: "Create an OC Wheel",
      route: "/character-creator/create-an-oc/",
      category: "Character Creator",
      emoji: "🎨",
      description: "Generate random original character traits, archetypes, and design constraints instantly.",
    },
    {
      title: "Truth or Dare Wheel",
      route: "/party-games/truth-or-dare-wheel/",
      category: "Party Games",
      emoji: "🎉",
      description: "Interactive party wheel packed with fun prompts for sleepovers, events, and icebreakers.",
    },
    {
      title: "Random Animal Generator",
      route: "/animal-wheels/random-animal-generator/",
      category: "Animal Wheels",
      emoji: "🦁",
      description: "Spin to discover random wild land and sea creatures for drawing ideas or learning.",
    },
    {
      title: "Random Number Generator",
      route: "/random-number-generator/",
      category: "Utility Tools",
      emoji: "🔢",
      description: "Customizable number spinner wheel for lotteries, stats, and random number selection.",
    },
    {
      title: "Flip a Coin",
      route: "/flip-a-coin/",
      category: "Utility Tools",
      emoji: "🪙",
      description: "Simple, fair, interactive 3D coin flipper tool with heads or tails statistics.",
    },
    {
      title: "Dice Roller",
      route: "/dice-roller/",
      category: "Utility Tools",
      emoji: "🎲",
      description: "Virtual multi-dice rolling simulator for board games, tabletop RPGs, and probability.",
    },
  ];

  return (
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

      {/* Popular Wheels Grid Section */}
      <section className="my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-retro-orange font-black uppercase text-xs tracking-wider mb-1">
              <Dices className="w-4 h-4" />
              Explore Wheel Library
            </div>
            <h2 className="text-3xl md:text-4xl font-black font-display text-retro-navy dark:text-cream">
              Popular Random Wheels
            </h2>
          </div>
          <Link
            href="/all-wheels/"
            className="neo-btn bg-retro-yellow text-retro-navy px-5 py-2.5 text-sm font-bold inline-flex items-center gap-1.5 hover:scale-105 transition-transform self-start md:self-auto"
          >
            View All Wheels Directory <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularWheels.map((wheel) => (
            <div
              key={wheel.route}
              className="neo-card p-5 bg-white dark:bg-retro-navy flex flex-col justify-between h-full group hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl p-2 rounded-lg bg-cream dark:bg-slate-800 border border-retro-navy/20 dark:border-cream/20">
                    {wheel.emoji}
                  </span>
                  <span className="text-[11px] font-extrabold uppercase bg-retro-mint text-retro-navy px-2 py-0.5 rounded border border-retro-navy">
                    {wheel.category}
                  </span>
                </div>
                <h3 className="text-xl font-black font-display mb-2 group-hover:text-retro-orange transition-colors">
                  {wheel.title}
                </h3>
                <p className="text-xs font-semibold opacity-80 leading-relaxed mb-4">
                  {wheel.description}
                </p>
              </div>

              <Link
                href={wheel.route}
                className="w-full py-2 neo-btn bg-cream dark:bg-slate-800 text-retro-navy dark:text-cream text-center text-xs font-bold flex items-center justify-center gap-1 group-hover:bg-retro-orange group-hover:text-white transition-colors"
              >
                Spin {wheel.title} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/all-wheels/"
            className="neo-btn bg-retro-orange text-white px-8 py-3.5 text-base font-black inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Browse All 100+ Wheels & Decision Tools <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
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
  );
}
