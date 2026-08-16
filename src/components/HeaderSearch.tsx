"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { ALL_WHEELS, WheelItem } from "@/data/wheels-index";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<WheelItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const q = query.toLowerCase().trim();
    const filtered = ALL_WHEELS.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    ).slice(0, 7);

    setResults(filtered);
    setIsOpen(true);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-xs md:max-w-sm">
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-retro-navy/60 dark:text-cream/60 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.trim() && results.length > 0) setIsOpen(true);
          }}
          placeholder="Search 100+ wheels..."
          className="w-full pl-9 pr-8 py-1.5 text-xs md:text-sm font-semibold rounded-md border-2 border-retro-navy dark:border-cream bg-white dark:bg-slate-900 text-retro-navy dark:text-cream placeholder:text-retro-navy/50 dark:placeholder:text-cream/50 focus:outline-none focus:ring-2 focus:ring-retro-orange transition-all shadow-sm"
          aria-label="Search wheel library"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-2.5 p-0.5 rounded-full hover:bg-retro-navy/10 dark:hover:bg-cream/10 text-retro-navy dark:text-cream"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-retro-navy neo-border rounded-lg shadow-2xl p-2 z-50 max-h-[70vh] overflow-y-auto">
          {results.length > 0 ? (
            <div className="flex flex-col gap-1">
              <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider opacity-60">
                Found {results.length} Wheels
              </div>
              {results.map((wheel) => (
                <a
                  key={wheel.route}
                  href={wheel.route}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-cream dark:hover:bg-slate-800 transition-colors flex items-center justify-between group text-retro-navy dark:text-cream"
                >
                  <div className="flex flex-col gap-0.5 min-w-0 pr-2">
                    <span className="font-bold text-xs md:text-sm truncate flex items-center gap-1.5">
                      <span>{wheel.emoji}</span>
                      <span>{wheel.title}</span>
                    </span>
                    <span className="text-[10px] font-medium opacity-70 truncate">
                      {wheel.category} • {wheel.description}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-retro-orange" />
                </a>
              ))}
            </div>
          ) : (
            <div className="px-4 py-3 text-xs font-semibold text-center opacity-70">
              No matching wheels found for &quot;{query}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
