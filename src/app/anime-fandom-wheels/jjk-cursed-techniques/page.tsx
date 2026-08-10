import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Compass, Sparkles } from "lucide-react";

export const metadata = {
  title: "JJK Cursed Techniques Wheel | Spin for Cursed Techniques | GameWheelClub",
  description: "Spin the JJK Cursed Techniques Wheel to randomly select which Jujutsu Kaisen power you would inherit. Free, customizable, and fun.",
};

export default function JjkCursedTechniquesWheelPage() {
  const techniques = [
    "Limitless (Satoru Gojo)",
    "Ten Shadows Technique (Megumi Fushiguro)",
    "Idle Transfiguration (Mahito)",
    "Ratio Technique (Kento Nanami)",
    "Cursed Speech (Toge Inumaki)",
    "Blood Manipulation (Noritoshi Kamo / Choso)",
    "Disaster Flames (Jogo)"
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
          <span className="text-retro-orange">JJK Cursed Techniques</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Cursed Energy Selector
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            JJK Cursed Techniques Wheel
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            What inherited technique runs in your blood? Spin the wheel to claim your legendary JJK technique!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={techniques} storageKey="gamewheelclub-jjk-cursed-techniques-wheel" />
        </section>

        {/* SEO Copy Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Inherit Your Jujutsu Ability
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                In the world of <em>Jujutsu Kaisen</em>, a sorcerer&apos;s ability is primarily decided at birth through inherited Cursed Techniques. These techniques manipulate cursed energy in unique ways: Gojo&apos;s Limitless allows him to control space, Megumi&apos;s Ten Shadows manipulates shadows to summon shikigami, and Inumaki&apos;s Cursed Speech forces actions through vocal commands.
              </p>
              <p>
                Our <strong>JJK Cursed Techniques Wheel</strong> lets you randomly assign an inherited technique to yourself or your friends. Preloaded with iconic techniques from elite sorcerers and cursed spirits, this browser-based randomizer is the perfect tool for fandom debates and gaming nights.
              </p>
              <p>
                You can easily add new techniques (like Straw Doll Technique, Boogie Woogie, or Idle Death Gamble) directly into the option list. For completely custom lists, visit our primary <Link href="/decision-wheel/" className="text-retro-orange underline font-bold">Decision Wheel</Link> or return to the main <Link href="/anime-fandom-wheels/" className="text-retro-blue underline font-bold">Anime & Fandom Hub</Link>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Fun Fandom Play
            </h2>
            <ul className="space-y-4 font-semibold text-base">
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-orange flex-shrink-0" />
                <span><strong>OC Character Design:</strong> Spin this wheel to randomly determine the primary cursed technique for your custom original Jujutsu Sorcerer.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-mint flex-shrink-0" />
                <span><strong>Tabletop Campaigns:</strong> Use the wheel to randomly assign cursed techniques to players or enemies in custom roleplay games.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-blue flex-shrink-0" />
                <span><strong>Elemental Advantages:</strong> Spin two different techniques and debate how they would interact or counter one another in combat.</span>
              </li>
              <li className="flex gap-2">
                <Sparkles className="w-5 h-5 text-retro-yellow flex-shrink-0" />
                <span><strong>Friendship Drafts:</strong> Spin with a group of friends to see who would occupy which rank (Grade 1, Special Grade, etc.) based on their assigned technique.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
