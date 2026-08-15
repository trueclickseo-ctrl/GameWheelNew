export interface LocaleInfo {
  code: string;
  name: string;
  flag: string;
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
];

export const UI_TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    home: "Home",
    tools: "Tools",
    games: "Games",
    allWheels: "All Wheels",
    templates: "Templates",
    about: "About",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
    language: "Language",
    spin: "SPIN!",
    spinning: "Spinning...",
    winnerIs: "The Winner is",
    wheelOptions: "Wheel Options",
    addNewOption: "Add new option...",
    bulkEdit: "Bulk Edit (one option per line)",
    pasteOptions: "Paste your options here...",
    backTo: "Back to",
    whyUse: "Why Use",
    howToPlay: "How to Play & Use Cases",
    instantDecisions: "Instant Decisions",
    instantDecisionsDesc: "Spin the dial, get an instant outcome, and remove analysis paralysis from your day. Ideal for quick games, classroom assignments, and drawing triggers.",
    customizeShare: "Customize and Share",
    customizeShareDesc: "Need custom options? You can modify the slice items using the list view or copy-paste directly from spreadsheet programs.",
    faqTitle: "Frequently Asked Questions (FAQs)",
    howRandom: "How random is the selection?",
    howRandomDesc: "The wheel uses a robust pseudo-random number generation algorithm in Javascript, ensuring that every slice has a completely fair, unbiased, and mathematically equal chance of winning.",
  },
};
