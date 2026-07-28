import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WheelSpinner from "@/components/WheelSpinner";
import { Sparkles, HelpCircle, Shield, Award } from "lucide-react";
import { LANGUAGES } from "@/i18n/languages";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  // Prerender pages for all 28 languages except English (which lives at '/')
  return LANGUAGES.filter((l) => l.code !== "en").map((lang) => ({
    lang: lang.code,
  }));
}

interface LocalizedPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const langObj = LANGUAGES.find((l) => l.code === lang);

  return {
    title: `${dict.heroTitle} | GameWheelClub ${langObj?.nativeName || ""}`,
    description: dict.heroSubtitle,
    alternates: {
      canonical: `https://www.gamewheelclub.com/${lang}/`,
    },
  };
}

export default async function LocalizedHomePage({ params }: LocalizedPageProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const langObj = LANGUAGES.find((l) => l.code === lang);
  const isRtl = langObj?.dir === "rtl";

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-sans text-right" : ""}>
      <Navbar currentLang={lang} />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-yellow text-retro-navy font-bold text-xs uppercase tracking-wider mb-4 animate-bounce">
            <Sparkles className="w-4 h-4" />
            {dict.heroTagline}
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            {dict.heroTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90 leading-relaxed">
            {dict.heroSubtitle}
          </p>
        </section>

        {/* Wheel Spinner Section */}
        <section className="mb-16">
          <WheelSpinner storageKey={`gamewheelclub-${lang}-wheel`} />
        </section>

        {/* Context / Informational Copy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              {dict.heroTagline}
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>{dict.heroSubtitle}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">
              {dict.privacyNotice ? "Privacy Promise" : "Privacy"}
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>{dict.privacyNotice}</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy my-12">
          <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-center border-b-3 border-retro-navy dark:border-cream pb-3">
            FAQ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-retro-orange" />
                Random & Fair?
              </h3>
              <p className="text-sm opacity-95">
                Yes, our wheel utilizes a secure pseudorandom number generator (PRNG) in JavaScript to guarantee completely unbiased outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-lg mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-retro-mint" />
                Device Storage?
              </h3>
              <p className="text-sm opacity-95">
                {dict.privacyNotice}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer currentLang={lang} />
    </div>
  );
}
