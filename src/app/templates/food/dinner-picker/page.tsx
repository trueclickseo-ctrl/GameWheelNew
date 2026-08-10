import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Dinner Picker Wheel | What Should I Eat for Dinner?",
  description: "Settle the dinner debate instantly. Spin the dinner wheel preloaded with popular meal options: Pizza, Tacos, Burgers, Pasta, Salad, and Chinese.",
};

export default function DinnerPickerPage() {
  const options = ["Pizza", "Tacos", "Burgers", "Pasta", "Salad", "Chinese", "Sushi", "Steak"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/food/" className="hover:text-retro-orange">Food</Link>
          <span>/</span>
          <span className="text-retro-orange">Dinner Picker</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Dinner Picker Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Stuck deciding on dinner? Eliminate food arguments. Spin the wheel to select a meal option instantly.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-dinner-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">What Should We Have for Dinner?</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Decision fatigue often hits hardest at the end of the day. Deciding what to make or order for dinner can lead to circular conversations and unnecessary debate.
              </p>
              <p>
                Our <strong>Dinner Picker Wheel</strong> takes the effort out of meal planning. By preloading standard favorites like pizza, sushi, and tacos, the spinner provides a quick, unbiased outcome. If someone complains about the winning selection, it immediately reveals what they *actually* wanted to eat instead!
              </p>
              <p>
                Want to make a completely custom decision? Navigate to our core <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or pick names for chores using the <Link href="/wheel-of-names/" className="text-retro-blue underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Customizing Your Dinner Wheel</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Everyone has different tastes and dietary needs. You can easily adjust the meal slices on the right side of the wheel editor:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Add local restaurant favorites.</li>
              <li>Include specific home-cooked meals (e.g. lasagna, stir-fry).</li>
              <li>Toggle sound cues or save lists in your browser storage for future meal decisions.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
