"use client";

import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { ArrowLeft, Play, Sparkles, HelpCircle } from "lucide-react";

export default function CountryRoulettePage() {

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/geography-wheels/" className="hover:text-retro-orange">Geography Wheels</Link>
          <span>/</span>
          <span className="text-retro-orange">64 Country Roulette</span>
        </div>

        {/* Back Link */}
        <Link
          href="/geography-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Geography Wheels
        </Link>

        
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive Preset
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            "64 Country Roulette"
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            "The ultimate 64-country roulette wheel for gaming challenges and brackets."
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={["USA","Canada","Mexico","Brazil","Argentina","UK","France","Germany","Italy","Spain","Russia","Egypt","South Africa","Nigeria","Kenya","India","China","Japan","South Korea","Australia","New Zealand","Saudi Arabia","Turkey","Greece","Sweden","Norway","Netherlands","Switzerland","Poland","Ukraine","Vietnam","Thailand","Indonesia","Philippines","Colombia","Peru","Chile","Venezuela","Morocco","Ghana","Ethiopia","Pakistan","Bangladesh","Iran","Iraq","Israel","Singapore","Malaysia","New Zealand","Portugal","Austria","Denmark","Finland","Ireland","Belgium","Czechia","Hungary","Romania","Cuba","Jamaica","Costa Rica","Panama","Ecuador","Bolivia"]} storageKey="spinverse-geography-wheels-64-country-roulette" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the 64 Country Roulette?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                "Spin the massive 64-country roulette. Ideal for running international gaming challenge filters, FIFA drafts, or global trivia games."
              </p>
              <p>
                This spinner is preloaded with popular options to get you started. If you want to customize the list, or narrow it down to just your personal choices, you can easily add, remove, or edit options right in the spinner menu.
              </p>
              <p>
                Explore other tools in this category such as [Country Wheel Spinner](/geography-wheels/country-wheel/), [US States Wheel](/geography-wheels/us-states/), [Europe Countries Wheel](/geography-wheels/europe-countries/) or check out the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Hub</Link> directory.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              How to Play & Use Cases
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Play className="w-5 h-5 flex-shrink-0" />
                  Instant Decisions
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin the dial, get an instant outcome, and remove analysis paralysis from your day. Ideal for quick games, classroom assignments, and drawing triggers.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  Customize and Share
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Need custom options? You can modify the slice items using the list view or copy-paste directly from spreadsheet programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 font-medium">
            {[{"q":"Is it hard to read 64 slices?","a":"It spins cleanly! You can toggle list views to double-check the final result."}].map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-orange">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                How random is the selection?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                The wheel uses a robust pseudo-random number generation algorithm in Javascript, ensuring that every slice has a completely fair, unbiased, and mathematically equal chance of winning.
              </p>
            </div>
          </div>
        </section>
        
      </main>

      
    </>
  );
}
