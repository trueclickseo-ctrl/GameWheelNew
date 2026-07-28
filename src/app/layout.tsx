import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "GameWheelClub | Decidable Fun with Random Decision Wheels",
  description: "Spin custom decision wheels, generate random numbers, roll dice, and make random choices instantly. Fast, accessible, and neobrutalist-designed decision tools.",
  metadataBase: new URL("https://www.gamewheelclub.com"),
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  if (theme === 'dark' || (!theme && darkQuery.matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-retro-navy dark:bg-retro-navy dark:text-cream">
        {children}
      </body>
    </html>
  );
}
