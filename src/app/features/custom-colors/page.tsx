import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Eye, Contrast, LayoutGrid, Heart, Sparkles, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Colors & Neobrutalist Themes | GameWheelClub",
  description: "Customize the colors, typography, and styling of your decision wheels. Learn how neobrutalist designs, accessible contrast, and CSS palettes power GameWheelClub visual tools.",
};

export default function CustomColorsFeature() {
  return (
    <>
      
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider mb-2 opacity-75">
            <Link href="/" className="hover:text-retro-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-retro-navy dark:text-cream">Features</span>
            <span>/</span>
            <span className="text-retro-orange">Custom Colors</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Custom Colors & Neobrutalist Themes: Styling Your Decisions
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-3xl leading-relaxed">
            Unleash your creativity. Set up custom colors, apply retro presets, and leverage accessible high-contrast themes designed for teachers, presenters, and gamers.
          </p>
        </div>

        {/* Hero Alert/Highlight Card */}
        <section className="neo-card p-6 bg-retro-yellow text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <Palette className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Retro Aesthetics & High Contrast</h2>
              <p className="text-sm font-medium leading-relaxed">
                GameWheelClub is built on a custom <strong>Neobrutalist design system</strong>: flat colors, heavy borders, thick offsets, and vibrant high-contrast shapes. This isn&apos;t just for retro aesthetics—it increases visual clarity and makes it incredibly easy to distinguish wheel slices even from the back of a large classroom or auditorium.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The Neobrutalist Theme */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            1. The Psychology of Neobrutalist Styling
          </h2>
          <p className="font-medium leading-relaxed">
            Neobrutalism in digital interface design breaks away from the quiet, minimalist layouts of the past decade. By using pure colors, sharp black shadows, and thick lines, it channels the aesthetic of early retro computing and print design.
          </p>
          <p className="font-medium leading-relaxed">
            When applied to decision tools like the <Link href="/decision-wheel/" className="font-bold underline decoration-retro-blue hover:text-retro-blue">Decision Wheel</Link> or <Link href="/yes-no-wheel/" className="font-bold underline decoration-retro-orange hover:text-retro-orange">Yes or No Wheel</Link>, this style translates to immediate usability. We replace modern gradients with solid blocks of color separated by dark borders. This prevents colors from blending together when the wheel is spinning fast, keeping the slices distinct and reducing eye strain.
          </p>
        </section>

        {/* Section 2: Building Color Palettes */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            2. The Anatomy of GameWheelClub Palette Presets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-4">
              <p className="leading-relaxed">
                When creating a custom wheel, users can select from built-in palettes or design their own. A perfect wheel palette balances contrast and aesthetic harmony. We offer four distinct theme paradigms:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
                <li>
                  <strong>Retro Pastel:</strong> Features soft, desaturated versions of mint, cream, and sky blue. Great for long team brainstorming sessions where bright colors could feel overwhelming.
                </li>
                <li>
                  <strong>High Contrast Neon:</strong> Uses ultra-bright yellows, hot pinks, and lime greens. Perfect for Twitch streams, live giveaways, and virtual classroom games.
                </li>
                <li>
                  <strong>Monochrome Noir:</strong> Employs alternating shades of black, gray, and white. A clean, architectural palette ideal for formal decisions.
                </li>
                <li>
                  <strong>Custom Brand Match:</strong> Input hexadecimal, RGB, or HSL color codes to align the wheel perfectly with your company&apos;s brand or school colors.
                </li>
              </ul>
            </div>

            <div className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-black mb-3 flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-retro-mint" />
                  Color Contrast Rules
                </h3>
                <p className="text-sm mb-4 leading-relaxed">
                  To ensure legibility, our palette generator implements WCAG 2.1 accessibility guidelines. The system dynamically evaluates the color luminance of each slice to select the appropriate text color:
                </p>
                <div className="p-3 bg-cream dark:bg-slate-800 rounded border border-retro-navy/20 space-y-2 text-xs">
                  <div className="flex justify-between items-center p-2 bg-retro-navy text-cream rounded">
                    <span>Dark Slices (e.g. Navy)</span>
                    <span className="font-bold">White/Cream Text</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-retro-yellow text-retro-navy rounded">
                    <span>Light Slices (e.g. Yellow)</span>
                    <span className="font-bold">Navy/Black Text</span>
                  </div>
                </div>
                <p className="text-xs mt-3 opacity-85 leading-relaxed">
                  Luminance is calculated using the standard formula: <br />
                  <code>Y = 0.2126 * R + 0.7152 * G + 0.0722 * B</code>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Color Customization */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            3. How to Customize Your Wheel Colors
          </h2>
          <div className="space-y-4 font-medium">
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">1</span>
              <p className="flex-1">
                Go to the <Link href="/decision-wheel/" className="font-bold underline hover:text-retro-orange">Decision Wheel</Link> or the <Link href="/wheel-of-names/" className="font-bold underline hover:text-retro-mint">Wheel of Names</Link>.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">2</span>
              <p className="flex-1">
                Open the &quot;Theme & Styling&quot; panel in the sidebar menu.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">3</span>
              <p className="flex-1">
                Choose a pre-defined theme (e.g. &quot;Retro Arcade&quot; or &quot;Modern Mint&quot;), or click &quot;Create Custom Theme&quot;.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">4</span>
              <p className="flex-1">
                Add or remove colors using our visual picker or enter your brand HEX codes.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-retro-navy text-cream flex items-center justify-center font-bold text-sm">5</span>
              <p className="flex-1">
                Save the theme to your profile (automatically stored in local storage for future visits).
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 font-medium">
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-orange">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Will my custom colors save if I close my browser tab?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes! Your custom color schemes are saved in your browser&apos;s local storage. The next time you open GameWheelClub on this device, your palettes will automatically load.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Can I set a specific color for a single item?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes, in our Advanced Options editor, you can toggle the color picker next to each individual list entry. This is incredibly useful for yes-no wheels where you want &quot;Yes&quot; to always be green and &quot;No&quot; to always be red.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-mint">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Are these themes accessible to color-blind users?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes! We offer a specialized &quot;Accessible High-Contrast&quot; palette that relies on alternating shapes, high luminance variance, and specific color pairings optimized for deuteranopia, protanopia, and tritanopia color blindness.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-cream dark:bg-slate-800 neo-border p-8 rounded-xl">
          <h2 className="text-2xl font-black mb-4">Start Styling Your Wheel</h2>
          <p className="text-sm font-medium mb-6 max-w-xl mx-auto opacity-90">
            Open the custom spinner panel, select a retro template or define your own colors, and make your decision wheel unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/decision-wheel/" className="neo-btn px-6 py-3 bg-retro-orange text-retro-navy hover:bg-opacity-90">
              Style a Decision Wheel
            </Link>
            <Link href="/wheel-of-names/" className="neo-btn px-6 py-3 bg-retro-mint text-retro-navy hover:bg-opacity-90">
              Custom Name Spinner
            </Link>
          </div>
        </section>
      </main>

      
    </>
  );
}
