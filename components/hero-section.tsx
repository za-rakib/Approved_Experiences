import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Reusable component for the notification
const JamesJustJoined = ({ className }: { className?: string }) => (
  <div
    className={`bg-transparent backdrop-blur-lg px-2 rounded-2xl shadow-lg w-max border border-white/20 ${className}`}
  >
    <div className="flex items-center gap-2">
      <p className="font-semibold text-white text-sm">James just joined!</p>
      <div className="bg-green-500 rounded-full p-0.5">
        <Check className="w-3 h-3 text-white" />
      </div>
    </div>
    <p className="text-white/80 text-xs mt-1">New York, NY</p>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-3xl m-4">
        <Image
          src="/background-image.png"
          alt="Tropical beach resort paradise"
          fill
          priority
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0  rounded-3xl" />
      </div>

      {/* Become a member button */}
      <Link
        href="/register"
        className="fixed flex items-center justify-center z-30 right-6 top-1/2 -translate-y-1/2 bg-blue-600 text-white font-semibold py-4 px-3 rounded-full hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">
          Become A Member
        </span>
      </Link>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* User Avatars */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex -space-x-3">
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="/woman-profile.png"
              alt="User 1"
              width={40}
              height={40}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="/man-profile.png"
              alt="User 2"
              width={40}
              height={40}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="/diverse-person-profile.png"
              alt="User 3"
              width={40}
              height={40}
            />
          </div>
          <p className="ml-4 font-semibold">12K+ Users</p>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Save Up To 70% On <br />
          Every Trip - Guaranteed
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          Join thousands of travelers who get up to 70% off luxury hotels,
          resorts, cruises & more. Our members save up to $1,000+ per trip with
          Approved Experiences Traveler.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-16 w-full z-20">
        {/* Mobile view */}
        <div className="md:hidden flex flex-col gap-4 mx-6">
          <JamesJustJoined className="self-end" />
          <Link
            href="/#how-it-works"
            className="text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="w-full text-center bg-transparent backdrop-blur-lg backdrop-blur-lg text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20 shadow-lg transition-transform transform hover:scale-105 border border-white/20"
          >
            Explore Pricing
          </Link>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center px-4">
          <div className="flex-1" />
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/#how-it-works"
              className="text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="bg-transparent backdrop-blur-lg text-center  backdrop-blur-lg text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20 shadow-lg transition-transform transform hover:scale-105 border border-white/20"
            >
              Explore Pricing
            </Link>
          </div>
          <div className="flex-1 flex justify-end mr-2">
            <JamesJustJoined />
          </div>
        </div>
      </div>
    </section>
  );
}
