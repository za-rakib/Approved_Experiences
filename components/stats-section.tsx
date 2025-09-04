export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="flex items-center bg-[#F2F6FC] gap-3 p-4 border border-[#2563EB] rounded-xl">
            <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">$146,048,827</p>
              <p className="text-gray-500 text-sm">Member Savings</p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="flex items-center gap-3 p-4 border bg-[#F2F6FC] border-[#2563EB]  rounded-xl shadow-sm">
            <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">1,000,000+</p>
              <p className="text-gray-500 text-sm">Accessible Properties</p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="flex items-center gap-3 p-4 border bg-[#F2F6FC] border-[#2563EB]  rounded-xl shadow-sm">
            <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">
                110% Value Guarantee.
              </p>
              <p className="text-gray-500 text-sm">
                We refund 110% if you find a better deal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
