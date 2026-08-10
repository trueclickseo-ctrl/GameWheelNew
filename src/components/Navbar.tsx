"use client";

import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Disc, ChevronDown } from "lucide-react";

import { UI_TRANSLATIONS } from "@/config/locales";

export default function Navbar({ currentLocale = "en" }: { currentLocale?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log("Navbar currentLocale:", currentLocale);

  const t = UI_TRANSLATIONS[currentLocale] || UI_TRANSLATIONS.en;
  const localePrefix = currentLocale === "en" ? "" : `/${currentLocale}`;

  const tools = [
    { name: "Wheel of Names", href: `${localePrefix}/wheel-of-names/` },
    { name: "Decision Wheel", href: `${localePrefix}/decision-wheel/` },
    { name: "Yes or No Wheel", href: `${localePrefix}/yes-no-wheel/` },
    { name: "Number Generator", href: `${localePrefix}/random-number-generator/` },
    { name: "Flip a Coin", href: `${localePrefix}/flip-a-coin/` },
    { name: "Dice Roller", href: `${localePrefix}/dice-roller/` },
    { name: "Timer", href: `${localePrefix}/timer/` },
  ];

  // Click away listener for desktop dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <header className="sticky top-0 z-50 w-full neo-border border-t-0 border-x-0 bg-cream dark:bg-retro-navy py-4 px-6 md:px-12 flex justify-between items-center transition-colors">
      <a href={`${localePrefix}/`} className="flex items-center gap-2.5 font-display text-2xl font-black tracking-tight text-retro-navy dark:text-cream hover:opacity-90">
        <img 
          src="/logo.jpg" 
          alt="GameWheelClub Logo" 
          className="w-9 h-9 rounded-md border-2 border-retro-navy dark:border-cream object-cover shadow-sm"
        />
        <span>Game<span className="text-retro-orange">Wheel</span>Club</span>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 font-semibold">
        <a href={`${localePrefix}/`} className="hover:text-retro-orange transition-colors">
          {t.home}
        </a>
        
        {/* Tools Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 hover:text-retro-orange transition-colors focus:outline-none cursor-pointer"
          >
            {t.tools} <ChevronDown className="w-4 h-4" />
          </button>
          
          {dropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-56 bg-white dark:bg-retro-navy neo-border rounded-lg shadow-xl p-2 flex flex-col gap-1 z-50"
            >
              {tools.map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  className="px-3 py-2 rounded-md hover:bg-cream dark:hover:bg-slate-800 transition-colors text-sm text-retro-navy dark:text-cream"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href={`${localePrefix}/games/`} className="hover:text-retro-orange transition-colors">
          {t.games}
        </a>
        <a href={`${localePrefix}/templates/`} className="hover:text-retro-orange transition-colors">
          {t.templates}
        </a>
        <a href={`${localePrefix}/about/`} className="hover:text-retro-orange transition-colors">
          {t.about}
        </a>
        <a href={`${localePrefix}/contact/`} className="hover:text-retro-orange transition-colors">
          {t.contact}
        </a>



        <ThemeToggle />
      </nav>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-3 md:hidden">


        <ThemeToggle />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[75px] left-0 w-full bg-cream dark:bg-retro-navy neo-border border-x-0 flex flex-col items-center gap-6 py-6 md:hidden font-semibold max-h-[80vh] overflow-y-auto z-40">
          <a href={`${localePrefix}/`} className="hover:text-retro-orange transition-colors">
            {t.home}
          </a>
          
          <div className="flex flex-col items-center gap-3 w-full border-y border-retro-navy/10 dark:border-cream/10 py-3">
            <span className="text-xs font-bold uppercase tracking-wider opacity-60">{t.tools}</span>
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="hover:text-retro-orange transition-colors text-sm text-retro-navy dark:text-cream"
              >
                {tool.name}
              </a>
            ))}
          </div>

          <a href={`${localePrefix}/games/`} className="hover:text-retro-orange transition-colors">
            {t.games}
          </a>
          <a href={`${localePrefix}/templates/`} className="hover:text-retro-orange transition-colors">
            {t.templates}
          </a>
          <a href={`${localePrefix}/about/`} className="hover:text-retro-orange transition-colors">
            {t.about}
          </a>
          <a href={`${localePrefix}/contact/`} className="hover:text-retro-orange transition-colors">
            {t.contact}
          </a>
        </div>
      )}
    </header>
  );
}
