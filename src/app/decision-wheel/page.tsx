import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/decision-wheel/",
  },
  title: "Random Decision Wheel | Spin the Wheel of Choice",
  description: "Input your custom choices, spin the decision wheel, and resolve options instantly. Completely free, customizable, and unbiased choice maker.",
};

export default function DecisionWheelPage() {
  const defaultChoices = [
    "Yes",
    "No",
    "Maybe",
    "Ask a Friend",
    "Spin Again",
    "Sleep On It",
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Random Decision Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Can&apos;t choose between dinner options, vacation spots, or work projects? Customize the slices and spin!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={defaultChoices} storageKey="gamewheelclub-decision-wheel" />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Defeating Decision Paralysis
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                A <strong>decision wheel</strong> is the ultimate choice generator. It works by converting options into geometric slices of a circle, where each slice has a mathematically equal chance of winning.
              </p>
              <p>
                By leaving your final option to the spin of a wheel, you can overcome decision paralysis. Our tool works entirely in your browser, meaning it is fast and secure.
              </p>
              <p>
                For binary choices, you can use our dedicated <Link href="/yes-no-wheel/" className="text-retro-orange underline font-bold">Yes or No Wheel</Link>, or flip a coin with <Link href="/flip-a-coin/" className="text-retro-blue underline font-bold">Flip a Coin</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Decisions to Spin For
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>What to Eat:</strong> Pizza, Tacos, Sushi, Burgers, or Salad. Let the wheel pick dinner.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>What to Watch:</strong> Action, Comedy, Sci-Fi, Horror, or Documentary. Settle movie night.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Task Order:</strong> List your tasks and let the wheel decide which one you tackle first!</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
