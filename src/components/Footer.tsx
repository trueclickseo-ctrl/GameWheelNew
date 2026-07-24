import { getDictionary } from "@/i18n/dictionaries";

interface FooterProps {
  currentLang?: string;
}

export default function Footer({ currentLang = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const dict = getDictionary(currentLang);
  const langPrefix = currentLang === "en" ? "" : `/${currentLang}`;

  return (
    <footer className="w-full neo-border border-b-0 border-x-0 bg-cream dark:bg-retro-navy py-12 px-6 md:px-12 mt-auto transition-colors text-retro-navy dark:text-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5 font-display text-2xl font-black">
            <img 
              src="/logo.jpg" 
              alt="GameWheelClub Logo" 
              width={32}
              height={32}
              className="w-8 h-8 rounded border-2 border-retro-navy dark:border-cream object-cover"
            />
            <span>Game<span className="text-retro-orange">Wheel</span>Club</span>
          </div>
          <p className="text-sm font-semibold max-w-sm opacity-90 leading-relaxed">
            {dict.heroSubtitle}
          </p>
        </div>

        {/* Use Cases */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-sm uppercase tracking-widest text-retro-navy/55 dark:text-cream/55">
            Use Cases
          </h3>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <a href={`${langPrefix}/for-teachers`} className="hover:text-retro-orange transition-colors">
              For Teachers
            </a>
            <a href={`${langPrefix}/for-business`} className="hover:text-retro-orange transition-colors">
              For Business
            </a>
            <a href={`${langPrefix}/for-events`} className="hover:text-retro-orange transition-colors">
              For Events
            </a>
          </div>
        </div>

        {/* Learn & Guides */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-sm uppercase tracking-widest text-retro-navy/55 dark:text-cream/55">
            {dict.learnHub}
          </h3>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <a href={`${langPrefix}/learn`} className="hover:text-retro-orange transition-colors">
              {dict.learnHub}
            </a>
            <a href={`${langPrefix}/learn/probability-statistics`} className="hover:text-retro-orange transition-colors">
              Probability & Stats
            </a>
            <a href={`${langPrefix}/learn/encyclopedia`} className="hover:text-retro-orange transition-colors">
              Wheel Encyclopedia
            </a>
            <a href={`${langPrefix}/learn/history-of-the-wheel`} className="hover:text-retro-orange transition-colors">
              History of the Wheel
            </a>
          </div>
        </div>

        {/* Recent Articles - always English URLs, blog posts have no localized versions */}
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-sm uppercase tracking-widest text-retro-navy/55 dark:text-cream/55">
            Recent Blog
          </h3>
          <div className="flex flex-col gap-2 text-sm font-bold">
            <a href="/blog/spin-wheels-for-decision-making" className="hover:text-retro-orange transition-colors">
              Wheels for Decisions
            </a>
            <a href="/blog/party-games-for-adults" className="hover:text-retro-orange transition-colors">
              Party Games
            </a>
            <a href="/blog/spin-wheels-in-modern-education" className="hover:text-retro-orange transition-colors">
              Classroom Incentive
            </a>
            <a href="/blog/time-boxing-to-prevent-burnout" className="hover:text-retro-orange transition-colors">
              Avoid Burnout
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-retro-navy/10 dark:border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-semibold opacity-70 text-center md:text-left">
          &copy; {currentYear} GameWheelClub. All rights reserved. Zero-cookie locally computed utility.
        </p>

        <div className="flex gap-6 text-xs font-semibold">
          <a href={`${langPrefix}/about`} className="hover:text-retro-orange transition-colors">
            {dict.navAbout}
          </a>
          <a href={`${langPrefix}/contact`} className="hover:text-retro-orange transition-colors">
            {dict.navContact}
          </a>
          <a href={`${langPrefix}/privacy`} className="hover:text-retro-orange transition-colors">
            Privacy Policy
          </a>
          <a href={`${langPrefix}/terms`} className="hover:text-retro-orange transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
