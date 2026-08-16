import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Student Grouping Wheel | Random Team Picker",
  description: "Spin the Student Grouping wheel. Instantly select random teams or groups (Group A, Group B, Group C) for classroom projects and games.",
};

export default function StudentGroupingPage() {
  const options = ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/classroom/" className="hover:text-retro-orange">Classroom</Link>
          <span>/</span>
          <span className="text-retro-orange">Student Grouping</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Student Grouping & Team Picker Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Need to randomly assign students to groups, pick presenting teams, or set classroom seats? Spin the grouping wheel!
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-student-grouping" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Unbiased Classroom Management</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                As educators, creating balanced groups is essential, but students often complain about team selections. A random picker wheel ensures complete transparency and fairness.
              </p>
              <p>
                Slices indicate standard group names (Group A, Group B, etc.) so that teachers can quickly spin to decide order or group assignments.
              </p>
              <p>
                To select specific individual students, try our customizable <Link href="/wheel-of-names/" className="text-retro-orange underline font-bold">Wheel of Names</Link> or pick random numbers with the <Link href="/random-number-generator/" className="text-retro-blue underline font-bold">Number Generator</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Custom Group Slices</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Customize the wheel for your lesson needs:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Input group colors instead of letters.</li>
              <li>Settle presenter order by entering project titles.</li>
              <li>Include specific group tasks (e.g. presenter, scribe, timekeeper).</li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
