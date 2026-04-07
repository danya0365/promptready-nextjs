"use client";

import {
  generateEnvExample,
  generatePythonExample,
  generateTSExample,
  type LLMProvider,
} from "@/src/domin/data/llm-providers";
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  FileCode2,
  Globe,
  Server,
  Terminal,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ─── Code Block with Copy ────────────────────────────────────────────────────

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-surface border-b border-border">
        <span className="text-xs font-mono text-text-muted">{language}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-text-muted hover:text-primary hover:bg-primary/10 transition-all cursor-pointer"
        >
          {copied ? (
            <>
              <Check size={12} className="text-success" />
              Copied
            </>
          ) : (
            <>
              <Copy size={12} />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="p-4 bg-surface-elevated overflow-x-auto text-sm leading-relaxed">
        <code className="text-text-secondary font-mono whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  );
}

// ─── Tab Component ───────────────────────────────────────────────────────────

type TabId = "typescript" | "python";

function CodeTabs({ provider }: { provider: LLMProvider }) {
  const [activeTab, setActiveTab] = useState<TabId>("typescript");

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    {
      id: "typescript",
      label: "TypeScript",
      icon: <FileCode2 size={14} />,
    },
    {
      id: "python",
      label: "Python",
      icon: <Terminal size={14} />,
    },
  ];

  return (
    <div>
      <div className="flex gap-1 mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === tab.id
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-surface-elevated text-text-muted border border-border hover:text-text-secondary"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "typescript" && (
        <CodeBlock
          code={generateTSExample(provider)}
          language="TypeScript (OpenAI SDK)"
        />
      )}
      {activeTab === "python" && (
        <CodeBlock
          code={generatePythonExample(provider)}
          language="Python (OpenAI SDK)"
        />
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ProviderDetail({
  provider,
}: {
  provider: LLMProvider;
}) {
  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-40 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Link
          href="/llm-directory"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          กลับไปหน้า Directory
        </Link>

        {/* Hero */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{provider.flag}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
                {provider.name}
              </h1>
              <div className="flex items-center gap-2 mt-1.5">
                {provider.type === "provider" ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    <Server size={10} />
                    PROVIDER API
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-success/10 text-success border border-success/20">
                    <Zap size={10} />
                    INFERENCE
                  </span>
                )}
                {provider.openAICompatible ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                    OpenAI SDK ✓
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-surface-elevated text-text-muted border border-border">
                    Custom SDK
                  </span>
                )}
              </div>
            </div>
          </div>

          {provider.highlight && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              ✦ {provider.highlight}
            </div>
          )}
        </header>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          <div className="glass rounded-xl p-4">
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              Rate Limits
            </p>
            <div className="flex flex-wrap gap-1.5">
              {provider.limits.map((l) => (
                <span
                  key={l}
                  className="px-2 py-0.5 rounded-md text-xs bg-secondary/10 text-secondary border border-secondary/20 font-mono"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-4">
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              Default Model
            </p>
            <span className="text-xs font-mono text-text-primary bg-surface px-2 py-1 rounded-md border border-border-muted">
              {provider.defaultModel}
            </span>
          </div>
          <div className="glass rounded-xl p-4">
            <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">
              Base URL
            </p>
            <div className="flex items-center gap-1">
              <Globe size={11} className="text-text-muted shrink-0" />
              <span className="text-xs font-mono text-text-secondary truncate">
                {provider.baseUrl.replace("https://", "").split("/")[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Models */}
        <div className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-text-primary mb-3">
            โมเดลที่รองรับ
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {provider.models.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 rounded-lg text-xs bg-surface text-text-secondary border border-border-muted font-mono"
              >
                {m}
              </span>
            ))}
          </div>
          {provider.note && (
            <p className="mt-3 text-xs text-text-muted">※ {provider.note}</p>
          )}
        </div>

        {/* Setup Steps */}
        <div className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-text-primary mb-4">
            วิธีรับ API Key
          </h2>
          <ol className="space-y-3">
            {provider.setupSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-text-secondary leading-relaxed pt-0.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <div className="flex gap-3 mt-5">
            <a
              href={provider.apiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-game inline-flex items-center gap-2 text-sm px-6 py-2.5"
            >
              รับ API Key
              <ExternalLink size={14} />
            </a>
            {provider.docsUrl && (
              <a
                href={provider.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-text-primary bg-surface-elevated border border-border hover:border-primary/40 transition-all"
              >
                <Globe size={14} />
                Docs
              </a>
            )}
          </div>
        </div>

        {/* Code Examples */}
        <div className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-text-primary mb-4">
            Code Example
          </h2>
          <CodeTabs provider={provider} />
        </div>

        {/* Environment Variable */}
        <div className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold text-text-primary mb-3">
            Environment Variable
          </h2>
          <p className="text-xs text-text-muted mb-3">
            อย่า hardcode API key ใน code — ใช้ environment variable แทน
          </p>
          <CodeBlock code={generateEnvExample(provider)} language="bash" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-10">
          {provider.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs bg-primary/8 text-primary border border-primary/15 font-medium"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs text-text-muted mb-8">
          ข้อมูลอ้างอิงจาก{" "}
          <a
            href="https://github.com/mnfst/awesome-free-llm-apis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-2"
          >
            mnfst/awesome-free-llm-apis
          </a>{" "}
          — ดูข้อมูลล่าสุดได้ที่ repo โดยตรง
        </p>

        {/* Back */}
        <Link
          href="/llm-directory"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft size={14} />
          กลับไปหน้า Directory
        </Link>
      </div>
    </section>
  );
}
