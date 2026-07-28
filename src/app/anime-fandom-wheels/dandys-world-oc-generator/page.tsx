import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/anime-fandom-wheels/dandys-world-oc-generator/",
  },
  title: "Dandy's World OC Generator Wheel | Spin OC Archetypes | GameWheelClub",
  description: "Spin the Dandy's World OC Generator Wheel to randomly determine design parameters, roles, and stats for your custom original toon character.",
};

export default function DandysWorldOcGeneratorWheelPage() {
  const archetypes = [
    "Toon (Standard)",
    "Extractor (High speed, low health)",
    "Distractor (High stamina, high health)",
    "Support (Item speed boost)",
    "Stealth (Low noise range)",
    "Custom Stats (Decide with D6 dice)",
    "Main (Legendary class toon)",
    "Mascot (Bonus passive ability)"
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/anime-fandom-wheels/" className="hover:text-retro-orange">Anime & Fandom</Link>
          <span>/</span>
          <span className="text-retro-orange">Dandy&apos;s World OC Generator</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Character Creator
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Dandy&apos;s World OC Generator Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Unleash your creativity! Spin the wheel to randomly assign an archetype, class role, or design constraint for your original Dandy&apos;s World toon.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={archetypes} storageKey="gamewheelclub-dandys-world-oc-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Generate Your Original Toon
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                In the Roblox <em>Dandy&apos;s World</em> community, creating Original Characters (OCs) is a huge trend. Fans love designing custom toons that could fit into the retro cartoon art style of the game. However, starting from scratch can cause writer&apos;s block. 
              </p>
              <p>
                Our <strong>Dandy&apos;s World OC Generator Wheel</strong> is designed to overcome this by injecting random design constraints. Preloaded with core character roles and stats like Extractor, Distractor, Support, Stealth, and Main, it forces you to think about how your toon would actually play in-game.
              </p>
              <p>
                You can easily add new design constraints (like &quot;Animal Theme,&quot; &quot;Household Object Theme,&quot; or &quot;Retro Colors&quot;) directly to the wheel options. For creating generic custom generators, visit our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Creative OC Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Design a Toon:</strong> Spin the wheel to get an archetype, and design a custom cartoon character that fits the role (e.g. an Extractor made of magnifying glass).</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Design a Twisted Form:</strong> Once your toon is drawn, create a secondary &quot;Twisted&quot; design with extra eyes, glitch effects, or corrupted colors.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Stat Distribution:</strong> Spin to assign a role, then allocate a pool of 15 stars across speed, health, stamina, stealth, and extract speed.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Passive Ability Idea:</strong> Write a unique passive ability that directly supports the role selected by the spinner.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
