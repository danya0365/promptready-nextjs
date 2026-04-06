import '@/public/styles/index.css';
import type { Metadata } from "next";
import { Noto_Sans_Thai } from 'next/font/google';

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  variable: '--font-noto-sans-thai',
  preload: true,
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'PromptReady — AI-Consistent Project Setup',
  description:
    'A complete checklist and guide to prepare your Next.js project before prompting AI — so output stays consistent every session.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={notoSansThai.variable} suppressHydrationWarning>
      <body className={`${notoSansThai.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
