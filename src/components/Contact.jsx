import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";

import { Sparkles, MessageCircle, Mail, MapPin } from "lucide-react";
import Image1 from "../assets/Contact Images/mayur-sable-HeRVEJWOgo4-unsplash.jpg";
import Image2 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.07.58_0bb4e788.jpg";
import Image3 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.12.57_5316d90a.jpg";
import Image4 from "../assets/Contact Images/WhatsApp Image 2025-09-25 at 18.12.58_622f055a.jpg";

const Contact = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [current, setCurrent] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contactMethods = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/abdullah__antiquejewells",
      label: "Instagram",
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-400 hover:to-pink-500",
      glowColor: "shadow-pink-500/50",
    },
    {
      icon: MdEmail,
      href: "mailto:amaansheikhbrothers@gmail.com",
      label: "Email",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-400 hover:to-blue-500",
      glowColor: "shadow-blue-500/50",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/919811168640",
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      glowColor: "shadow-green-500/50",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Enhanced Background slideshow */}
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

      {/* Enhanced Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/70" />

      {/* Enhanced Floating Particles */}
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Connect with us for inquiries, custom orders, or just to say hello! We're here to help you find the perfect jewelry piece.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Methods */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredIcon(method.label)}
                  onHoverEnd={() => setHoveredIcon(null)}
                >
                  <div className={`card-dark p-8 transition-all duration-300 ${method.hoverColor} ${method.glowColor} hover:shadow-2xl`}>
                    <div className="flex items-center space-x-6">
                      <motion.div
                        className={`p-5 rounded-2xl bg-gradient-to-r ${method.color} text-white`}
                        animate={hoveredIcon === method.label ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <method.icon className="w-10 h-10" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                          {method.label}
                        </h3>
                        <p className="text-gray-400 text-lg">
                          {method.label === "Instagram" && "Follow us for latest updates"}
                          {method.label === "Email" && "Send us an email anytime"}
                          {method.label === "WhatsApp" && "Chat with us directly"}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced Contact Info Card */}
            <motion.div
              className="card-dark p-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl">
                    <Mail className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg mb-1">Email</p>
                    <p className="text-white font-bold text-xl">amaansheikhbrothers@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-gradient-to-r from-green-400 to-green-500 rounded-xl">
                    <MdPhone className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg mb-1">Phone</p>
                    <p className="text-white font-bold text-xl">+91 98111 68640</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-4 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl">
                    <MapPin className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-lg mb-1">Location</p>
                    <p className="text-white font-bold text-xl">Delhi, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Quick Message */}
              <motion.div
                className="mt-10 p-8 bg-gradient-to-r from-yellow-400/10 to-cyan-400/10 rounded-xl border border-yellow-400/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-bold text-white">Quick Message</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  For urgent inquiries or custom orders, WhatsApp is the fastest way to reach us!
                </p>
                <motion.a
                  href="https://wa.me/919811168640"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-bold text-lg"
                >
                  <MdSend className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
