import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "./scroll-to-top";

export default function Footer() {
  return (
    <footer className="px-4 text-white relative">
      <div className="bg-[#001F63] container mx-auto px-8  rounded-t-[40px] pt-12">
        <div className="bg-[#E9F0FF] text-gray-900 rounded-2xl p-6 md:py-12 md:p-6 mb-20 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="">
              <h3 className="text-3xl md:text-[32px] font-medium leading-tight text-[#0E0E0F]">
                Want product news and updates? <br />
                Sign up for our newsletter.
              </h3>
              <p className="mt-4 text-[#525253]">
                We care about your data. Read our{" "}
                <Link href="#" className="text-[#2563EB] underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="">
              <p className="font-semibold text-black mb-4">Sign up today</p>
              <form className="space-y-4">
                <div className="flex items-center rounded-full  border-1 border-[#001F63]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow w-full px-4 py-2 rounded-full focus:outline-none text-[#525253]"
                  />
                  <button
                    type="submit"
                    className="bg-[#2563EB] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-[#2563EB] text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    I agree to{" "}
                    <Link href="#" className="text-[#2563EB] underline">
                      Terms & Services
                    </Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 pb-12">
          <div className="lg:col-span-2 flex flex-row items-center justify-between lg:flex-col lg:items-start lg:justify-start">
            <Link href="/">
              <Image
                src="/Logowhite.png"
                alt="Approved Experiences Logo"
                width={180}
                height={45}
              />
            </Link>
            <div className="flex space-x-2 lg:mt-6">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-white-400 hover:text-white hover:border-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-white-400 hover:text-white hover:border-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-white-400 hover:text-white hover:border-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-gray-700 rounded-md text-white-400 hover:text-white hover:border-white transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-x-8">
            <div className="md:col-span-1">
              <h4 className="font-bold text-lg">Navigation</h4>
              <ul className="mt-4 space-y-3 text-white-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Traveler 2.0
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Concierge
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-1">
              <h4 className="font-bold text-lg">Resource</h4>
              <ul className="mt-4 space-y-3 text-white-400">
                <li>
                  <Link href="#" className="hover:text-white transition">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-lg">Contact</h4>
              <ul className="mt-4 space-y-3 text-white-400">
                <li>Miami Florida</li>
                <li>
                  <Link
                    href="mailto:support@approvedexperiences.com"
                    className="hover:text-white transition"
                  >
                    support@approvedexperiences.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+18666781411"
                    className="hover:text-white transition"
                  >
                    +1 (866) 678-1411
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-[#0739A7] text-center">
          <p className="text-[#F4F4F4] text-sm">
            &copy; 2025 Approved Experiences, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
