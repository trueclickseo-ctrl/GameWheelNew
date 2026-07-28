import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/templates/classroom/brain-break/",
  },
  title: "Classroom Brain Break Wheel | Student Exercise Ideas",
  description: "Spin the Brain Break wheel to choose quick exercises for students: Stretch, Jumping Jacks, Deep Breaths, Dance, or Doodle.",
};

export default function BrainBreakPage() {
  const options = ["Stretch", "Jumping Jacks", "Deep Breaths", "Dance Party", "Doodle Time", "Water Break"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/classroom/" className="hover:text-retro-orange">Classroom</Link>
          <span>/</span>
          <span className="text-retro-orange">Brain Break</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Classroom Brain Break Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Help students refocus and recharge their energy during long lessons. Spin for a quick activity!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-brain-break" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Re-energize the Classroom</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Concentration levels drop after 30-40 minutes of quiet work, especially for younger learners. A <strong>brain break</strong> is a short 2-3 minute mental and physical transition that helps clear stress.
              </p>
              <p>
                Slices include simple actions: stretching, deep breaths, water breaks, or a quick dance party. Spin to pick one randomly to add anticipation.
              </p>
              <p>
                To track the duration of your breaks, pair this with our <Link href="/timer/" className="text-retro-orange underline font-bold">Timer</Link> tool, or roll dice using the <Link href="/dice-roller/" className="text-retro-blue underline font-bold">Dice Roller</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Fun Brain Break Ideas</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Customize the slices on the right side of the editor to suit your classroom space:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Add desk yoga or simple stretches.</li>
              <li>Include mental exercises like riddles or quick trivia.</li>
              <li>Use the wheel to pick student leaders for the exercise!</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
