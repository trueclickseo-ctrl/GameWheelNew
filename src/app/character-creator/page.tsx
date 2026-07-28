import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/character-creator/",
  },
  title: "Character Creator & OC Wheel Generators | GameWheelClub",
  description: "Design random characters, OCs, and avatars instantly. Spin for hairstyles, outfits, eyes, genders, skin tones, and gacha ideas.",
};

export default function charactercreatorHubPage() {
  const wheels = [
    { name: "Create an OC Wheel", href: "/character-creator/create-an-oc", desc: "Spin this wheel to generate a random background, race, or class for your next original character." },
    { name: "Boy or Girl OC Spinner", href: "/character-creator/boy-or-girl-oc", desc: "Stuck on deciding the gender identity of your next character? Spin the pointer to decide instantly." },
    { name: "Gacha Character Generator Wheel", href: "/character-creator/gacha-character-generator", desc: "Spin for styling themes, aesthetics, and fashion concepts to build your next Gacha Life or Gacha Club character." },
    { name: "Hair Color Wheel", href: "/character-creator/hair-color", desc: "Spin to pick a random hair dye or OC hair color. Preloaded with natural tones and vibrant neon dyes." },
    { name: "Hair Style Wheel", href: "/character-creator/hair-style", desc: "Select a random hairstyle for character sheets, drawings, or model designs." },
    { name: "Eye Color Wheel", href: "/character-creator/eye-color", desc: "Decide eye shades and fantasy iris styles for your OC instantly." },
    { name: "Skin Tone Wheel", href: "/character-creator/skin-tone", desc: "Select random skin shades, undertones, and creature textures." },
    { name: "Clothing Style Wheel", href: "/character-creator/clothing-style", desc: "Get fashion ideas and outfit aesthetics for character creators." },
    { name: "Gender Randomizer Wheel", href: "/character-creator/gender-randomizer", desc: "Randomize pronouns, gender identities, and presentation styles." },
    { name: "Age Spinner Wheel", href: "/character-creator/age-spinner", desc: "Randomly choose character ages and development stages." },
    { name: "Nationality Generator Wheel", href: "/character-creator/nationality-generator", desc: "Pick random national backgrounds and citizenships for global characters." }
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Character Creator & OC Wheels</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Character Creator & OC Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Design random characters, OCs, and avatars instantly. Spin for hairstyles, outfits, eyes, genders, skin tones, and gacha ideas.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {wheels.map((w) => (
            <div key={w.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{w.name}</h3>
                <p className="text-sm opacity-80 mb-6">{w.desc}</p>
              </div>
              <Link
                href={w.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Launch Wheel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
