"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { LANGUAGES, Language } from "@/i18n/languages";

interface LanguageSwitcherProps {
  currentLang?: string;
}

export default function LanguageSwitcher({ currentLang = "en" }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1.5 px-3 py-1.5 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream text-xs font-bold hover:scale-102 transition-transform cursor-pointer"
        aria-label="Select Language"
        title="Select Language"
      >
        <Globe className="w-3.5 h-3.5 text-retro-orange" />
        <span>{activeLang.nativeName}</span>
        <ChevronDown className="w-3.5 h-3.5 opacity-70" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-retro-navy neo-border rounded-lg shadow-xl p-1.5 max-h-64 overflow-y-auto z-50 flex flex-col gap-1">
          <div className="px-2 py-1 text-[10px] font-black uppercase tracking-wider text-retro-navy/50 dark:text-cream/50">
            Languages (28)
          </div>
          {LANGUAGES.map((lang) => {
            let path = "";
            if (typeof window !== "undefined") {
              const currentPath = window.location.pathname;
              // Strip current lang prefix if present
              const pathParts = currentPath.split("/").filter(Boolean);
              const hasLangPrefix = LANGUAGES.some((l) => l.code === pathParts[0] && l.code !== "en");
              const cleanParts = hasLangPrefix ? pathParts.slice(1) : pathParts;
              const subPath = cleanParts.join("/");
              
              // Only preserve subPath if it is a supported localized page
              const LOCALIZED_ROUTES = [
                "about", "contact", "privacy", "terms", "games", "templates", "learn",
                "learn/history-of-the-wheel", "wheel-of-names", "decision-wheel",
                "yes-no-wheel", "random-number-generator", "flip-a-coin", "dice-roller",
                "timer", "for-teachers", "for-business", "for-events"
              ];
              
              if (LOCALIZED_ROUTES.includes(subPath)) {
                path = subPath;
              }
            }

            const href = lang.code === "en" 
              ? (path ? `/${path}` : "/") 
              : (path ? `/${lang.code}/${path}` : `/${lang.code}/`);

            const isSelected = lang.code === currentLang;
            return (
              <a
                key={lang.code}
                href={href}
                className={`px-2.5 py-1.5 rounded text-xs font-bold flex justify-between items-center transition-colors ${
                  isSelected
                    ? "bg-retro-orange text-white"
                    : "hover:bg-cream dark:hover:bg-slate-800 text-retro-navy dark:text-cream"
                }`}
              >
                <span>{lang.nativeName}</span>
                <span className="text-[10px] opacity-60 uppercase">{lang.code}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
