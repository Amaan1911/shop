import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Eye, Heart, Sparkles } from "lucide-react"; // Removed 'Play' icon
import bgVideo from "../assets/Earings/assetVideo.mp4";
import image1 from "../assets/Earings/1.jpg";
import image2 from "../assets/Earings/2.jpg";
import image3 from "../assets/Earings/3.jpg";
import image4 from "../assets/Earings/4.jpg";
import image5 from "../assets/Earings/5.jpg";
import image6 from "../assets/Earings/6.jpg";
import image7 from "../assets/Earings/7.jpg";

export const EaringsProducts = [
  { id: 1, name: "Elegant Pearl Drop", price: "₹799", priceNumber: 799, img: image1 },
  { id: 2, name: "Classic Gold Hoops", price: "₹999", priceNumber: 999, img: image2 },
  { id: 3, name: "Brilliant Diamond Studs", price: "₹1499", priceNumber: 1499, img: image3 },
  { id: 4, name: "Bohemian Silver Dangle", price: "₹599", priceNumber: 599, img: image4 },
  { id: 5, name: "Minimalist Bar", price: "₹599", priceNumber: 599, img: image5 },
  { id: 6, name: "Cubic Zirconia Cluster", price: "₹599", priceNumber: 599, img: image6 },
  { id: 7, name: "Geometric Statement", price: "₹599", priceNumber: 599, img: image7 },
];

// --- Custom Button Components for a professional look ---

const PrimaryButton = ({ onClick, children, className = "" }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 transform 
      bg-rose-600 text-white shadow-lg shadow-rose-600/30
      hover:bg-rose-500 hover:shadow-rose-500/50 
      ${className}`}
  >
    {children}
  </motion.button>
);

const SecondaryButton = ({ onClick, children, className = "" }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 transform 
      border border-rose-700 text-rose-400 
      hover:bg-rose-900/40 hover:text-rose-300 
      ${className}`}
  >
    {children}
  </motion.button>
);

// --------------------------------------------------------

const Earings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const productGridRef = useRef(null);
  const isGridInView = useInView(productGridRef, { once: true, margin: "-100px" });

  // Removed isVideoMuted state and videoRef for simplicity since it's now always muted.
  // const videoRef = useRef(null);
  // const [isVideoMuted, setIsVideoMuted] = useState(true); 

  const handleAddToCart = (product) => {
    const priceNumber = Number(String(product.price).replace(/[^0-9.]/g, ""));
    dispatch(
      addItem({ id: `earrings-${product.id}`, name: product.name, priceNumber, img: product.img, qty: 1 })
    );
    navigate("/cart");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Removed toggleMute function

  // --- Framer Motion Variants ---

  const headerVariants = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const lineVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950">
      
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted={true} // Video is now permanently muted
          playsInline
          // Style adjusted for a moodier, professional look
          style={{ filter: "brightness(0.15) contrast(1.2) saturate(1.5)" }} 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-rose-900/10 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/50" />
        
        {/* Removed Mute/Unmute Control */}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rose-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              scale: [0.7, 1.1, 0.7],
              opacity: [0.4, 0.9, 0.4],
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

      {/* Content */}
      <div className="relative z-10 p-4 md:p-8 flex flex-col items-center min-h-screen">
        
        {/* ENHANCED ANIMATED HEADER (COMPACT) */}
        <motion.div
          variants={headerVariants}
          initial="initial"
          animate="animate"
          className="text-center mb-16 mt-20 md:mt-24"
        >
          <motion.div 
            variants={lineVariants}
            className="inline-flex items-center space-x-3 mb-3"
          >
            <Sparkles className="w-6 h-6 text-rose-400" />
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-300 to-rose-500 bg-clip-text text-transparent tracking-tight"
            >
              The Earrings Collection
            </motion.h1>
            <Sparkles className="w-6 h-6 text-rose-400" />
          </motion.div>
          <motion.p
            variants={lineVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Find your perfect pair. From statement pieces to classic studs, crafted for every occasion.
          </motion.p>
        </motion.div>

        {/* --- Product Grid --- */}
        <motion.div
          ref={productGridRef}
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl"
        >
          {EaringsProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              // Enhanced Hover Effect for more lift
              whileHover={{ y: -8, scale: 1.02 }} 
              onHoverStart={() => setHoveredCard(product.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative cursor-pointer"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl shadow-black/50 overflow-hidden h-full flex flex-col transition-shadow duration-300 group-hover:shadow-rose-900/40">
                
                {/* Image Container */}
                <div
                  className="relative overflow-hidden aspect-square"
                  onClick={() => navigate(`/product/earrings/${product.id}`)}
                >
                  <img
                    loading="lazy"
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Quick Actions Overlay (Top Right) */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      aria-label="Add to Wishlist"
                    >
                      <Heart className="w-4 h-4 text-rose-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info & Actions */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-base font-semibold text-white mb-2 line-clamp-1 group-hover:text-rose-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-3 h-3 text-rose-400 opacity-80" />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons (Compact) */}
                  <div className="flex flex-col space-y-2 mt-auto">
                    <PrimaryButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </PrimaryButton>
                    <SecondaryButton 
                      onClick={() => navigate(`/product/earrings/${product.id}`)}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </SecondaryButton>
                  </div>
                </div>

                {/* Subtle Rose Border/Glow on Hover */}
                {hoveredCard === product.id && (
                  <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-rose-500/50 animate-pulse-slow" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20 mb-10"
        >
          <PrimaryButton
            onClick={() => navigate("/best-sellers")}
            className="px-10 py-3 text-lg font-bold rounded-full shadow-xl shadow-rose-600/30"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore More Collections</span>
            <Sparkles className="w-5 h-5" />
          </PrimaryButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Earings;