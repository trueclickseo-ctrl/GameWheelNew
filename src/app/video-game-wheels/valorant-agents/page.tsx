import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { ArrowLeft, Play, Sparkles, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Valorant Agents Wheel | GameWheelClub",
  description: "Spin to pick a random Valorant agent to play in your next match.",
  alternates: {
    canonical: "https://www.gamewheelclub.com/video-game-wheels/valorant-agents/",
  },
};

export default function ValorantAgentsWheelPage() {

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/video-game-wheels/" className="hover:text-retro-orange">Video Game Wheels</Link>
          <span>/</span>
          <span className="text-retro-orange">Valorant Agents</span>
        </div>

        {/* Back Link */}
        <Link
          href="/video-game-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Video Game Wheels
        </Link>

        
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive Preset
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            "Valorant Agents Wheel"
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            "Spin to pick a random Valorant agent to play in your next match."
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={["Jett","Raze","Phoenix","Reyna","Yoru","Neon","Sage","Cypher","Killjoy","Chamber","Fade","Sova","Breach","Omen","Viper","Astra","Harbor","Gekko","Deadlock","Iso","Clove"]} storageKey="gamewheelclub-video-game-wheels-valorant-agents" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Why Use the Valorant Agents Wheel?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                "Tired of locking in Jett or Sage? Let the wheel decide your agent and practice different playstyles in unrated matches."
              </p>
              <p>
                This spinner is preloaded with popular options to get you started. If you want to customize the list, or narrow it down to just your personal choices, you can easily add, remove, or edit options right in the spinner menu.
              </p>
              <p>
                Explore other tools in this category such as [League of Legends Champions Wheel](/video-game-wheels/league-of-legends-champions), [Roblox Games Wheel](/video-game-wheels/roblox-games), [Smash Bros Characters Wheel](/video-game-wheels/smash-bros-characters) or check out the main <Link href="/games/" className="text-retro-orange underline font-bold">Games Hub</Link> directory.
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
            {[{"q":"Is the agent list updated?","a":"Yes, we include recent agents. You can append new ones via the editor."}].map((faq, idx) => (
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

      <Footer />
    </>
  );
}
