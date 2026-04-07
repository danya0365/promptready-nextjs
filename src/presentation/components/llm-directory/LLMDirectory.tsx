"use client";

import {
  COUNTRIES,
  PROVIDERS,
  PROVIDER_TYPES,
  type LLMProvider,
} from "@/src/domin/data/llm-providers";
import {
  Check,
  Copy,
  ExternalLink,
  Globe,
  Search,
  Server,
  Sparkles,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

// ─── Sub-components ─────────────────────────────────────────────────────────

function CountBadge({ count, total }: { count: number; total: number }) {
  return (
    <span className="text-xs text-text-muted font-mono">
      {count}/{total}
    </span>
  );
}

function TypeBadge({ type }: { type: LLMProvider["type"] }) {
  return type === "provider" ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20">
      <Server size={9} />
      PROVIDER
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide bg-success/10 text-success border border-success/20">
      <Zap size={9} />
      INFERENCE
    </span>
  );
}

function CompatBadge({ compatible }: { compatible: boolean }) {
  return compatible ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-secondary/10 text-secondary border border-secondary/20">
      OpenAI SDK ✓
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-surface-elevated text-text-muted border border-border">
      Custom SDK
    </span>
  );
}

function ApiKeyButton({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
        bg-primary/10 text-primary border border-primary/20
        hover:bg-primary/20 hover:border-primary/40 transition-all duration-150 group"
    >
      รับ API Key
      <ExternalLink
        size={10}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
      />
    </a>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded text-text-muted hover:text-primary transition-colors cursor-pointer"
      title="Copy URL"
    >
      {copied ? (
        <Check size={11} className="text-success" />
      ) : (
        <Copy size={11} />
      )}
    </button>
  );
}

