'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

type PaymentSuccessProps = {
  open: boolean;
  paymentType?: string;
  email?: string;
  transactionId?: string;
  amount?: number;
  onClose?: () => void;
};

export default function PaymentSuccess({
  open,
  paymentType,
  email,
  transactionId,
  amount,
  onClose,
}: PaymentSuccessProps) {
  const router = useRouter();
   const [isOpen, setIsOpen] = useState(open);

  const handleLogin = () => {
    router.push("/login");
  };

  const handleClose = () => {
    setIsOpen(false);
    // You might want to redirect or perform other actions on close
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000075] bg-opacity-10 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-white py-6 px-6 text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#2AD352]">Payment Successful</h2>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 ">
              <span className="text-gray-600 font-medium">Payment Type</span>
              <div className="flex items-center">
                {/* <svg className="w-6 h-6 mr-2 text-blue-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
                </svg> */}
                <span className="font-semibold">{paymentType || "N/A"}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pb-3 ">
              <span className="text-gray-600 font-medium">Email Address</span>
                  <span className="font-semibold">{email || "N/A"}</span>
            </div>

            <div className="flex justify-between items-center pb-3 ">
              <span className="text-gray-600 font-medium">Amount Paid</span>
                  <span className="font-semibold">US${amount?.toFixed(2) || "0.00"}</span>
            </div>

            <div className="flex justify-between items-center pb-3 ">
              <span className="text-gray-600 font-medium">Transaction ID</span>
                <span className="font-semibold">{transactionId || "N/A"}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleLogin}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full  hover:bg-blue-700 transition-colors flex-1"
          >
            Log In
          </button>
          <button
            onClick={handleClose}
            className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-full hover:bg-gray-100 transition-colors flex-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}