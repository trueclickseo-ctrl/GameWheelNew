import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Food Decider & Dinner Wheel Spinners | SpinVerse",
  description: "Can't agree on lunch, dinner, or snacks? Spin the Food Wheels to pick a random restaurant type, fast food chain, sweet dessert, or healthy snack.",
};

export default function foodwheelsHubPage() {
  const wheels = [
    { name: "What to Eat Wheel", href: "/food-wheels/what-to-eat/", desc: "Solve the dinner debate instantly by picking a random food cuisine." },
    { name: "Fast Food Restaurants Wheel", href: "/food-wheels/fast-food-restaurants/", desc: "Spin to pick between popular fast-food chains for a quick lunch." },
    { name: "Snacks Wheel", href: "/food-wheels/snacks/", desc: "Select a random healthy snack or salty chip bag." },
    { name: "Dessert Wheel", href: "/food-wheels/dessert/", desc: "Spin for a sweet treat idea. Covers cakes, pies, and baked cookies." },
    { name: "Fruit Wheel", href: "/food-wheels/fruit/", desc: "Spin to choose a healthy piece of fruit to eat." }
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Food Wheels</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Food Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Can't agree on lunch, dinner, or snacks? Spin the Food Wheels to pick a random restaurant type, fast food chain, sweet dessert, or healthy snack.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {wheels.map((w) => (
            <div key={w.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{w.name}</h3>
                <p className="text-sm opacity-80 mb-6">{w.desc}</p>
              </div>
              <Link
                href={w.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Launch Wheel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      
    </>
  );
}
