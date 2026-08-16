import Link from "next/link";
import { BookOpen, ChevronRight, Calendar } from "lucide-react";

export const metadata = {
  title: "GameWheelClub Blog | Random Decisions, Games & Education Insights",
  description: "Read our latest articles on random decision-making, interactive classroom game templates, time-boxing techniques, and party icebreaker activities.",
};

export default function BlogIndexPage() {
  const articles = [
    {
      title: "The Mathematics & History of the Spin Wheel: Friction, Easing & Rota Fortunae",
      desc: "Delve into the science of spin wheels. Explore classical rotational mechanics, the Golden Ratio fractional math for wedge colors, and historical roots from Rome's Rota Fortunae to broadcast game shows.",
      href: "/blog/science-and-history-of-spin-wheels",
      category: "Science & Math",
      date: "July 21, 2026",
    },
    {
      title: "Best Icebreaker Games for Work: Boost Corporate Team Bond",
      desc: "Dread morning syncs? Check out these quick, energetic corporate icebreaker games using random name wheels and spinners to kickstart your meetings.",
      href: "/blog/best-icebreaker-games-for-work",
      category: "Workplace",
      date: "July 17, 2026",
    },
    {
      title: "Classroom Incentive Rewards: Gamifying Student Engagement",
      desc: "Gamify your classroom rewards system. Discover creative ideas for student grouping, brain breaks, and random selectors that keep students engaged.",
      href: "/blog/classroom-incentive-rewards",
      category: "Education",
      date: "July 16, 2026",
    },
    {
      title: "How Generators Help Coding: Introducing Randomness in Software",
      desc: "Unlock programmatic creativity. Explore the utility of random seed generators, string parses, and testing scenarios in modern software development.",
      href: "/blog/how-generators-help-coding",
      category: "Productivity",
      date: "July 15, 2026",
    },
    {
      title: "How to Customize Spin Wheels: Hex Colors, Weights & Themes",
      desc: "Take full control of your decision spinner layouts. Learn to configure custom colors, segment weights, sound effects, and clean typography.",
      href: "/blog/how-to-customize-spin-wheels",
      category: "Guides",
      date: "July 14, 2026",
    },
    {
      title: "Math Activities Using Random Generators: Visualizing Probability",
      desc: "Visualize math theories in real-time. Use random number generators and alphabet spinners to teach statistics and data indexing in classrooms.",
      href: "/blog/math-activities-using-random-generators",
      category: "Education",
      date: "July 13, 2026",
    },
    {
      title: "Party Games for Adults: Spice Up Your Next Social Event",
      desc: "Ready to turn up the heat on party night? Explore interactive spinners for Spin the Bottle, Adult Truth or Dare, and funny dares.",
      href: "/blog/party-games-for-adults",
      category: "Entertainment",
      date: "July 12, 2026",
    },
    {
      title: "Pomodoro Technique for Students: Beating Exam Stress",
      desc: "Supercharge your study schedules. Learn to combine Pomodoro intervals, countdown timers, and focused review blocks to beat exam procrastination.",
      href: "/blog/pomodoro-technique-for-students",
      category: "Productivity",
      date: "July 11, 2026",
    },
    {
      title: "Spin Wheels for Decision Making: Settle Daily Choices Instantly",
      desc: "Stuck in a loop of indecision? Discover the psychology of letting a random selection wheel choose your lunch, movie, or daily task list.",
      href: "/blog/spin-wheels-for-decision-making",
      category: "Productivity",
      date: "July 10, 2026",
    },
    {
      title: "Spin Wheels in Modern Education: Gamified Learning Environments",
      desc: "Transform standard lectures into interactive games. Pick students, select quiz questions, and trigger brainstorm sessions with simple wheels.",
      href: "/blog/spin-wheels-in-modern-education",
      category: "Education",
      date: "July 09, 2026",
    },
    {
      title: "Time-Boxing to Prevent Burnout: Managing Work Stress",
      desc: "Stop overworking and start structuring your hours. Learn to implement timeboxing and recovery timer blocks for mental health and output.",
      href: "/blog/time-boxing-to-prevent-burnout",
      category: "Productivity",
      date: "July 08, 2026",
    },
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            GameWheelClub Articles
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Insights, Guides & Productivity Hacks
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Read expert tips on gamifying classrooms, implementing structured time-boxing, organizing social party games, and setting up decision spinners.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {articles.map((art) => (
            <div key={art.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-extrabold uppercase bg-retro-yellow text-retro-navy px-2.5 py-0.5 rounded border border-retro-navy">
                    {art.category}
                  </span>
                  <span className="text-xs font-bold opacity-60 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {art.date}
                  </span>
                </div>
                <h2 className="text-2xl font-black font-display mb-3 leading-tight hover:text-retro-orange transition-colors">
                  <Link href={art.href}>{art.title}</Link>
                </h2>
                <p className="text-sm opacity-80 mb-6 leading-relaxed">{art.desc}</p>
              </div>
              <Link
                href={art.href}
                className="w-full py-2.5 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Read Article <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      
    </>
  );
}
