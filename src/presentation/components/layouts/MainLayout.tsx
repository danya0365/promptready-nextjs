import type { ReactNode } from "react";
import Header, { type NavItem } from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function MainLayout({
  children,
  navItems,
  ctaLabel,
  ctaHref,
}: MainLayoutProps) {
  return (
    <>
      <Header navItems={navItems} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
