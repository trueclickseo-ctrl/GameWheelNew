import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Dessert Choice Wheel | Random Sweet Treats Picker",
  description: "Can't decide on dessert? Spin the sweet treats wheel preloaded with Ice Cream, Cake, Cookies, Pie, Brownies, and Fruit.",
};

export default function DessertSpinnerPage() {
  const options = ["Ice Cream", "Cake", "Cookies", "Pie", "Brownies", "Fruit", "Donuts", "Pudding"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/food/" className="hover:text-retro-orange">Food</Link>
          <span>/</span>
          <span className="text-retro-orange">Dessert Spinner</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Dessert Spinner Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Choose your next sweet treat without the guilt of choosing. Spin the dessert wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-dessert-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">A Sweet Resolution</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                From picking a flavor at the bakery counter to choosing between chocolate cake and fruit salad, dessert decisions are always fun but sometimes paralyzing.
              </p>
              <p>
                Our <strong>Dessert Spinner Wheel</strong> makes treat time even more enjoyable by introducing an element of surprise. Spin the wheel to decide between ice cream, cake, pie, and cookies.
              </p>
              <p>
                For larger lists, try customizing our <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or resolve quick binary prompts with the <Link href="/yes-no-wheel/" className="text-retro-blue underline font-bold">Yes or No Wheel</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Bakery & Party Ideas</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Use this wheel to select desserts for family birthday planning, bakery menus, or school bake sales:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Input flavor options (e.g. vanilla, chocolate, strawberry).</li>
              <li>Settle who makes or buys the cake.</li>
              <li>Decide which cookie recipe to bake next.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
