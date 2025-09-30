import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdCode, MdPerson } from "react-icons/md";

import { Sparkles, MessageCircle, Mail, MapPin } from "lucide-react";

// Assuming your Tailwind config defines a `card-dark` or we'll define the style directly
const CARD_STYLE = "bg-gray-900/70 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl shadow-black/50";
const ICON_BASE_STYLE = "p-4 rounded-xl shadow-lg";

// Replace with your actual assets
import Image1 from "../assets/Contact Images/mayur-sable-HeRVEJWOgo4-unsplash.jpg";
import Image2 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.07.58_0bb4e788.jpg";
import Image3 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.12.57_5316d90a.jpg";
import Image4 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.12.58_622f055a.jpg";
// !!! IMPORTANT: The DeveloperPhoto import is commented out to prevent errors !!!
import DeveloperPhoto from "../assets/Contact Images/Developer image.jpg"

const Contact = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [current, setCurrent] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Background slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const contactMethods = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/abdullah__antiquejewells",
      label: "Instagram",
      desc: "Follow us for the latest pieces",
      color: "from-pink-500 to-rose-600",
      hoverColor: "hover:from-pink-400 hover:to-rose-500",
      glowColor: "shadow-rose-500/50",
    },
    {
      icon: MdEmail,
      href: "mailto:amaansheikhbrothers@gmail.com",
      label: "Email",
      desc: "Send us an email anytime",
      color: "from-blue-500 to-cyan-600",
      hoverColor: "hover:from-blue-400 hover:to-cyan-500",
      glowColor: "shadow-cyan-500/50",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/919811168640",
      label: "WhatsApp",
      desc: "Chat with us directly for quick queries",
      color: "from-green-500 to-emerald-600",
      hoverColor: "hover:from-green-400 hover:to-emerald-500",
      glowColor: "shadow-green-500/50",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 0.2 : 0 }}
          transition={{ duration: 2 }}
        />
      ))}

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/70" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
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

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-20 md:py-28">
        <motion.div
          className="max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Professional Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div className="inline-flex items-center space-x-4 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h1 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent tracking-tighter">
                Get In Touch
              </h1>
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Connect with us for inquiries, custom orders, or partnership opportunities. We're here to assist you.
            </motion.p>
          </motion.div>

          {/* SINGLE COLUMN / FULL WIDTH Layout (Temporarily) */}
          <div className="grid grid-cols-1 gap-10 md:gap-12">
            
            {/* FULL WIDTH: Business Contact Methods */}
            <motion.div
              className="space-y-8 lg:col-span-2" // Set to full width visually by removing the lg:col-span-2 restriction
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              
              {/* Primary Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block ${CARD_STYLE} p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/20`}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -3 }}
                    onHoverStart={() => setHoveredIcon(method.label)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    <div className="flex items-center space-x-6">
                      <motion.div
                        className={`${ICON_BASE_STYLE} bg-gradient-to-r ${method.color} text-white`}
                        animate={hoveredIcon === method.label ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <method.icon className="w-7 h-7" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-1">
                          {method.label}
                        </h3>
                        <p className="text-gray-400 text-base">{method.desc}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>


              {/* General Business Info Card (Extended) */}
              <motion.div
                className={`${CARD_STYLE} p-8`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                  Business Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MdPhone className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+919811168640" className="text-white font-medium text-lg hover:text-cyan-400 transition">+91 98111 68640</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white font-medium text-lg">Delhi, India (E-commerce operations)</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </motion.div>

          
              <motion.div
                className={`lg:col-span-1 ${CARD_STYLE} p-8 h-full bg-cyan-900/40 border-cyan-700/50 shadow-cyan-900/50`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${ICON_BASE_STYLE} bg-gradient-to-br from-cyan-400 to-blue-500 mb-6`}>
                    <MdCode className="w-8 h-8 text-black" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Contact the Developer
                  </h2>
                  <p className="text-lg text-cyan-400 mb-6 font-mono">
                    Mohd. Amaan Sheikh
                  </p>

                  <img
                    src={DeveloperPhoto}
                    alt="Developer Photo"
                    className="w-50 h-50 rounded-full object-cover mb-6 border-4 border-cyan-500/50 shadow-xl"
                  />

                  <p className="text-gray-300 text-sm mb-6">
                    For website bugs, feature suggestions, or freelance inquiries related to this e-commerce platform.
                  </p>

                  <div className="space-y-3 w-full">
                    <a 
                      href="mailto:amaansheikhbrothers@gmail.com" 
                      className="flex items-center justify-center space-x-2 text-white bg-cyan-700 hover:bg-cyan-600 px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <MdEmail className="w-5 h-5" />
                      <span>amaansheikhbrothers@gmail.com</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/amaan-sheikh-3b25a2317/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 text-white bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-sm"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                      <span>Amaan Sheikh</span>
                    </a>
                  </div>
                </div>
              </motion.div>
           
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;