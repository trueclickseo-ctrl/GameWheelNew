import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { HelpCircle, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/yes-no-wheel/",
  },
  title: "Yes or No Wheel | Spin for Instant Answers",
  description: "Spin the Yes or No wheel for instant, unbiased answers to any question. Free, interactive, and fast decision picker.",
};

export default function YesNoWheelPage() {
  const defaultYesNo = ["Yes", "No", "Yes", "No", "Yes", "No"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            Instant Binary Choice
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Yes or No Wheel Spinner
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Ask a question, spin the wheel, and get an instant, unbiased Yes or No answer!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={defaultYesNo} storageKey="gamewheelclub-yes-no-wheel" />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Making Fast Binary Decisions
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Should you buy that new book? Should you go for a walk today? When a decision is binary, the <strong>Yes or No Wheel</strong> helps you make a choice instantly.
              </p>
              <p>
                Our wheel is configured with repeating Yes and No options to provide a balanced visual representation while maintaining a perfect **50/50 probability** split.
              </p>
              <p>
                If you prefer a coin flip, check out our virtual <Link href="/flip-a-coin/" className="text-retro-blue underline font-bold">Flip a Coin</Link> tool, or construct multi-option boards with the <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              How to Interpret the Result
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Trust Your Gut:</strong> If the wheel lands on &quot;No&quot; and you feel disappointed, it means your subconscious actually wanted &quot;Yes&quot;. Use the wheel to find what you truly want!</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Fun & Games:</strong> Settle playful questions and challenge friends to quick tasks.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Completely Unbiased:</strong> Powered by a secure browser-based generator for transparency.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
