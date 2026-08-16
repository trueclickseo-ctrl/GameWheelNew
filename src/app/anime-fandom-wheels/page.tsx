import Link from "next/link";
import { Compass, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Anime & Fandom Character Wheels | GameWheelClub",
  description: "Spin 19 free fandom decision wheels. Randomize anime characters, Disney movies, cartoon icons, FNAF animatronics, and One Piece Devil Fruits.",
};

export default function AnimeFandomCategoryPage() {
  const wheels = [
    { name: "Anime Characters Wheel", href: "/anime-fandom-wheels/anime-characters", desc: "Select randomly from popular characters across various hit anime series." },
    { name: "Anime to Watch Wheel", href: "/anime-fandom-wheels/anime-to-watch", desc: "Can't decide what series to binge next? Let this randomizer pick one." },
    { name: "Cartoon Characters Wheel", href: "/anime-fandom-wheels/cartoon-characters", desc: "Pick random classic and modern cartoon network/Disney characters." },
    { name: "Disney Movie Generator", href: "/anime-fandom-wheels/disney-movie-generator", desc: "Choose a random Disney or Pixar animated movie for movie night." },
    { name: "Marvel Superheroes", href: "/anime-fandom-wheels/marvel-superheroes", desc: "Spin to select a random Avenger or Marvel Universe superhero." },
    { name: "Naruto Characters", href: "/anime-fandom-wheels/naruto-characters", desc: "Randomly pick ninja characters from the Hidden Leaf village." },
    { name: "One Piece Characters", href: "/anime-fandom-wheels/one-piece-characters", desc: "Spin to pick from the Straw Hat crew and other grand line pirates." },
    { name: "One Piece Devil Fruits", href: "/anime-fandom-wheels/one-piece-devil-fruits", desc: "Randomly select which Devil Fruit power you would inherit." },
    { name: "Demon Slayer Characters", href: "/anime-fandom-wheels/demon-slayer-characters", desc: "Pick random demon slayers and hashiras from Kimetsu no Yaiba." },
    { name: "Jujutsu Kaisen Characters", href: "/anime-fandom-wheels/jujutsu-kaisen-characters", desc: "Select random sorcerers and cursed spirits from JJK." },
    { name: "JJK Cursed Techniques", href: "/anime-fandom-wheels/jjk-cursed-techniques", desc: "Spin to randomly select a cursed technique power from Jujutsu Kaisen." },
    { name: "MHA Characters Wheel", href: "/anime-fandom-wheels/mha-characters", desc: "Pick random heroes and villains from My Hero Academia." },
    { name: "FNAF Characters Wheel", href: "/anime-fandom-wheels/fnaf-characters", desc: "Select animatronics from Five Nights at Freddy's series." },
    { name: "Dandy's World Wheel", href: "/anime-fandom-wheels/dandys-world", desc: "Randomly choose characters and toons from Dandy's World." },
    { name: "Dandy's World OC Generator", href: "/anime-fandom-wheels/dandys-world-oc-generator", desc: "Spin to generate random OC design parameters for Dandy's World." },
    { name: "Dandy's World Trinkets", href: "/anime-fandom-wheels/dandys-world-trinkets", desc: "Randomly pick which trinket items to equip for your next run." },
    { name: "DTI Theme Wheel", href: "/anime-fandom-wheels/dti-theme-wheel", desc: "Pick a random style theme for Dress To Impress Roblox gameplay." },
    { name: "BFDI Contestants Wheel", href: "/anime-fandom-wheels/bfdi-contestants", desc: "Select random object show contestants from Battle for Dream Island." },
    { name: "Aesthetics Wheel", href: "/anime-fandom-wheels/aesthetics-wheel", desc: "Spin to pick a random fashion style or aesthetic theme." },
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <span className="text-retro-orange">Anime & Fandom</span>
        </div>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-blue text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4" />
            Fandom Selectors
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Anime & Fandom Wheels
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Choose your next watchlist, settle debate matchups, or pick fandom characters randomly using our pre-built preset options.
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
