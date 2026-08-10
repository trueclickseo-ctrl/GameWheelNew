import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Truth or Dare Generator | Random Choice Wheel",
  description: "Spin the Truth or Dare wheel for party icebreakers. Select Truth or Dare randomly and get groups talking instantly.",
};

export default function TruthOrDarePage() {
  const options = ["Truth", "Dare", "Truth", "Dare", "Double Dare", "Spin Again"];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/party-games/" className="hover:text-retro-orange">Party Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Truth or Dare</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Truth or Dare Wheel Generator
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Bring life to your next party or hang out. Spin the wheel to decide between Truth, Dare, or Double Dare!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-truth-dare" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">The Classic Icebreaker</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                <strong>Truth or Dare</strong> has been the go-to party game for generations. When players can&apos;t choose or try to avoid hard options, using a randomizer wheel is the perfect way to force a choice.
              </p>
              <p>
                Our wheel is configured with repeating slices of Truth and Dare, along with a high-stakes &quot;Double Dare&quot; segment, to make game nights unpredictable.
              </p>
              <p>
                To randomly choose which player spins the wheel next, use our <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link>, or settle quick debates with <Link href="/flip-a-coin/" className="text-retro-blue underline font-bold">Flip a Coin</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Adding Custom Prompts</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Expand your game beyond the basics by listing specific dares or questions directly on the wheel options:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Add customized dares (e.g. &quot;sing a song&quot;, &quot;do 10 pushups&quot;).</li>
              <li>Input targeted truth questions for close groups.</li>
              <li>Include specific game actions like &quot;lose a point&quot; or &quot;pick a partner&quot;.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
