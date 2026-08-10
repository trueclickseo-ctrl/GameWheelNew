import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Lunch Decision Wheel | Quick Lunch Ideas Selector",
  description: "Spin to select a quick lunch meal: Sandwiches, Salads, Leftovers, Soup, Wraps, or Fast Food. Settle your lunch break menu instantly.",
};

export default function LunchIdeasPage() {
  const options = ["Sandwich", "Salad", "Leftovers", "Soup", "Wrap", "Fast Food", "Noodles", "Burrito"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/food/" className="hover:text-retro-orange">Food</Link>
          <span>/</span>
          <span className="text-retro-orange">Lunch Ideas</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Lunch Ideas Decision Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Stuck in the middle of a busy workday or study session trying to pick lunch? Let the wheel decide your menu.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-lunch-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Fast Midday Selections</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Unlike dinner, lunch needs to be quick, convenient, and fit within a short break window. Yet, we still spend too much time scrolling through delivery apps or staring at the fridge.
              </p>
              <p>
                Our <strong>Lunch Ideas Wheel</strong> is pre-populated with standard quick options like sandwiches, leftovers, wraps, and salads. It helps busy office workers and students make decisions fast so they can focus on eating and relaxing.
              </p>
              <p>
                For binary choices, you can also spin our <Link href="/yes-no-wheel/" className="text-retro-orange underline font-bold">Yes or No Wheel</Link> or flip a coin on <Link href="/flip-a-coin/" className="text-retro-blue underline font-bold">Flip a Coin</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Settle Group Lunch Debates</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Ordering lunch with coworkers or teammates? Put all local spots into the list and spin:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Include dietary-restricted locations (vegan, gluten-free).</li>
              <li>Add restaurant names around your office block.</li>
              <li>Input options for who goes out to pick up the orders!</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
