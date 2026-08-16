import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "Naruto Characters Wheel | Spin Random Naruto Ninja | GameWheelClub",
  description: "Spin the Naruto Characters Wheel to choose a random shinobi from Konoha or the Akatsuki. Free, interactive ninja selector.",
};

export default function NarutoCharactersWheelPage() {
  const characters = [
    "Naruto Uzumaki",
    "Sasuke Uchiha",
    "Kakashi Hatake",
    "Itachi Uchiha",
    "Sakura Haruno",
    "Gaara",
    "Jiraiya",
    "Madara Uchiha"
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
          <span className="text-retro-orange">Naruto Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-mint text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Shinobi Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Naruto Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select ninja from the Hidden Leaf, Akatsuki, or historical shinobi clans!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-naruto-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Enter the Ninja World
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Masashi Kishimoto&apos;s <em>Naruto</em> is one of the most legendary anime series of all time. It is celebrated for its deep lore, intricate fight choreography, emotional character development, and complex ninja techniques. Whether you support the Hokages of the Hidden Leaf or the rogue operations of the Akatsuki, the series has a character for everyone.
              </p>
              <p>
                This interactive <strong>Naruto Characters Wheel</strong> is preloaded with fan-favorite shinobi like Kakashi, Itachi, Gaara, and Madara. With a quick click, you can pick a random ninja to settle debates, design cosplay projects, or challenge your friends to trivia games.
              </p>
              <p>
                You can easily add new ninja or customize the entire list to focus on specific teams (like Team 7, the Akatsuki, or the Legendary Sannin). To create completely custom lists, visit our <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Shinobi Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Wins the Ninja War?</strong> Spin twice to pick two ninja and debate which jutsu combination or fighting style would win.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Drawing Challenges:</strong> Spin to select a ninja and draw them in a modern casual outfit or as a character in another anime style.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Who Is Your Mentor?</strong> Settle the fun debate of who your sensei would be if you were a genin graduating from the ninja academy.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Selector:</strong> Randomly choose a character to answer questions about during anime trivia game nights.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
