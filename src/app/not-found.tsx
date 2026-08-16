import Link from "next/link";
import { HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      

      <main className="flex-1 flex flex-col items-center justify-center text-center py-20 px-6 max-w-xl mx-auto">
        <div className="p-6 rounded-full neo-border bg-retro-orange text-retro-navy mb-6 animate-bounce">
          <HelpCircle className="w-16 h-16 text-white" />
        </div>

        <h1 className="text-6xl font-black font-display text-retro-navy dark:text-cream mb-4">
          404
        </h1>
        <h2 className="text-2xl font-black font-display mb-4">
          Decision Unknown!
        </h2>
        <p className="font-semibold opacity-90 mb-8">
          The page you are looking for has spun off our wheel. Let&apos;s get you back to the main track.
        </p>

        <Link
          href="/"
          className="px-8 py-3 neo-btn bg-retro-yellow text-retro-navy font-bold text-lg hover:scale-105 transition-transform"
        >
          Return Home
        </Link>
      </main>

      
    </>
  );
}
