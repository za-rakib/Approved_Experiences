export default function FeaturedSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 sm:py-24 font-manrope">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            As{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
              Featured
            </span>{" "}
            In
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-500 text-pretty">
            Unlock exclusive access to countless hotels, vacation homes, car
            rental locations, and flights with our travel membership—crafted for
            ultimate convenience and style.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-x-12 gap-y-8">
            <div className="text-gray-400 text-2xl tracking-widest font-light font-serif border border-[#A3A3A3] p-3 rounded-xl">
              HAUTE LIVING
            </div>
            <div className="text-gray-400 text-2xl tracking-widest font-bold border border-[#A3A3A3] p-3 rounded-xl">
              TRAVEL+NOIRE
            </div>
            <div className="text-gray-400 text-2xl tracking-widest font-extrabold border border-[#A3A3A3] p-3 rounded-xl">
              BLACK ENTERPRISE
            </div>
            <div className="text-gray-400 text-2xl tracking-widest font-bold border border-[#A3A3A3] p-3 rounded-xl">
              YAHOO FINANCE
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
