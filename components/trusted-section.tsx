export default function TrustedSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 sm:py-24 font-manrope">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            Trusted by thousands <span className="text-indigo-600">of travelers worldwide</span>
          </h2>
        </div>

        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">1,100+</p>
            <p className="mt-2 text-slate-500">Private jet charters fulfilled</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">5,000+</p>
            <p className="mt-2 text-slate-500">Private aviation hours flown</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">1,000+</p>
            <p className="mt-2 text-slate-500">Clients serviced</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-indigo-600">3,000+</p>
            <p className="mt-2 text-slate-500">Commercial flights booked</p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-3xl sm:text-4xl text-slate-800 leading-normal sm:leading-relaxed text-pretty">
            With 30+ years of industry experience, Approved Experiences has left
            {"it's"} mark on the travel industry.
          </p>
        </div>
      </section>
    </div>
  )
}
