import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-balance">
          Partners In <span className="text-blue-600">Our Network</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 text-pretty">
          Unlock exclusive access to countless hotels, vacation homes, car
          rental locations, and flights with our travel membership—crafted for
          ultimate convenience and style.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 items-center">
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand.png"
            alt="Hilton"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand.png"
            alt="IHG Hotels & Resorts"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand.png"
            alt="World of Hyatt"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand(1).png"
            alt="Wyndham"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand.png"
            alt="Marriott"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand(1).png"
            alt="MGM Resorts"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand(1).png"
            alt="MGM Resorts"
            width={120}
            height={48}
          />
          <Image
            className="col-span-1 max-h-12 mx-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            src="/Brand(1).png"
            alt="MGM Resorts"
            width={120}
            height={48}
          />
        </div>
      </div>
    </section>
  );
}
