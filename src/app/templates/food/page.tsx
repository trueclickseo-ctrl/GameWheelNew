import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Utensils, ChevronRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/templates/food/",
  },
  title: "Food & Dining Wheel Templates | GameWheelClub",
  description: "Browse free decision wheels for food, lunch choices, dessert spinners, and drink deciders. Settle your dining debates instantly.",
};

export default function FoodCategoryPage() {
  const templates = [
    { name: "Dinner Picker", href: "/templates/food/dinner-picker", desc: "Can't decide what to eat for dinner? Settle it instantly with a wheel spin." },
    { name: "Lunch Ideas", href: "/templates/food/lunch-ideas", desc: "Quick choices for quick lunches—sandwiches, salads, leftovers, wraps, or fast food." },
    { name: "Dessert Spinner", href: "/templates/food/dessert-spinner", desc: "Select a sweet treat—ice cream, cake, cookies, pie, or brownies." },
    { name: "Drink Decider", href: "/templates/food/drink-decider", desc: "Choose your next refreshment—water, coffee, tea, soda, or juice." },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <span className="text-retro-orange">Food</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Utensils className="w-4 h-4" />
            Dining Wheel Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Food & Dining Decision Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Settle the age-old debate of &quot;what should we eat?&quot; in seconds using our pre-built food spinners.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {templates.map((t) => (
            <div key={t.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{t.name}</h3>
                <p className="text-sm opacity-80 mb-6">{t.desc}</p>
              </div>
              <Link
                href={t.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5"
              >
                Open Template <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
