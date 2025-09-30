import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Sparkles } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../store/cartSlice";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartCount = useSelector(selectCartCount);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/necklaces", label: "Necklaces" },
    { to: "/earrings", label: "Earrings" },
    { to: "/bangles", label: "Bangles" },
    { to: "/rings", label: "Rings" },
    { to: "/best-sellers", label: "Best Sellers" },
    { to: "/contacts", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[9999] h-[50px] transition-all duration-500 ${
        scrolled
          ? "glass-effect shadow-2xl backdrop-blur-xl bg-white/20 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 h-full"
        >
          <Sparkles className="text-2xl text-yellow-400" />
          <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Abdullah Jewellery
          </h1>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 h-full">
          {navItems.map((item) => (
            <li key={item.to} className="flex items-center h-full">
              <Link
                to={item.to}
                className="text-white hover:text-yellow-400 px-3 py-1 font-semibold transition-all duration-300 flex items-center h-full"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Cart */}
          <li className="flex items-center relative h-full">
  <Link
    to="/cart"
    className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-all duration-300 relative"
  >
    <ShoppingCart className="w-5 h-5" />
    <span className="text-sm">Cart</span>
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 text-white rounded-full px-1.5 py-0.5 font-bold flex items-center justify-center">
        {cartCount}
      </span>
    )}
  </Link>
</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="flex flex-col gap-2 px-4 py-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block text-white hover:text-yellow-400 px-2 py-2 font-semibold transition-all duration-300"
                    onClick={() => setIsOpen(false)} 
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Cart in mobile menu */}
              <li className="flex items-center mt-2">
                <Link
                  to="/cart"
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 px-2 py-2 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 " />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="text-xs bg-red-500 text-white rounded-full font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
