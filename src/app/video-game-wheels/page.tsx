import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Video Game Randomizer Wheels | SpinVerse",
  description: "Spin to pick gaming setups, agents, champions, types, challenges, and play styles. Covers Valorant, LoL, Pokémon, Roblox, and Fortnite.",
};

export default function videogamewheelsHubPage() {
  const wheels = [
    { name: "Valorant Agents Wheel", href: "/video-game-wheels/valorant-agents/", desc: "Spin to pick a random Valorant agent to play in your next match." },
    { name: "League of Legends Champions Wheel", href: "/video-game-wheels/league-of-legends-champions/", desc: "Randomly choose a League champion for your next draft or ARAM game." },
    { name: "Roblox Games Wheel", href: "/video-game-wheels/roblox-games/", desc: "Spin to choose a fun Roblox game to play when you are bored." },
    { name: "Smash Bros Characters Wheel", href: "/video-game-wheels/smash-bros-characters/", desc: "Randomize your fighter for Super Smash Bros. Ultimate battles." },
    { name: "Overwatch 2 Characters Wheel", href: "/video-game-wheels/overwatch-2-characters/", desc: "Select a random Tank, Damage, or Support hero for your next Overwatch match." },
    { name: "Rainbow Six Operators Wheel", href: "/video-game-wheels/rainbow-six-operators/", desc: "Spin to choose a random Attack or Defense operator in Siege." },
    { name: "Starter Pokemon Wheel", href: "/video-game-wheels/starter-pokemon/", desc: "Pick a random starter Pokémon from Gen 1 to Gen 9 for your next challenge run." },
    { name: "Pokemon Types Wheel", href: "/video-game-wheels/pokemon-types/", desc: "Spin to select a random Pokémon type. Perfect for monotype challenge runs." },
    { name: "Fortnite Challenges Wheel", href: "/video-game-wheels/fortnite-challenges/", desc: "Spin to get a fun challenge to complete during your next battle royale match." }
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Video Game Wheels</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Category Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Video Game Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Spin to pick gaming setups, agents, champions, types, challenges, and play styles. Covers Valorant, LoL, Pokémon, Roblox, and Fortnite.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          {wheels.map((w) => (
            <div key={w.href} className="neo-card p-6 bg-white dark:bg-retro-navy flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-display mb-2">{w.name}</h3>
                <p className="text-sm opacity-80 mb-6">{w.desc}</p>
              </div>
              <Link
                href={w.href}
                className="w-full py-2 neo-btn bg-retro-yellow text-retro-navy text-center text-sm font-bold flex items-center justify-center gap-1.5 hover:scale-102 transition-transform"
              >
                Launch Wheel <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </section>
      </main>

      
    </>
  );
}
