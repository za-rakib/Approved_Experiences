// 'use client';
// import Link from "next/link";

// export default function PricingSection(data:any) {
//   console.log("membership plans in pricing section:", data);
//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-balance">
//           Pricing <span className="text-(--color-custom-purple)">Plans</span>
//         </h2>
//         <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg text-pretty">
//           Unlock exclusive access to countless hotels, vacation homes, car
//           rental locations, and flights with our travel membership—crafted for
//           ultimate convenience and style.
//         </p>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
//           {/* Gold Plan */}
//           {data?.data?.map((item:any)=> item?.name !== "Platinum" ?
//           (<div className="bg-(--color-light-blue-bg) p-8 rounded-3xl border border-gray-200 flex flex-col">
//             <h3 className="text-2xl font-bold">{item?.name}</h3>
//             <p className="text-gray-500 mt-1">Unlock benefits that include</p>
//             <div className="my-6">
//               <span className="text-5xl font-extrabold text-gray-900">
//                ${item?.discountedPrice}
//               </span>
//               <span className="text-xl font-bold text-gray-400 line-through ml-2">
//                ${item?.regularPrice}
//               </span>
//               <span className="text-gray-500">/ year</span>
//             </div>
//             <Link
//               href="/checkout"
//               className="w-full text-center border border-gray-300 text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition"
//             >
//               Get Started
//             </Link>
//             <div className="mt-8 space-y-4 flex-grow">
//               <p className="font-semibold text-gray-900">
//                 Unlock benefits that include
//               </p>
//               <ul className="space-y-3 text-gray-600">
//                 {item.tierFeatures.map((feat:any,index:any)=>
//               !feat.isExclusive? ( <li className="flex items-center">
//                   <svg
//                     className="w-5 h-5 text-(--color-custom-blue) mr-2"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                    {feat?.feature?.name}
//                 </li>):(                <li className="flex items-center text-gray-800 font-medium">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 text-(--color-custom-blue) mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   {feat?.feature?.name}
//                 </li>))}

//               </ul>
//             </div>
//           </div>):( <div className="bg-(--color-custom-blue) text-white p-8 rounded-3xl shadow-2xl shadow-blue-200 flex flex-col transform md:scale-105">
//             <h3 className="text-2xl font-bold">{item?.name}</h3>
//             <p className="text-blue-200 mt-1">
//               Premium luxury travel experience with the best value.
//             </p>
//             <div className="my-6">
//               <span className="text-5xl font-extrabold">${item?.discountedPrice}</span>
//               <span className="text-xl font-bold text-blue-300 line-through ml-2">
//                 ${item?.regularPrice}
//               </span>
//               <span className="text-blue-200">/ year</span>
//             </div>
//             <Link
//               href="/checkout/"
//               className="w-full text-center bg-white text-(--color-custom-blue) font-semibold py-3 rounded-full hover:bg-gray-100 transition"
//             >
//               Get Started
//             </Link>
//             <div className="mt-8 space-y-4 flex-grow">
//               <p className="font-semibold text-white">
//                 Unlock benefits that include
//               </p>
//               <ul className="space-y-3 text-blue-200">
//                     {item.tierFeatures.map((feat:any,index:any)=>
//                              !feat.isExclusive? (<li className="flex items-center">
//                   <svg
//                     className="w-5 h-5 text-white mr-2"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                   {feat?.feature?.name}
//                 </li> ):(<li className="flex items-center font-semibold text-white">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   {feat?.feature?.name}
//                 </li>)
//               )}

//               </ul>
//             </div>
//           </div>))}

//         </div>

//         <Link
//           href="#"
//           className="mt-12 inline-block bg-(--color-custom-blue) text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition"
//         >
//           View Detailed Comparison
//         </Link>
//       </div>
//     </section>
//   );
// }

"use client";
import Link from "next/link";

export default function PricingSection(data: any) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 text-balance">
          Pricing <span className="text-(--color-custom-purple)">Plans</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg text-pretty">
          Unlock exclusive access to countless hotels, vacation homes, car
          rental locations, and flights with our travel membership—crafted for
          ultimate convenience and style.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {data?.data?.map((item: any) => {
            // Separate features into non-exclusive and exclusive
            const nonExclusiveFeatures = item.tierFeatures.filter(
              (feat: any) => !feat.isExclusive
            );
            const exclusiveFeatures = item.tierFeatures.filter(
              (feat: any) => feat.isExclusive
            );

            return item.name !== "Platinum" ? (
              // Gold/Silver Plan
              <div
                key={item.id}
                className="bg-(--color-light-blue-bg) p-8 rounded-3xl border border-gray-200 flex flex-col"
              >
                <h3 className="text-2xl font-bold">{item?.name}</h3>
                <p className="text-gray-500 mt-1">
                  Unlock benefits that include
                </p>
                <div className="my-6">
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${item?.discountedPrice}
                  </span>
                  <span className="text-xl font-bold text-gray-400 line-through ml-2">
                    ${item?.regularPrice}
                  </span>
                  <span className="text-gray-500">/ year</span>
                </div>
                <Link
                  href={`/checkout/${item.id}`}
                  className="w-full text-center border border-gray-300 text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100 transition"
                >
                  Get Started
                </Link>
                <div className="mt-8 space-y-4 flex-grow">
                  <p className="font-semibold text-gray-900">
                    Unlock benefits that include
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    {/* Render non-exclusive features first */}
                    {nonExclusiveFeatures.map((feat: any) => (
                      <li key={feat.id} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-(--color-custom-blue) mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {feat?.feature?.name}
                      </li>
                    ))}

                    {/* Then render exclusive features */}
                    {exclusiveFeatures.map((feat: any) => (
                      <li
                        key={feat.id}
                        className="flex items-center text-gray-800 font-medium"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-(--color-custom-blue) mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feat?.feature?.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              // Platinum Plan
              <div
                key={item.id}
                className="bg-(--color-custom-blue) text-white p-8 rounded-3xl shadow-2xl shadow-blue-200 flex flex-col transform md:scale-105"
              >
                <h3 className="text-2xl font-bold">{item?.name}</h3>
                <p className="text-blue-200 mt-1">
                  Premium luxury travel experience with the best value.
                </p>
                <div className="my-6">
                  <span className="text-5xl font-extrabold">
                    ${item?.discountedPrice}
                  </span>
                  <span className="text-xl font-bold text-blue-300 line-through ml-2">
                    ${item?.regularPrice}
                  </span>
                  <span className="text-blue-200">/ year</span>
                </div>
                <Link
                  href={`/checkout/${item.id}`}
                  className="w-full text-center bg-white text-(--color-custom-blue) font-semibold py-3 rounded-full hover:bg-gray-100 transition"
                >
                  Get Started
                </Link>
                <div className="mt-8 space-y-4 flex-grow">
                  <p className="font-semibold text-white">
                    Unlock benefits that include
                  </p>
                  <ul className="space-y-3 text-blue-200">
                    {/* Render non-exclusive features first */}
                    {nonExclusiveFeatures.map((feat: any) => (
                      <li key={feat.id} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-white mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {feat?.feature?.name}
                      </li>
                    ))}

                    {/* Then render exclusive features */}
                    {exclusiveFeatures.map((feat: any) => (
                      <li
                        key={feat.id}
                        className="flex items-center font-semibold text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feat?.feature?.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/pricing"
          className="mt-12 inline-block bg-(--color-custom-blue) text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-700 transition"
        >
          View Detailed Comparison
        </Link>
      </div>
    </section>
  );
}
