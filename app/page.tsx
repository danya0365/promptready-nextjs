import CTASection from "@/src/presentation/components/landing/organisms/CTASection";
import FAQSection from "@/src/presentation/components/landing/organisms/FAQSection";
import GuidesSection from "@/src/presentation/components/landing/organisms/FeaturesSection";
import HeroSection from "@/src/presentation/components/landing/organisms/HeroSection";
import HowItWorksSection from "@/src/presentation/components/landing/organisms/HowItWorksSection";
import SupportSection from "@/src/presentation/components/landing/organisms/PricingSection";
import ContributeSection from "@/src/presentation/components/landing/organisms/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GuidesSection />
      <HowItWorksSection />
      <ContributeSection />
      <SupportSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
