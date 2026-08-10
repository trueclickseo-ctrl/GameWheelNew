import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Demon Slayer Characters Wheel | Spin Random Demon Slayer | GameWheelClub",
  description: "Spin the Demon Slayer Characters Wheel to select a random character from Kimetsu no Yaiba. Pick Hashira, Slayers, or Demons instantly.",
};

export default function DemonSlayerCharactersWheelPage() {
  const characters = [
    "Tanjiro Kamado",
    "Nezuko Kamado",
    "Zenitsu Agatsuma",
    "Inosuke Hashibira",
    "Giyu Tomioka",
    "Kyojuro Rengoku",
    "Shinobu Kocho",
    "Muzan Kibutsuji"
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
          <span className="text-retro-orange">Demon Slayer Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Hashira & Demon Picker
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Demon Slayer Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select characters from Kimetsu no Yaiba, including core Slayers, elite Hashiras, and Upper Moon Demons!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-demon-slayer-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Enter the Demon Slayer Corps
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Koyoharu Gotouge&apos;s <em>Demon Slayer: Kimetsu no Yaiba</em> has taken the global anime community by storm, pairing beautiful Taisho-era visuals with breathtaking battle animation. From Tanjiro&apos;s emotional journey to protect his sister Nezuko to the immense sacrifice of Hashiras like Rengoku, the characters represent some of the most memorable faces in modern anime.
              </p>
              <p>
                This interactive <strong>Demon Slayer Characters Wheel</strong> offers an instant and unbiased way to randomize character selection. Preloaded with major figures like Giyu, Shinobu, Inosuke, and the demon king Muzan himself, you can kick off any fan activity with zero setup.
              </p>
              <p>
                You can easily customize the wheel to include other Hashiras (like Tengen or Sanemi) or specific Lower and Upper Moon demons. If you want to make an entirely customized board from scratch, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Fandom Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Wins the Duel?</strong> Spin two characters. If it is a slayer and a demon, discuss how the battle would play out; if two slayers, debate who wins in a spar.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Breathing Style Match:</strong> Settle what breathing style you would learn if you were trained by the character that lands on the spinner.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Cosplay & Art Prompts:</strong> Pick your next creative project randomly by letting the wheel choose who you draw or cosplay next.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Team Captains:</strong> Settle team names or avatars for your next Demon Slayer-themed trivia night.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
