import CTASection from "@/src/presentation/components/landing/organisms/CTASection";
import ExploreSection from "@/src/presentation/components/landing/organisms/ExploreSection";
import HeroSection from "@/src/presentation/components/landing/organisms/HeroSection";
import HowItWorksSection from "@/src/presentation/components/landing/organisms/HowItWorksSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ExploreSection />
      <CTASection />
    </>
  );
}
