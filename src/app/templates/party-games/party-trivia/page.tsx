import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Party Trivia Topic Wheel | Random Quiz Categories",
  description: "Spin the Trivia wheel to pick random quiz topics: Science, Pop Culture, History, Sports, and Geography. Perfect for game nights.",
};

export default function PartyTriviaPage() {
  const options = ["Science", "Pop Culture", "History", "Sports", "Geography", "Literature", "Music", "Wild Card"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/party-games/" className="hover:text-retro-orange">Party Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Party Trivia</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Party Trivia Category Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Settle which category to play next during family quiz nights. Spin the trivia wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-trivia-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Unbiased Quiz Selection</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                <strong>Trivia nights</strong> are highly competitive, and teams often argue over category choices. A team of history majors will always lobby for history, while movie buffs want pop culture.
              </p>
              <p>
                A randomized category spinner wheel keeps the game fair and unbiased. Slices represent distinct subjects like science, geography, literature, and music.
              </p>
              <p>
                For generating random scores or team numbers, check out the <Link href="/random-number-generator/" className="text-retro-orange underline font-bold">Number Generator</Link> or pick team sizes with <Link href="/dice-roller/" className="text-retro-blue underline font-bold">Dice Roller</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Custom Quiz Rules</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Make trivia matches more challenging by adjusting the slices:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Add custom categories specific to your group.</li>
              <li>Include specialized &quot;Double Points&quot; or &quot;Lose a Turn&quot; slices.</li>
              <li>Limit answering times using our <Link href="/timer/" className="text-retro-orange underline font-bold">Timer</Link>.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
