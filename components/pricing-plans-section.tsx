// 'use client'

// import { Button } from "@/components/ui/button"
// import { useGetMembershipPlansQuery } from "@/redux/services/api"
// import { Check } from "lucide-react"
// import Link from "next/link"

// const plans = [
//   {
//     name: "Gold",
//     price: "$699",
//     originalPrice: "$799",
//     period: "per year",
//     description: "Get Started",
//     popular: false,
//     features: {
//       Pricing: "$699/year",
//       Booking: "✓",
//       Concierge: "✓",
//       "Cruise Specialist": "✓",
//       Cruises: "✓",
//       "Car Rentals": "✓",
//       Roadside: "✓",
//       Flights: "✓",
//       Hotels: "✓",
//       "Villa & Luxury Homes": "✓",
//       "Reward Credits": "✓",
//       "Hotel Guarantee": "✓",
//       "Pricing & Loyalty Benefit Pricing": "✓",
//       "Economy Rewards": "✓",
//       "Membership Discount 24/7": "✓",
//     },
//   },
//   {
//     name: "Platinum",
//     price: "$999",
//     originalPrice: "$1,199",
//     period: "per year",
//     description: "Most Popular",
//     popular: true,
//     features: {
//       Pricing: "$999/year",
//       Booking: "✓",
//       Concierge: "✓",
//       "Cruise Specialist": "✓",
//       Cruises: "✓",
//       "Car Rentals": "✓",
//       Roadside: "✓",
//       Flights: "✓",
//       Hotels: "✓",
//       "Villa & Luxury Homes": "✓",
//       "Reward Credits": "✓",
//       "Hotel Guarantee": "✓",
//       "Pricing & Loyalty Benefit Pricing": "✓",
//       "Economy Rewards": "✓",
//       "Membership Discount 24/7": "✓",
//     },
//   },
//   {
//     name: "Diamond",
//     price: "$1,499",
//     originalPrice: "$1,799",
//     period: "per year",
//     description: "Get Started",
//     popular: false,
//     features: {
//       Pricing: "$1,499/year",
//       Booking: "✓",
//       Concierge: "✓",
//       "Cruise Specialist": "✓",
//       Cruises: "✓",
//       "Car Rentals": "✓",
//       Roadside: "✓",
//       Flights: "✓",
//       Hotels: "✓",
//       "Villa & Luxury Homes": "✓",
//       "Reward Credits": "✓",
//       "Hotel Guarantee": "✓",
//       "Pricing & Loyalty Benefit Pricing": "✓",
//       "Economy Rewards": "✓",
//       "Membership Discount 24/7": "✓",
//     },
//   },
// ]

// const featureCategories = [
//   "Pricing",
//   "Booking",
//   "Concierge",
//   "Cruise Specialist",
//   "Cruises",
//   "Car Rentals",
//   "Roadside",
//   "Flights",
//   "Hotels",
//   "Villa & Luxury Homes",
//   "Reward Credits",
//   "Hotel Guarantee",
//   "Pricing & Loyalty Benefit Pricing",
//   "Economy Rewards",
//   "Membership Discount 24/7",
// ]

// export default function PricingPlansSection() {

//     const {data:membershipPlans,
//       error:membershipError,
//       isLoading:membershipIsLoading,
//       isSuccess:membershipIsError,
//       isError:membershipisError,
//       refetch:membershipRefetch} = useGetMembershipPlansQuery(undefined);

//       console.log( "membership plans in pricing section:", membershipPlans);

