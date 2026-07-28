import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, History, Calculator, Cpu, Sparkles, GraduationCap, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/learn/",
  },
  title: "Learn Hub — History, Math, Science & Probability of Decision Wheels | GameWheelClub",
  description: "Explore the history of random selection, the mathematics of probability, decision fatigue science, and our interactive Wheel Game Encyclopedia.",
};

export default function LearnHubPage() {
  const pillars = [
    {
      title: "1. History of the Wheel",
      href: "/learn/history-of-the-wheel",
      icon: History,
      color: "bg-retro-yellow",
      description: "From Athenian sortition and Boethius' Rota Fortunae to Pascal's roulette experiments and modern digital wheel spinners.",
    },
    {
      title: "2. The Math Behind It",
      href: "/learn/math-behind-random-wheels",
      icon: Calculator,
      color: "bg-retro-mint",
      description: "Understand probability equations, weighted distributions, expected value, and the 1654 Pascal-Fermat correspondence.",
    },
    {
      title: "3. Science of Decision Making",
      href: "/learn/science-of-decision-making",
      icon: Cpu,
      color: "bg-retro-blue",
      description: "How PRNG algorithms work, Web Crypto APIs, decision fatigue psychology, and how outsourcing choices reduces anxiety.",
    },
    {
      title: "4. Wheel Game Encyclopedia",
      href: "/learn/encyclopedia",
      icon: BookOpen,
      color: "bg-retro-orange",
      description: "Complete A-Z glossary of decision wheel terminology, sortition, PRNGs, weighted options, and random seed theory.",
    },
    {
      title: "5. Probability & Stats Education",
      href: "/learn/probability-statistics",
      icon: GraduationCap,
      color: "bg-purple-300",
      description: "Classroom teaching hub featuring Chi-Square goodness-of-fit case studies, formulas, and teacher lesson plans.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 me-2 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            Knowledge & Science Center
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            The GameWheelClub Learn Hub
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-medium opacity-90 leading-relaxed">
            Discover the rich history, mathematics, cognitive science, and probability theory behind decision wheels and random choice generators.
          </p>
        </section>

        {/* Pillars Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="neo-card neo-card-hover p-6 bg-white dark:bg-retro-navy flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl neo-border ${pillar.color} flex items-center justify-center text-retro-navy mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-black font-display mb-3 text-retro-navy dark:text-cream group-hover:text-retro-orange transition-colors">
                    {pillar.title}
                  </h2>
                  <p className="text-sm font-medium opacity-80 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-retro-orange">
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </section>

        {/* Educational Summary Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy border-3 border-retro-navy dark:border-cream">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-retro-orange" />
            <h2 className="text-2xl font-black font-display">Why Learn About Randomness?</h2>
          </div>
          <p className="text-base font-medium opacity-90 leading-relaxed mb-4">
            Randomness is more than just a convenience—it is a fundamental principle of modern democracy, cryptography, computer science, and statistics. From the ancient Athenian <em>kleroterion</em> used to pick government officials without corruption, to the browser-based Web Crypto API generating pseudorandom numbers, decision wheels bridge human psychology and mathematical certainty.
          </p>
          <p className="text-base font-medium opacity-90 leading-relaxed">
            Whether you are a teacher introducing students to probability theory, a developer curious about PRNG algorithms, or someone seeking to reduce decision fatigue, the Learn Hub provides peer-reviewed, historical, and mathematical insights.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
