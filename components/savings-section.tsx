import Image from "next/image";

export default function SavingsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 sm:py-24 font-manrope">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            See The <span className="text-indigo-600">Savings</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            One week in Mexico for two adults.
          </p>
        </div>
        <div className="mt-8 flex  items-center gap-2">
          <button className="px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-md">
            Mexico
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 rounded-md">
            Miami
          </button>
        </div>

        <div className="mt-12   space-y-8">
          {/* Deal Card 1 */}
          <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Image
              className="w-full h-80 object-cover rounded-2xl"
              src="/luxurious-hotel-room-ocean-view-beds.jpg"
              alt="Luxurious hotel room with two beds and a view of the ocean"
              width={600}
              height={320}
            />
            <div className="p-2 sm:p-4">
              <h3 className="text-2xl font-bold text-slate-900">
                Banyan Tree Mayakoba
              </h3>
              <p className="mt-1 text-slate-500">
                Playa del Carmen, Quintana Roo
              </p>

              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-slate-800">Traveler</span>
                  <span className="font-bold text-slate-800">$5,308</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Expedia</span>
                  <span>$10,963</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Hotels.com</span>
                  <span>$10,963</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Travelocity</span>
                  <span>$10,963</span>
                </div>
              </div>

              <hr className="my-6 border-slate-200" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <p className="text-sm text-slate-500">Total Price</p>
                  <p className="text-2xl font-bold text-slate-900">
                    $5,308{" "}
                    <span className="text-lg font-normal text-slate-400 line-through">
                      $10,963
                    </span>
                  </p>
                </div>
                <div className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                  Savings with Traveler{" "}
                  <span className="font-bold">$5,655</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deal Card 2 */}
          <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Image
              className="w-full h-80 object-cover rounded-2xl"
              src="/hotel-room-floral-bedding-balcony-view.jpg"
              alt="Hotel room with floral bedding and a balcony view"
              width={600}
              height={320}
            />
            <div className="p-2 sm:p-4">
              <h3 className="text-2xl font-bold text-slate-900">
                The Pyramid at Grand Oasis - All Inclusive
              </h3>
              <p className="mt-1 text-slate-500">Cancun, Quintana Roo</p>

              <div className="mt-6 space-y-4 text-slate-600">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-slate-800">Traveler</span>
                  <span className="font-bold text-slate-800">$1,697</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Expedia</span>
                  <span>$3,308</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Hotels.com</span>
                  <span>$3,308</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Travelocity</span>
                  <span>$3,308</span>
                </div>
              </div>

              <hr className="my-6 border-slate-200" />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                  <p className="text-sm text-slate-500">Total Price</p>
                  <p className="text-2xl font-bold text-slate-900">
                    $1,697{" "}
                    <span className="text-lg font-normal text-slate-400 line-through">
                      $3,308
                    </span>
                  </p>
                </div>
                <div className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap">
                  Savings with Traveler{" "}
                  <span className="font-bold">$1,611</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
