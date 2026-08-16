import type { Metadata } from "next";
import Link from "next/link";
import { Volume2, Music, Waves, Radio, Settings, HelpCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Audio Sound Effects & Synthesizers | GameWheelClub",
  description: "Learn how procedural audio generation and browser Web Audio API create high-fidelity, interactive, and responsive retro sound effects for GameWheelClub tools.",
};

export default function SoundEffectsFeature() {
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
            <span className="text-retro-orange">Sound Effects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Sound Effects: The Technology of Procedural Web Audio
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-3xl leading-relaxed">
            Discover how we use pure mathematics and browser-native synth generators to craft delightful, tactile clicking and fanfare sounds that mimic mechanical wheels.
          </p>
        </div>

        {/* Hero Alert/Highlight Card */}
        <section className="neo-card p-6 bg-retro-blue text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <Volume2 className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Tactile Audio Feedback</h2>
              <p className="text-sm font-medium leading-relaxed">
                Why does spinning a physical wheel feel so satisfying? It&apos;s the click-click-click of the plastic flapper hitting the metal pins. On GameWheelClub, we simulate this tactile physics through real-time procedural synthesizers. No heavy MP3 file downloads—just fast, mathematically generated retro audio signals.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The Role of Sound */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            1. Why Audio Interactions Matter
          </h2>
          <p className="font-medium leading-relaxed">
            In digital product design, feedback loops confirm actions and build anticipation. When you spin a decision wheel, the visual movement is half the experience; the sound of the spinner ticking builds the emotional tension. The speed of the clicks matches the angular velocity of the wheel: fast at first, then slowly dragging to a stop, concluding with a celebratory chime.
          </p>
          <p className="font-medium leading-relaxed">
            We use these auditory cues across all our primary tools. For example, in the <Link href="/timer/" className="font-bold underline decoration-retro-orange hover:text-retro-orange">Timer</Link>, synthetic countdown beeps alert you as time runs out. In the <Link href="/dice-roller/" className="font-bold underline decoration-retro-blue hover:text-retro-blue">Dice Roller</Link>, a rumbling rolling noise mimics dice bouncing in a cup.
          </p>
        </section>

        {/* Section 2: Technical Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            2. The Engineering: Browser Web Audio API
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-4">
              <p className="leading-relaxed">
                Rather than loading pre-recorded audio files, GameWheelClub leverages the browser&apos;s native <strong>Web Audio API</strong> to generate procedural sound effects. This has three massive benefits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Zero Network Overhead:</strong> No audio files to fetch, saving mobile bandwidth.</li>
                <li><strong>Dynamic Pitch & Speed:</strong> Sound parameters (pitch, frequency, duration) shift dynamically based on wheel angular velocity.</li>
                <li><strong>Zero Latency:</strong> Sounds play instantly, avoiding the delays common with HTML5 audio tags.</li>
              </ul>
              <p className="text-sm leading-relaxed">
                The click sound is synthesised by creating a short-duration (15ms) sound wave. We use a <strong>GainNode</strong> to decay the volume rapidly, creating an envelope that sounds like a dry plastic click.
              </p>
            </div>

            <div className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between font-mono">
              <div>
                <h3 className="text-lg font-black font-sans mb-3 flex items-center gap-2">
                  <Waves className="w-5 h-5 text-retro-orange" />
                  Procedural Click Synth Code
                </h3>
                <pre className="text-xs bg-cream dark:bg-slate-800 p-4 rounded border border-retro-navy/20 overflow-x-auto">
{`// Generate a realistic click on the fly
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gain = ctx.createGain();

osc.type = 'triangle';
osc.frequency.setValueAtTime(400, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.015);

gain.gain.setValueAtTime(volume, ctx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.015);

osc.connect(gain);
gain.connect(ctx.destination);
osc.start();
osc.stop(ctx.currentTime + 0.015);`}
                </pre>
              </div>
              <p className="text-xs font-sans mt-3 text-retro-blue">
                This lightweight synth runs entirely in the background worker threads.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Audio Profiles */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            3. GameWheelClub Audio Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-medium">
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-yellow">
              <h3 className="font-black text-lg mb-2">Classic Clicker</h3>
              <p className="text-xs opacity-90 leading-relaxed">
                Replicates the traditional mechanical flapper. Short, snappy, and adjusts pitch relative to physical deceleration.
              </p>
            </div>
            
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-blue">
              <h3 className="font-black text-lg mb-2">8-Bit Arcade</h3>
              <p className="text-xs opacity-90 leading-relaxed">
                Uses square waves to create a nostalgic, synthesized chirp reminiscent of classic console games.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-mint">
              <h3 className="font-black text-lg mb-2">Modern Chime</h3>
              <p className="text-xs opacity-90 leading-relaxed">
                Smooth sine waves and bell tones designed for calm classroom environments and professional team meetings.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-orange">
              <h3 className="font-black text-lg mb-2">Fanfare / Winner</h3>
              <p className="text-xs opacity-90 leading-relaxed">
                A mathematical harmonic chord synthesizer that erupts in celebration when the spinner lands on the selected target.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Browser Autoplay Policy Warning */}
        <section className="neo-card p-6 bg-retro-yellow text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <AlertCircle className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Understanding Browser Autoplay Constraints</h2>
              <p className="text-sm font-medium leading-relaxed">
                Modern browsers (Chrome, Safari, Edge) block audio playback until a user interacts with the page. This prevents unwanted ad sounds. Because of this security constraint, GameWheelClub initializes the Web Audio API context only after you click the page or hit the Spin button for the first time.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-6 font-medium">
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-orange">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Why is there no sound when the wheel spins?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                First, check that your device volume is turned up. Second, ensure you have clicked the screen at least once. Modern browsers block sound from starting automatically without a user interaction.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Can I turn the sound effects off entirely?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes! There is a speaker toggle in the spinner controller dashboard. Clicking it will instantly suspend the audio context, completely silencing all sound effects.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-mint">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Do these sound effects require an internet connection?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                No, because all sounds are synthesized programmatically inside your browser, the audio system works 100% offline.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-cream dark:bg-slate-800 neo-border p-8 rounded-xl">
          <h2 className="text-2xl font-black mb-4">Experience the Synthesizer</h2>
          <p className="text-sm font-medium mb-6 max-w-xl mx-auto opacity-90">
            Spin the wheel, flip a coin, or set up a countdown to hear the procedural synth engine adapt to your interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/decision-wheel/" className="neo-btn px-6 py-3 bg-retro-orange text-retro-navy hover:bg-opacity-90">
              Spin Decision Wheel
            </Link>
            <Link href="/timer/" className="neo-btn px-6 py-3 bg-retro-blue text-retro-navy hover:bg-opacity-90">
              Launch Countdown Timer
            </Link>
          </div>
        </section>
      </main>

      
    </>
  );
}
