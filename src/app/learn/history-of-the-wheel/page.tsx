import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { History, ArrowLeft, BookOpen, ShieldCheck } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/learn/history-of-the-wheel/",
  },
  title: "History of the Wheel — Sortition, Rota Fortunae & Pascal | GameWheelClub",
  description: "Explore the historical evolution of decision wheels from ancient Athenian sortition and Boethius' Rota Fortunae to Blaise Pascal's roulette machine.",
};

export default function HistoryOfTheWheelPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Back Link */}
        <Link href="/learn/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-retro-orange mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Learn Hub
        </Link>

        {/* Hero Section */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <History className="w-4 h-4" />
            Pillar 1: Historical Roots
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            The History of the Wheel: From Sortition to Digital Randomizers
          </h1>
          <p className="text-lg font-medium opacity-90 leading-relaxed">
            Humanity has relied on randomized selection mechanisms for over two millennia to ensure fairness, resolve conflicts, and make unbiased choices.
          </p>
        </section>

        {/* Article Body */}
        <article className="prose dark:prose-invert max-w-none neo-card p-8 bg-white dark:bg-retro-navy space-y-8 font-medium">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              1. Ancient Democracy & The Athenian Kleroterion
            </h2>
            <p>
              In classical Athens during the 5th century BC, democracy operated not primarily through voting, but through <strong>sortition</strong>—the selection of political officials by random lottery. The ancient Greeks believed that elections favored the wealthy and charismatic, whereas random lotteries gave every citizen an equal probability of public service.
            </p>
            <p>
              To execute this process without tampering, the Athenians invented the <em>Kleroterion</em> (κληρωτήριον), a stone slab containing slots into which citizens inserted tokens. Colored bronze balls were released down a tube to select jury members and magistrate panels randomly.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              2. Medieval Philosophy: Rota Fortunae
            </h2>
            <p>
              During the Middle Ages, the symbol of the spinning wheel became a central motif in literature and philosophy. In <em>The Consolation of Philosophy</em> (c. 524 AD), the Roman philosopher <strong>Boethius</strong> popularized the concept of <strong>Rota Fortunae</strong> (The Wheel of Fortune).
            </p>
            <p>
              The Goddess Fortuna was depicted turning a massive wheel where kings were cast down and peasants elevated, symbolizing the unpredictable and inescapable nature of earthly fate. This philosophical allegory laid the cultural groundwork for visual wheels symbolizing luck and equal chance.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              3. Blaise Pascal & The Birth of the Roulette Wheel
            </h2>
            <p>
              In 1655, French mathematician and physicist <strong>Blaise Pascal</strong> attempted to invent a perpetual motion machine. While his physics experiment did not achieve perpetual motion, his mechanical design accidentally resulted in the modern <strong>Roulette wheel</strong>.
            </p>
            <p>
              Pascal&apos;s mechanical wheel featured balanced numbered segments and low-friction motion, which quickly became the foundational tool for early probability experiments and eventually widespread gaming equipment.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              4. Modern Digital Decision Wheels
            </h2>
            <p>
              With the arrival of personal computing and the internet, mechanical wheels evolved into digital wheel spinners. Today, browser-based tools like <strong>GameWheelClub</strong> replace physical friction with cryptographic pseudorandom number generators (PRNGs), rendering high-resolution canvas graphics in real-time.
            </p>
          </section>

          {/* Citations Box */}
          <div className="bg-cream dark:bg-retro-navy/50 p-6 rounded-lg neo-border text-sm">
            <h3 className="font-bold flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-retro-mint" /> References & Historical Sources
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs font-bold">
              <li>
                <a href="https://www.britannica.com/topic/sortition" target="_blank" rel="noopener noreferrer" className="text-retro-orange hover:underline flex items-center gap-1">
                  Britannica Encyclopedia: Sortition & Ancient Democracy
                </a>
              </li>
              <li>
                <a href="https://www.gutenberg.org/ebooks/14328" target="_blank" rel="noopener noreferrer" className="text-retro-orange hover:underline flex items-center gap-1">
                  Boethius (c. 524 AD): The Consolation of Philosophy
                </a>
              </li>
              <li>
                <a href="https://www.cambridge.org/core/books/abs/emergence-of-probability/contents/0E71A25BFC6053A80B6746EC8A76D70E" target="_blank" rel="noopener noreferrer" className="text-retro-orange hover:underline flex items-center gap-1">
                  Ian Hacking (1975): The Emergence of Probability, Cambridge University Press
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Kleroterion" target="_blank" rel="noopener noreferrer" className="text-retro-orange hover:underline flex items-center gap-1">
                  Wikipedia: Kleroterion & Rota Fortunae
                </a>
              </li>
            </ul>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
