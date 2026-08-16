import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { User, ArrowLeft, Target, Star, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Boy or Girl (OC) Wheel Spinner | Random Character Gender Picker",
  description: "Spin the Boy or Girl Wheel to randomly decide your next OC's gender. Great for fanfiction, worldbuilding, D&D characters, and OC generator challenges.",
};

export default function BoyOrGirlOCWheelPage() {
  const defaultOptions = ["Boy", "Girl"];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/character-wheels/" className="hover:text-retro-orange">Character Wheels</Link>
          <span>/</span>
          <span className="text-retro-orange">Boy or Girl (OC) Wheel</span>
        </div>

        {/* Back Link */}
        <Link
          href="/character-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Character Wheels
        </Link>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <User className="w-4 h-4" />
            OC Generator
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Boy or Girl (OC) Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-95 max-w-2xl mx-auto">
            Spin to randomly decide your next original character&apos;s gender. Great for fanfiction, worldbuilding, D&amp;D characters, and OC generator challenges.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={defaultOptions} storageKey="gamewheelclub-boy-or-girl-oc-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Can&apos;t Decide Your OC&apos;s Gender? Let the Wheel Call It
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Half the fun of building an original character is not knowing where they&apos;ll take you — so instead of agonizing over boy or girl before you&apos;ve even named them, spin and find out. Add your own options if you want more range (non-binary, agender, or whatever fits your story), hit spin, and let the result shape the character instead of the other way around.
              </p>
              <p>
                No sign-up, no ads slowing things down — just spin and start writing.
              </p>
              <p>
                Want more randomizers for your story? Check out the <Link href="/games/" className="text-retro-blue underline font-bold">Games page</Link> for name pickers, trait generators, and more.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              How People Actually Use This
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Target className="w-5 h-5 flex-shrink-0" />
                  Fanfiction &amp; original story OCs.
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Starting a new fic or story and don&apos;t want your OC to default to the same gender every time? Spin first, then build the character around whatever you get — it tends to push you into ideas you wouldn&apos;t have picked on your own.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  D&amp;D &amp; tabletop character building.
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Rolling up a new campaign character? Add this to your usual dice-and-stats routine — spin for gender before you touch class, race, or backstory, and let the rest of the sheet follow from there.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-blue text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  OC generator challenges.
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  If you&apos;ve seen the &quot;spin for your next OC&quot; challenges on Tumblr or Amino, this is built for exactly that — pair it with a name wheel and a trait wheel for a full random-character combo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            FAQ
          </h2>
          <div className="space-y-6 font-medium">
            {[
              {
                q: "Can I add more options than just Boy and Girl?",
                a: "Yes — edit the wheel options to add non-binary, agender, or any other option you want represented. The wheel works with whatever list you give it.",
              },
              {
                q: "Is this connected to real gender reveals?",
                a: "No — this wheel is built for fictional characters (OCs, story ideas, tabletop characters), not real-life announcements.",
              },
              {
                q: "Can I combine this with other wheels for a full character?",
                a: "Yes — a common approach is spinning this one first, then a name wheel, then a traits or species wheel, to build a full random character in a few spins.",
              },
              {
                q: "Can I save or embed this wheel?",
                a: "Use the \"Get Embed Code\" button above the wheel to grab an iframe for your own site, blog, or Amino/Tumblr page.",
              },
              {
                q: "Does the wheel weight results, or is it truly 50/50?",
                a: "With the default two options it's an even, genuinely random 50/50 split. Adding more options changes the odds evenly across whatever you've added — no option is ever favored.",
              },
            ].map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-navy dark:text-cream">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 text-retro-orange" />
                  {faq.q}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed pl-7 text-retro-navy dark:text-cream">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </>
  );
}
