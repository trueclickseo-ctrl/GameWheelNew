import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Drink Decider Wheel | What Should I Drink?",
  description: "Spin the drink picker wheel preloaded with refreshments: Water, Coffee, Tea, Soda, Juice, and Smoothies.",
};

export default function DrinkDeciderPage() {
  const options = ["Water", "Coffee", "Tea", "Soda", "Juice", "Smoothie", "Energy Drink", "Iced Tea"];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/food/" className="hover:text-retro-orange">Food</Link>
          <span>/</span>
          <span className="text-retro-orange">Drink Decider</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Drink Decider Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Need a refreshment but can&apos;t pick between caffeine, hydration, or juice? Spin the drink wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-drink-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Hydration & Caffeine Selections</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                From choosing between hot tea or iced coffee in the morning to picking a soda at the soda fountain, deciding on a beverage happens multiple times a day.
              </p>
              <p>
                The <strong>Drink Decider Wheel</strong> is a simple utility to pick your next cup. It includes balanced options to promote hydration (like water) while keeping coffee and smoothies on the table.
              </p>
              <p>
                For other randomized selection games, try the <Link href="/dice-roller/" className="text-retro-orange underline font-bold">Dice Roller</Link> or pick names using our <Link href="/wheel-of-names/" className="text-retro-blue underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Beverage Party Games</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Customize the slices for your next event or gather:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Add party mocktail and cocktail names.</li>
              <li>Include specific soda flavors.</li>
              <li>Use the wheel to pick who buys the next round!</li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
