import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { Users, PartyPopper, CheckCircle, HelpCircle, Shuffle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Icebreaker Games Guide: Team-Building & Virtual Meetups",
  description: "Learn how to host high-energy icebreaker games. Discover creative spinners, question Prompts, and team-building strategies for physical and virtual teams.",
};

export default function IcebreakerGamesGuide() {
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
        <div className="neo-card bg-retro-mint p-8 md:p-12 mb-12 text-retro-navy">
          <span className="px-3 py-1 bg-retro-navy text-cream font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Host & Facilitator Manual
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            The Ultimate Guide to Icebreaker Games
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl leading-relaxed opacity-95">
            Tired of awkward silences in team meetings or social events? Learn the science of icebreaking, how to establish a low-pressure social atmosphere, and how to utilize random game spinners effectively.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Section 1: Psychology of Play */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Users className="w-8 h-8 text-retro-orange" />
                1. The Psychology of Play: Breaking Social Barriers
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Entering a room filled with strangers—or joining a virtual call with a brand new project team—triggers natural social defense mechanisms. We fear judgment, feel pressure to sound intelligent, and hesitate to speak up. This initial friction can stall collaboration and hinder open communication.
                </p>
                <p>
                  Psychologists refer to the &quot;affective filter&quot;—a mental screen that can block learning and authentic connection when anxiety is high. To lower this barrier, we must shift the environment from formal and evaluative to playful and creative. Playing games triggers the release of endorphins, which helps individuals relax and feel more connected to those around them.
                </p>
                <p>
                  A digital randomizer, such as our client-side <Link href="/decision-wheel" className="font-bold underline hover:text-retro-orange">Decision Wheel</Link>, is highly effective for this shift. It introduces a shared focal point. By placing the attention on a spinning visual interface, participants are relieved of individual scrutiny, allowing them to relax and engage naturally.
                </p>
              </div>
            </section>

            {/* Section 2: Virtual vs In-Person Icebreakers */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <PartyPopper className="w-8 h-8 text-retro-blue" />
                2. Innovative Icebreaker Formats using Spinners
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Rather than defaulting to the cliché &quot;two truths and a lie&quot; or the dreaded round-robin self-introductions, try these high-engagement templates:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="neo-card p-6 bg-white dark:bg-slate-800">
                    <h3 className="font-bold text-lg mb-2 text-retro-orange">The Curiosity Wheel</h3>
                    <p className="text-sm opacity-90">
                      Populate the wheel with interesting, non-invasive questions: &quot;What was your first concert?&quot; &quot;What&apos;s your absolute favorite kitchen appliance?&quot; or &quot;Would you rather travel 100 years into the past or the future?&quot; Spin the wheel and let the active speaker answer.
                    </p>
                  </div>
                  
                  <div className="neo-card p-6 bg-white dark:bg-slate-800">
                    <h3 className="font-bold text-lg mb-2 text-retro-blue">Speed Storytelling</h3>
                    <p className="text-sm opacity-90">
                      Combine a digital wheel with a <Link href="/timer" className="font-bold underline hover:text-retro-orange">Timer</Link>. Spin the wheel to get a topic, and challenge the team member to talk about that topic for exactly 45 seconds without using the words &quot;like&quot; or &quot;um.&quot;
                    </p>
                  </div>
                </div>

                <p>
                  These activities are designed to prompt quick, authentic responses that highlight shared interests. Learning that your quietest developer has a passion for building artisanal pizzas creates immediate social bridge-points that improve collaborative work later on.
                </p>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-yellow text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;You can discover more about a person in an hour of play than in a year of conversation.&quot;
              </p>
              <p className="text-sm font-bold">— Plato</p>
            </div>

            {/* Section 3: Facilitator Checklist */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-retro-mint" />
                3. The Golden Rules of Group Icebreakers
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To ensure your icebreaker is a success rather than a source of anxiety, adhere to these guidelines:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Keep it Opt-In:</strong> Never force a participant to share details they are uncomfortable with. Offer a &quot;re-spin&quot; card or pass option if a question feels too personal.</li>
                  <li><strong>Leading by Example:</strong> The facilitator should go first. Share a funny, vulnerable, or self-deprecating story to set the tone and establish a safe space.</li>
                  <li><strong>Limit the Time:</strong> Keep icebreakers between 5 and 15 minutes. The goal is to warm up the room, not exhaust participants before the main agenda begins.</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Launching the Game */}
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Shuffle className="w-8 h-8 text-retro-yellow text-retro-navy" />
                4. Setting Up Your Next Meeting
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Preparing your icebreakers is simple. Open our <Link href="/templates/party-games" className="font-bold underline hover:text-retro-blue">Party Games Templates</Link>, choose a pre-formatted template, customize it with your team&apos;s specific details, and share your screen over Zoom or Teams. Incorporating sound effects and a colorful visual spinner guarantees a highly interactive experience for your next team gathering.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats Card */}
            <div className="neo-card bg-retro-orange p-6 text-cream">
              <h3 className="font-display font-black text-2xl mb-4">Icebreaker Stats</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  <span>93% of workers prefer meetings with a short warmup</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <span>Improves collaborative output by up to 25%</span>
                </li>
                <li className="flex items-center gap-2">
                  <PartyPopper className="w-5 h-5 flex-shrink-0" />
                  <span>Laughter reduces stress hormones and increases focus</span>
                </li>
              </ul>
            </div>

            {/* Related Tools Card */}
            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl">Let&apos;s Play</h3>
              <p className="text-sm opacity-90">
                Create a customized wheel for your event or use our curated templates to start immediately.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/decision-wheel" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Decision Wheel <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/party-games" className="neo-btn bg-retro-mint text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
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
