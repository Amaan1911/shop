import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";


const Home = () => {
  const images = [image1, image2, image3];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
  
    <div className="h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-hidden font-sans">
      {/* Background Images */}
      {images.map((img, index) => (
        <motion.div
        key={index}
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: index === current ? 1 : 0 }}
        transition={{ duration: 1 }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm" />

      {/* Intro Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FFD700] tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          >
          Welcome to
        </motion.h1>

        <motion.h2
          className="mt-4 text-3xl md:text-4xl lg:text-5xl font-cursive text-white font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          >
          Abdullah Artificial Jewellery
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-300 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          >
          ✨ Elegant designs. Timeless beauty. ✨
        </motion.p>

        <motion.button
          className="mt-8 px-8 py-3 rounded-full bg-[#FFD700] text-black font-semibold shadow-lg hover:bg-yellow-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
          </>
  );
};

export default Home;
