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
    <div className="min-h-screen mt-5 px-4 md:px-6">
      {/* Page Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        Our Necklaces Collection ✨
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {NecklacesProducts.map((product) => (
          <Link key={product.id} to={`/product/Necklaces/${product.id}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 md:h-56 object-cover"
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
                  {product.name}
                </h2>
                <p className="text-yellow-600 font-bold mt-2">{product.price}</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                  <button className="flex-1 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition transform">
                    Buy Now
                  </button>
                  <button className="flex-1 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition transform">
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
