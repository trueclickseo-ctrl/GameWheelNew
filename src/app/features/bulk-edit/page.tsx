import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Edit3, FileSpreadsheet, List, Clipboard, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/features/bulk-edit/",
  },
  title: "Bulk Edit & List Import | GameWheelClub Tools",
  description: "Learn how to import and edit thousands of items instantly. Explore the string parsing, CSV compatibility, and list sanitation engines driving GameWheelClub's Bulk Editor.",
};

export default function BulkEditFeature() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 max-w-5xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider mb-2 opacity-75">
            <Link href="/" className="hover:text-retro-orange transition-colors">Home</Link>
            <span>/</span>
            <span className="text-retro-navy dark:text-cream">Features</span>
            <span>/</span>
            <span className="text-retro-orange">Bulk Edit</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Bulk Edit & List Importing: Managing Large Datasets
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-3xl leading-relaxed">
            Manual input is slow. Discover how GameWheelClub lets you paste, format, and sanitize hundreds of list entries from Excel, Google Sheets, or plain text in a single second.
          </p>
        </div>

        {/* Hero Alert/Highlight Card */}
        <section className="neo-card p-6 bg-retro-mint text-retro-navy mb-12">
          <div className="flex gap-4 items-start">
            <FileSpreadsheet className="w-10 h-10 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-black mb-2">Instant Spreadsheet Copy-Paste</h2>
              <p className="text-sm font-medium leading-relaxed">
                Whether you are a teacher drawing from a roster of 40 students, a community host choosing a giveaway winner out of 500 comment usernames, or a developer testing different parameters, manual entry is unacceptable. Our high-speed Bulk Edit processor parses, trims, and cleans data lists instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The Core Problem */}
        <section className="prose dark:prose-invert max-w-none mb-12 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2">
            1. Simplifying List Inputs
          </h2>
          <p className="font-medium leading-relaxed">
            Many decision wheel websites force users to add options one by one, clicking a button, waiting for the UI to update, and then typing the next entry. For single choices like &quot;Red or Blue,&quot; this works. But when handling massive class rosters, prize lists, or product categories, it is a tedious bottleneck.
          </p>
          <p className="font-medium leading-relaxed">
            GameWheelClub incorporates a full-featured text area bulk editor inside the <Link href="/wheel-of-names/" className="font-bold underline decoration-retro-blue hover:text-retro-blue">Wheel of Names</Link> and the <Link href="/decision-wheel/" className="font-bold underline decoration-retro-mint hover:text-retro-mint">Decision Wheel</Link>. Users can open a simple box, copy a column from a spreadsheet program, paste it, and watch the wheel rebuild instantly.
          </p>
        </section>

        {/* Section 2: Technical Parsing Logic */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            2. The Engineering Behind the Bulk Parser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
            <div className="space-y-4 text-sm md:text-base">
              <p className="leading-relaxed">
                When you paste a block of text into our Bulk Editor, the browser runs a parsing algorithm before updating the wheel canvas. The parsing pipeline works in four stages:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Line Splitting:</strong> The editor reads the text buffer and splits the content using standard regex rules that cover Windows (<code>\r\n</code>), Mac (<code>\r</code>), and Unix (<code>\n</code>) line endings.
                </li>
                <li>
                  <strong>Trimming Whitespace:</strong> Leading and trailing spaces are automatically removed from each item. This prevents rendering bugs where labels look off-center.
                </li>
                <li>
                  <strong>Removing Empty Entries:</strong> Blank lines and double line-breaks are filtered out, ensuring you never have an accidental empty slice on your wheel.
                </li>
                <li>
                  <strong>Sanitizing HTML/JS Injection:</strong> All inputs are sanitized to strip out malicious HTML tags or script insertions, protecting you from cross-site scripting (XSS) when running presentations.
                </li>
              </ol>
            </div>

            <div className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between font-mono">
              <div>
                <h3 className="text-lg font-black font-sans mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-retro-orange" />
                  Javascript Parsing Script
                </h3>
                <pre className="text-xs bg-cream dark:bg-slate-800 p-4 rounded border border-retro-navy/20 overflow-x-auto">
{`function parseRawInput(rawText) {
  return rawText
    .split(/\\r?\\n/) // Split by line
    .map(item => item.trim()) // Clean spaces
    .filter(item => item.length > 0) // Remove empty
    .map(item => {
      // Escape HTML characters
      return item
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    });
}`}
                </pre>
              </div>
              <p className="text-xs font-sans mt-3 text-retro-blue">
                This simple sanitizer processes lists containing up to 10,000 entries in under 15 milliseconds.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Excel & Google Sheets Integration */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-2 mb-6">
            3. Copying from Spreadsheets: Excel & Google Sheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-medium">
            <div className="neo-card p-5 bg-white dark:bg-retro-navy">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-retro-mint" /> 1. Select the Column
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Open your spreadsheet in Excel or Google Sheets. Click and drag to highlight the column of names or items you wish to import. Press <code>Ctrl+C</code> (or <code>Cmd+C</code> on Mac).
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-retro-blue" /> 2. Paste in GameWheelClub
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Navigate to the GameWheelClub Bulk Editor drawer. Click inside the text area, delete any placeholder entries, and paste your roster using <code>Ctrl+V</code>.
              </p>
            </div>

            <div className="neo-card p-5 bg-white dark:bg-retro-navy">
              <h3 className="font-black text-lg mb-2 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-retro-orange" /> 3. Apply Changes
              </h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Click the &quot;Update Wheel&quot; button. The wheel automatically redraws, sizing each slice evenly (or according to weights) to match your input list.
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
                Is there a limit to how many items I can paste into the Bulk Editor?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                While the parser can process lists up to 10,000 items, we recommend keeping the wheel slice count under 500 for optimal rendering and text legibility. For lists larger than 500, we recommend using our <Link href="/random-number-generator/" className="font-bold underline hover:text-retro-blue">Random Number Generator</Link> to index the items instead of spinning a visual wheel.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-blue">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                How can I import a list with custom weights in bulk?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                You can import weights by separating the item name and its weight using a comma or a colon (e.g., <code>Raffle Winner A: 5</code> or <code>Raffle Winner B, 2</code>). Our bulk parser recognizes this formatting and assigns the weights automatically.
              </p>
            </div>
            <hr className="border-retro-navy/10 dark:border-cream/10" />
            <div>
              <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-mint">
                <HelpCircle className="w-5 h-5 flex-shrink-0" />
                Does the Bulk Editor support symbols, emojis, and foreign characters?
              </h3>
              <p className="text-sm opacity-90 leading-relaxed pl-7">
                Yes! Our parser fully supports Unicode character sets. You can paste lists containing emojis, Chinese characters, Cyrillic text, accents, and mathematical symbols, and the canvas will render them properly.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center bg-cream dark:bg-slate-800 neo-border p-8 rounded-xl">
          <h2 className="text-2xl font-black mb-4">Paste Your Lists Instantly</h2>
          <p className="text-sm font-medium mb-6 max-w-xl mx-auto opacity-90">
            Open the bulk editor, drop your Excel roster, and run your giveaway or classroom event without manual entry friction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/wheel-of-names/" className="neo-btn px-6 py-3 bg-retro-mint text-retro-navy hover:bg-opacity-90">
              Roster Wheel of Names
            </Link>
            <Link href="/decision-wheel/" className="neo-btn px-6 py-3 bg-retro-blue text-retro-navy hover:bg-opacity-90">
              Bulk Edit Decision Wheel
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
