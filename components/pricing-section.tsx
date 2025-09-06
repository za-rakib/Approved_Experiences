import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-balance">
          Pricing <span className="text-(--color-custom-purple)">Plans</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg text-pretty">
          Unlock exclusive access to countless hotels, vacation homes, car
          rental locations, and flights with our travel membership—crafted for
          ultimate convenience and style.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {/* Gold Plan */}
          <div className="bg-(--color-light-blue-bg) p-8 rounded-3xl border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold">Gold</h3>
            <p className="text-gray-500 mt-1">Unlock benefits that include</p>
            <div className="my-6">
              <span className="text-5xl font-extrabold text-gray-900">
                $699
              </span>
              <span className="text-xl font-bold text-gray-400 line-through ml-2">
                $799
              </span>
              <span className="text-gray-500">/ year</span>
            </div>
            <Link
              href="/checkout"
              className="w-full text-center border border-gray-300 text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <div className="mt-8 space-y-4 flex-grow">
              <p className="font-semibold text-gray-900">
                Unlock benefits that include
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Hotels
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Cruises
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Car Rentals
                </li>
              </ul>
            </div>
          </div>

          {/* Platinum Plan */}
          <div className="bg-(--color-custom-blue) text-white p-8 rounded-3xl shadow-2xl shadow-blue-200 flex flex-col transform md:scale-105">
            <h3 className="text-2xl font-bold">Platinum</h3>
            <p className="text-blue-200 mt-1">
              Premium luxury travel experience with the best value.
            </p>
            <div className="my-6">
              <span className="text-5xl font-extrabold">$999</span>
              <span className="text-xl font-bold text-blue-300 line-through ml-2">
                $1,199
              </span>
              <span className="text-blue-200">/ year</span>
            </div>
            <Link
              href="/checkout"
              className="w-full text-center bg-white text-(--color-custom-blue) font-semibold py-3 rounded-full hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <div className="mt-8 space-y-4 flex-grow">
              <p className="font-semibold text-white">
                Unlock benefits that include
              </p>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-white mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Hotels
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-white mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Cruises
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-white mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Car Rentals
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-white mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Villas & Luxury Homes
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-white mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Value Guarantee
                </li>
                <li className="flex items-center font-semibold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Friends & Family Benefit Sharing
                </li>
              </ul>
            </div>
          </div>

          {/* Diamond Plan */}
          <div className="bg-(--color-light-blue-bg) p-8 rounded-3xl border border-gray-200 flex flex-col md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold">Diamond</h3>
            <p className="text-gray-500 mt-1">
              Ultimate luxury travel experience with exclusive benefits.
            </p>
            <div className="my-6">
              <span className="text-5xl font-extrabold text-gray-900">
                $1,499
              </span>
              <span className="text-xl font-bold text-gray-400 line-through ml-2">
                $1699
              </span>
              <span className="text-gray-500">/ year</span>
            </div>
            <Link
              href="/checkout"
              className="w-full text-center border border-gray-300 text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
            <div className="mt-8 space-y-4 flex-grow">
              <p className="font-semibold text-gray-900">
                Unlock benefits that include
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Hotels
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Cruises
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Car Rentals
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Flights
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Villas & Luxury Homes
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Reward Credits
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Value Guarantee
                </li>
                <li className="flex items-center text-gray-800 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Friends & Family Benefit Sharing
                </li>
                <li className="flex items-center text-gray-800 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Approved Lux 24/7 Concierge
                </li>
                <li className="flex items-center text-gray-800 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-(--color-custom-blue) mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Boomerang Rewards
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link
          href="#"
          className="mt-12 inline-block bg-(--color-custom-blue) text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition"
        >
          View Detailed Comparison
        </Link>
      </div>
    </section>
  );
}
