"use client";

import { Button } from "@/components/ui/button";
import {
  useGetFeaturesQuery,
  useGetMembershipPlansQuery,
} from "@/redux/services/api";
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

export default function PricingPlansSection() {
  const {
    data: membershipPlans,
    error: plansError,
    isLoading: plansLoading,
  } = useGetMembershipPlansQuery(undefined);
  const {
    data: featuresData,
    error: featuresError,
    isLoading: featuresLoading,
  } = useGetFeaturesQuery(undefined);
  const isMobile = useMobile();
  const [selectedPlan, setSelectedPlan] = useState("Platinum");
  const router = useRouter();

  if (plansLoading || featuresLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (plansError || featuresError) {
    return <p className="text-center text-red-500">Failed to load data</p>;
  }

  const featureCategories = featuresData.data.map((f: any) => f.name);
  const featureDetails = Object.fromEntries(
    featuresData.data.map((f: any) => [f.name, f.description])
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

  const sortedFeatureCategories = (features: any, planFeatures: any) => {
    return [...features].sort((a, b) => {
      const aIncluded = planFeatures[a] === "✓";
      const bIncluded = planFeatures[b] === "✓";
      if (aIncluded && !bIncluded) return -1;
      if (!aIncluded && bIncluded) return 1;
      return 0;
    });
  };

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
          <div className="flex items-center gap-2 sm:gap-4 mb-8">
            {plans.map((plan: any) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.name)}
                className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-[8px] ${
                  selectedPlan === plan.name
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Mobile Plan Details */}
          {plans
            .filter((plan: any) => plan.name === selectedPlan)
            .map((plan: any) => {
              const sortedFeatures = sortedFeatureCategories(
                featureCategories,
                plan.features
              );
              return (
                <div key={plan.name}>
                  <div className="bg-[#2563EB] text-white p-6 rounded-3xl ">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="mt-1 mb-6 text-lg">{plan.description}</p>
                    <div>
                      <span className="text-4xl font-semibold">
                        {plan.price}
                      </span>
                      <span className="text-xl font-bold  line-through ml-2">
                        {plan.originalPrice}
                      </span>
                      <span className="">/ {plan.period}</span>
                    </div>
                    <Button
                      onClick={() =>
                        router.push(`/checkout/${String(plan.id)}`)
                      }
                      className="w-full bg-white text-[#2563EB] font-medium py-3 mt-6 rounded-full hover:bg-gray-100 transition"
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Mobile Feature List */}
                  <div className="mt-8 space-y-4">
                    {sortedFeatures
                      .filter((f: string) => f !== "Pricing")
                      .map((feature: string) => (
                        <div
                          key={feature}
                          className={`flex items-start justify-between p-4 rounded-md ${
                            plan.features[feature] !== "✓"
                              ? "border border-[#A9C4FF]"
                              : "border-b"
                          }`}
                        >
                          <div>
                            <p className="font-semibold text-gray-800">
                              {feature}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {featureDetails[feature]}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            {(() => {
                              if (plan.features[feature] === "✓") {
                                return (
                                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                                );
                              }
                              if (
                                feature === "Friends & Family Benefit Sharing"
                              ) {
                                return (
                                  <PlusCircle className="w-6 h-6 text-blue-500" />
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
                      onClick={() =>
                        router.push(`/checkout/${String(plan.id)}`)
                      }
                      variant="outline"
                      className="w-full bg-[#F7FAFF] border-1 border-black text-black font-semibold py-6 mt-6 rounded-full hover:bg-gray-100 transition"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              );
            })}
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

              {sortedFeatureCategories(
                featureCategories,
                plans.find((p: any) => p.name === selectedPlan)?.features || {}
              ).map((feature: string) => (
                <div
                  key={feature}
                  className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100"
                >
                  <div
                    className={`text-gray-700 font-medium ${
                      plans.some((p: any) => p.features[feature] !== "✓")
                        ? "border border-[#A9C4FF] rounded-md p-5"
                        : ""
                    }`}
                  >
                    {feature}
                    <p className="text-sm text-gray-500 mt-1">
                      {featureDetails[feature]}
                    </p>
                  </div>

                  {/* <p className="text-sm text-gray-500 mt-1">
                    {featureDetails[feature]}
                  </p> */}
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
                        if (
                          feature === "Friends & Family Benefit Sharing" &&
                          plan.name === "Platinum"
                        ) {
                          return (
                            <PlusCircle className="w-5 h-5 text-[#2563EB] mx-auto" />
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
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div /> {/* Empty div for feature column */}
            {plans.map((plan: any) => (
              <div key={plan.name} className="text-center">
                <Button
                  onClick={() => router.push(`/checkout/${String(plan.id)}`)}
                  variant="outline"
                  className="w-full max-w-xs bg-[#F7FAFF] border border-[#001F63] text-[#001F63] font-semibold py-6 rounded-full hover:bg-gray-100 transition"
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
