"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header({
  navLinks = DEFAULT_NAV_LINKS,
  ctaLabel = "Get Started",
  ctaHref = "#pricing",
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 glass rounded-2xl transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-text-primary">
            Prompt<span className="gradient-text">Ready</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={ctaHref} className="btn-game text-sm px-5 py-2.5">
            {ctaLabel}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-text-primary cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 animate-fade-in">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={ctaHref}
                className="btn-game text-sm px-5 py-2.5 inline-block text-center w-full"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
