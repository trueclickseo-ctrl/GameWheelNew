import Link from "next/link";
import { Briefcase, Sparkles } from "lucide-react";

export const metadata = {
  title: "Random Decision Tools for Business | GameWheelClub",
  description: "Improve meetings and team interactions with randomizers and timers. Settle presenter order, draft tasks, and host team icebreakers.",
};

export default function ForBusinessPage() {
  return (
    <>
      

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Briefcase className="w-4 h-4" />
            Corporate Productivity
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Random Choice Tools for Business
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Settle team meeting order, draft tasks, manage sprint blocks, and break the ice with quick digital utilities.
          </p>
        </section>

        <section className="neo-card p-8 bg-white dark:bg-retro-navy space-y-6">
          <h2 className="text-2xl font-black font-display flex items-center gap-2">
            <Sparkles className="text-retro-orange w-6 h-6" /> Make Meetings Interactive
          </h2>
          <div className="prose dark:prose-invert font-medium text-base space-y-4 leading-relaxed">
            <p>
              Productivity in business often gets bogged down by small decisions, like choosing who presents first during standup, or assigning chore tickets. Our core <strong>Decision Wheel</strong> provides a transparent, neutral resolution that teams respect.
            </p>
            <p>
              Additionally, many remote teams use our tools to break the ice during Zoom or Teams meetings. Set up a trivia topic selector or run a quick group trivia game.
            </p>
          </div>

          <h2 className="text-2xl font-black font-display pt-4">Business Meeting Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/timer/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Sprint Timer</span>
              <span className="text-xs font-semibold opacity-85">Keep brainstorming and meetings on schedule.</span>
            </Link>
            <Link href="/wheel-of-names/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Presenter Picker</span>
              <span className="text-xs font-semibold opacity-85">Pick meeting speakers randomly and fairly.</span>
            </Link>
            <Link href="/decision-wheel/" className="p-4 rounded neo-border hover:bg-cream/40 dark:hover:bg-slate-800 transition-colors flex flex-col justify-between">
              <span className="font-black text-lg block mb-1">Task Allocator</span>
              <span className="text-xs font-semibold opacity-85">Randomly distribute minor team chore tasks.</span>
            </Link>
          </div>

          <h2 className="text-2xl font-black font-display pt-4">Icebreaker Templates</h2>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/templates/party-games/party-trivia/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Team Trivia Topic Wheel
            </Link>
            <Link href="/templates/party-games/would-you-rather/" className="px-4 py-2 neo-btn bg-retro-yellow text-retro-navy text-sm">
              Would You Rather Spinner
            </Link>
          </div>
        </section>
      </main>

      
    </>
  );
}
