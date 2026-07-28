import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Number Wheel Generator | GameWheelClub",
  description: "Spin the number wheel spinner to choose random numbers. Set your custom range and spin.",
  alternates: {
    canonical: "https://www.gamewheelclub.com/generators/number-wheel/",
  },
};

export default function NumberWheelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