//   return (
//     <section className="py-16 px-4 max-w-7xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Pricing <span className="text-blue-600">Plans</span>
//         </h1>
//         <p className="text-gray-600 max-w-3xl mx-auto">
//           Unlock exclusive access to Diamond Hotels, cruise specials, and flights with our travel membership - perfect
//           for ultimate convenience and value.
//         </p>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid md:grid-cols-3 gap-8 mb-16">
//  {/* Gold Plan */}
//           <div className="bg-(--color-light-blue-bg) p-8 rounded-3xl border border-gray-200 flex flex-col md:col-span-2 lg:col-span-1">
//             <h3 className="text-2xl font-bold">Gold</h3>
//             <p className="text-gray-500 mt-1">
//               Ultimate luxury travel experience with exclusive benefits.
//             </p>
//             <div className="my-6">
//               <span className="text-5xl font-extrabold text-gray-900">
//                 $699
//               </span>
//               <span className="text-xl font-bold text-gray-400 line-through ml-2">
//                 $899
//               </span>
//               <span className="text-gray-500">/ year</span>
//             </div>
//             <Link
//               href="/checkout"
//               className="w-full text-center border border-gray-300 text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition"
//             >
//               Get Started
//             </Link>
//           </div>

//  {/* Platinum Plan */}
//           <div className="bg-(--color-custom-blue) text-white p-8 rounded-3xl shadow-2xl shadow-blue-200 flex flex-col transform md:scale-105">
//             <h3 className="text-2xl font-bold">Platinum</h3>
//             <p className="text-blue-200 mt-1">
//               Premium luxury travel experience with the best value.
//             </p>
//             <div className="my-6">
//               <span className="text-5xl font-extrabold">$999</span>
//               <span className="text-xl font-bold text-blue-300 line-through ml-2">
//                 $1,199
//               </span>
//               <span className="text-blue-200">/ year</span>
//             </div>
//             <Link
//               href="/checkout"
//               className="w-full text-center bg-white text-(--color-custom-blue) font-semibold py-3 rounded-full hover:bg-gray-100 transition"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Diamond Plan */}
//           <div className="bg-(--color-light-blue-bg) p-8 rounded-3xl border border-gray-200 flex flex-col md:col-span-2 lg:col-span-1">
//             <h3 className="text-2xl font-bold">Diamond</h3>
//             <p className="text-gray-500 mt-1">
//               Ultimate luxury travel experience with exclusive benefits.
//             </p>
//             <div className="my-6">
//               <span className="text-5xl font-extrabold text-gray-900">
//                 $1,499
//               </span>
//               <span className="text-xl font-bold text-gray-400 line-through ml-2">
//                 $1699
//               </span>
//               <span className="text-gray-500">/ year</span>
//             </div>
//             <Link
//               href="/checkout"
//               className="w-full text-center border border-gray-300 text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition"
//             >
//               Get Started
//             </Link>
//           </div>

//       </div>

//       {/* Feature Comparison Table */}
//       <div className="overflow-x-auto">
//         <div className="min-w-full">
//           {/* Table Header */}
//           <div className="grid grid-cols-4 gap-4 mb-4">
//             <div className="font-semibold text-gray-900">Features</div>
//             {plans.map((plan, index) => (
//               <div key={index} className="text-center font-semibold text-gray-900">
//                 {plan.name}
//               </div>
//             ))}
//           </div>

//           {/* Feature Rows */}
//           {featureCategories.map((feature, index) => (
//             <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100">
//               <div className="text-gray-700 font-medium">{feature}</div>
//               {plans.map((plan, planIndex) => (
//                 <div key={planIndex} className="text-center">
//                   {feature === "Pricing" ? (
//                     <span className="text-gray-600">{plan.features[feature]}</span>
//                   ) : (
//                     <Check className="w-5 h-5 text-green-500 mx-auto" />
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Buttons */}
//       <div className="grid md:grid-cols-3 gap-8 mt-8">
//         {plans.map((plan, index) => (
//           <div key={index} className="text-center">
//             <Button variant="outline" className="w-full bg-transparent">
//               Get Started
//             </Button>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

"use client";

import { Button } from "@/components/ui/button";
import { useGetMembershipPlansQuery } from "@/redux/services/api";
import {
  CheckCircle2,
  Circle,
  CircleMinus,
  CircleMinusIcon,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMobile } from "./ui/use-mobile";

