import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiceRoller from "@/components/DiceRoller";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/dice-roller/",
  },
  title: "Dice Roller | Roll Virtual Dice Online",
  description: "Roll 1, 2, or 3 virtual dice instantly. Perfect for board games, statistics, probability lessons, and random decisions.",
};

export default function DiceRollerPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Virtual Dice Roller
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Lost your board game dice? Roll up to three virtual dice with realistic dot layouts and animations.
          </p>
        </section>

        <section className="mb-16">
          <DiceRoller />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Dice Rolling & Probability
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                A standard six-sided die (D6) has six equal faces numbered 1 through 6. The probability of rolling any single number is exactly **1 in 6** (or ~16.67%).
              </p>
              <p>
                When rolling multiple dice, the sum distribution forms a bell curve. For example, rolling two dice has a peak probability of rolling a **7** (16.67% chance) because it has the most combinations (1+6, 2+5, 3+4, etc.).
              </p>
              <p>
                Need to generate larger random integers? Check out our <Link href="/random-number-generator/" className="text-retro-orange underline font-bold">Number Generator</Link> or pick names with the <Link href="/wheel-of-names/" className="text-retro-blue underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Perfect for Board Games
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Monopoly & Settlers:</strong> Roll two dice to move or collect resources without searching for physical dice.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Role-Playing Games:</strong> Use D6 rolls for stats or simple action resolution.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Math Education:</strong> Great visual aid for teaching probability and sums in school class settings.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
