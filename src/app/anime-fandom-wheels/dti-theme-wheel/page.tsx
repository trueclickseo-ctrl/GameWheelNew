import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Dress To Impress Theme Wheel | DTI Randomizer | GameWheelClub",
  description: "Spin the Dress To Impress (DTI) Theme Wheel to randomly select a fashion style or outfit challenge for your next Roblox runway. Free and interactive.",
};

export default function DtiThemeWheelPage() {
  const themes = [
    "Y2K Fashion",
    "Goth / Grunge",
    "Pastel Princess",
    "Cyberpunk / Futurist",
    "Old Money / Preppy",
    "Cozy Winter Wear",
    "Casual Friday",
    "Red Carpet Glamour"
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
          <span className="text-retro-orange">DTI Theme Wheel</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Fashion Generator
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Dress To Impress (DTI) Theme Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Bored of the standard runway categories? Spin the wheel to claim a random fashion aesthetic for your next modeling session!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={themes} storageKey="gamewheelclub-dti-theme-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Rule the Roblox Runway
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Roblox <em>Dress To Impress</em> (DTI) has taken the platform by storm, challenging players to assemble stunning outfits under tight time limits based on dynamic themes. While the game provides its own rotation of themes, sometimes you and your friends want to run private server custom matches, practice layout building, or challenge yourselves with niche prompts.
              </p>
              <p>
                Our <strong>DTI Theme Wheel</strong> is preloaded with popular aesthetics ranging from classic Goth and preppy Old Money to futurist Cyberpunk and retro Y2K. This interactive spinner ensures you always have a fun styling theme at the click of a button.
              </p>
              <p>
                You can easily add new themes or edit the layout to match the exact season updates. If you want to make an entirely customized list from scratch, use our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Fashion Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Private Server Drafts:</strong> Have the host spin this wheel before each round, forcing everyone in the lobby to design outfits matching the random aesthetic.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Budget Modeling:</strong> Spin to get a theme, and commit to styling it using only free, non-VIP items for an extra challenge.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Contrast Stylings:</strong> Spin twice to combine two separate styles (e.g. Cozy Winter Y2K) and build a hybrid outfit.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Runway Critiques:</strong> Settle style-debates by having neutral players judge which outfit fits the selected aesthetic best.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