const featureCategories = [
  "Pricing",
  "Hotels",
  "Cruises",
  "Car Rentals",
  "Homes",
  "Flights",
  "Villas & Luxury Homes",
  "Reward Credits",
  "Value Guarantee",
  "Friends & Family Benefit Sharing",
  "Boomerang Rewards",
  "Approved Lux Concierge (24/7)",
];

const featureDetails: { [key: string]: string } = {
  Hotels:
    "Access to over 1 million hand-picked properties worldwide with savings up to 70% off retail rates",
  Cruises:
    "Discounts of up to 40% on sailings with 44 + major cruise lines (30,000+ itineraries).",
  "Car Rentals":
    "Car rental savings up to 50% at more than 30,000 pickup locations globally.",
  Homes:
    "Access to over 500,000 vacation homes—from villas to condos—in top destinations worldwide.",
  Flights:
    "Earn points and enjoy exclusive benefits across 700 + global airline partners.",
  "Villas & Luxury Homes":
    "A dedicated marketplace for bidding on or offering timeshare stays at resort properties.",
  "Reward Credits":
    "Redeemable at your favorite restaurants (Morton's Steakhouse), top retail stores (Best Buy, Nordstrom), and major online retailers (Apple, Amazon).",
  "Value Guarantee":
    "Find a lower price anywhere online? We'll refund you 110% of the difference.",
  "Friends & Family Benefit Sharing":
    "Share your membership benefits with up to 10 friends & family members, each of whom becomes an Approved Experiences Traveler sub-member under your account.",
  "Boomerang Rewards":
    "Send invites to friends -> they create a free account -> when they book discounted travel, you earn reward credits.",
  "Approved Lux Concierge (24/7)":
    "24/7 dedicated concierge & personal assistant service to handle any request—travel, dining reservations, lifestyle management, and more.",
};

