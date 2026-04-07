import { Coffee, Heart, QrCode } from "lucide-react";
import SectionHeading from "../atoms/SectionHeading";

export default function PricingSection() {
  return (
    <section id="support" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          badge="Support Us"
          title="Keep It"
          highlight="Free & Open"
          description="PromptReady is 100% free. If it helped you, consider supporting the project so we can keep creating more guides."
        />

        <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>

            <h3 className="text-2xl font-extrabold text-text-primary mb-3">
              Buy Me a Coffee
            </h3>
            <p className="text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
              Every donation helps maintain the project, write new guides, and
              keep everything free for the developer community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://buymeacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-game inline-flex items-center gap-2 text-base px-8 py-3.5"
              >
                <Coffee className="w-5 h-5" />
                Donate via Buy Me a Coffee
              </a>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-text-primary bg-surface-elevated border border-border hover:border-primary/40 transition-all duration-200 cursor-pointer">
                <QrCode className="w-5 h-5" />
                QR PromptPay
              </button>
            </div>

            <p className="text-xs text-text-muted">
              No pressure — starring the repo on GitHub helps just as much!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
