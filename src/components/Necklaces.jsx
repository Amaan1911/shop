import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { ShoppingCart, Sparkles } from "lucide-react";

import image1 from "../assets/Necklaces/IMG_2858.JPG";
import image3 from "../assets/Necklaces/IMG_2861.JPG";
import image4 from "../assets/Necklaces/IMG_2862.JPG";
import image5 from "../assets/Necklaces/IMG_2863.JPG";
import image6 from "../assets/Necklaces/IMG_2864.JPG";
import image7 from "../assets/Necklaces/IMG_2865.JPG";
import image8 from "../assets/Necklaces/IMG_2867.JPG";
import image9 from "../assets/Necklaces/IMG_2868.JPG";

export const NecklacesProducts = [
  { id: 1, name: "Elegant Necklace", price: "₹799", img: image1 },
  { id: 2, name: "Gold Plated Necklace", price: "₹999", img: image5 },
  { id: 3, name: "Silver Charm Necklace", price: "₹699", img: image3 },
  { id: 4, name: "Pearl Necklace", price: "₹899", img: image4 },
  { id: 5, name: "Elegant Necklace", price: "₹799", img: image6 },
  { id: 6, name: "Gold Plated Necklace", price: "₹999", img: image7 },
  { id: 7, name: "Silver Charm Necklace", price: "₹699", img: image8 },
  { id: 8, name: "Pearl Necklace", price: "₹899", img: image9 },
];

const buttonClasses = "btn-gold flex-1";

const Necklaces = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleAddToCart = (product) => {
    const priceNumber = Number(String(product.price).replace(/[^0-9.]/g, ""));
    dispatch(
      addItem({
        id: `necklaces-${product.id}`,
        name: product.name,
        img: product.img,
        priceNumber,
        qty: 1,
      })
    );
    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 relative font-sans">

      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/10 via-rose-900/10 to-emerald-900/10" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-5" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 md:px-8">
        {/* Enhanced Header */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Necklaces
            </h1>
            <Sparkles className="w-10 h-10 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Discover our exquisite collection of handcrafted necklaces, each piece designed to add elegance and sophistication to your style.
          </p>
        </div>


        {/* Enhanced Products Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {NecklacesProducts.map((product, index) => (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="card-product h-full flex flex-col">
                {/* Enhanced Image */}
                <div 
                  onClick={() => navigate(`/product/necklaces/${product.id}`)} 
                  className="relative overflow-hidden rounded-t-2xl"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Icons */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-4 h-4 text-yellow-400 opacity-60" />
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <button
                      onClick={() => navigate(`/product/necklaces/${product.id}`)}
                      className="btn-outline flex-1"
                    >
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={buttonClasses}
                    >
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(45deg, rgba(255,215,0,0.1), rgba(244,63,94,0.1))",
                    filter: "blur(30px)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate("/best-sellers")}
            className="btn-rose px-12 py-4 text-lg font-bold rounded-full"
          >
            <Sparkles className="w-6 h-6" />
            <span>View All Collections</span>
            <Sparkles className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Necklaces;
