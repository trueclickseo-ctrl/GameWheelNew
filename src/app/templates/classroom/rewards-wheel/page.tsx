import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Classroom Rewards Wheel | Random Reward Ideas Selector",
  description: "Spin the Rewards wheel to pick random prizes for students: Free Time, Stickers, Line Leader Choice, or No Homework passes.",
};

export default function RewardsWheelPage() {
  const options = ["5 Mins Free Time", "Sticker Choice", "Choose Seat", "Line Leader", "No Homework Pass", "Pick from Prize Box"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/classroom/" className="hover:text-retro-orange">Classroom</Link>
          <span>/</span>
          <span className="text-retro-orange">Rewards Wheel</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Classroom Rewards Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Motivate your students. Spin the reward wheel to randomly choose a prize or classroom privilege!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-classroom-rewards" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Positive Reinforcement</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                A <strong>Rewards Wheel</strong> introduces gamification and excitement to classroom incentive programs. When students earn rewards for good behavior or scoring high on quizzes, letting them spin the wheel for a prize is highly motivating.
              </p>
              <p>
                Our pre-built rewards include simple privileges that don&apos;t cost money, like being the line leader, choosing a seat for the day, or earning free study time.
              </p>
              <p>
                To pick which student gets to spin, try the <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link> or resolve quick binary prompts with the <Link href="/yes-no-wheel/" className="text-retro-blue underline font-bold">Yes or No Wheel</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Custom Incentive Lists</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Adjust the rewards to suit your grade level and school guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Input tangibles like candy or homework passes.</li>
              <li>Include classroom roles (e.g. board eraser, plant waterer).</li>
              <li>Set timed rewards using our <Link href="/timer/" className="text-retro-orange underline font-bold">Timer</Link> tool.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
