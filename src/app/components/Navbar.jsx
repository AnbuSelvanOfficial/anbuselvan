"use client";
import React, { useState } from "react";
import "../style.css";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <nav className="bg-black fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 hidden md:block">
              <a href="/" className="text-white text-3xl font-bold">
                ANBU SELVAN
              </a>
            </div>

            <div className="hidden md:flex">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-2"
                >
                  About
                </a>
                <a
                  href="/education"
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Education
                </a>
                <a
                  href="/activities"
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Activities
                </a>
                <a
                  href="/projects"
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Projects
                </a>
                <a
                  href="/contact"
                  className="text-white text-xl hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6L18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block text-xl hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white block text-xl hover:bg-white hover:text-black rounded-lg p-2"
              >
                About
              </a>
              <a
                href="/education"
                className="text-white block text-xl hover:bg-white hover:text-black rounded-lg p-2"
              >
                Education
              </a>
              <a
                href="/activities"
                className="text-white block text-xl hover:bg-white hover:text-black rounded-lg p-2"
              >
                Activities
              </a>
              <a
                href="/projects"
                className="text-white block text-xl hover:bg-white hover:text-black rounded-lg p-2"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-white block text-xl hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
