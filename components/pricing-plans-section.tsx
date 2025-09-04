import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Gold",
    price: "$699",
    originalPrice: "$799",
    period: "per year",
    description: "Get Started",
    popular: false,
    features: {
      Pricing: "$699/year",
      Booking: "✓",
      Concierge: "✓",
      "Cruise Specialist": "✓",
      Cruises: "✓",
      "Car Rentals": "✓",
      Roadside: "✓",
      Flights: "✓",
      Hotels: "✓",
      "Villa & Luxury Homes": "✓",
      "Reward Credits": "✓",
      "Hotel Guarantee": "✓",
      "Pricing & Loyalty Benefit Pricing": "✓",
      "Economy Rewards": "✓",
      "Membership Discount 24/7": "✓",
    },
  },
  {
    name: "Platinum",
    price: "$999",
    originalPrice: "$1,199",
    period: "per year",
    description: "Most Popular",
    popular: true,
    features: {
      Pricing: "$999/year",
      Booking: "✓",
      Concierge: "✓",
      "Cruise Specialist": "✓",
      Cruises: "✓",
      "Car Rentals": "✓",
      Roadside: "✓",
      Flights: "✓",
      Hotels: "✓",
      "Villa & Luxury Homes": "✓",
      "Reward Credits": "✓",
      "Hotel Guarantee": "✓",
      "Pricing & Loyalty Benefit Pricing": "✓",
      "Economy Rewards": "✓",
      "Membership Discount 24/7": "✓",
    },
  },
  {
    name: "Diamond",
    price: "$1,499",
    originalPrice: "$1,799",
    period: "per year",
    description: "Get Started",
    popular: false,
    features: {
      Pricing: "$1,499/year",
      Booking: "✓",
      Concierge: "✓",
      "Cruise Specialist": "✓",
      Cruises: "✓",
      "Car Rentals": "✓",
      Roadside: "✓",
      Flights: "✓",
      Hotels: "✓",
      "Villa & Luxury Homes": "✓",
      "Reward Credits": "✓",
      "Hotel Guarantee": "✓",
      "Pricing & Loyalty Benefit Pricing": "✓",
      "Economy Rewards": "✓",
      "Membership Discount 24/7": "✓",
    },
  },
]

const featureCategories = [
  "Pricing",
  "Booking",
  "Concierge",
  "Cruise Specialist",
  "Cruises",
  "Car Rentals",
  "Roadside",
  "Flights",
  "Hotels",
  "Villa & Luxury Homes",
  "Reward Credits",
  "Hotel Guarantee",
  "Pricing & Loyalty Benefit Pricing",
  "Economy Rewards",
  "Membership Discount 24/7",
]

export default function PricingPlansSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pricing <span className="text-blue-600">Plans</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Unlock exclusive access to Diamond Hotels, cruise specials, and flights with our travel membership - perfect
          for ultimate convenience and value.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? "border-blue-500 border-2" : "border-gray-200"}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 ml-2 line-through">{plan.originalPrice}</span>
                <div className="text-gray-600 mt-1">{plan.period}</div>
              </div>
            </CardHeader>
            <CardContent>
              <Button
                className={`w-full mb-6 ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
              >
                {plan.description}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Comparison Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="font-semibold text-gray-900">Features</div>
            {plans.map((plan, index) => (
              <div key={index} className="text-center font-semibold text-gray-900">
                {plan.name}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {featureCategories.map((feature, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100">
              <div className="text-gray-700 font-medium">{feature}</div>
              {plans.map((plan, planIndex) => (
                <div key={planIndex} className="text-center">
                  {feature === "Pricing" ? (
                    <span className="text-gray-600">{plan.features[feature]}</span>
                  ) : (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, index) => (
          <div key={index} className="text-center">
            <Button variant="outline" className="w-full bg-transparent">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
