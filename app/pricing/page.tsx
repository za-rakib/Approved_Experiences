import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import PricingPlansSection from "@/components/pricing-plans-section"
import PricingFaqSection from "@/components/pricing-faq-section"
import ContactSection from "@/components/contact-section"

export default function PricingPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <PricingPlansSection />
        <PricingFaqSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
