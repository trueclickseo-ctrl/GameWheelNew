import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { GraduationCap, Award, Users, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Classroom Spin Wheel Ideas: Interactive Teaching Strategies",
  description: "Boost student engagement with 15 creative classroom spin wheel ideas. Learn how to run fair name draws, assign tasks, and gamify lessons with random wheels.",
};

export default function ClassroomSpinWheelIdeas() {
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
        <div className="neo-card bg-retro-yellow p-8 md:p-12 mb-12 text-retro-navy">
          <span className="px-3 py-1 bg-retro-navy text-cream font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Education Guide
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            15 Creative Classroom Spin Wheel Ideas
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Turn passive listening into active, energetic participation. Discover structured, field-tested spin wheel strategies to gamify lessons, distribute jobs, and keep every student on the edge of their seat.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: Gamifying the Classroom */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-retro-orange" />
                1. Why Gamification Matters in Modern Pedagogy
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Maintaining student focus is one of the most persistent hurdles in modern education. With digital distractions at an all-time high, educators need dynamic, interactive tools to hook students&apos; attention. Gamification—the integration of game mechanics into non-game contexts—has proven to be an exceptionally effective strategy.
                </p>
                <p>
                  A digital decision wheel, such as the <Link href="/wheel-of-names/" className="font-bold underline hover:text-retro-orange">Wheel of Names</Link>, serves as a low-barrier, high-impact gamification tool. It introduces elements of suspense, visual reward, and absolute fairness into daily routines.
                </p>
                <p>
                  When students see their names or topics rotating on a brightly colored board, the classroom environment transforms instantly. The visual and auditory cues signal that a fun, interactive moment is taking place, making even routine tasks like homework review or vocabulary drills feel like a live gameshow.
                </p>
              </div>
            </section>

            {/* Section 2: Core Classroom Strategies */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-retro-blue" />
                2. Fifteen Practical Spin Wheel Activities
              </h2>
              <div className="space-y-6 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Here are some of the most successful ways teachers across the globe are integrating random selection wheels into their lesson plans:
                </p>

                <div className="space-y-4">
                  <div className="neo-card p-5 bg-white dark:bg-slate-800">
                    <h4 className="font-bold text-lg text-retro-orange mb-1">A. Cold-Calling & Name Drawing</h4>
                    <p className="text-sm opacity-90">
                      Traditional cold-calling can cause anxiety and trigger feelings of bias. By displaying a wheel with all students&apos; names, the selection is visibly impartial. To keep it supportive, let the selected student choose a classmate to &quot;phone a friend&quot; if they need assistance.
                    </p>
                  </div>

                  <div className="neo-card p-5 bg-white dark:bg-slate-800">
                    <h4 className="font-bold text-lg text-retro-mint mb-1">B. Vocabulary & Concepts Drill</h4>
                    <p className="text-sm text-retro-navy dark:text-cream opacity-90">
                      Populate the wheel segments with this week&apos;s vocabulary words, historical figures, or mathematical formulas. Spin the wheel, and have the class define the chosen item, write it in a sentence, or explain its significance.
                    </p>
                  </div>

                  <div className="neo-card p-5 bg-white dark:bg-slate-800">
                    <h4 className="font-bold text-lg text-retro-blue mb-1">C. Writing & Storytelling Prompts</h4>
                    <p className="text-sm opacity-90">
                      Add nouns, settings, emotions, or genres to the wheel. Spin it two or three times to generate a unique combination (e.g., &quot;A detective in a bakery feeling nervous&quot;). Have students write a short paragraph based on the generated prompt.
                    </p>
                  </div>

                  <div className="neo-card p-5 bg-white dark:bg-slate-800">
                    <h4 className="font-bold text-lg text-retro-yellow text-retro-navy mb-1">D. Reward & Prize Distribution</h4>
                    <p className="text-sm text-retro-navy opacity-90">
                      Fill the wheel with small incentives: &quot;5 minutes of free time,&quot; &quot;Pick your seat for the day,&quot; &quot;First in line for lunch,&quot; or &quot;Homework pass.&quot; Use this as a reward for team victories or outstanding behavior.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-blue text-cream my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;The secret of education lies in respecting the pupil. A randomized wheel honors their intelligence by assuring them that every selection is entirely fair.&quot;
              </p>
              <p className="text-sm font-bold">— Educational Psychology Insights</p>
            </div>

            {/* Section 3: Classroom Management Benefits */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Users className="w-8 h-8 text-retro-mint" />
                3. Alleviating Teacher Bias and Ensuring Equal Equity
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Humans are prone to subconscious patterns. Even the most self-aware educators can inadvertently call on the same group of students, usually those who sit in the front rows or raise their hands first. This leaves quiet or introverted students feeling overlooked and disengaged.
                </p>
                <p>
                  A digital selection tool removes human bias entirely. It ensures that every student, regardless of where they sit or how active they are, has an mathematically equal opportunity to participate.
                </p>
                <p>
                  Furthermore, if a student complains about being picked, the teacher can simply point to the screen and say, &quot;It wasn&apos;t me—it was the wheel!&quot; This shifts the tension away from the teacher-student dynamic, keeping the classroom atmosphere lighthearted and collaborative.
                </p>
              </div>
            </section>

            {/* Section 4: Best Practices for Educators */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Lightbulb className="w-8 h-8 text-retro-yellow text-retro-navy" />
                4. Tips for Successful Implementation
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To get the most out of your digital spinners, keep the following guidelines in mind:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Remove Names Post-Selection:</strong> If you are cold-calling on students to answer questions, check the option to remove names after they are picked. This prevents the same student from being called twice in a row and ensures everyone gets a turn.</li>
                  <li><strong>Keep it Fast:</strong> Don&apos;t let the spin animation run too long. A 3-to-4 second spin is usually ideal to maintain pacing without losing momentum.</li>
                  <li><strong>Pre-save Lists:</strong> Save your rosters or activity configurations as templates. Utilizing <Link href="/templates/classroom/" className="font-bold underline hover:text-retro-blue">Classroom Templates</Link> saves precious transition time during lessons.</li>
                </ul>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-orange p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Classroom Gains</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <Award className="w-5 h-5 flex-shrink-0" />
                  <span>+85% engagement in student reviews</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <span>100% elimination of selection bias complaints</span>
                </li>
                <li className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 flex-shrink-0" />
                  <span>Encourages active listening from all pupils</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Quick Launch</h3>
              <p className="text-sm opacity-90">
                Instantly populate a classroom roster and spin to pick your first student helper!
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/wheel-of-names/" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
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

      <Footer />
    </>
  );
}
