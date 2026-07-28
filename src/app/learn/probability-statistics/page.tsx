import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GraduationCap, ArrowLeft, Download, FileText, CheckCircle2, Award } from "lucide-react";

export const metadata = {
  alternates: {
    canonical: "https://www.gamewheelclub.com/learn/probability-statistics/",
  },
  title: "Probability & Statistics Education Hub — Formulas & Chi-Square Test | GameWheelClub",
  description: "Comprehensive teaching resource for probability theory, mathematical formulas, Chi-Square goodness-of-fit testing, and classroom lesson plans.",
};

export default function ProbabilityStatisticsPage() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": "Classroom Probability & Statistics Wheel Study Guide",
    "description": "Educational resource featuring probability formulas, Chi-Square test case studies, and classroom lesson materials.",
    "educationalLevel": "High School / College Introductory Statistics",
    "learningResourceType": "Lesson Plan / Case Study",
    "inLanguage": "en",
    "author": {
      "@type": "Organization",
      "name": "GameWheelClub",
    },
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        {/* Inject JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Back Link */}
        <Link href="/learn/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-retro-orange mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Learn Hub
        </Link>

        {/* Hero Section */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full neo-border bg-purple-300 text-retro-navy font-bold text-xs uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4" />
            Classroom & Academic Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Probability & Statistics Education Hub
          </h1>
          <p className="text-lg font-medium opacity-90 leading-relaxed">
            An interactive educational framework for high school and university statistics courses exploring empirical vs. theoretical probability.
          </p>
        </section>

        {/* Content Section */}
        <article className="prose dark:prose-invert max-w-none neo-card p-8 bg-white dark:bg-retro-navy space-y-8 font-medium">
          {/* Section 1: Formulas */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              1. Mathematical Formula Reference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="neo-border bg-cream dark:bg-retro-navy/60 p-4 rounded-lg">
                <h3 className="font-bold text-sm text-retro-orange mb-1">Equal Slices Probability</h3>
                <code className="text-base font-bold block mb-1">P(A) = 1 / n</code>
                <p className="text-xs opacity-80">Where n is the number of equal-sized options.</p>
              </div>

              <div className="neo-border bg-cream dark:bg-retro-navy/60 p-4 rounded-lg">
                <h3 className="font-bold text-sm text-retro-orange mb-1">Weighted Option Probability</h3>
                <code className="text-base font-bold block mb-1">P(A_i) = w_i / Σw_j</code>
                <p className="text-xs opacity-80">Where w_i is the item weight over the sum of all weights.</p>
              </div>

              <div className="neo-border bg-cream dark:bg-retro-navy/60 p-4 rounded-lg">
                <h3 className="font-bold text-sm text-retro-orange mb-1">Expected Value</h3>
                <code className="text-base font-bold block mb-1">E[X] = Σ (x_i · P(x_i))</code>
                <p className="text-xs opacity-80">Sum of outcomes weighted by their respective probability.</p>
              </div>

              <div className="neo-border bg-cream dark:bg-retro-navy/60 p-4 rounded-lg">
                <h3 className="font-bold text-sm text-retro-orange mb-1">Chi-Square Test Statistic</h3>
                <code className="text-base font-bold block mb-1">χ² = Σ [ (O_i - E_i)² / E_i ]</code>
                <p className="text-xs opacity-80">Compares observed frequencies (O) against expected (E).</p>
              </div>
            </div>
          </section>

          {/* Section 2: Case Study */}
          <section>
            <h2 className="text-2xl font-black font-display text-retro-navy dark:text-cream border-b-2 border-retro-navy/20 dark:border-cream/20 pb-2 mb-4">
              2. Case Study: &quot;Is the Wheel Fair?&quot; (Chi-Square Test)
            </h2>
            <p>
              Consider a 4-option decision wheel spun $N = 80$ times. If the wheel is unbiased, the theoretical expected frequency for each option is $E_i = 80 / 4 = 20$ spins.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left text-sm neo-border border-collapse">
                <thead>
                  <tr className="bg-retro-yellow text-retro-navy">
                    <th className="p-2 border">Option</th>
                    <th className="p-2 border">Observed (O)</th>
                    <th className="p-2 border">Expected (E)</th>
                    <th className="p-2 border">(O - E)² / E</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border font-bold">Option 1</td>
                    <td className="p-2 border">22</td>
                    <td className="p-2 border">20</td>
                    <td className="p-2 border">(22-20)² / 20 = 0.20</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-bold">Option 2</td>
                    <td className="p-2 border">17</td>
                    <td className="p-2 border">20</td>
                    <td className="p-2 border">(17-20)² / 20 = 0.45</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-bold">Option 3</td>
                    <td className="p-2 border">24</td>
                    <td className="p-2 border">20</td>
                    <td className="p-2 border">(24-20)² / 20 = 0.80</td>
                  </tr>
                  <tr>
                    <td className="p-2 border font-bold">Option 4</td>
                    <td className="p-2 border">17</td>
                    <td className="p-2 border">20</td>
                    <td className="p-2 border">(17-20)² / 20 = 0.45</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Summing these values yields the test statistic χ² = 0.20 + 0.45 + 0.80 + 0.45 = 1.90. With degrees of freedom df = k - 1 = 3, the critical value at significance level α = 0.05 is 7.815. Since 1.90 &lt; 7.815, we fail to reject the null hypothesis—confirming the wheel is statistically fair!
            </p>
          </section>

          {/* Section 3: Teacher's Guide */}
          <section className="bg-cream dark:bg-retro-navy/50 p-6 rounded-lg neo-border">
            <h2 className="text-xl font-bold flex items-center gap-2 mb-3 text-retro-navy dark:text-cream">
              <Award className="w-5 h-5 text-retro-orange" /> Teacher&apos;s Lesson Plan (45–60 Mins)
            </h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm opacity-95">
              <li><strong>Introduction (10 mins):</strong> Define theoretical vs. empirical probability.</li>
              <li><strong>Group Activity (20 mins):</strong> Students spin a 4-option wheel 50 times in teams and record frequencies on their tally sheets.</li>
              <li><strong>Statistical Calculation (15 mins):</strong> Compute the Chi-Square test statistic for their team&apos;s data.</li>
              <li><strong>Class Discussion (10 mins):</strong> Compare individual team results against class-wide aggregated data to demonstrate the Law of Large Numbers.</li>
            </ol>
          </section>

          {/* Cross Link */}
          <div className="flex justify-between items-center pt-4">
            <Link href="/for-teachers/" className="text-xs font-black uppercase tracking-wider text-retro-blue hover:underline flex items-center gap-1">
              <FileText className="w-4 h-4" /> View Teacher Use Case Page
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
