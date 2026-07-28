import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, ChevronRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/templates/classroom/",
  },
  title: "Classroom Wheel Templates | GameWheelClub",
  description: "Browse free decision wheels for teachers. Pick random student groups, subjects, rewards, or classroom brain break exercises.",
};

export default function ClassroomCategoryPage() {
  const templates = [
    { name: "Student Grouping", href: "/templates/classroom/student-grouping", desc: "Instantly pick a group or team randomly (Group A, Group B, Group C, etc.)." },
    { name: "Rewards Wheel", href: "/templates/classroom/rewards-wheel", desc: "Select random rewards for students: free time, stickers, line leader choice, etc." },
    { name: "Subject Picker", href: "/templates/classroom/subject-picker", desc: "Pick the next study topic—Math, Science, English, History, Art, or Music." },
    { name: "Brain Break", href: "/templates/classroom/brain-break", desc: "Get students moving with random break ideas: stretching, jumping jacks, or doodling." },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <span className="text-retro-orange">Classroom</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            Teacher Wheel Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Classroom & Teaching Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Tools designed specifically for educators to randomize participation, reward student achievements, and direct subject blocks.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {templates.map((t) => (
            <div key={t.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{t.name}</h3>
                <p className="text-sm opacity-80 mb-6">{t.desc}</p>
              </div>
              <Link
                href={t.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5"
              >
                Open Template <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
