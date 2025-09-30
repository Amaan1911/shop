import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Eye, Heart, Sparkles } from "lucide-react";
import Image1 from "../assets/Bangles/1.jpg";
import Image2 from "../assets/Bangles/2.jpg";
import Image3 from "../assets/Bangles/3.jpg";
import Image4 from "../assets/Bangles/4.jpg";
import Image5 from "../assets/Bangles/5.jpg";
import Image6 from "../assets/Bangles/6.jpg";
import Image7 from "../assets/Bangles/7.jpg";
import Image8 from "../assets/Bangles/8.jpg";
import Image9 from "../assets/Bangles/9.jpg";
import Image10 from "../assets/Bangles/10.jpg";
import Image11 from "../assets/Bangles/11.jpg";

export const BangleProducts = [
  { id: 1, name: "Elegant Bangle", price: "₹799", img: Image1 },
  { id: 2, name: "Gold Plated Bangle", price: "₹999", img: Image2 },
  { id: 3, name: "Silver Charm Bangle", price: "₹699", img: Image3 },
  { id: 4, name: "Pearl Stone Bangle", price: "₹899", img: Image4 },
  { id: 5, name: "Traditional Kada", price: "₹1299", img: Image5 },
  { id: 6, name: "Diamond Studded Bangle", price: "₹1599", img: Image6 },
  { id: 7, name: "Antique Brass Bangle", price: "₹599", img: Image7 },
  { id: 8, name: "Rose Gold Bangle", price: "₹1199", img: Image8 },
  { id: 9, name: "Modern Sleek Bangle", price: "₹499", img: Image9 },
  { id: 10, name: "Designer Bridal Bangle", price: "₹1999", img: Image10 },
  { id: 11, name: "Crystal Studded Bangle", price: "₹899", img: Image11 },
];

const Bangles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleAddToCart = (product) => {
    const priceNumber = Number(String(product.price).replace(/[^0-9.]/g, ""));
    dispatch(addItem({
      id: `bangles-${product.id}`,
      name: product.name,
      img: product.img,
      priceNumber,
      qty: 1
    }));
    navigate("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-yellow-900/10 to-emerald-900/10" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-5" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 text-emerald-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent">
              Bangles
            </h1>
            <Sparkles className="w-10 h-10 text-emerald-400 animate-pulse" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our stunning collection of bangles, from traditional designs to modern elegance, each piece crafted to perfection.
          </motion.p>
        </motion.div>

        {/* Enhanced Products Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {BangleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(product.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="card-product h-full flex flex-col">
                {/* Image Container */}
                <div
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/product/bangles/${product.id}`)}
                >
                  <motion.img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Enhanced Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Enhanced Action Buttons */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col space-y-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Heart className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Enhanced Quick Add to Cart */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-emerald w-full py-3 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Quick Add</span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Enhanced Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-4 h-4 text-emerald-400 opacity-60" />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <button
                      onClick={() => navigate(`/product/bangles/${product.id}`)}
                      className="btn-outline flex-1"
                    >
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn-emerald flex-1"
                    >
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(45deg, rgba(16,185,129,0.1), rgba(255,215,0,0.1))",
                    filter: "blur(30px)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            onClick={() => navigate("/best-sellers")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-emerald px-12 py-4 text-lg font-bold rounded-full"
          >
            <Sparkles className="w-6 h-6" />
            <span>View All Collections</span>
            <Sparkles className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
  
export default Bangles;
