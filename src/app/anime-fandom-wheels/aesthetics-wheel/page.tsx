import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Aesthetics Wheel | Spin for Fashion & Room Aesthetics | GameWheelClub",
  description: "Spin the Aesthetics Wheel to pick a random style theme like Cottagecore, Vaporwave, or Dark Academia. Free, interactive style picker.",
};

export default function AestheticsWheelPage() {
  const aesthetics = [
    "Cottagecore",
    "Dark Academia",
    "Vaporwave",
    "Grunge",
    "Indie Kid",
    "Coquette",
    "Cybercore",
    "Soft Girl"
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
          <span className="text-retro-orange">Aesthetics Wheel</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Style Generator
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Aesthetics Wheel Spinner
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Unsure what fashion vibe to try next or how to decorate your room? Spin the wheel to claim your random aesthetic style!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={aesthetics} storageKey="gamewheelclub-aesthetics-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Find Your Visual Identity
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                In the digital era, visual styles and aesthetics define our self-expression online and offline. From the cozy, rustic nature of Cottagecore and the intellectual, vintage look of Dark Academia, to the neon nostalgia of Vaporwave and the alternative energy of Grunge, there is an aesthetic for every personality.
              </p>
              <p>
                Our <strong>Aesthetics Wheel</strong> helps you step out of your comfort zone by randomly selecting a style layout. Preloaded with the internet&apos;s most popular trends, this interactive generator is the perfect tool for fashion makeovers, room designs, or creative content.
              </p>
              <p>
                You can easily add new styles (like Steampunk, Y2K, Royalcore, or Goblincore) directly to the wheel options. For creating custom multi-option boards, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Ways to Style the Result
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Outfit Makeovers:</strong> Spin the wheel and challenge yourself to dress matching the selected aesthetic for a week.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Room Decoration:</strong> Choose a small corner of your bedroom or study desk, and decorate it to reflect the style that lands.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Art & Writing Prompts:</strong> Create drawings, digital collage art, or write a story where the atmosphere matches the selected theme.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Social Media Feeds:</strong> Revamp your Instagram layout, Pinterest board, or TikTok playlist to match the random aesthetic.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