export default function PricingPlansSection() {
  const {
    data: membershipPlans,
    error,
    isLoading,
    isSuccess,
  } = useGetMembershipPlansQuery(undefined);
  const isMobile = useMobile();
  const [selectedPlan, setSelectedPlan] = useState("Platinum");
  const router = useRouter();

  if (isLoading) {
    return <p className="text-center">Loading membership plans...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Failed to load plans</p>;
  }
  console.log(
    "membership plans in pricing section:",
    membershipPlans.data[0].id
  );
  // Transform API data into UI-friendly format
  const plans =
    membershipPlans?.data?.map((plan: any) => ({
      name: plan?.name,
      id: plan?.id,
      price: `$${plan?.discountedPrice}`,
      originalPrice: `$${plan?.regularPrice}`,
      period: `per ${plan?.billingPeriod}`,
      description: plan?.description,
      popular: plan?.category === "Premium", // Example: mark Platinum as popular
      features: {
        Pricing: `$${plan?.discountedPrice}/${plan?.billingPeriod}`,
        ...Object.fromEntries(
          plan?.features.map((f: any) => [f.name, f.isIncluded ? "✓" : "✗"])
        ),
      },
    })) ?? [];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Pricing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
            Plans
          </span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Unlock exclusive access to Diamond Hotels, cruise specials, and
          flights with our travel membership - perfect for ultimate convenience
          and value.
        </p>
      </div>

      {isMobile ? (
        <div>
          {/* Mobile Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {plans.map((plan: any) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`px-6 py-4 rounded-xl text-base font-semibold transition-colors ${
                  selectedPlan === plan.name
                    ? "bg-[#E9F0FF] text-[#2563EB]"
                    : "bg-transparent text-[#001F63]"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Mobile Plan Details */}
          {plans
            .filter((plan: any) => plan.name === selectedPlan)
            .map((plan: any) => (
              <div key={plan.name}>
                <div className="bg-[#2563EB] text-white p-6 rounded-3xl shadow-lg">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-1 mb-6 text-lg">{plan.description}</p>
                  <div>
                    <span className="text-4xl font-extrabold">
                      {plan.price}
                    </span>
                    <span className="text-xl font-bold  line-through ml-2">
                      {plan.originalPrice}
                    </span>
                    <span className="">/ {plan.period}</span>
                  </div>
                  <Button
                    onClick={() => router.push(`/checkout/${String(plan.id)}`)}
                    className="w-full bg-white text-[#2563EB] font-medium py-3 mt-6 rounded-full hover:bg-gray-100 transition"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Mobile Feature List */}
                <div className="mt-8 space-y-4">
                  {featureCategories
                    .filter((f) => f !== "Pricing")
                    .map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start justify-between border-b pb-4"
                      >
                        <div className="pr-4">
                          <p className="font-semibold text-gray-800">
                            {feature}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {featureDetails[feature]}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          {(() => {
                            if (
                              feature === "Friends & Family Benefit Sharing"
                            ) {
                              return (
                                <PlusCircle className="w-6 h-6 text-blue-500" />
                              );
                            }
                            if (plan.features[feature] === "✓") {
                              return (
                                <CheckCircle2 className="w-6 h-6 text-blue-500" />
                              );
                            }
                            return (
                              <CircleMinusIcon className="w-6 h-6 text-gray-300" />
                            );
                          })()}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                  <Button
                    onClick={() => router.push(`/checkout/${String(plan.id)}`)}
                    variant="outline"
                    className="w-full bg-[#F7FAFF] border-1 border-black text-black font-semibold py-6 mt-6 rounded-full hover:bg-gray-100 transition"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
          {/* Desktop Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan: any, idx: any) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl flex flex-col ${
                  plan.popular
                    ? "bg-[#2563EB] text-white transform md:scale-105"
                    : "bg-[#F7FAFF] border border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p
                  className={
                    plan.popular ? "text-[#F4F4F4] mt-1" : "text-[#525253] mt-1"
                  }
                >
                  {plan.description}
                </p>
                <div className="my-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-[#001F63]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xl font-bold ml-2 line-through ${
                      plan.popular ? "text-white" : "text-[#001F63]"
                    }`}
                  >
                    {plan.originalPrice}
                  </span>
                  <span
                    className={plan.popular ? "text-blue-200" : "text-gray-500"}
                  >
                    / {plan.period}
                  </span>
                </div>
                <Link
                  href={`/checkout/${String(plan.id)}`}
                  className={`w-full text-center font-medium text-[16px] py-3 rounded-full transition ${
                    plan.popular
                      ? "bg-white text-[#2563EB] hover:bg-gray-100"
                      : "border border-[#001F63] text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop Feature Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="font-semibold text-[#0E0E0F]">Features</div>
                {plans.map((plan: any) => (
                  <div
                    key={plan.name}
                    className="text-center font-semibold text-[#0E0E0F]"
                  >
                    {plan.name}
                  </div>
                ))}
              </div>

              {featureCategories.map((feature) => (
                <div
                  key={feature}
                  className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100"
                >
                  <div className="text-gray-700 font-medium">{feature}</div>
                  {plans.map((plan: any) => (
                    <div key={plan.name} className="text-center">
                      {(() => {
                        if (feature === "Pricing") {
                          return (
                            <span className="text-gray-600">
                              {plan.features[feature]}
                            </span>
                          );
                        }
                        if (plan.features[feature] === "✓") {
                          return (
                            <CheckCircle2 className="w-5 h-5 text-[#2563EB] mx-auto" />
                          );
                        }
                        if (plan.features[feature] === "✗") {
                          return (
                            <CircleMinus className="w-5 h-5 text-gray-400 mx-auto" />
                          );
                        }
                        // Default case if feature status is not explicitly defined
                        return (
                          <Circle className="w-5 h-5 text-gray-300 mx-auto" />
                        );
                      })()}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Bottom Buttons */}
          <div className="flex justify-center gap-8 mt-8">
            {plans.map((plan: any) => (
              <div key={plan.name} className="w-full max-w-xs">
                <Button
                  onClick={() => router.push(`/checkout/${String(plan.id)}`)}
                  variant="outline"
                  className="w-full bg-[#F7FAFF] border border-[#001F63] text-[#001F63] font-semibold py-6 rounded-full hover:bg-gray-100 transition"
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
