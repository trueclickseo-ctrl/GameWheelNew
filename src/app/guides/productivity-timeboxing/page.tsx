import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Zap, Target, BookOpen, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Productivity Timeboxing: The Ultimate Guide to Time Blocks",
  description: "Learn how to use timeboxing and Pomodoro techniques to boost focus. Combat Parkinson's Law with structured timer sessions and randomized task execution.",
};

export default function ProductivityTimeboxing() {
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
        <div className="neo-card bg-retro-orange p-8 md:p-12 mb-12 text-cream">
          <span className="px-3 py-1 bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            High Performance
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            Timeboxing: Conquer Distractions with Strict Limits
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Why does a task take three hours when you are given a three-hour deadline, but only thirty minutes when you are pressed for time? Discover how to leverage Parkinson&apos;s Law and gamified timer systems to reclaim control over your day.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: The Philosophy of Timeboxing */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Clock className="w-8 h-8 text-retro-orange" />
                1. Parkinson&apos;s Law and the Mechanics of Timeboxing
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  In 1955, historian Cyril Northcote Parkinson formulated what is now known as Parkinson&apos;s Law: <em>&quot;Work expands so as to fill the time available for its completion.&quot;</em> If you allocate an entire Sunday to writing a single email, you will spend all day researching, drafting, second-guessing, and editing. However, if you are forced to send it before catching a flight in 15 minutes, you will write a clear, concise, and effective draft in a fraction of the time.
                </p>
                <p>
                  Timeboxing is a productivity method that turns Parkinson&apos;s Law into an advantage. Instead of working on a task until it is completed, you allocate a fixed, inflexible block of time—a &quot;timebox&quot;—to that specific task. When the timebox expires, you stop immediately, review your progress, and transition to the next block.
                </p>
                <p>
                  This framework creates a healthy level of urgency. It stops you from over-polishing details, encourages you to ignore minor distractions, and forces you to focus on the core value of your project. Using a reliable countdown tool like our client-side <Link href="/timer/" className="font-bold underline hover:text-retro-orange">Timer</Link> makes these timeboxes visual and binding.
                </p>
              </div>
            </section>

            {/* Section 2: Pomodoro and Beyond */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Target className="w-8 h-8 text-retro-blue" />
                2. Structuring Your Blocks: The Pomodoro Integration
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  The most popular variant of timeboxing is the Pomodoro Technique, developed by Francesco Cirillo in the late 1980s. This method breaks work down into structured intervals separated by short breaks:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>The Pomodoro Block:</strong> Work with deep focus for exactly 25 minutes. No checking emails, no social media, no interruptions.</li>
                  <li><strong>The Short Break:</strong> Rest for 5 minutes. Walk, stretch, or grab a glass of water. Do not look at work.</li>
                  <li><strong>The Cycle:</strong> Repeat the process four times. After the fourth session, take a longer 15-to-30 minute break to reset your mental stamina.</li>
                </ul>
                <p>
                  This rhythm aligns with our ultradian cycles—natural energy cycles our bodies move through every 90 to 120 minutes. By resting before fatigue sets in, you maintain a high level of performance throughout the day, preventing afternoon crashes.
                </p>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-mint text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;Timeboxing is my single most effective productivity tool. It forces me to decide what counts, and to execute without hesitation.&quot;
              </p>
              <p className="text-sm font-bold">— Productivity Systems Coach</p>
            </div>

            {/* Section 3: Gamifying Your Task List */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Zap className="w-8 h-8 text-retro-mint" />
                3. Gamifying Your Tasks with Random Selection
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  When facing a long list of tasks, starting can be the hardest part. Procrastination is often fueled by the friction of choosing what to work on first.
                </p>
                <p>
                  You can bypass this initial friction by gamifying your list. Enter your tasks into a spinner wheel, click spin, and let the wheel select your first focus block. By committing to work on whatever the wheel chooses for just one Pomodoro cycle, you overcome the initial inertia of starting.
                </p>
                <p>
                  This strategy is highly effective in classrooms, home offices, and collaborative sprint planning. Utilizing pre-saved boards like <Link href="/templates/classroom/" className="font-bold underline hover:text-retro-blue">Classroom Templates</Link> allows teachers and teams to pick subjects, tasks, or presenters in a fun, high-energy format.
                </p>
              </div>
            </section>

            {/* Section 4: Implementation Tips */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-retro-yellow text-retro-navy" />
                4. Best Practices for Timeboxing Success
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To get the most out of your timeboxed schedule, apply these three core rules:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li><strong>Respect the Timer:</strong> When the buzzer sounds, stop. Overrunning into breaks teaches your brain that the limits are optional, destroying the sense of urgency.</li>
                  <li><strong>Build in Buffer Time:</strong> Do not schedule timeboxes back-to-back all day. Leave 30-60 minutes of unallocated buffer time to handle urgent emails, unexpected phone calls, or tasks that ran long.</li>
                  <li><strong>Minimize Friction:</strong> Set up your physical and digital workspaces before starting the timer. Close unnecessary browser tabs, put your phone on do-not-disturb, and keep your tools ready.</li>
                </ol>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-yellow text-retro-navy p-6">
              <h3 className="font-display font-black text-2xl mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" /> Time Auditing
              </h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>25 min focus + 5 min rest matches human ultradian cycles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-5 h-5 flex-shrink-0" />
                  <span>Reduces procrastination by up to 60%</span>
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-5 h-5 flex-shrink-0" />
                  <span>Prevents perfectionism and over-polishing of tasks</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Start Focus Session</h3>
              <p className="text-sm opacity-90">
                Ready to block out distractions? Spin a task and kick off your countdown timer right now!
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/timer/" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Timer Tool <ArrowRight className="w-4 h-4" />
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
