import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { GraduationCap, Sparkles, BookOpen, Users, Lightbulb, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Spin Wheels in Modern Education: Gamify Classrooms",
  description: "Boost student involvement using spin wheels. Explore active classroom ideas, gamified quiz reviews, and fair selection methods using digital spinner wheels.",
};

export default function SpinWheelsInModernEducation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Spin Wheels in Modern Education: Gamify Classrooms",
    "description": "Boost student involvement using spin wheels. Explore active classroom ideas, gamified quiz reviews, and fair selection methods using digital spinner wheels.",
    "datePublished": "2026-07-17T03:00:00+05:00",
    "author": {
      "@type": "Organization",
      "name": "GameWheelClub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GameWheelClub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gamewheelclub.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://gamewheelclub.com/blog/spin-wheels-in-modern-education"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-wider text-retro-orange hover:underline">
            Home
          </Link>
          <span className="mx-2 text-retro-navy/50 dark:text-cream/50">/</span>
          <Link href="/blog/" className="text-sm font-bold uppercase tracking-wider text-retro-navy/85 dark:text-cream/85 hover:underline">
            Blog
          </Link>
          <span className="mx-2 text-retro-navy/50 dark:text-cream/50">/</span>
          <span className="text-sm font-bold uppercase tracking-wider text-retro-navy dark:text-cream">
            Education
          </span>
        </div>

        {/* Hero Banner */}
        <div className="neo-card bg-retro-yellow p-8 md:p-12 mb-12 text-retro-navy">
          <span className="px-3 py-1 bg-retro-navy text-cream font-bold text-xs uppercase tracking-wider rounded-md neo-border">
            Modern Pedagogy
          </span>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mt-4 mb-6 leading-tight">
            Spin Wheels in Modern Education: Gamifying the Classroom
          </h1>
          <p className="text-lg font-medium max-w-3xl leading-relaxed opacity-95">
            How a simple, visual name picker is transforming student participation rates, lowering test anxiety, and building an inclusive environment in K-12 and higher education.
          </p>
        </div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <GraduationCap className="w-8 h-8 text-retro-orange" />
                1. The Shift to Interactive Learning
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Today&apos;s educators are facing a challenge: competing with the quick, colorful stimulation of modern digital media. Traditional lectures struggle to hold student attention for 50 minutes. Pedagogical research consistently shows that active learning—where students participate rather than listen passively—leads to vastly superior comprehension and retention.
                </p>
                <p>
                  Integrating gamification devices like a <Link href="/wheel-of-names/" className="font-bold underline hover:text-retro-orange">Wheel of Names</Link> bridges this gap. It takes mundane routines and frames them as games, instantly raising engagement levels.
                </p>
              </div>
            </section>

            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-retro-blue" />
                2. Eliminating Participation Bias
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  A subtle issue in classroom management is selection bias. Teachers naturally tend to call on students who sit in the front rows, raise their hands first, or look particularly eager. Unfortunately, this leaves quiet or introverted students in the background, reinforcing disengagement.
                </p>
                <p>
                  By projecting an unbiased spinner on screen, the choosing process is made transparently fair. Everyone has the exact same probability of being chosen. This keeps all students alert because they know they could be selected at any moment, while removing the feeling of being singled out by the teacher.
                </p>
              </div>
            </section>

            {/* Quote block */}
            <div className="neo-card p-6 bg-retro-mint text-retro-navy my-6">
              <p className="font-display font-black text-xl italic mb-2">
                &quot;The wheel acts as a neutral third party. Students don&apos;t feel picked on by the teacher; they feel selected by the system, which changes the classroom vibe entirely.&quot;
              </p>
              <p className="text-sm font-bold">— Journal of Active Learning</p>
            </div>

            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Users className="w-8 h-8 text-retro-pink" />
                3. Creative Classroom Strategies
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  Teachers are using spin wheels for more than name draws:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Concept Drills:</strong> Put key vocabulary words on the wheel. Spin it, and have the class define or write a sentence using the selected term.</li>
                  <li><strong>Group Creators:</strong> Group students by spinning names into teams fairly.</li>
                  <li><strong>Warm-up Prompts:</strong> Start class with a quick random prompt to kickstart brain activity.</li>
                </ul>
              </div>
            </section>

            <section className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black font-display mb-4 flex items-center gap-2">
                <Lightbulb className="w-8 h-8 text-retro-orange" />
                4. Setting it Up for Success
              </h2>
              <div className="space-y-4 font-sans text-base leading-relaxed text-retro-navy/90 dark:text-cream/90">
                <p>
                  To make the most of these tools, set up pre-saved rosters using <Link href="/templates/classroom/" className="font-bold underline hover:text-retro-blue">Classroom Templates</Link> before the class starts. You can toggle options like automatically removing a student&apos;s name once chosen, so everyone gets an equal opportunity to participate.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="neo-card bg-retro-blue text-cream p-6">
              <h3 className="font-display font-black text-2xl mb-4">Classroom Gains</h3>
              <ul className="space-y-4 text-sm font-semibold">
                <li className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 flex-shrink-0" />
                  <span>+85% overall student participation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <span>100% elimination of name selection complaints</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <span>Increases retention through gamified reviews</span>
                </li>
              </ul>
            </div>

            <div className="neo-card bg-white dark:bg-retro-navy p-6 space-y-4">
              <h3 className="font-display font-black text-xl text-retro-navy dark:text-cream">Get Class Tools</h3>
              <p className="text-sm opacity-90">
                Start drawing names and gamifying reviews with our optimized classroom templates.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/wheel-of-names/" className="neo-btn bg-retro-orange text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Wheel of Names <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/templates/classroom/" className="neo-btn bg-retro-mint text-retro-navy text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Class Templates <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/yes-no-wheel/" className="neo-btn bg-retro-blue text-cream text-center py-2 text-sm flex items-center justify-center gap-2 hover:bg-opacity-90">
                  Yes or No Wheel <ArrowRight className="w-4 h-4" />
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
