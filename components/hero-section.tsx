import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Reusable component for the notification
const JamesJustJoined = ({ className }: { className?: string }) => (
  <div
    className={`bg-white/20 backdrop-blur-sm p-3 rounded-2xl shadow-lg w-max ${className}`}
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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden p-4">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-3xl m-4">
        <Image
          src="/background-image.png"
          alt="Tropical beach resort paradise"
          fill
          priority
          className="object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-blue-900/40 rounded-3xl" />
      </div>

      {/* Become a member button */}
      <Link
        href="/register"
        className="mr-6 absolute z-30 right-0 top-1/2 -translate-y-1/2 rotate-180 bg-blue-600 text-white font-semibold py-4 px-6 [writing-mode:vertical-lr] rounded-full hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
      >
        Become a Member
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
      <div className="absolute bottom-8 w-full px-4 md:px-8 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Spacer for Desktop */}
          <div className="hidden md:block flex-1"></div>

          {/* Buttons and Mobile Notification */}
          <div className="flex flex-col items-center gap-6 flex-shrink-0">
            {/* Mobile Notification */}
            <div className="md:hidden">
              <JamesJustJoined />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#how-it-works"
                className="w-full sm:w-auto text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto text-center bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/30 shadow-lg transition-transform transform hover:scale-105"
              >
                Explore Pricing
              </Link>
            </div>
          </div>

          {/* Desktop Notification */}
          <div className="hidden md:flex flex-1 justify-end">
            <JamesJustJoined />
          </div>
        </div>
      </div>
    </section>
  );
}
