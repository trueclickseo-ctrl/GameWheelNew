import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "MHA Characters Wheel | Spin Random My Hero Academia Characters | GameWheelClub",
  description: "Spin the MHA Characters Wheel to randomly select heroes and villains from My Hero Academia. Free, customizable, and fast character picker.",
};

export default function MhaCharactersWheelPage() {
  const characters = [
    "Izuku Midoriya (Deku)",
    "Katsuki Bakugo",
    "Shoto Todoroki",
    "All Might",
    "Ochaco Uraraka",
    "Tomura Shigaraki",
    "Dabi",
    "Himiko Toga"
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
          <span className="text-retro-orange">MHA Characters</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Hero & Villain Randomizer
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            MHA Characters Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Spin to select characters from My Hero Academia, including Class 1-A heroes and the League of Villains!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={characters} storageKey="gamewheelclub-mha-characters-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Explore the Quirky World of MHA
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Kohei Horikoshi&apos;s <em>My Hero Academia</em> has become a staple of modern superhero storytelling. Set in a world where 80% of the population possesses a unique superpower known as a &quot;Quirk,&quot; the series explores the clash between aspiring professional heroes and a marginalized league of villains. From Deku&apos;s hard-fought determination to Shigaraki&apos;s destructive decay, the cast is vibrant and diverse.
              </p>
              <p>
                Our <strong>MHA Characters Wheel</strong> provides a quick, interactive way to select characters randomly. Preloaded with central figures like Bakugo, Todoroki, All Might, and Toga, it serves as the perfect springboard for fan debates, cosplay ideas, and gaming challenges.
              </p>
              <p>
                You can easily add new characters (like Kirishima, Eraser Head, or Endeavor) directly into the option list on the page. For creating completely custom decision boards, check out our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Quirk Challenges
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>Who Wins the Arena Match?</strong> Spin two characters and debate how their Quirks would match up in an official U.A. Sports Festival arena.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Who Is Your Partner?</strong> Spin to determine which Class 1-A student or pro hero would be your partner for a high-stakes rescue mission.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Creative Drawing Prompts:</strong> Challenge your art skills by drawing the selected character as a villain if they are a hero, or vice versa.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Trivia Team Captains:</strong> Settle team names or avatars for your next My Hero Academia-themed trivia tournament.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
