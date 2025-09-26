import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-yellow-300 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl  bold tracking-wide text-shadow-violet-50 bg-clip-text text-white">
          Abdullah Jewellery
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/necklaces" className="hover:text-yellow-500 transition">
              Necklaces
            </Link>
          </li>
          <li>
            <Link to="/earrings" className="hover:text-yellow-500 transition">
              Earrings
            </Link>
          </li>
          <li>
            <Link to="/bracelets" className="hover:text-yellow-500 transition">
              Bracelets
            </Link>
          </li>
          <li>
            <Link to="/rings" className="hover:text-yellow-500 transition">
              Rings
            </Link>
          </li>
          <li>
            <Link to="/best-sellers" className="hover:text-yellow-500 transition">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <Link
            to="/"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/necklaces"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Necklaces
          </Link>
          <Link
            to="/earrings"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Earrings
          </Link>
          <Link
            to="/bracelets"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Bracelets
          </Link>
          <Link
            to="/rings"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Rings
          </Link>
          <Link
            to="/best-sellers"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Best Sellers
          </Link>
          <Link
            to="/contacts"
            className="block hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
