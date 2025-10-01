"use client";
declare const ire: any;

import ClientWrapper from "@/app/ClientWrapper";
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
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import sha1 from "sha1";
import {
  useGetMemberProfileQuery,
  useGetMembershipPlansQuery,
} from "../redux/services/api";
export default function Home() {
  const token = useSelector((state: any) => state.auth.token);
  const tokenRef = useRef(token);
  tokenRef.current = token; // keep latest token
  const { data, error, isLoading, isSuccess, isError, refetch } =
    useGetMemberProfileQuery(undefined, {
      skip: !tokenRef, // Skip the query if no token is available
    });
  console.log("auth state in home page:", data, token);
  const {
    data: membershipPlans,
    error: membershipError,
    isLoading: membershipIsLoading,
    isSuccess: membershipIsError,
    isError: membershipisError,
    refetch: membershipRefetch,
  } = useGetMembershipPlansQuery(undefined);
  console.log("membership plans:", membershipPlans);
  // const { data: profile , error, isLoading, isSuccess, isError, refetch} = useGetMemberProfileQuery(undefined, { skip: !token })

  useEffect(() => {
    if (!tokenRef.current) return;

    let isMounted = true;

    refetch().then((res: any) => {
      if (!isMounted) return;
      const profile = res?.data;

      if (typeof ire !== "undefined" && profile?.user?.email) {
        const customerEmailSHA1 = sha1(profile.user.email);
        ire("identify", {
          customerId: tokenRef.current || profile.user.id,
          customerEmail: customerEmailSHA1,
          customProfileId: tokenRef.current,
        });
      }
    });

    return () => {
      isMounted = false; // cancel if unmounted
    };
  }, []);
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
      <ClientWrapper>
        <ClientsSection />
      </ClientWrapper>
      <PricingSection data={membershipPlans?.data} />
      <ContactSection />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
