import Image from "next/image";

export default function RewardCreditsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-10 sm:py-24 font-manrope">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance">
            Build Up{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
              Reward{" "}
            </span>{" "}
            Credits
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 text-pretty">
            Earn reward points for every purchase on the platform and enjoy
            multiple ways to redeem.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Earn with friends */}
          <div className="bg-[#F7FAFF] rounded-3xl p-8 border border-[#E9F0FF]">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
              <svg
                className="h-6 w-6 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Earn with friends
            </h3>
            <p className="mt-2 text-slate-500">
              Invite your friends with our boomerang feature and earn rewards
              when they book through your invite.
            </p>
          </div>

          {/* Card 2: Redeem gift cards */}
          <div className="bg-[#F7FAFF] rounded-3xl p-8 border border-[#E9F0FF]">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
              <svg
                className="h-6 w-6 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Redeem gift cards
            </h3>
            <p className="mt-2 text-slate-500">
              Redeem credits earned while traveling for gift cards in the US,
              Mexico, Canada, United Kingdom and more.
            </p>
          </div>

          {/* Card 3: Redeem travel */}
          <div className="bg-[#F7FAFF] rounded-3xl p-8 border border-[#E9F0FF]">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
              <svg
                className="h-6 w-6 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-900">
              Redeem travel
            </h3>
            <p className="mt-2 text-slate-500">
              Redeem credits earned while traveling to book your entire next
              trip.
            </p>
          </div>
        </div>

        <div className="mt-16 relative aspect-[3/4] md:aspect-video rounded-3xl overflow-hidden">
          <Image
            className="object-cover"
            src="/luxury-resort.jpg"
            alt="Luxury resort swimming pool with lounge chairs and palm trees"
            fill
          />
        </div>
      </section>
    </div>
  );
}
