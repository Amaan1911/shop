import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image1 from "../assets/Contact Images/mayur-sable-HeRVEJWOgo4-unsplash.jpg";
import Image2 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.07.58_0bb4e788.jpg";
import Image3 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.12.57_5316d90a.jpg";
import Image4 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.12.58_622f055a.jpg";

const Contact = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds for smoother transitions
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-[-17px] w-full h-screen overflow-hidden bg-black">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 0.25 : 0 }} // dimmed for minimalist look
          transition={{ duration: 1.5 }}
        />
      ))}

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

      {/* Contact container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="bg-white/5 backdrop-blur-lg px-12 py-10 rounded-2xl shadow-xl text-center border border-white/10">
          <motion.h1
            className="text-4xl font-bold mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Contact Me
          </motion.h1>

          <div className="flex gap-10 justify-center text-4xl">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/abdullah__antiquejewells"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-pink-500 hover:text-pink-400 transition drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
            >
              <FaInstagram />
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:amaansheikhbrothers@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 hover:text-blue-300 transition drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            >
              <MdEmail />
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/919811168640"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-green-400 hover:text-green-300 transition drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
