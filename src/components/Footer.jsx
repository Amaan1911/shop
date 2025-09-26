import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <MdEmail className="text-yellow-400 text-xl" />
              <span>yourstore@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-blue-400 text-xl" />
              <span>+91 91234 56789</span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Address</h2>
          <p className="flex items-start gap-3">
            <IoLocationSharp className="text-red-500 text-2xl" />
            <span>
              Shop Number 1, Meena Bazar, <br />
              Jama Masjid Gate No. 2, Delhi
            </span>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
