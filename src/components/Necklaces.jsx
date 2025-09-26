import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/Necklaces/IMG_2858.JPG";
import image2 from "../assets/Necklaces/IMG_2859.JPG";
import image3 from "../assets/Necklaces/IMG_2861.JPG";
import image4 from "../assets/Necklaces/IMG_2862.JPG";
import image5 from "../assets/Necklaces/IMG_2863.JPG";
import image6 from "../assets/Necklaces/IMG_2864.JPG";
import image7 from "../assets/Necklaces/IMG_2865.JPG";
import image8 from "../assets/Necklaces/IMG_2867.JPG";
import image9 from "../assets/Necklaces/IMG_2868.JPG";

export const NecklacesProducts = [
  { id: 1, name: "Elegant Bracelet", price: "₹799", img: image1 },
  { id: 2, name: "Gold Plated Bracelet", price: "₹999", img: image5 },
  { id: 3, name: "Silver Charm Bracelet", price: "₹699", img: image3 },
  { id: 4, name: "Pearl Bracelet", price: "₹899", img: image4 },
  { id: 5, name: "Elegant Bracelet", price: "₹799", img: image6 },
  { id: 6, name: "Gold Plated Bracelet", price: "₹999", img: image7 },
  { id: 7, name: "Silver Charm Bracelet", price: "₹699", img: image8 },
  { id: 8, name: "Pearl Bracelet", price: "₹899", img: image9 },
];

const Necklaces = () => {
  return (
    <div className="min-h-screen mt-[-15px] px-4 md:px-8 bg-gray-100">
      {/* Page Title */}
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-12 text-gray-900 tracking-wide">
        Our Necklaces Collection ✨
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {NecklacesProducts.map((product) => (
          <Link key={product.id} to={`/product/necklaces/${product.id}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-110 hover:-translate-y-4 hover:rotate-1 hover:shadow-2xl flex flex-col">
              <div className="relative overflow-hidden group">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* gradient overlay for modern look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-5 flex flex-col items-center">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 text-center">
                  {product.name}
                </h2>
                <p className="text-yellow-600 font-bold mt-2 text-lg">{product.price}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-5 w-full">
                  <button className="flex-1 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 transition transform">
                    Buy Now
                  </button>
                  <button className="flex-1 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 transition transform">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Necklaces;
