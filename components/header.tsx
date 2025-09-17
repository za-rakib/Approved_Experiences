'use client';
import Image from "next/image";
import Link from "next/link";
import { useSelector , useDispatch} from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: 'auth/logout' });
  }
  const token = useSelector((state: any) => state.auth.token);
  return (
    <header className="w-full bg-white  py-4">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/approved-experiences-logo-red.jpg"
              alt="Approved Experiences Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-black bg-blue-400/20 rounded-full px-4 py-2"
            >
              Traveler 2.0
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-700"
            >
              Concierge
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-700"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-700"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black hover:text-gray-700"
            >
              {"FAQ's"}
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-black hover:text-gray-700"
            >
              Pricing
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {!token &&<Link
              href="/login"
              className="text-sm font-medium text-black hover:text-gray-700"
            >
              Log In
            </Link>}
             {token&&  <Link
              href="/login"
              className="text-sm font-medium text-black hover:text-gray-700"
              onClick={handleLogout}
            >
              Logout
            </Link>}
            <Link
              href="#"
              className="text-sm font-medium text-white bg-gray-800 rounded-full px-5 py-2.5 hover:bg-gray-900 shadow"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
