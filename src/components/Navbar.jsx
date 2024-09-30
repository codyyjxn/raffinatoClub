import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    /* Navbar container */
    <nav className="bg-white text-black flex justify-between items-center p-4 shadow relative">
      {/* Logo Container */}
      <div className="flex items-center">
        <a
          href="/"
          className="block cursor-pointer h-6 text-lg uppercase leading-6 tracking-widest text-black hover:text-slate-400"
        >
         <img src="/assets/raffinato.jpg" alt="raffinato logo" className="h-12 md:h-10 mr-2 pb-1 w-full" />
        </a>
      </div>

      {/* Mobile Button */}
      <button
        onClick={toggleMobileMenu}
        type="button"
        className="md:hidden inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100"
      >
        {/* x icon to close and open  */}
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Navbar Items for Desktop */}
      <div className="hidden md:flex md:w-auto">
        <ul className="flex space-x-8">
          <li>
            <a
              href="/products"
              className="block cursor-pointer py-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className="block cursor-pointer py-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/cart"
              className="block cursor-pointer py-4 text-xs uppercase leading-6 tracking-widest text-black hover:text-slate-400"
            >
              Bag
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar // hamburger menu*/}
      <div className={`md:hidden absolute right-0 top-full transition-all duration-300 ease-in-out justify-between max-h-screen${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white shadow-md border border-gray-300 rounded-xl p-6`}>
        <div className={`space-y-2 ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <a
            href="/products"
            className="text-black uppercase block rounded-md px-4 py-2 font-medium hover:bg-gray-100 transition duration-200" 
          >
            Shop
          </a>
          <a
            href="/orders"
            className="text-black uppercase block rounded-md px-4 py-2 font-medium hover:bg-gray-100 transition duration-200"
          >
            Contact Us
          </a>
          <a
            href="/cart"
            className="text-black uppercase block rounded-md px-4 py-2 font-medium hover:bg-gray-100 transition duration-200"
          >
            Bag
          </a>
        </div>
      </div>
    </nav>
  );
}
