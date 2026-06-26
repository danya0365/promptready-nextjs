import { Sparkles } from "lucide-react";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  linkGroups?: FooterLinkGroup[];
}

const DEFAULT_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Explore",
    links: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "AI Workflows", href: "/ai-workflows" },
      { label: "AI Tricks", href: "/tricks" },
      { label: "GitHub Trends", href: "/github-trends" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "AI Resources", href: "/ai-resources" },
      { label: "Free LLMs", href: "/llm-directory" },
      { label: "Local AI", href: "/local-ai" },
      {
        label: "awesome-free-llm-apis",
        href: "https://github.com/mnfst/awesome-free-llm-apis",
        external: true,
      },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "Guides", href: "/guides" },
      { label: "Setup Guide", href: "/setup-guide" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/danya0265/promptready-nextjs",
        external: true,
      },
      { label: "Contribute", href: "/contribute" },
      { label: "Support Us", href: "/support" },
      { label: "MIT License", href: "/license" },
    ],
  },
];

export default function Footer({
  linkGroups = DEFAULT_LINK_GROUPS,
}: FooterProps) {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-text-primary">
                Prompt<span className="gradient-text">Ready</span>
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Open-source guides for AI-powered development. Free forever.
            </p>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold text-text-primary mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} PromptReady. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Open source &middot; MIT License &middot; Made for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
