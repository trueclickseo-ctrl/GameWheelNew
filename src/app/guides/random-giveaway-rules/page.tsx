import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldAlert, Scale, CheckSquare, Award, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Random Giveaway Rules & Legal Compliance Guidelines",
  description: "Stay compliant when running online giveaways. Understand sweepstakes laws, the no-purchase-necessary rule, and platform guidelines for fair contests.",
};

export default function RandomGiveawayRules() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-wider text-retro-orange hover:underline">
            Home
          </Link>
          <span className="mx-2 text-retro-navy/50 dark:text-cream/50">/</span>
          <span className="text-sm font-bold uppercase tracking-wider text-retro-navy dark:text-cream">
            Guides
          </span>
        </div>

        {/* Hero Banner */}
        <div className="neo-card bg-retro-yellow p-8 md:p-12 mb-12 text-retro-navy">
          <span className="px-3 py-1 bg-retro-navy text-cream font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Legal & Compliance
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            How to Run Random Giveaways legally & Fairly
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Sweepstakes, contests, or lotteries? Navigating the laws of promotional draws is essential to protect your brand and respect your audience. Learn the rules of random selection compliance.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: Legal Categorization */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <ShieldAlert className="w-8 h-8 text-retro-orange" />
                1. Sweepstakes vs. Contests vs. Lotteries
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To run a promotional giveaway, you must understand how local and international laws categorize your event. Legally, promotions are divided into three distinct buckets: sweepstakes, contests, and lotteries. A lottery is strictly regulated, and in almost all jurisdictions, running a private lottery without a state license is illegal.
                </p>
                <p>
                  A promotion is classified as a lottery if it contains all three of the following elements:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prize:</strong> An item of value awarded to a winner.</li>
                  <li><strong>Chance:</strong> The winner is selected purely by random selection (e.g., spinning a wheel, rolling dice, drawing a name).</li>
                  <li><strong>Consideration:</strong> A payment, purchase, or substantial effort required from the participant to enter.</li>
                </ul>
                <p>
                  To stay compliant, you must remove at least one of these three elements:
                </p>
                <p>
                  <strong>How to create a Sweepstakes (Remove Consideration):</strong> Keep the prize and the element of chance, but remove any entry fee or purchase requirement. This is the origin of the mandatory phrase: <em>&quot;No Purchase Necessary to Enter or Win.&quot;</em> Anyone must be able to enter for free.
                </p>
                <p>
                  <strong>How to create a Contest (Remove Chance):</strong> Keep the prize and the entry requirement (if desired), but remove chance. Instead of a random draw, the winner must be selected by judges based on skill, merit, or creative effort.
                </p>
              </div>
            </section>

            {/* Section 2: Platform Compliance */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Scale className="w-8 h-8 text-retro-blue" />
                2. Social Media Platform Rules
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  If you are hosting a giveaway on platforms like Instagram, YouTube, TikTok, or Facebook, you must also adhere to their specific terms of service. Failure to comply can result in account suspension or post-removal.
                </p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong>Instagram & Facebook:</strong> You must include a complete release of Instagram/Facebook by each entrant and acknowledge that the promotion is in no way sponsored, endorsed, or administered by the platform. You cannot encourage users to inaccurately tag friends in photos.
                  </li>
                  <li>
                    <strong>YouTube:</strong> YouTube requires you to display clear rules, state that entries must comply with community guidelines, and provide a link to your official terms. You must not manipulate metrics (e.g., views, likes, or subscriber counts) as part of entry criteria.
                  </li>
                  <li>
                    <strong>TikTok:</strong> Similar to Instagram, you must release TikTok of liability, publish clear rules, and ensure your sweepstakes does not violate local gambling regulations.
                  </li>
                </ul>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-mint text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;Transparency is the cornerstone of trust. A public, randomized selection process reassures your audience that the contest was never rigged.&quot;
              </p>
              <p className="text-sm font-bold">— Brand Trust & Compliance Officers</p>
            </div>

            {/* Section 3: Ensuring Unbiased Draws */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <CheckSquare className="w-8 h-8 text-retro-mint" />
                3. Ensuring a Fair Draw with Digital Wheels
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Once your entries are collected, you must draw a winner fairly. Picking a winner behind closed doors can lead to accusations of favoritism or fraud. To prevent this, many brands stream their draws live or upload screen recordings of the selection process.
                </p>
                <p>
                  Using a digital randomizer tool like the <Link href="/wheel-of-names/" className="font-bold underline hover:text-retro-orange">Wheel of Names</Link> provides a clear, visual validation of fairness. You simply paste your list of entrants, click spin, and let the unbiased browser-side algorithm choose the winner.
                </p>
                <p>
                  Ensure you record the screen or host a live stream during the draw. This provides a transparent audit trail, protecting your reputation and reassuring your community that the winner was selected fairly.
                </p>
              </div>
            </section>

            {/* Section 4: Writing Official Rules */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Award className="w-8 h-8 text-retro-yellow text-retro-navy" />
                4. Writing Your Official Rules: A Checklist
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Before launching, publish a simple document or landing page containing your official rules. Here is a checklist of what to include:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Eligibility requirements:</strong> State who can enter (e.g., minimum age, geographic restrictions).</li>
                  <li><strong>Entry periods:</strong> Clearly list the exact start and end dates/times, including timezone.</li>
                  <li><strong>Description of prizes:</strong> Describe the prize and its approximate retail value.</li>
                  <li><strong>How winner is selected:</strong> State that the winner will be drawn at random (e.g., using GameWheelClub).</li>
                  <li><strong>How winners are notified:</strong> Detail the method of contact (e.g., email, DM) and how long they have to claim their prize before a redraw occurs.</li>
                </ol>
                <p>
                  By taking these steps, you protect your business legally while building credibility and trust with your online community.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-orange p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Compliance Check</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <Scale className="w-5 h-5 flex-shrink-0" />
                  <span>Must remove Consideration for sweepstakes</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <span>Strict anti-lottery regulations apply globally</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 flex-shrink-0" />
                  <span>Audit-ready visual draws prevent legal claims</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Host Your Draw</h3>
              <p className="text-sm opacity-90">
                Ready to draw your winner? Paste your participant list and let the wheel choose!
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/wheel-of-names/" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Wheel of Names <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/party-games/" className="neo-btn bg-retro-mint text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Party Templates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
