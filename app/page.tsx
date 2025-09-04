import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import FeaturedSection from "@/components/featured-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import PlatformSection from "@/components/platform-section";
import PricingSection from "@/components/pricing-section";
import RewardCreditsSection from "@/components/reward-credits-section";
import SavingsSection from "@/components/savings-section";
import ScrollToTop from "@/components/scroll-to-top";
import StatsSection from "@/components/stats-section";
import TrustedSection from "@/components/trusted-section";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Header and Hero are siblings */}

      <Header />
      <HeroSection />

      {/* Top section content */}
      <StatsSection />
      <PlatformSection />
      <PartnersSection />
      {/* <SocialSection /> */}

      {/* Middle section content */}
      <RewardCreditsSection />
      <FeaturedSection />
      <SavingsSection />
      <TrustedSection />

      {/* Bottom section content */}
      <ClientsSection />
      <PricingSection />
      <ContactSection />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
