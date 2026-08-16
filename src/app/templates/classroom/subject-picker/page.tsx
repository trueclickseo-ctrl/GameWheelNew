import WheelSpinner from "@/components/WheelSpinner";
import Link from "next/link";

export const metadata = {
  title: "Subject Picker Wheel | Lesson Study Topic Selector",
  description: "Spin the Subject Picker wheel to randomize study topics: Math, Science, History, English, Art, and Music. Great for lesson planning.",
};

export default function SubjectPickerPage() {
  const options = ["Math", "Science", "History", "English", "Art", "Music", "Social Studies", "Gym"];

  return (
    <>
      

      <main className="flex-1 max-w-6xl mx-auto w-full py-12 px-6">
        <div className="flex gap-2 text-xs font-bold uppercase tracking-wider mb-6 opacity-75">
          <Link href="/templates/" className="hover:text-retro-orange">Templates</Link>
          <span>/</span>
          <Link href="/templates/classroom/" className="hover:text-retro-orange">Classroom</Link>
          <span>/</span>
          <span className="text-retro-orange">Subject Picker</span>
        </div>

        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-4">
            Subject Picker Wheel
          </h1>
          <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto">
            Choose what topic to review next, or let the wheel randomize study blocks during homeschooling or class.
          </p>
        </section>

        <section className="mb-16">
          <WheelSpinner initialOptions={options} storageKey="template-subject-picker" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 border-t-3 border-retro-navy dark:border-cream pt-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Randomizing Lesson Sequences</h2>
            <div className="prose dark:prose-invert font-medium text-base space-y-4">
              <p>
                In early childhood education or homeschool environments, keeping schedules flexible but organized can be tricky. A <strong>Subject Picker Wheel</strong> makes transitions fun.
              </p>
              <p>
                Slices show standard subject blocks: Math, Science, History, Art, and Music. Spin the wheel to decide which topic the students will study next.
              </p>
              <p>
                To generate random test numbers, use our <Link href="/random-number-generator/" className="text-retro-orange underline font-bold">Number Generator</Link> or time exams using the <Link href="/timer/" className="text-retro-blue underline font-bold">Timer</Link>.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display mb-4">Homeschool Schedule Helper</h2>
            <p className="font-medium text-base leading-relaxed mb-4">
              Customize study schedules easily with the options table:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-sm">
              <li>Input specific textbook units or chapter names.</li>
              <li>Include fun break blocks (e.g. &quot;recess&quot;).</li>
              <li>Toggle ticking audio elements to increase classroom engagement.</li>
            </ul>
          </div>
        </section>
      </main>

      
    </>
  );
}