function ProviderCard({ provider }: { provider: LLMProvider }) {
  return (
    <article className="group relative flex flex-col glass rounded-2xl p-5 card-hover">
      {/* top accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-300" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-lg leading-none">{provider.flag}</span>
            <h3 className="font-semibold text-text-primary text-sm leading-tight truncate">
              {provider.name}
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <TypeBadge type={provider.type} />
            <CompatBadge compatible={provider.openAICompatible} />
          </div>
        </div>
        <ApiKeyButton url={provider.apiUrl} />
      </div>

      {/* Highlight */}
      {provider.highlight && (
        <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
          ✦ {provider.highlight}
        </div>
      )}

      {/* Featured models */}
      <div className="mb-3">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
          โมเดลหลัก
        </p>
        <div className="flex flex-wrap gap-1">
          {provider.featuredModels.map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 rounded-md text-[11px] bg-surface text-text-secondary border border-border-muted font-mono"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Rate limits */}
      <div className="mb-3">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
          Rate Limits
        </p>
        <div className="flex flex-wrap gap-1.5">
          {provider.limits.map((l) => (
            <span
              key={l}
              className="px-2 py-1 rounded-md text-[11px] bg-secondary/10 text-secondary border border-secondary/20 font-mono"
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* Note */}
      {provider.note && (
        <p className="text-[11px] text-text-muted leading-relaxed mb-3">
          <span className="text-text-muted/60">※ </span>
          {provider.note}
        </p>
      )}

      {/* Footer */}
      <div className="mt-auto pt-3 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-1 text-text-muted hover:text-text-secondary transition-colors">
          <Globe size={11} />
          <span className="text-[11px] font-mono truncate max-w-[160px]">
            {provider.apiUrl.replace("https://", "").split("/")[0]}
          </span>
          <CopyButton text={provider.apiUrl} />
        </div>
        {provider.docsUrl && (
          <a
            href={provider.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-text-muted hover:text-primary transition-colors underline underline-offset-2"
          >
            Docs
          </a>
        )}
      </div>
    </article>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────

function StatsBar({ providers }: { providers: LLMProvider[] }) {
  const openAICompat = providers.filter((p) => p.openAICompatible).length;
  const totalModels = providers.reduce((sum, p) => sum + p.models.length, 0);

  return (
    <div className="flex flex-wrap items-center gap-6 px-1 py-3 border-b border-border mb-6 text-xs text-text-muted">
      <span>
        <span className="text-text-primary font-semibold font-mono">
          {providers.length}
        </span>{" "}
        providers
      </span>
      <span>
        <span className="text-text-primary font-semibold font-mono">
          {openAICompat}
        </span>{" "}
        OpenAI-compatible
      </span>
      <span>
        <span className="text-text-primary font-semibold font-mono">
          ~{totalModels}+
        </span>{" "}
        โมเดลรวมทั้งหมด
      </span>
      <span>
        <span className="text-success font-semibold">ฟรี 100%</span>
      </span>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function LLMDirectory() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<
    "all" | "provider" | "inference"
  >("all");
  const [countryFilter, setCountryFilter] = useState<"all" | string>("all");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return PROVIDERS.filter((p) => {
      if (typeFilter !== "all" && p.type !== typeFilter) return false;
      if (countryFilter !== "all" && p.country !== countryFilter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.models.some((m) => m.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.highlight?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [query, typeFilter, countryFilter]);

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-40 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-primary bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4" />
            Free Forever
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
            Free <span className="gradient-text">LLM APIs</span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            รวม API ของโมเดล AI ที่มี free tier ถาวร — ไม่มีหมดอายุ
            ไม่ต้องใส่บัตรเครดิต
          </p>
        </header>

        {/* Search & Filters */}
        <div className="mb-6 space-y-3 max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหา provider, โมเดล, หรือ tag..."
              className="w-full pl-10 pr-4 py-2.5 glass rounded-xl text-sm text-text-primary placeholder-text-muted
                focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Filters row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Type filter */}
            <div className="flex gap-1">
              {PROVIDER_TYPES.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTypeFilter(t.value as typeof typeFilter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                    typeFilter === t.value
                      ? "btn-game px-3! py-1.5! text-xs! rounded-lg!"
                      : "bg-surface-elevated text-text-secondary border border-border hover:border-primary/40 hover:text-text-primary"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-border" />

            {/* Country filter */}
            <div className="flex gap-1">
              <button
                onClick={() => setCountryFilter("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  countryFilter === "all"
                    ? "btn-game px-3! py-1.5! text-xs! rounded-lg!"
                    : "bg-surface-elevated text-text-secondary border border-border hover:border-primary/40 hover:text-text-primary"
                }`}
              >
                ทุกประเทศ
              </button>
              {COUNTRIES.map((c) => (
                <button
                  key={c.value}
                  onClick={() =>
                    setCountryFilter(
                      countryFilter === c.value ? "all" : c.value,
                    )
                  }
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    countryFilter === c.value
                      ? "btn-game px-3! py-1.5! text-xs! rounded-lg!"
                      : "bg-surface-elevated text-text-secondary border border-border hover:border-primary/40 hover:text-text-primary"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Count */}
            <div className="ml-auto">
              <CountBadge count={filtered.length} total={PROVIDERS.length} />
            </div>
          </div>
        </div>

        {/* Stats */}
        <StatsBar providers={filtered} />

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-text-muted">
            <p className="text-4xl mb-3">¯\_(ツ)_/¯</p>
            <p className="text-sm">
              ไม่พบ provider ที่ตรงกับ &quot;{query}&quot;
            </p>
            <button
              onClick={() => {
                setQuery("");
                setTypeFilter("all");
                setCountryFilter("all");
              }}
              className="mt-3 text-xs text-primary hover:underline cursor-pointer"
            >
              ล้างตัวกรอง
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            ข้อมูลอ้างอิงจาก{" "}
            <a
              href="https://github.com/mnfst/awesome-free-llm-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-2 transition-colors"
            >
              awesome-free-llm-apis
            </a>
          </p>
          <p>RPM = requests/min · RPD = requests/day · TPM = tokens/min</p>
        </footer>
      </div>
    </section>
  );
}
