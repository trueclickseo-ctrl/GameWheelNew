import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import Link from "next/link";
import { Timer, Sparkles } from "lucide-react";

export const metadata = {
  title: "Online Timer | Free Countdown Timer",
  description: "Set minutes and seconds for any countdown. Free, beautiful, and accessible online timer with alarm alerts.",
};

export default function TimerPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Timer className="w-4 h-4" />
            Precise Countdown
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Online Countdown Timer
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Set custom countdown times for study sessions, meetings, or games, and receive a clear audio alarm upon completion.
          </p>
        </section>

        <section className="mb-16">
          <CountdownTimer />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Increase Productivity & Focus
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Using a <strong>countdown timer</strong> is an excellent way to apply time-boxing methods like the Pomodoro Technique (usually 25 minutes of work followed by a 5-minute break).
              </p>
              <p>
                Our timer is designed with a clear, high-contrast digital display, making it visible from across a classroom or meeting room.
              </p>
              <p>
                If you need to make random choices while timing, try spinning the <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or pick names using the <Link href="/wheel-of-names/" className="text-retro-blue underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Ideal Scenarios for Timing
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Study & Work Blocks:</strong> Lock in focus sessions with automated visual count downs.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Classroom Management:</strong> Keep tests, quizzes, or group exercises strictly within time frames.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Workouts & Kitchen:</strong> Simple, visual timer for planks, baking, or tea brewing.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
