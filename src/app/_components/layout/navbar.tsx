"use client";

import { siteConfig } from "@/lib/site-config";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Logo } from "@/components/logo";
import CountrySelector from "@/components/country-selector";

export function NavBar() {
  const scrolled = useScroll(15);

  return (
    <header
      className={cn(
        "sticky inset-x-4 top-0 z-50 mx-auto flex justify-center px-3 py-3 transition duration-300 bg-white w-full border-b border-border/50",
        scrolled &&
          "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
      )}
    >
      <div className="w-full md:my-auto max-w-screen-xl">
        <div className="relative flex items-center justify-between space-x-8">
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">Solar Tech Logo</span>
            <Logo />
          </Link>
          <CountrySelector />
        </div>
      </div>
    </header>
  );
}
