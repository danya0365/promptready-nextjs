import type { ReactNode } from "react";
import Header, { type NavLink } from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

export default function MainLayout({
  children,
  navLinks,
  ctaLabel,
  ctaHref,
}: MainLayoutProps) {
  return (
    <>
      <Header navLinks={navLinks} ctaLabel={ctaLabel} ctaHref={ctaHref} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
