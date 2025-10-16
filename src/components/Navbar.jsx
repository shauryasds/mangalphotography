import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="festive-regular fixed top-0 z-50 w-full bg-transparent shadow-md p-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between text-3xl h-16 px-4 md:px-0">
        
        {/* Logo visible on mobile */}
        <div className="md:hidden block text-xl font-bold text-gray-800">
          Mangal Photography
        </div>

        {/* Hamburger Menu Button - visible on small screens */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {/* Hamburger / Close Icon */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation & Center Logo */}
        <nav
          className={`
            absolute top-full left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex justify-around items-center md:items-center
            transition-[max-height] duration-300 ease-in-out overflow-hidden md:overflow-visible
            ${isOpen ? "max-h-[500px] z-50" : "max-h-0"}
          `}
        >
          <ul className="flex flex-col md:flex-row  md:space-x-6 text-gray-700 text-xl font-bold px-4 md:px-0 py-4 md:py-0">
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
            </li>

            {/* Logo centered on desktop */}
            <li className="md:block hidden  font-extrabold text-2xl text-gray-800 text-center">
              Mangal Photography
            </li>

            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Films
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 md:py-0 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
