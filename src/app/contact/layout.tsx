import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | GameWheelClub",
  description: "Get in touch with the GameWheelClub team. Report bugs, suggest wheel features, or reach out for inquiries.",
  alternates: {
    canonical: "https://www.gamewheelclub.com/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
