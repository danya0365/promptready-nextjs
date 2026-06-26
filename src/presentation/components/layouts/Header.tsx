"use client";

import { ChevronDown, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
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

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

interface HeaderProps {
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

const DEFAULT_NAV: NavItem[] = [
  {
    label: "Explore",
    children: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "AI Workflows", href: "/ai-workflows" },
      { label: "AI Tricks", href: "/tricks" },
      { label: "GitHub Trends", href: "/github-trends" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "AI Resources", href: "/ai-resources" },
      { label: "Free LLMs", href: "/llm-directory" },
      { label: "Local AI", href: "/local-ai" },
    ],
  },
  {
    label: "Learn",
    children: [
      { label: "Start Here", href: "/start-here" },
      { label: "Guides", href: "/guides" },
      { label: "Setup Guide", href: "/setup-guide" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export default function Header({
  navItems = DEFAULT_NAV,
  ctaLabel = "Browse Workflows",
  ctaHref = "/ai-workflows",
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const closeMobile = () => {
    setOpen(false);
    setExpanded(null);
  };

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
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-text-secondary group-hover:text-primary transition-colors duration-200"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown (CSS-only: opens on hover & keyboard focus) */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-200">
                  <ul className="glass rounded-2xl p-2 min-w-52 shadow-xl shadow-black/5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href!}
                  className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
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
          <ul className="flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-text-primary"
                    aria-expanded={expanded === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expanded === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded === item.label && (
                    <ul className="flex flex-col pl-3 border-l border-border ml-1 mb-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                            onClick={closeMobile}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    className="block py-2 text-sm font-semibold text-text-primary hover:text-primary transition-colors"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li className="flex items-center justify-between mt-3">
              <Link
                href={ctaHref}
                className="btn-game text-sm px-5 py-2.5 inline-block text-center flex-1"
                onClick={closeMobile}
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
