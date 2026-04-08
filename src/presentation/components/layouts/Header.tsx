"use client";

import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

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
  { label: "AI Tricks", href: "/tricks" },
  { label: "Guides", href: "/guides" },
  { label: "Setup Guide", href: "/setup-guide" },
  { label: "Local AI", href: "/local-ai" },
  { label: "Free LLMs", href: "/llm-directory" },
  { label: "Contribute", href: "/contribute" },
  { label: "FAQ", href: "/faq" },
];

export default function Header({
  navLinks = DEFAULT_NAV_LINKS,
  ctaLabel = "Browse Guides",
  ctaHref = "/guides",
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

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
              <Link
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <Link href={ctaHref} className="btn-game text-sm px-5 py-2.5">
            {ctaLabel}
          </Link>
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
                <Link
                  href={link.href}
                  className="block py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-between">
              <Link
                href={ctaHref}
                className="btn-game text-sm px-5 py-2.5 inline-block text-center flex-1"
                onClick={() => setOpen(false)}
              >
                {ctaLabel}
              </Link>
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="ml-3 p-2 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
                aria-label="Toggle theme"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
