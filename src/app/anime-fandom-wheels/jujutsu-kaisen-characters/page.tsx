import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Jujutsu Kaisen Characters Wheel | Spin Random JJK Sorcerer | GameWheelClub",
  description: "Spin the Jujutsu Kaisen Characters Wheel to randomly select sorcerers, cursed spirits, or student characters. Free and interactive JJK randomizer.",
};

export default function JujutsuKaisenCharactersWheelPage() {
  const characters = [
    "Yuji Itadori",
    "Megumi Fushiguro",
    "Nobara Kugisaki",
    "Satoru Gojo",
    "Kento Nanami",
    "Ryomen Sukuna",
    "Suguru Geto"
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
          <span className="text-retro-orange">JJK Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Sorcerer & Curse Randomizer
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Jujutsu Kaisen Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select characters from JJK, including Tokyo Jujutsu High students, elite Sorcerers, and Cursed Spirits!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-jjk-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Enter the Jujutsu Society
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Gege Akutami&apos;s <em>Jujutsu Kaisen</em> has captivated audiences globally with its dark fantasy themes, intricate cursed energy mechanics, and high-stakes battle dynamics. From the limitless power of Satoru Gojo and the dark threat of Ryomen Sukuna to the grit of students like Yuji, Megumi, and Nobara, the series hosts a deeply compelling cast of characters.
              </p>
              <p>
                This interactive <strong>Jujutsu Kaisen Characters Wheel</strong> helps you randomize character selection for any activity. Preloaded with major figures from Tokyo High, Kyoto High, and various dangerous curse groups, it provides clean, instant randomness with a single spin.
              </p>
              <p>
                You can easily add new sorcerers (like Maki, Toge, or Yuta) or curses (like Mahito or Jogo) to the list. To construct completely custom decision boards, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Sorcerer Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Wins the Domain Expansion?</strong> Spin two characters and debate whose cursed technique and Domain Expansion would win in a clash.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Who Is Your Mentor?</strong> Spin to determine which JJK sorcerer (e.g. Gojo, Nanami, or Todo) would train you in using cursed energy.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Cosplay & Drawing Drafts:</strong> Unsure who to draw or cosplay? Let the wheel select your next project theme instantly.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Anime Trivia Picker:</strong> Use this spinner to randomly assign characters that players must answer trivia questions about.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
