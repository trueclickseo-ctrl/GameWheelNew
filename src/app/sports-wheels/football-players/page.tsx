import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";
import { Trophy, ArrowLeft, Target, Star, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Football Players Wheel Spinner | Random Soccer Star Picker",
  description: "Spin the Football Players Wheel to pick a random world soccer star like Messi, Ronaldo, Mbappé, or Haaland. Perfect for FC 24/FC 25 draft challenges.",
};

export default function FootballPlayersWheelPage() {
  const soccerPlayers = [
    "Lionel Messi",
    "Cristiano Ronaldo",
    "Kylian Mbappé",
    "Erling Haaland",
    "Kevin De Bruyne",
    "Jude Bellingham",
    "Vinícius Jr",
    "Mohamed Salah",
    "Harry Kane",
    "Antoine Griezmann",
  ];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        {/* Breadcrumbs */}
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/games/" className="hover:text-retro-orange">Games</Link>
          <span>/</span>
          <Link href="/sports-wheels/" className="hover:text-retro-orange">Sports Wheels</Link>
          <span>/</span>
          <span className="text-retro-orange">Football Players</span>
        </div>

        {/* Back Link */}
        <Link
          href="/sports-wheels/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-6 hover:text-retro-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Sports Wheels
        </Link>

        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-retro-orange text-white font-bold text-xs uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            Global Football Stars
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Football Players Wheel Spinner
          </h1>
          <p className="text-lg font-medium opacity-95 max-w-2xl mx-auto">
            Spin to select randomly from the world&apos;s most elite association football (soccer) superstars. Settle debates, pick FC targets, or challenge friends!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={soccerPlayers} storageKey="gamewheelclub-football-players-wheel" />
        </section>

        {/* Neobrutalist Info Cards & SEO Content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              Settle the GOAT Debate (Or At Least Pick a Player)
            </h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                Every football fan has an opinion on who&apos;s actually the best — and that&apos;s exactly the problem when you&apos;re building a draft squad, picking a fantasy captain, or just trying to end an argument in the group chat. This wheel makes the call for you: load it up with Messi, Ronaldo, Mbappé, Haaland, or whoever&apos;s on your shortlist, spin, and go with what you get.
              </p>
              <p>
                No app to download, no account, no clutter. Type in names, hit spin, done.
              </p>
              <p>
                Need a plain decision-maker instead? Try the <Link href="/decision-wheel/" className="text-retro-mint underline font-bold">Decision Wheel</Link>, or head back to <Link href="/games/" className="text-retro-blue underline font-bold">all the games</Link>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-black font-display mb-6 text-retro-navy dark:text-cream">
              How People Actually Use This
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="neo-card p-4 bg-retro-mint text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Target className="w-5 h-5 flex-shrink-0" />
                  Breaking a draft tie.
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  FC Ultimate Team drafts move fast, and picking your captain can turn into ten minutes of second-guessing. If you&apos;re stuck between two strikers for your first pick — or you&apos;d rather build around a genuinely random player than the same favorite every time — spin instead of overthinking it.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-yellow text-retro-navy">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Star className="w-5 h-5 flex-shrink-0" />
                  Fantasy captain, decided in three seconds.
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Torn between two big names for the armband this gameweek? Add both to the wheel, spin, and stop staring at last week&apos;s stats.
                </p>
              </div>

              <div className="neo-card p-4 bg-retro-blue text-white">
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 flex-shrink-0" />
                  The &quot;sign anyone&quot; Career Mode challenge.
                </h3>
                <p className="text-sm font-semibold opacity-90">
                  Spin for a random player — any club, any price tag — and try to actually sign them in Career Mode. It&apos;s a good way to break out of buying the same three players every save.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="neo-card p-8 bg-white dark:bg-retro-navy mb-12">
          <h2 className="text-2xl md:text-3xl font-black font-display text-retro-navy dark:text-cream border-b-3 border-retro-navy dark:border-cream pb-3 mb-6 text-center">
            FAQ
          </h2>
          <div className="space-y-6 font-medium">
            {[
              {
                q: "Can I add my own players to the wheel?",
                a: "Yes. Type a name into the options box, or paste a full list at once using Bulk Edit — one name per line.",
              },
              {
                q: "Does the wheel favor certain players?",
                a: "No. Every option on the wheel has an equal, genuinely random chance, no matter the order they're added in or how many times you've spun before.",
              },
              {
                q: "Can I use this for other sports, not just football?",
                a: "Yes — swap in any names you want. It works for any list of players, teams, or picks you're trying to randomize.",
              },
              {
                q: "Is there a limit to how many players I can add?",
                a: "No hard limit. You can load a full squad, a whole league, or just two names for a quick tiebreak.",
              },
              {
                q: "Can I embed this wheel on my own site?",
                a: "Yes — use the \"Get Embed Code\" button above the wheel to get an iframe you can paste straight into your page.",
              },
            ].map((faq, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-black flex items-center gap-2 mb-2 text-retro-navy dark:text-cream">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 text-retro-orange" />
                  {faq.q}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed pl-7 text-retro-navy dark:text-cream">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      
    </>
  );
}
