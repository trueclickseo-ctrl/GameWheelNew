import NumberGenerator from "@/components/NumberGenerator";
import Link from "next/link";
import { Hash, Sparkles } from "lucide-react";

export const metadata = {
  title: "Random Number Generator | Quick RNG Tool",
  description: "Generate single or multiple random numbers in any custom range. Free, secure, and customizable random number picker.",
};

export default function NumberGeneratorPage() {
  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Hash className="w-4 h-4" />
            Quick Integer RNG
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Random Number Generator
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Pick random numbers instantly. Set your minimum and maximum limits, select the quantity, and generate!
          </p>
        </section>

        <section className="mb-16">
          <NumberGenerator />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Understanding Random Number Generation
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                A <strong>Random Number Generator (RNG)</strong> is a critical mathematical tool used across games, programming, statistics, and decision analysis. Our tool runs client-side to generate integers within your specific min and max boundaries.
              </p>
              <p>
                You can toggle **Allow Duplicates** if you want the generator to allow the same number to appear multiple times in your list.
              </p>
              <p>
                If you need visual randomizers, try rolling simulated dice with our <Link href="/dice-roller/" className="text-retro-blue underline font-bold">Dice Roller</Link> or pick names using the <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Popular Ranges to Try
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>1 to 10:</strong> Ideal for quick selections or voting rankings.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>1 to 100:</strong> The standard range for classroom percentages, raffles, and large list selectors.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Custom Ranges:</strong> Easily select negative bounds or large numbers up to millions.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
