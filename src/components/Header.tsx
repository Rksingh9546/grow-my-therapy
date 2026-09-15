"use client";

import { useState } from "react";
import Link from "next/link";
import Brand from "./Brand";
import type { CtaLink, NavLink } from "@/content/types";

type Props = {
  brand: { name: string; tagline: string };
  links: NavLink[];
  cta: CtaLink;
};

export default function Header({ brand, links, cta }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 lg:px-12">
        <Link href="/#top" aria-label={`${brand.name} — home`}>
          <Brand name={brand.name} tagline={brand.tagline} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cta.href}
            className="rounded-full border border-ink px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            {cta.label}
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-cream px-6 pb-6 pt-2 lg:hidden">
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 text-xs uppercase tracking-[0.18em] text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <Link
                href={cta.href}
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-ink px-7 py-3 text-xs uppercase tracking-[0.18em] text-ink"
              >
                {cta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}