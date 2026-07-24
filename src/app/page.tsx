import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import { Sparkles, HelpCircle, Shield, Award } from "lucide-react";

export const metadata = {
  title: "GameWheelClub — Free Random Decision Wheel Spinner",
  description: "Spin the decision wheel to make instant, fair, and unbiased choices. Free, zero-cookie, client-side random choice generator for names, yes-no, raffles, and classrooms.",
  alternates: {
    canonical: "https://gamewheelclub.com",
  },
  openGraph: {
    title: "GameWheelClub — Free Random Decision Wheel Spinner",
    description: "Spin the decision wheel to make instant, fair, and unbiased choices. Free, zero-cookie, client-side random choice generator.",
    url: "https://gamewheelclub.com",
    siteName: "GameWheelClub",
    images: [
      {
        url: "https://gamewheelclub.com/icon.jpg",
        width: 1200,
        height: 630,
        alt: "GameWheelClub Decision Wheel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameWheelClub — Free Random Decision Wheel Spinner",
    description: "Spin the decision wheel to make instant, fair, and unbiased choices. Free, zero-cookie, client-side random choice generator.",
    images: ["https://gamewheelclub.com/icon.jpg"],
  },
};

export default function Home() {
  const jsonLdSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "GameWheelClub Random Decision Wheel",
      "operatingSystem": "All",
      "applicationCategory": "UtilitiesApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "description": "Free browser-based decision-wheel utility for fair, unbiased choices.",
      "url": "https://gamewheelclub.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is this decision wheel completely random?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our wheel utilizes a secure pseudorandom number generator (PRNG) in JavaScript to guarantee completely unbiased outcomes.",
          },
        },
        {
          "@type": "Question",
          "name": "Is my option list stored on the server?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, your options never leave your device. All calculations and storage happen locally on your browser using localStorage.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use this for names and giveaways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, many teachers, content creators, and event coordinators use GameWheelClub to draw random names or giveaway winners.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Spin the Decision Wheel",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Enter Your Options",
          "text": "Add options one by one, or paste a list of names/items into the bulk editor.",
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Hit Spin",
          "text": "Click the spin button to set the wheel in motion with retro clicking sound effects.",
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Get Your Winner",
          "text": "The pointer selects the final option fairly and transparently. No server manipulation.",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
      />
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4 animate-bounce">
            <Sparkles className="w-4 h-4" />
            Decision Making Made Easy
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Spin the Wheel of Decisions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
            Can&apos;t make up your mind? Input your options, spin the wheel, and let fate decide instantly! Fast, fair, and fun.
          </p>
        </section>

        {/* Wheel Spinner Section */}
        <section className="mb-16">
          <WheelSpinner />
        </section>

        {/* Context / Informational Copy (300-700 words) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              Why Use a Random Choice Wheel?
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Decision fatigue is real. From choosing what to eat for dinner, picking a movie for family night, to selecting a random winner in a classroom or raffle, making choices can drain your energy.
              </p>
              <p>
                A <strong>random decision wheel</strong> (often called a spinner wheel) is a simple, visual, and unbiased way to make a choice. It eliminates bias and overthinking by leaving the final outcome to pure, randomized mathematical probability.
              </p>
              <p>
                Whether you need to pick a name, decide a yes-no question, or choose between multiple ideas, the GameWheelClub decision wheel is built to be fast, simple, and responsive on all devices.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              How GameWheelClub Works
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-border bg-retro-mint flex items-center justify-center font-bold text-retro-navy">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg">Enter Your Options</h3>
                  <p className="text-sm opacity-90">Add options one by one, or paste a list of names/items into the bulk editor.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-border bg-retro-blue flex items-center justify-center font-bold text-retro-navy">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg">Hit Spin</h3>
                  <p className="text-sm opacity-90">Click the spin button to set the wheel in motion with retro clicking sound effects.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-border bg-retro-orange flex items-center justify-center font-bold text-retro-navy">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg">Get Your Winner</h3>
                  <p className="text-sm opacity-90">The pointer selects the final option fairly and transparently. No server manipulation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy my-12">
          <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-center border-b-3 border-retro-navy dark:border-cream pb-3">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-retro-orange" />
                Is this decision wheel completely random?
              </h3>
              <p className="text-sm opacity-95">
                Yes, our wheel utilizes a secure pseudorandom number generator (PRNG) in JavaScript to guarantee completely unbiased outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-retro-mint" />
                Is my option list stored on the server?
              </h3>
              <p className="text-sm opacity-95">
                No, your options never leave your device. All calculations and storage happen locally on your browser using localStorage.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-retro-blue" />
                Can I use this for names and giveaways?
              </h3>
              <p className="text-sm opacity-95">
                Absolutely! Many teachers, content creators, and event coordinators use GameWheelClub to draw random names or giveaway winners.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
