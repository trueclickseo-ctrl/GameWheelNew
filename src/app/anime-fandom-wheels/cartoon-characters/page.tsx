import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Cartoon Characters Wheel | Spin Random Cartoons | GameWheelClub",
  description: "Spin the Cartoon Characters Wheel to select a random icon from classic and modern animated series. Free, fun, and customizable character picker.",
};

export default function CartoonCharactersWheelPage() {
  const cartoons = [
    "SpongeBob SquarePants",
    "Mickey Mouse",
    "Ben 10",
    "Finn the Human (Adventure Time)",
    "Gumball Watterson",
    "Bugs Bunny",
    "Homer Simpson",
    "Scooby-Doo"
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
          <span className="text-retro-orange">Cartoon Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Animated Icon Randomizer
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Cartoon Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select characters from nostalgic classics, Cartoon Network giants, and Disney favorites!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={cartoons} storageKey="gamewheelclub-cartoon-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Nostalgia-Fueled Cartoon Selector
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                From Saturday morning classics to modern award-winning animations, cartoons have shaped the imaginations of multiple generations. Characters like Bugs Bunny taught us quick-witted humor, Homer Simpson brought us laughter, and Finn the Human took us on epic journeys. But when choosing a character for game nights, fan projects, or trivia, the sheer variety can be overwhelming.
              </p>
              <p>
                This interactive <strong>Cartoon Characters Wheel</strong> makes choosing cartoon icons instant and completely randomized. With options from legendary eras including classic Looney Tunes, the golden era of Cartoon Network, and Disney channel favorites, you can bring an element of surprise to any activity.
              </p>
              <p>
                You can easily customize the entry list to include your own childhood favorites or remove characters you aren&apos;t familiar with. Want to make a custom wheel from scratch? Head over to our main <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Activities to Try
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Impersonation Challenge:</strong> Spin the wheel and challenge your friends to do their best voice impression of whatever cartoon character lands next.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Mashup Drawings:</strong> Spin this wheel and the anime characters wheel, then draw a crossover between the two selected characters!</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Trivia Team Captains:</strong> Assign cartoon characters as avatars or team names for your next family game night or pub-style trivia tournament.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Character Draft:</strong> Spin to draft your ultimate cartoon squad to defend the universe from a fictional alien invasion.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
