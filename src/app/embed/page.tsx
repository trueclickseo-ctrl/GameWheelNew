"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import WheelSpinner from "@/components/WheelSpinner";

function EmbedWheelContent() {
  const searchParams = useSearchParams();
  const [options, setOptions] = useState<string[]>(["Yes", "No", "Yes", "No"]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    try {
      const d = searchParams.get("d");
      const optsParam = searchParams.get("options");
      const titleParam = searchParams.get("title");

      if (titleParam) {
        setTitle(titleParam);
      }

      if (d) {
        const decoded = decodeURIComponent(atob(d));
        const parsed = JSON.parse(decoded);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setOptions(parsed);
          return;
        }
      }

      if (optsParam) {
        const list = optsParam.split(",").map((s) => s.trim()).filter(Boolean);
        if (list.length > 0) {
          setOptions(list);
        }
      }
    } catch (err) {
      console.error("Failed to parse embed options:", err);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-cream dark:bg-retro-navy text-retro-navy dark:text-cream flex flex-col justify-between items-center p-4">
      <div className="w-full max-w-2xl flex-1 flex flex-col items-center justify-center">
        {title && (
          <h2 className="text-xl md:text-2xl font-black font-display text-center mb-4 text-retro-navy dark:text-cream">
            {title}
          </h2>
        )}
        <div className="w-full">
          <WheelSpinner initialOptions={options} storageKey="gamewheelclub-embed" />
        </div>
      </div>

      {/* Powered by attribution footer link */}
      <footer className="mt-4 pt-2 text-center text-xs font-bold opacity-80 border-t border-retro-navy/10 dark:border-cream/10 w-full max-w-2xl flex items-center justify-center gap-1">
        <span>Powered by</span>
        <a
          href="https://www.gamewheelclub.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-retro-orange hover:underline font-extrabold"
        >
          GameWheelClub.com
        </a>
      </footer>
    </div>
  );
}

export default function EmbedPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream dark:bg-retro-navy flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-retro-orange border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <EmbedWheelContent />
    </Suspense>
  );
}
