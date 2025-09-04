import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl p-10 md:p-20 text-center bg-(--color-light-blue-bg) bg-[radial-gradient(#d8e3ff_1px,transparent_1px)] [background-size:16px_16px]">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-balance">Contact Us</h2>
          <p className="mt-4 text-gray-600 text-lg">Join today or contact our team for more information.</p>
          <div className="mt-8 flex justify-center items-center space-x-4">
            <Link
              href="#"
              className="bg-(--color-custom-blue) text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Join Now
            </Link>
            <Link
              href="#"
              className="bg-white border border-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
