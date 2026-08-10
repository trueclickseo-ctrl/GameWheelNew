import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Users, Sparkles, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Random Name Picker Wheel | Spin the Wheel of Names",
  description: "Pick a random name out of a list. Perfect for teachers, raffles, games, and giveaways. Save names and spin to win instantly.",
};

export default function WheelOfNamesPage() {
  const defaultNames = ["Alice", "Bob", "Charlie", "Dave", "Eva", "Frank", "Grace"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Users className="w-4 h-4" />
            Classrooms, Giveaways & Games
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Random Name Picker Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Need to pick a student, choose a raffle winner, or select a random volunteer? Paste your list of names below and spin the wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={defaultNames} storageKey="gamewheelclub-names-wheel" />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              How to Use the Name Picker Wheel
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Our <strong>Wheel of Names</strong> is designed to be as fast as possible. Simply write down or paste your list of names into the editor textbox on the right. You can add one name per line.
              </p>
              <p>
                Once your list is set, click the central **SPIN** button. The wheel will rotate with a retro ticking sound effect and announce the randomly selected winner.
              </p>
              <p>
                Want to make another decision? Check out our <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or resolve quick queries with the <Link href="/yes-no-wheel/" className="text-retro-blue underline font-bold">Yes or No Wheel</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Perfect Use Cases
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Classroom Tools:</strong> Pick random students for questions, reading out loud, or forming group leaders fairly.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Raffles & Giveaways:</strong> Put all participant names into the wheel to choose a winner transparently.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Board Games:</strong> Determine who takes the first turn in your favorite game.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Internal Linking Quick Bar */}
        <section className="neo-card p-6 bg-retro-yellow text-retro-navy text-center my-8">
          <h3 className="font-extrabold text-lg mb-2">Try Our Other Choice Tools!</h3>
          <p className="text-sm font-semibold mb-4 opacity-90">We have custom generators for all kinds of decisions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/random-number-generator/" className="px-4 py-2 neo-btn bg-white hover:scale-105 transition-transform text-sm">
              Number Generator
            </Link>
            <Link href="/flip-a-coin/" className="px-4 py-2 neo-btn bg-white hover:scale-105 transition-transform text-sm">
              Flip a Coin
            </Link>
            <Link href="/dice-roller/" className="px-4 py-2 neo-btn bg-white hover:scale-105 transition-transform text-sm">
              Dice Roller
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
