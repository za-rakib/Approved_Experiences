export default function TrustedSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 sm:py-24 font-manrope">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Trusted by thousands <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-400">
                  of travelers worldwide
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <p className="text-3xl font-bold text-blue-800">1,100+</p>
                <p className="mt-1 text-slate-500">
                  Private jet charters fulfilled
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-800">5,000+</p>
                <p className="mt-1 text-slate-500">
                  Private aviation hours flown
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-800">1,000+</p>
                <p className="mt-1 text-slate-500">Clients serviced</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-800">3,000+</p>
                <p className="mt-1 text-slate-500">Commercial flights booked</p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-slate-600 leading-relaxed">
              With 30+ years of industry experience, Approved Experiences has
              left its mark on the travel industry.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
