"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlatformSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      image: "/luxury-hotel-room.png",
      title: "Hotels",
      description:
        "Gain access to over 1 million handpicked hotels worldwide, offering unbeatable discounts of up to 70% off retail prices.",
      alt: "Luxury hotel room",
    },
    {
      image: "/airplane-flying-in-blue-sky.jpg",
      title: "Flights",
      description:
        "Soar to new heights with points earned from flying with our network of over 700 global airlines.",
      alt: "Airplane flying in the sky",
    },
    {
      image: "/luxury-cruise-ship-on-ocean.jpg",
      title: "Cruises",
      description:
        "Unlock up to 40% off on over 44 major cruise lines, boasting more than 30,000 enticing itineraries.",
      alt: "Cruise ship at a port",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
  ];

  // number of cards visible (3.5 cards)
  const visibleCards = 3.5;

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev < cards.length - visibleCards ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : cards.length - visibleCards
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const cardWidthPercentage = 100 / visibleCards; // width in %

  return (
    <section className="py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              All-In-One <span className="text-blue-600">Platform</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-500">
              Unlock exclusive access to countless hotels, vacation homes, car
              rental locations, and flights with our travel membership—crafted
              for ultimate convenience and style.
            </p>
          </div>

          <div className="flex  items-center space-x-2 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-3 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mb-4">
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${currentSlide * cardWidthPercentage}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-[#F2F6FC] rounded-2xl shadow-md overflow-hidden"
                style={{ width: `${cardWidthPercentage}%` }}
              >
                <Image
                  className="h-48 w-full object-cover"
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={224}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
