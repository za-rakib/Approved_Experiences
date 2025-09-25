"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "I've never experienced travel like this before. The wholesale pricing is incredible, and the rewards program is a game-changer. Highly recommend Approved Experiences!",
    name: "Malcolm Stevens",
    title: "Luxury Travel Blogger",
    image: "/malcolm-stevens-headshot.jpg",
  },
  {
    id: 2,
    text: "The convenience and style of Approved Experiences are unmatched. Booking flights and hotels has never been easier, and the discounts are fantastic. A must-have for any traveler!",
    name: "Emily White",
    title: "Travel Enthusiast",
    image: "/emily-white-headshot.jpg",
  },
  {
    id: 3,
    text: "I'm saving so much money using Approved Experiences! The platform is easy to use, and the customer service is excellent. I'm telling all my friends about this!",
    name: "Yuki Tanaka",
    title: "Budget Traveler",
    image: "/professional-woman-headshot.png",
  },
];

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="py-10 md:py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-balance">
          Our Happy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
            Clients
          </span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg text-pretty">
          Unlock exclusive access to countless hotels, vacation homes, car
          rental locations, and flights with our travel membership—crafted for
          ultimate convenience and style.
        </p>
        <div className="flex justify-center items-center mt-8 space-x-2">
          <Image
            src="/professional-woman-headshot.png"
            alt="Client 1"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <Image
            src="/professional-man-headshot.png"
            alt="Client 2"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <Image
            src="/woman-profile.png"
            alt="Client 3"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-3"
          />
          <Image
            src="/man-profile.png"
            alt="Client 4"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-3"
          />
          <Image
            src="/person-headshot.png"
            alt="Client 5"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white -ml-3"
          />
        </div>

        <div className="mt-12 relative flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {/* Left Testimonial */}
            <div className="text-left p-8 rounded-2xl hidden md:block opacity-60 transform scale-95 bg-[#F7FAFF] border border-[#E9F0FF]">
              <p className="text-gray-600">
                {testimonials[getTestimonialIndex(-1)].text}
              </p>
              <div className="flex items-center mt-6">
                <Image
                  src={
                    testimonials[getTestimonialIndex(-1)].image ||
                    "/placeholder.svg"
                  }
                  alt={testimonials[getTestimonialIndex(-1)].name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 flex items-center">
                    {testimonials[getTestimonialIndex(-1)].name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[getTestimonialIndex(-1)].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Testimonial (Active) */}
            <div className="text-left bg-[#F7FAFF] p-8 rounded-2xl shadow-xl relative border border-[#E9F0FF]">
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-1 border-l-1 border-[#2563EB] "></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-1 border-r-1 border-[#2563EB]"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-1 border-l-1 border-[#2563EB]"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-1 border-r-1 border-[#2563EB]"></div>
              <p className="text-gray-600">{testimonials[currentIndex].text}</p>
              <div className="flex items-center mt-6">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 flex items-center">
                    {testimonials[currentIndex].name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Testimonial */}
            <div className="text-left p-8 rounded-2xl hidden md:block opacity-60 transform scale-95 bg-[#F7FAFF] border border-[#E9F0FF]">
              <p className="text-gray-600">
                {testimonials[getTestimonialIndex(1)].text}
              </p>
              <div className="flex items-center mt-6">
                <Image
                  src={
                    testimonials[getTestimonialIndex(1)].image ||
                    "/placeholder.svg"
                  }
                  alt={testimonials[getTestimonialIndex(1)].name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900 flex items-center">
                    {testimonials[getTestimonialIndex(1)].name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[getTestimonialIndex(1)].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="text-gray-400 border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="text-white bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
