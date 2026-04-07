import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MIT License — PromptReady",
  description: "PromptReady is released under the MIT License.",
};

export default function LicensePage() {
  return (
    <main className="pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-4">
            Open Source
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-3">
            MIT <span className="gradient-text">License</span>
          </h1>
          <p className="text-text-secondary leading-relaxed">
            PromptReady is free and open-source software released under the MIT
            License. You are free to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies.
          </p>
        </header>

        <div className="glass rounded-2xl p-6 sm:p-8 mb-8">
          <pre className="whitespace-pre-wrap text-sm text-text-secondary leading-relaxed font-mono">
            {`MIT License

Copyright (c) ${new Date().getFullYear()} PromptReady Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/danya0365/promptready-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-game inline-flex items-center gap-2 text-sm px-5 py-2.5"
          >
            <ExternalLink size={14} />
            View on GitHub
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft size={14} />
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </main>
  );
}
