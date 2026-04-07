import CTASection from "@/src/presentation/components/landing/organisms/CTASection";
import FAQSection from "@/src/presentation/components/landing/organisms/FAQSection";
import FeaturesSection from "@/src/presentation/components/landing/organisms/FeaturesSection";
import Footer from "@/src/presentation/components/landing/organisms/Footer";
import HeroSection from "@/src/presentation/components/landing/organisms/HeroSection";
import HowItWorksSection from "@/src/presentation/components/landing/organisms/HowItWorksSection";
import Navbar from "@/src/presentation/components/landing/organisms/Navbar";
import PricingSection from "@/src/presentation/components/landing/organisms/PricingSection";
import TestimonialsSection from "@/src/presentation/components/landing/organisms/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
