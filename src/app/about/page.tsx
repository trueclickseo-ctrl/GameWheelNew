import { Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            About GameWheelClub
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto mb-8">
            Making decision-making fun, fast, and completely unbiased.
          </p>
          
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white dark:bg-slate-800 neo-border rounded-xl shadow-lg inline-block">
              <img 
                src="/logo.jpg" 
                alt="GameWheelClub Logo" 
                className="w-48 h-48 rounded-lg object-cover border-2 border-retro-navy dark:border-cream"
              />
            </div>
          </div>
        </section>

        <section className="neo-card p-8 bg-white dark:bg-retro-navy space-y-6">
          <h2 className="text-2xl font-black font-display flex items-center gap-2">
            <Sparkles className="text-retro-orange w-6 h-6" /> Our Mission
          </h2>
          <p className="font-medium text-base leading-relaxed">
            GameWheelClub was born out of a desire to cure decision paralysis with high-fidelity, highly accessible, and visually stunning digital utility tools. We believe that choosing who goes first in a game, what to eat for lunch, or drawing a raffle ticket should feel interactive and engaging.
          </p>
          <p className="font-medium text-base leading-relaxed">
            By building a lightweight, zero-database application that runs entirely client-side, we protect user privacy and deliver blazing-fast page loads. No sign-ups required. No hidden fees.
          </p>

          <h2 className="text-2xl font-black font-display flex items-center gap-2 pt-4">
            <Heart className="text-retro-orange w-6 h-6" /> Built for Everyone
          </h2>
          <p className="font-medium text-base leading-relaxed">
            Teachers use our tools to choose students randomly, organizations use them to pick presenters, and groups of friends use them to decide on local hangouts. Whatever your decision is, we hope GameWheelClub brings a bit of ease and playfulness to your process.
          </p>
        </section>
      </main>

      
    </>
  );
}
