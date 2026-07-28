import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embed Decision Wheel | GameWheelClub",
  description: "Embed our free, custom random decision wheel on your own website.",
  alternates: {
    canonical: "https://www.gamewheelclub.com/embed/",
  },
};

export default function EmbedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
