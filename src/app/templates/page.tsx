import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Utensils, Dices, GraduationCap, ChevronRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/templates/",
  },
  title: "Decision Wheel Templates Hub | GameWheelClub",
  description: "Browse dozens of free pre-made decision wheel templates. Categorized by Food, Party Games, and Classroom utilities.",
};

export default function TemplatesHub() {
  const categories = [
    {
      name: "Food & Dining",
      description: "Settle dinner table debates, choose lunch options, or pick a sweet dessert.",
      href: "/templates/food",
      icon: Utensils,
      bgColor: "bg-retro-orange",
      templates: [
        { name: "Dinner Picker", href: "/templates/food/dinner-picker" },
        { name: "Lunch Ideas", href: "/templates/food/lunch-ideas" },
        { name: "Dessert Spinner", href: "/templates/food/dessert-spinner" },
        { name: "Drink Decider", href: "/templates/food/drink-decider" },
      ],
    },
    {
      name: "Party Games",
      description: "Host group games, make party challenges, or pick trivia topics instantly.",
      href: "/templates/party-games",
      icon: Dices,
      bgColor: "bg-retro-blue",
      templates: [
        { name: "Truth or Dare", href: "/templates/party-games/truth-or-dare" },
        { name: "Would You Rather", href: "/templates/party-games/would-you-rather" },
        { name: "Charades Ideas", href: "/templates/party-games/charades-ideas" },
        { name: "Party Trivia", href: "/templates/party-games/party-trivia" },
      ],
    },
    {
      name: "Classroom & Teaching",
      description: "Pick random students, hand out rewards, or trigger brain break exercises.",
      href: "/templates/classroom",
      icon: GraduationCap,
      bgColor: "bg-retro-mint",
      templates: [
        { name: "Student Grouping", href: "/templates/classroom/student-grouping" },
        { name: "Rewards Wheel", href: "/templates/classroom/rewards-wheel" },
        { name: "Subject Picker", href: "/templates/classroom/subject-picker" },
        { name: "Brain Break", href: "/templates/classroom/brain-break" },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Decision Wheel Templates
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Don&apos;t build from scratch. Select one of our pre-configured choice lists, and start spinning right away!
          </p>
        </section>

        {/* Category Blocks */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between h-full">
                <div>
                  <div className={`w-12 h-12 rounded-lg neo-border ${cat.bgColor} flex items-center justify-center mb-4 text-white dark:text-retro-navy`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black font-display mb-2">{cat.name}</h2>
                  <p className="text-sm font-semibold opacity-80 mb-6">{cat.description}</p>
                  
                  <div className="flex flex-col gap-2 mb-6">
                    {cat.templates.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        className="flex items-center justify-between p-2 rounded border border-retro-navy/10 dark:border-cream/10 hover:border-retro-orange hover:bg-cream/30 dark:hover:bg-slate-800 transition-all font-semibold text-sm"
                      >
                        <span>{t.name}</span>
                        <ChevronRight className="w-4 h-4 text-retro-orange" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={cat.href}
                  className="w-full py-2.5 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5"
                >
                  View All {cat.name}
                </Link>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
}
