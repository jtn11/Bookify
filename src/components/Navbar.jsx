import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Bookify
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/book/list"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Add Listing
            </Link>
            <Link
              to="/book/orders"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Orders
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 transition duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:text-indigo-600"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
