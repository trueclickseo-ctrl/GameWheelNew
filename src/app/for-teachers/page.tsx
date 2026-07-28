import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/for-teachers/",
  },
  title: "Random Decision Tools for Teachers | GameWheelClub",
  description: "Discover free spin wheels and timer tools for classroom management. Choose random students, pick subjects, and award privileges fairly.",
};

export default function ForTeachersPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            Classroom Organization
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Random Choice Tools for Teachers
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Gamify your lessons and make participation 100% fair. Spin random wheels to pick volunteers, assign group teams, and select lesson topics.
          </p>
        </section>

        <section className="neo-card p-8 bg-white dark:bg-retro-navy space-y-6">
          <h2 className="text-2xl font-black font-display flex items-center gap-2">
            <Sparkles className="text-retro-orange w-6 h-6" /> Why Teachers Love GameWheelClub
          </h2>
          <div className="prose dark:prose-invert font-medium text-base space-y-4 leading-relaxed">
            <p>
              In busy classrooms, keeping students engaged and motivated is a constant challenge. When teachers manually pick volunteers, students sometimes feel the selection is biased. By delegating selections to an interactive digital <strong>Name Picker Wheel</strong>, you make volunteer calls exciting and fair.
            </p>
            <p>
              Additionally, our tools are built to load instantly with zero cookies or sign-up walls. A teacher in the middle of a class can type options and hit spin in under 10 seconds.
            </p>
          </div>

          <h2 className="text-2xl font-black font-display pt-4">Essential Classroom Templates</h2>
          <p className="font-semibold text-sm opacity-90 mb-4">
            Skip the setup. Use our custom teacher-designed templates to start your class instantly:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/templates/classroom/rewards-wheel/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Rewards Selector</span>
              <span className="text-xs font-semibold opacity-85">Give students privileges like seat choice or extra recess.</span>
            </Link>
            <Link href="/templates/classroom/student-grouping/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Student Grouping Wheel</span>
              <span className="text-xs font-semibold opacity-85">Instantly split classrooms into fair project teams.</span>
            </Link>
            <Link href="/templates/classroom/subject-picker/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Subject Picker Wheel</span>
              <span className="text-xs font-semibold opacity-85">Choose which study block to focus on next.</span>
            </Link>
            <Link href="/templates/classroom/brain-break/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Brain Break Spinner</span>
              <span className="text-xs font-semibold opacity-85">Get students moving with random exercise break ideas.</span>
            </Link>
          </div>

          <h2 className="text-2xl font-black font-display pt-4">More Utility Tools</h2>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/wheel-of-names/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Custom Name Picker
            </Link>
            <Link href="/timer/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Classroom Timer
            </Link>
            <Link href="/random-number-generator/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Math RNG
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
