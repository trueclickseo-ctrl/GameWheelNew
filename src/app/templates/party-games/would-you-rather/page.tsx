import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Would You Rather Wheel | Random Party Game Picker",
  description: "Spin the Would You Rather wheel. Get group conversations moving with randomized hypothetical question choices.",
};

export default function WouldYouRatherPage() {
  const options = ["Option A", "Option B", "Ask the Group", "Pick a Partner", "Double Trouble", "Spin Again"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/party-games/" className="hover:text-retro-orange">Party Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Would You Rather</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Would You Rather Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Settle tough hypotheticals or choose who answers what. Spin the game wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-would-you-rather" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Hypothetical Icebreakers</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                <strong>Would You Rather</strong> is an exceptional conversation starter. Slices can indicate Option A or Option B, or introduce special parameters like &quot;Ask the Group&quot; to involve everyone.
              </p>
              <p>
                This digital wheel helps keep matches moving during party nights, dinners, or classroom breaks.
              </p>
              <p>
                To generate random numbers for trivia scoring, try our <Link href="/random-number-generator/" className="text-retro-orange underline font-bold">Number Generator</Link> or pick team captains using the <Link href="/wheel-of-names/" className="text-retro-blue underline font-bold">Wheel of Names</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Custom Dares & Choices</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Add your own custom dilemmas into the wheel list:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Input two extreme scenarios (e.g. &quot;fly or tele-transport&quot;).</li>
              <li>Add time constraints using our <Link href="/timer/" className="text-retro-orange underline font-bold">Timer</Link> tool.</li>
              <li>Include punishment tasks for people who refuse to answer!</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
