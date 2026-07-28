import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { BookOpen, ArrowLeft, Search, Bookmark } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/learn/encyclopedia/",
  },
  title: "Wheel Game Encyclopedia & Terminology Glossary | GameWheelClub",
  description: "Comprehensive A-Z glossary of decision wheel terminology, sortition, PRNG algorithms, weighted options, and random seed mechanics.",
};

const terms = [
  {
    term: "Bulk Edit",
    definition: "A feature allowing users to add or modify multiple wheel options simultaneously by pasting multi-line text input.",
  },
  {
    term: "Decision Fatigue",
    definition: "The cognitive decline in decision-making quality following prolonged periods of decision-making, relieved by automated random choices.",
  },
  {
    term: "DefinedTermSet",
    definition: "A Schema.org structured data format used to publish authoritative technical glossaries for search engines and AI answer engines.",
  },
  {
    term: "Elimination Mode",
    definition: "A game mode where winning options are automatically removed from the wheel after being selected, ensuring each item wins only once.",
  },
  {
    term: "Kleroterion",
    definition: "An ancient Athenian stone lottery device used in the 5th century BC to randomly assign citizens to public office and jury duty.",
  },
  {
    term: "PRNG (Pseudorandom Number Generator)",
    definition: "An algorithm that uses mathematical formulas to produce sequences of numbers that simulate true statistical randomness.",
  },
  {
    term: "Random Seed",
    definition: "An initial numerical value fed into a PRNG algorithm to initiate a reproducible pseudorandom sequence.",
  },
  {
    term: "Rota Fortunae",
    definition: "The 'Wheel of Fortune' concept in medieval philosophy symbolizing the unpredictable rotation of fate and equal chance.",
  },
  {
    term: "Sortition",
    definition: "The selection of political officials or decision outcomes by random lottery rather than voting or appointment.",
  },
  {
    term: "Weighted Wheel",
    definition: "A decision wheel configuration where individual options have unequal segment sizes corresponding to customized selection probabilities.",
  },
];

export default function EncyclopediaPage() {
  // Generate JSON-LD DefinedTermSet schema for AEO / GEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "GameWheelClub Wheel Game Encyclopedia",
    "description": "Authoritative dictionary and glossary of decision wheel, probability, and PRNG terms.",
    "hasDefinedTerm": terms.map((item) => ({
      "@type": "DefinedTerm",
      "name": item.term,
      "description": item.definition,
      "inDefinedTermSet": "https://www.gamewheelclub.com/learn/encyclopedia",
    })),
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Back Link */}
        <Link href="/learn/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-retro-orange mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Learn Hub
        </Link>

        {/* Hero Section */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" />
            Pillar 4: Reference Glossary
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Wheel Game Encyclopedia
          </h1>
          <p className="text-lg font-medium opacity-90 leading-relaxed">
            The definitive dictionary of decision-wheel concepts, probability terminology, and computer science definitions.
          </p>
        </section>

        {/* Glossary Terms List */}
        <section className="space-y-4 mb-16">
          {terms.map((item, idx) => (
            <div
              key={idx}
              id={item.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
              className="neo-card p-6 bg-white dark:bg-retro-navy border-2 border-retro-navy dark:border-cream"
            >
              <h2 className="text-xl font-black font-display text-retro-navy dark:text-cream flex items-center gap-2 mb-2">
                <Bookmark className="w-5 h-5 text-retro-orange" />
                {item.term}
              </h2>
              <p className="text-sm font-medium opacity-90 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
