import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { ShoppingCart, Sparkles, Eye } from "lucide-react";

import image1 from "../assets/Necklaces/IMG_2858.JPG";
import image3 from "../assets/Necklaces/IMG_2861.JPG";
import image4 from "../assets/Necklaces/IMG_2862.JPG";
import image5 from "../assets/Necklaces/IMG_2863.JPG";
import image6 from "../assets/Necklaces/IMG_2864.JPG";
import image7 from "../assets/Necklaces/IMG_2865.JPG";
import image8 from "../assets/Necklaces/IMG_2867.JPG";
import image9 from "../assets/Necklaces/IMG_2868.JPG";

export const NecklacesProducts = [
  { id: 1, name: "Elegant Dainty Piece", price: "₹799", priceNumber: 799, img: image1 },
  { id: 2, name: "Classic Gold Plated", price: "₹999", priceNumber: 999, img: image5 },
  { id: 3, name: "Minimal Silver Charm", price: "₹699", priceNumber: 699, img: image3 },
  { id: 4, name: "Lustrous Pearl Drop", price: "₹899", priceNumber: 899, img: image4 },
  { id: 5, name: "Intricate Filigree", price: "₹799", priceNumber: 799, img: image6 },
  { id: 6, name: "Vintage Statement", price: "₹999", priceNumber: 999, img: image7 },
  { id: 7, name: "Layered Duo Necklace", price: "₹699", priceNumber: 699, img: image8 },
  { id: 8, name: "Royal Diamond Cut", price: "₹899", priceNumber: 899, img: image9 },
];

// --- Custom component to define the professional button styles (kept same) ---
const PrimaryButton = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 transform 
      bg-yellow-600 text-gray-900 
      hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 
      active:scale-[0.98] ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ onClick, children, className = "" }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 transform 
      border border-yellow-700 text-yellow-500 
      hover:bg-yellow-900/40 hover:text-yellow-400 
      active:scale-[0.98] ${className}`}
  >
    {children}
  </button>
);
// --------------------------------------------------------------------------

const Necklaces = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        id: `necklaces-${product.id}`,
        name: product.name,
        img: product.img,
        priceNumber: product.priceNumber,
        qty: 1,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-950 py-16 relative font-sans">
      
      {/* PROFESSIONAL BACKGROUND & HEADER */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/70 to-transparent" />
      
      {/* Floating particles (Kept for aesthetic) */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* LUXURY HEADER (SIZE REDUCED) */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent tracking-tight">
              Necklace Collection
            </h1>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl font-light leading-relaxed">
            Discover our curated collection of timeless and handcrafted necklaces designed to elevate your style.
          </p>
        </div>


        {/* COMPACT PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> 
          {/* Grid changed to 5 columns on XL to fit more products */}
          {NecklacesProducts.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl shadow-black/50 overflow-hidden transform transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-yellow-900/30">
                
                {/* Image Section */}
                <div 
                  onClick={() => navigate(`/product/necklaces/${product.id}`)} 
                  className="relative overflow-hidden aspect-square"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-yellow-400/50">
                      <Eye className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                </div>

                {/* Product Info & Actions (Reduced Padding/Size) */}
                <div className="p-4 flex flex-col">
                  <h3 className="text-base font-semibold text-white mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-3 h-3 text-yellow-400 opacity-80" />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons (Reduced Height) */}
                  <div className="flex flex-col space-y-2">
                    <PrimaryButton
                      onClick={() => handleAddToCart(product)}
                      className="py-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </PrimaryButton>
                    <SecondaryButton 
                      onClick={() => navigate(`/product/necklaces/${product.id}`)}
                      className="py-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Details</span>
                    </SecondaryButton>
                  </div>
                </div>
              </div>
              
              {/* Subtle Gold Border/Glow on Hover */}
              {hoveredCard === product.id && (
                <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-yellow-500/50 animate-pulse-slow" />
              )}
            </div>
          ))}
        </div>

        {/* PROFESSIONAL CALL TO ACTION */}
        <div className="text-center mt-20">
          <PrimaryButton
            onClick={() => navigate("/best-sellers")}
            className="px-10 py-3 text-lg font-bold rounded-full shadow-xl shadow-yellow-600/30"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explore All Jewelry</span>
            <Sparkles className="w-5 h-5" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Necklaces;