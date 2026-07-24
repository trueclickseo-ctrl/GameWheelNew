"use client";

import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X, ChevronDown } from "lucide-react";
import { getDictionary } from "@/i18n/dictionaries";

interface NavbarProps {
  currentLang?: string;
}

export default function Navbar({ currentLang = "en" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dict = getDictionary(currentLang);
  const langPrefix = currentLang === "en" ? "" : `/${currentLang}`;

  const tools = [
    { name: dict.toolWheelOfNames, href: `${langPrefix}/wheel-of-names` },
    { name: dict.toolDecisionWheel, href: `${langPrefix}/decision-wheel` },
    { name: dict.toolYesNoWheel, href: `${langPrefix}/yes-no-wheel` },
    { name: dict.toolNumberGenerator, href: `${langPrefix}/random-number-generator` },
    { name: dict.toolFlipCoin, href: `${langPrefix}/flip-a-coin` },
    { name: dict.toolDiceRoller, href: `${langPrefix}/dice-roller` },
    { name: dict.toolTimer, href: `${langPrefix}/timer` },
  ];

  // Click away listener for desktop dropdown
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

  const homeHref = currentLang === "en" ? "/" : `/${currentLang}/`;

  return (
    <header className="sticky top-0 z-50 w-full neo-border border-t-0 border-x-0 bg-cream dark:bg-retro-navy py-4 px-6 md:px-12 flex justify-between items-center transition-colors">
      <a href={homeHref} className="flex items-center gap-2.5 font-display text-2xl font-black tracking-tight text-retro-navy dark:text-cream hover:opacity-90">
        <img 
          src="/logo.jpg" 
          alt="GameWheelClub Logo" 
          width={36}
          height={36}
          className="w-9 h-9 rounded-md border-2 border-retro-navy dark:border-cream object-cover shadow-sm"
        />
        <span>Game<span className="text-retro-orange">Wheel</span>Club</span>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8 font-semibold">
        <a href={homeHref} className="hover:text-retro-orange transition-colors">
          {dict.navHome}
        </a>
        
        {/* Tools Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            id="tools-dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
            aria-label="Toggle tools menu"
            className="flex items-center gap-1 hover:text-retro-orange transition-colors focus:outline-none cursor-pointer"
          >
            {dict.navTools} <ChevronDown className="w-4 h-4" />
          </button>
          
          {dropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-56 bg-white dark:bg-retro-navy neo-border rounded-lg shadow-xl p-2 flex flex-col gap-1 z-50"
            >
              {tools.map((tool) => (
                <a
                  key={tool.href}
                  href={tool.href}
                  className="px-3 py-2 rounded-md hover:bg-cream dark:hover:bg-slate-800 transition-colors text-sm"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href={`${langPrefix}/games`} className="hover:text-retro-orange transition-colors">
          {dict.navGames}
        </a>
        <a href={`${langPrefix}/templates`} className="hover:text-retro-orange transition-colors">
          {dict.navTemplates}
        </a>
        <a href={`${langPrefix}/learn`} className="hover:text-retro-orange transition-colors">
          {dict.navLearn}
        </a>
        <a href={`${langPrefix}/about`} className="hover:text-retro-orange transition-colors">
          {dict.navAbout}
        </a>
        <a href={`${langPrefix}/contact`} className="hover:text-retro-orange transition-colors">
          {dict.navContact}
        </a>
        <LanguageSwitcher currentLang={currentLang} />
        <ThemeToggle />
      </nav>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-3 md:hidden">
        <LanguageSwitcher currentLang={currentLang} />
        <ThemeToggle />
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 neo-btn bg-white dark:bg-retro-navy text-retro-navy dark:text-cream cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div id="mobile-navigation-menu" className="absolute top-[75px] left-0 w-full bg-cream dark:bg-retro-navy neo-border border-x-0 flex flex-col items-center gap-6 py-6 md:hidden font-semibold max-h-[80vh] overflow-y-auto z-40">
          <a href={homeHref} className="hover:text-retro-orange transition-colors">
            {dict.navHome}
          </a>
          
          {/* Tools List for Mobile */}
          <div className="flex flex-col items-center gap-3 w-full border-y border-retro-navy/10 dark:border-cream/10 py-3">
            <span className="text-xs font-bold uppercase tracking-wider opacity-60">{dict.navTools}</span>
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="hover:text-retro-orange transition-colors text-sm"
              >
                {tool.name}
              </a>
            ))}
          </div>

          <a href={`${langPrefix}/games`} className="hover:text-retro-orange transition-colors">
            {dict.navGames}
          </a>
          <a href={`${langPrefix}/templates`} className="hover:text-retro-orange transition-colors">
            {dict.navTemplates}
          </a>
          <a href={`${langPrefix}/learn`} className="hover:text-retro-orange transition-colors">
            {dict.navLearn}
          </a>
          <a href={`${langPrefix}/about`} className="hover:text-retro-orange transition-colors">
            {dict.navAbout}
          </a>
          <a href={`${langPrefix}/contact`} className="hover:text-retro-orange transition-colors">
            {dict.navContact}
          </a>
        </div>
      )}
    </header>
  );
}
