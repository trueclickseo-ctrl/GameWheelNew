import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Trophy,
  Compass,
  User,
  Gamepad2,
  PartyPopper,
  Utensils,
  Globe,
  Cpu,
  Sparkles,
  Rabbit,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "Random Choice Game Wheels Hub | GameWheelClub",
  description: "Explore fun, interactive, and pre-built randomizer game wheels. Settle team drafts, fandom debates, character creation, and party challenges instantly.",
};

export default function GamesHubPage() {
  const activeHubs = [
    {
      name: "Sports Wheels",
      description: "Draft fantasy teams, select random star players, pick positions, and simulate match outcomes.",
      href: "/sports-wheels",
      icon: Trophy,
      bgColor: "bg-retro-orange",
      count: "12 Wheels",
    },
    {
      name: "Anime & Fandom Wheels",
      description: "Spin for random characters, pick what anime to watch, get Disney films, or Marvel superheroes instantly.",
      href: "/anime-fandom-wheels",
      icon: Compass,
      bgColor: "bg-retro-blue",
      count: "19 Wheels",
    },
    {
      name: "Character Wheels",
      description: "Spin random character design decision wheels for OCs, fanfiction, D&D, worldbuilding, and avatar generator challenges.",
      href: "/character-wheels",
      icon: User,
      bgColor: "bg-retro-orange",
      count: "1 Wheel",
    },
    {
      name: "Character Creator & OC Wheels",
      description: "Design random characters, OCs, and avatars instantly. Spin for hairstyles, outfits, eyes, genders, and gacha ideas.",
      href: "/character-creator",
      icon: User,
      bgColor: "bg-retro-orange",
      count: "11 Wheels",
    },
    {
      name: "Video Game Wheels",
      description: "Spin to pick gaming setups, agents, champions, types, challenges, and play styles. Covers Valorant, LoL, Pokémon, Roblox, and Fortnite.",
      href: "/video-game-wheels",
      icon: Gamepad2,
      bgColor: "bg-retro-blue",
      count: "9 Wheels",
    },
    {
      name: "Party & Social Games",
      description: "Interactive wheels for social events, sleepovers, and parties. Spin for Truth or Dare, Charades, and funny challenges.",
      href: "/party-games",
      icon: PartyPopper,
      bgColor: "bg-retro-mint",
      count: "11 Wheels",
    },
    {
      name: "Food Wheels",
      description: "Can't agree on lunch, dinner, or snacks? Spin the Food Wheels to pick a random restaurant type or dish.",
      href: "/food-wheels",
      icon: Utensils,
      bgColor: "bg-retro-orange",
      count: "5 Wheels",
    },
    {
      name: "Geography Wheels",
      description: "Spin to select random countries, US states, European nations, or run the 64-country roulette challenge.",
      href: "/geography-wheels",
      icon: Globe,
      bgColor: "bg-retro-blue",
      count: "4 Wheels",
    },
    {
      name: "Random Generators",
      description: "Spin pure mathematical and utility decision generators. Includes the customizable number wheel, hex color generator, percent wheel, and alphabet spinner.",
      href: "/generators",
      icon: Cpu,
      bgColor: "bg-retro-yellow",
      count: "5 Wheels",
    },
    {
      name: "Creative & Entertainment",
      description: "Unlock creative inspiration instantly. Spin to choose a movie genre, get random drawing ideas, spin an arrow pointer, or get TBR book prompts.",
      href: "/creative-wheels",
      icon: Sparkles,
      bgColor: "bg-retro-orange",
      count: "5 Wheels",
    },
    {
      name: "Animals & Nature",
      description: "Select random animals for games, education, and drawings. Spin the animal wheels to discover what animal you are.",
      href: "/animal-wheels",
      icon: Rabbit,
      bgColor: "bg-retro-mint",
      count: "3 Wheels",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Randomizer Game Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Interactive preset wheels designed for sports, gaming draft simulators, fandoms, party icebreakers, and creative randomizers.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activeHubs.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between h-full">
                <div>
                  <div className={`w-12 h-12 rounded-lg neo-border ${cat.bgColor} flex items-center justify-center mb-4 text-white dark:text-retro-navy`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-black font-display">{cat.name}</h2>
                    <span className="text-xs font-extrabold bg-retro-yellow text-retro-navy px-2 py-0.5 rounded border border-retro-navy">
                      {cat.count}
                    </span>
                  </div>
                  <p className="text-sm font-semibold opacity-80 mb-6">{cat.description}</p>
                </div>

                <Link
                  href={cat.href}
                  className="w-full py-2.5 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
                >
                  Explore Category <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </>
  );
}
