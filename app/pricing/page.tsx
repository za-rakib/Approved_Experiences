"use client";
declare const ire: any;
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PricingFaqSection from "@/components/pricing-faq-section";
import PricingPlansSection from "@/components/pricing-plans-section";
import ScrollToTop from "@/components/scroll-to-top";
import { useGetMemberProfileQuery } from "@/redux/services/api";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import sha1 from "sha1";

export default function PricingPage() {
  const token = useSelector((state: any) => state.auth.token);
  const tokenRef = useRef(token);
  tokenRef.current = token; // keep latest token
  const { data, error, isLoading, isSuccess, isError, refetch } =
    useGetMemberProfileQuery(undefined, {
      skip: !token, // Skip the query if no token is available
    });
  useEffect(() => {
    if (!tokenRef.current) return;

    let isMounted = true;

    refetch().then((res) => {
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
  //  if (!tokenRef.current) return <div>Loading...</div>;
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
  );
}
