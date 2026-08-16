import type { Metadata } from "next";
import Link from "next/link";
import { Database, ShieldAlert, Cpu, HardDrive, Share2, HelpCircle, WifiOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Local Storage & Data Privacy | GameWheelClub Features",
  description: "Learn how GameWheelClub uses native browser localStorage to save your wheels, names, and templates offline. Read about our zero-server data privacy architecture.",
};

export default function LocalStorageFeature() {
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
            <span className="text-retro-orange">Local Storage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Local Storage & Offline-First Design: Privacy-First Architecture
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-3xl leading-relaxed">
            Your lists, options, and wheels are yours alone. Discover how we store configuration data directly in your browser, enabling zero-latency loading and complete offline functionality.
          </p>
        </div>

        {/* Hero Alert/Highlight Card */}
        <section className="neo-card p-6 bg-retro-yellow text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <Database className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Zero Database, Absolute Privacy</h2>
              <p className="text-sm font-medium leading-relaxed">
                Most web applications send your inputs to a remote server, where they are indexed and stored in a database. At GameWheelClub, we built our tools with a <strong>privacy-first, client-only architecture</strong>. All items, custom weights, visual colors, and presets stay on your device, stored securely in your browser&apos;s sandbox.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Why Client-Side Storage? */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            1. The Benefits of Local Storage
          </h2>
          <p className="font-medium leading-relaxed">
            Client-side data persistence means that we rely entirely on browser-native storage mechanisms. Rather than authenticating with username/password databases or transferring lists over HTTPS, we store your configuration objects locally.
          </p>
          <p className="font-medium leading-relaxed">
            This approach provides three fundamental advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-medium">
            <li>
              <strong>Instantaneous Load Times:</strong> Retrieving configurations from local solid-state drives takes fractions of a millisecond, completely bypassing the network delay associated with fetching from remote databases.
            </li>
            <li>
              <strong>Data Sovereignty:</strong> Confidential rosters, corporate brainstorming sessions, and trade secrets never leave your device. They cannot be leaked or audited on our server because they simply do not exist on our servers.
            </li>
            <li>
              <strong>Offline-First Availability:</strong> If you are a teacher working in a school with spotty Wi-Fi, or an event presenter in a remote conference room, your saved wheels will load and function without any internet connection.
            </li>
          </ul>
          <p className="font-medium leading-relaxed">
            This architectural design is implemented across all our key tools. For example, your settings in the <Link href="/wheel-of-names/" className="font-bold underline decoration-retro-blue hover:text-retro-blue">Wheel of Names</Link> are retrieved locally. Similarly, user configuration settings on the <Link href="/decision-wheel/" className="font-bold underline decoration-retro-mint hover:text-retro-mint">Decision Wheel</Link> load instantly.
          </p>
        </section>

        {/* Section 2: How It Works Under the Hood */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            2. The Engineering: JSON Serialization & LocalStorage API
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-4">
              <p className="leading-relaxed">
                When you make adjustments to a wheel or change its colors, GameWheelClub automatically serializes the layout parameters into a string and saves it via the browser&apos;s <strong>localStorage API</strong>.
              </p>
              <p className="leading-relaxed text-sm">
                Since browser local storage only supports raw string values, we use JSON serialization:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Serialization:</strong> Convert state objects (arrays of names, weight integers, hex color arrays) into a single string using <code>JSON.stringify()</code>.
                </li>
                <li>
                  <strong>Commit:</strong> Save the string using unique keys like <code>gamewheelclub_saved_wheels</code>.
                </li>
                <li>
                  <strong>Deserialization:</strong> Retrieve the string using <code>localStorage.getItem()</code> and convert it back into active state objects using <code>JSON.parse()</code>.
                </li>
              </ul>
            </div>

            <div className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between font-mono">
              <div>
                <h3 className="text-lg font-sans font-black mb-3 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-retro-orange" />
                  State Persistence Implementation
                </h3>
                <pre className="text-xs bg-cream dark:bg-slate-800 p-4 rounded border border-retro-navy/20 overflow-x-auto">
{`// Saving current wheel state locally
const wheelState = {
  items: ["Alpha", "Beta", "Gamma"],
  weights: [1, 2, 1],
  theme: "retro-arcade"
};

try {
  const serialized = JSON.stringify(wheelState);
  localStorage.setItem("gamewheelclub_wheel", serialized);
} catch (e) {
  console.error("Storage error:", e);
}`}
                </pre>
              </div>
              <p className="text-xs font-sans mt-3 text-retro-blue">
                Storage limits are bounded by the browser (usually 5MB per domain), which supports thousands of stored wheels.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Offline capability with Service Workers */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            3. Offline-First Architecture & Service Workers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium">
            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-yellow">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <WifiOff className="w-5 h-5 text-retro-orange" /> 1. App Caching
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                When you load GameWheelClub with an active internet connection, our assets (HTML, CSS, JS, fonts) are cached in the browser cache storage. The app can then run entirely without a network connection.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-blue">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-retro-blue" /> 2. Local State Access
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Because data is fetched from local storage rather than an online SQL server, you can load your saved configurations without internet access. Perfect for remote workshops.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy border-t-8 border-t-retro-mint">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-retro-mint" /> 3. Data Portability
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Want to move your lists to another machine? Our export feature allows you to download a JSON file containing all configurations, which you can import on another computer.
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
                Will clearing my browser cache delete my saved wheels?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes. If you manually run &quot;Clear Browsing Data&quot; and include &quot;Cookies and other site data,&quot; local storage will be cleared. To prevent accidental data loss, we recommend downloading your key wheels using our export backup feature.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Can I sync my saved wheels between my computer and my phone?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Because local storage is sandboxed to the specific browser on the specific device, automatic synchronization is not supported out of the box (to maintain absolute privacy). You can easily migrate wheels by exporting them as JSON files and sending them to your phone.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-mint">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Is my data secure from other websites?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes. Browsers enforce the <strong>Same-Origin Policy</strong>. This security model guarantees that only JavaScript executing on the <code>gamewheelclub.com</code> domain can read or write data saved under the GameWheelClub key. No other website can access your configurations.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-cream dark:bg-slate-800 neo-border p-8 rounded-xl">
          <h2 className="text-2xl font-black mb-4">Protect Your Decisions Offline</h2>
          <p className="text-sm font-medium mb-6 max-w-xl mx-auto opacity-90">
            Open the name selector wheel or the custom choice spinner and know that your sensitive lists remain completely local, safe, and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wheel-of-names/" className="neo-btn px-6 py-3 bg-retro-mint text-retro-navy hover:bg-opacity-90">
              Roster Name Spinner
            </Link>
            <Link href="/decision-wheel/" className="neo-btn px-6 py-3 bg-retro-blue text-retro-navy hover:bg-opacity-90">
              Try Decision Wheel
            </Link>
          </div>
        </section>
      </main>

      
    </>
  );
}
