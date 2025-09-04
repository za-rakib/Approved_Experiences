import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] lg:min-h-screen flex items-center justify-center  pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background-image.png"
          alt="Tropical beach resort paradise"
          fill
          className="p-5"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        {/* User Avatars */}
        <div className="flex items-center justify-center mb-6 space-x-2">
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
          <p className="font-semibold text-white">12K+ Users</p>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Save Up To 70% On <br />
          Every Trip - Guaranteed
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
          Join thousands of travelers who get up to 70% off luxury hotels,
          resorts, cruises & more. Our members save up to $1,000+ per trip with
          Approved Experiences Traveler.
        </p>

        {/* Call To Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 shadow-lg transition-transform transform hover:scale-105"
          >
            How It Works
          </Link>
          <Link
            href="#"
            className="w-full sm:w-auto text-center bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/30 shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
