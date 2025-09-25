'use client';
import Image from "next/image";
import Link from "next/link";
import { useSelector , useDispatch} from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "@/redux/slices/authSlice";
export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);

  // Ensure we only render after client mount
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <header className="w-full bg-white py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/approved-experiences-logo-red.jpg"
              alt="Approved Experiences Logo"
              width={160}
              height={40}
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-[#001F63] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-900"
            aria-label="Toggle mobile menu"
          > 
            <div className="flex flex-col">
              {mobileMenuOpen ? (
                <>
                  <span className="block w-4 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
                  <span className="block w-4 h-0.5 bg-white opacity-0"></span>
                  <span className="block w-4 h-0.5 bg-white transform -rotate-45 -translate-y-0.5"></span>
                </>
              ) : (
                <>
                  <span className="block w-4 h-0.5 bg-white mb-0.5"></span>
                  <span className="block w-4 h-0.5 bg-white mb-0.5"></span>
                  <span className="block w-4 h-0.5 bg-white"></span>
                </>
              )}
            </div>
            <span className="text-sm font-medium">Menu</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-[#2563EB] bg-[#F7FAFF] rounded-full px-4 py-2">
              Traveler 2.0
            </Link>
            <Link href="#" className="text-sm font-medium text-[#525253] hover:text-gray-700">Concierge</Link>
            <Link href="#" className="text-sm font-medium text-[#525253] hover:text-gray-700">Company</Link>
            <Link href="#" className="text-sm font-medium text-[#525253] hover:text-gray-700">Blog</Link>
            <Link href="#" className="text-sm font-medium text-[#525253] hover:text-gray-700">{"FAQ's"}</Link>
            <Link href="/pricing" className="text-sm font-medium text-[#525253] hover:text-gray-700">Pricing</Link>
          </div>

          {/* Action Buttons - Hidden on mobile, shown in modal */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && !token && (
              <Link href="/login" className="text-sm font-medium text-[#001F63] hover:text-gray-700">
                Log In
              </Link>
            )}
            {mounted && token && (
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-[#001F63] hover:text-gray-700"
              >
                Logout
              </button>
            )}
            <Link href="#" className="text-sm font-medium text-white bg-[#001F63] rounded-full px-5 py-2.5 hover:bg-gray-900 shadow">
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            <div className={`fixed inset-0 bg-white transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <img
                    src="/approved-experiences-logo-red.jpg"
                    alt="Approved Experiences Logo"
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="md:hidden bg-[#001F63] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-900"
                    aria-label="Close menu"
                  >
                    <div className="flex flex-col">
                      <span className="block w-4 h-0.5 bg-current transform rotate-45 translate-y-0.5"></span>
                      <span className="block w-4 h-0.5 bg-current opacity-0"></span>
                      <span className="block w-4 h-0.5 bg-current transform -rotate-45 -translate-y-0.5"></span>
                    </div>
                     <span className="text-sm font-medium">Back</span>
                  </button>
                </div>
                <div className="space-y-4">
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#2563EB] bg-[#F7FAFF] rounded-full px-4 py-2 text-center">
                    Traveler
                  </Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Concierge</Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Company</Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Blog</Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">{"FAQ's"}</Link>
                  <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Pricing</Link>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-6 space-y-4">
                  {/* {mounted && !token && (
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#001F63] hover:text-gray-700 text-center">
                      Log In
                    </Link>
                  )}
                  {mounted && token && (
                    <button
                      onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                      className="block w-full text-sm font-medium text-[#001F63] hover:text-gray-700 text-center"
                    >
                      Logout
                    </button>
                  )} */}
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-white bg-[#001F63] rounded-full px-4 py-2 text-center hover:bg-gray-900 shadow">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
