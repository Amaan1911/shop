import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Sparkles, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-5" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                A.K Jewellery
              </h2>
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting beautiful jewelry pieces that tell your unique story. 
              From elegant necklaces to stunning earrings, we bring timeless beauty to modern life.
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span>Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MdEmail className="text-black text-lg" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">amaansheikhbrothers@gmail.com</p>
                </div>
              </motion.li>
              
              <motion.li
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaWhatsapp className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold">+91 98111 68640</p>
                </div>
              </motion.li>
              
              <motion.li
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <MdPhone className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold">+91 98111 68640</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {['Necklaces', 'Earrings', 'Bangles', 'Rings', 'Best Sellers'].map((link, index) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5, color: "#fbbf24" }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                    <span>{link}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Address & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Find Us</span>
            </h3>
            
            {/* Address */}
            <motion.div
              className="mb-6"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg mt-1"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <IoLocationSharp className="text-white text-lg" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold leading-relaxed">
                    Shop Number 1, Meena Bazar,<br />
                    Jama Masjid Gate No. 2, Delhi
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow Us</p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://instagram.com/abdullah__antiquejewells"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg hover:from-pink-400 hover:to-pink-500 transition-all duration-300"
                >
                  <FaInstagram className="text-white text-xl" />
                </motion.a>
                <motion.a
                  href="https://wa.me/919811168640"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:from-green-400 hover:to-green-500 transition-all duration-300"
                >
                  <FaWhatsapp className="text-white text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>by A.K Jewellery</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} A.K Artificial Jewellery. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafting beauty, one piece at a time ✨
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
