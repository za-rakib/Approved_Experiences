import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Approved Experiences Traveler?",
    answer:
      "Approved Experiences Traveler is a premium travel membership that provides exclusive access to discounted hotels, flights, cruises, and personalized concierge services to help you save money and enhance your travel experiences.",
  },
  {
    question: "Who is the program designed for?",
    answer:
      "Our program is designed for frequent travelers and families who want to maximize their travel savings and enjoy premium experiences. Whether you're planning business trips or family vacations, our membership provides significant value.",
  },
  {
    question: "How much does membership cost?",
    answer:
      "We offer three membership tiers: Gold ($699/year), Platinum ($999/year), and Diamond ($1,499/year). Each tier includes different benefits and savings opportunities to match your travel needs.",
  },
  {
    question: "Booking & Reservations",
    answer:
      "Members can book through our dedicated platform with access to exclusive rates and inventory. Our concierge team is available 24/7 to assist with bookings and special requests.",
  },
  {
    question: "How do I make a booking?",
    answer:
      "Simply log into your member portal, search for your desired destination and dates, and book directly through our platform. You can also call our concierge team for personalized assistance with complex itineraries.",
  },
  {
    question: "What discounts can I expect?",
    answer:
      "Members typically save 20-70% on hotels, up to 40% on flights, and receive exclusive cruise deals. Savings vary by destination, season, and availability, but our members consistently report significant cost reductions.",
  },
  {
    question: "Are blackout dates or restrictions applied?",
    answer:
      "While some promotional rates may have restrictions, our core member benefits have minimal blackout dates. We strive to provide maximum flexibility for your travel plans throughout the year.",
  },
]

export default function PricingFaqSection() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Here are some frequently <span className="text-blue-600">asked questions</span>
        </h2>
        <p className="text-gray-600">
          Everything you need to know about the product and billing. Can't find the answer you're looking for? Please
          chat to our friendly team.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
