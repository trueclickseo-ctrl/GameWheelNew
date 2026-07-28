import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoinFlipper from "@/components/CoinFlipper";
import Link from "next/link";
import { Coins, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/flip-a-coin/",
  },
  title: "Flip a Coin | Online Heads or Tails Generator",
  description: "Flip a virtual coin online. A simple, instant heads or tails decision generator with 3D-inspired animations.",
};

export default function FlipACoinPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Coins className="w-4 h-4" />
            Heads or Tails
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Flip a Coin Online
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Can&apos;t settle a simple argument? Flip a virtual coin and let probability decide heads or tails instantly!
          </p>
        </section>

        <section className="mb-16">
          <CoinFlipper />
        </section>

        {/* Copy section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Coin Flipping Probability
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                The classic <strong>coin flip</strong> is the oldest method of resolving a binary decision. Mathematically, a fair coin flip offers a exact **50% probability** for Heads and a **50% probability** for Tails.
              </p>
              <p>
                Our generator uses a randomized rotation sequence to simulate the physics of a tossed coin, rendering the result completely transparently.
              </p>
              <p>
                For questions that require more than two options, try our customizable <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link> or the versatile <Link href="/decision-wheel/" className="text-retro-blue underline font-bold">Decision Wheel</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Why Use an Online Coin Flip?
            </h2>
            <ul className="space-y-3 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>No Physical Coin Needed:</strong> Settle disputes, make choices, or start games instantly from your phone or laptop.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Unbiased Decisions:</strong> Eliminate human error or biased coin tosses with our verified PRNG algorithms.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Quick Link:</strong> Bookmark this page for quick access during matches or team drafts.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
