import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | GameWheelClub",
  description: "Read the Privacy Policy of GameWheelClub. Learn about our commitment to privacy, data protection, and cookie-free client-side operations.",
  alternates: {
    canonical: "https://www.gamewheelclub.com/privacy/",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full py-12 px-6">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-black font-display tracking-tight text-retro-navy dark:text-cream mb-2">
            Privacy Policy
          </h1>
          <p className="font-medium opacity-85">Last updated: July 2026</p>
        </section>

        <section className="neo-card p-8 bg-white dark:bg-retro-navy prose dark:prose-invert font-medium space-y-6">
          <h2 className="text-2xl font-black font-display border-b-3 border-retro-navy dark:border-cream pb-2">
            1. Information We Collect
          </h2>
          <p className="leading-relaxed">
            GameWheelClub operates entirely client-side. We do not run databases or tracking algorithms that collect or store your name, email address, custom options, or results. All custom data entered into our wheels is persisted directly in your browser&apos;s local storage.
          </p>

          <h2 className="text-2xl font-black font-display border-b-3 border-retro-navy dark:border-cream pb-2 pt-4">
            2. Analytical Data
          </h2>
          <p className="leading-relaxed">
            We use Google Analytics (GA4) to collect basic, non-identifiable usage statistics (e.g., page views, session duration, and general device type). This data helps us improve site usability and performance.
          </p>

          <h2 className="text-2xl font-black font-display border-b-3 border-retro-navy dark:border-cream pb-2 pt-4">
            3. Local Storage Cookies
          </h2>
          <p className="leading-relaxed">
            We store configuration parameters (like list of options or theme choices) in your browser&apos;s localStorage to enhance usability. This data is not shared with any third parties or sent to our servers.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
