import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Dandy's World Trinkets Wheel | Spin Random Roblox Trinkets | GameWheelClub",
  description: "Spin the Dandy's World Trinkets Wheel to randomly choose which accessory or item to equip for your next game run. Free and customizable.",
};

export default function DandysWorldTrinketsWheelPage() {
  const trinkets = [
    "Pink Ribbon (+Stealth)",
    "Golden Shell (+Defense)",
    "Speed Shoes (+Movement Speed)",
    "Magnifying Glass (+Detection Range)",
    "Health Potion (+Max Health)",
    "Alarm Clock (+Stamina Regeneration)",
    "Lucky Feather (+Evasion Chance)"
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/anime-fandom-wheels/" className="hover:text-retro-orange">Anime & Fandom</Link>
          <span>/</span>
          <span className="text-retro-orange">Dandy&apos;s World Trinkets</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Equipment Picker
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Dandy&apos;s World Trinkets Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Unsure which trinkets to equip for your next run? Spin the wheel to randomize your loadout!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={trinkets} storageKey="gamewheelclub-dandys-world-trinkets-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Randomize Your Gear Setup
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                In the Roblox game <em>Dandy&apos;s World</em>, trinkets are accessories that toons can equip to boost their basic stats. Whether you need extra speed to distract twisted monsters, faster extraction to get ichor quickly, or stamina regeneration to survive longer chases, your loadout makes a massive difference. 
              </p>
              <p>
                Our <strong>Dandy&apos;s World Trinkets Wheel</strong> is designed for players who want to challenge themselves. By forcing a random equipment layout, you must adapt your survival strategies based on whichever gear lands.
              </p>
              <p>
                You can easily add new trinkets or remove items you haven&apos;t unlocked yet in the game store. If you want to make an entirely customized lists from scratch, use our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Loadout Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>The Hardcore Randomizer:</strong> Spin twice to select both of your active trinket slots, and play the run with only those equipped.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Lobby Draft:</strong> Have your entire party spin the wheel to determine their gear setups, leading to unique lobby comps.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Drawing Challenges:</strong> Draw the toon you play wearing the selected trinket items visually represented on their character sprite.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trinket Value Discussion:</strong> Use the spinner to pick a trinket, then debate with friends whether it is overrated or underrated.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
