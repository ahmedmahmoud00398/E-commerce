import Image from 'next/image';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center p-6 bg-gradient-to-r from-purple-950 to-indigo-950 opacity-90 gap-4">
            <div className="flex items-center gap-2">
              <Image src="/10001.svg" alt="Logo" width={50} height={50} />
              <h1 className="font-bold text-2xl">ARCADE</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-fuchsia-600 transition duration-300">Products</a>
              <a href="#" className="hover:text-fuchsia-600 transition duration-300">On Sale</a>
              <a href="#" className="hover:text-fuchsia-600 transition duration-300">Contact Us</a>
              <div className="flex items-center gap-2">
                <FaUserCircle className="text-2xl" />
                <a href="#" className="hover:text-fuchsia-600 transition duration-300">Log In</a>
              </div>
              <button className="hover:text-fuchsia-600 transition duration-300">
                <FaShoppingCart className="text-2xl" />
              </button>
            </div>
          </nav>
  );
}