import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import CheckoutForm from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <CheckoutForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
