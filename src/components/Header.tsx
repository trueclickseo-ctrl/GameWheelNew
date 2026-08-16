"use client";

import Navbar from "./Navbar";

export default function Header({ currentLocale = "en" }: { currentLocale?: string }) {
  return <Navbar currentLocale={currentLocale} />;
}

export { Navbar };
