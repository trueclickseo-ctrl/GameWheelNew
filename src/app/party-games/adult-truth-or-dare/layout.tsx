import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Truth or Dare Wheel | GameWheelClub",
  description: "Spin the spicy Truth or Dare wheel for adults. Fun questions and exciting dares.",
  alternates: {
    canonical: "https://www.gamewheelclub.com/party-games/adult-truth-or-dare/",
  },
};

export default function AdultTruthOrDareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
