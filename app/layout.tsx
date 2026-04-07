import "@/public/styles/index.css";
import MainLayout from "@/src/presentation/components/layouts/MainLayout";
import ThemeProvider from "@/src/presentation/components/providers/ThemeProvider";
import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "PromptReady — Open Source AI Development Guides",
  description:
    "Free, open-source setup guides and prompt templates for AI-powered development. Prepare your project before prompting AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={notoSansThai.variable} suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased`}>
        <ThemeProvider>
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
