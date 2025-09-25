import React from "react";
import Navbar from "./Navbar";

const products = [
  {
    id: 1,
    name: "Elegant Bracelet",
    price: "₹799",
    img: "https://via.placeholder.com/300x200.png?text=Bracelet+1",
  },
  {
    id: 2,
    name: "Gold Plated Bracelet",
    price: "₹999",
    img: "https://via.placeholder.com/300x200.png?text=Bracelet+2",
  },
  {
    id: 3,
    name: "Silver Charm Bracelet",
    price: "₹699",
    img: "https://via.placeholder.com/300x200.png?text=Bracelet+3",
  },
  {
    id: 4,
    name: "Pearl Bracelet",
    price: "₹899",
    img: "https://via.placeholder.com/300x200.png?text=Bracelet+4",
  },
];

const Bracelets = () => {
  return (
    <div className="min-h-screen mt-[-90px]">
      {/* <Navbar /> */}

      {/* Page Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mt-24 mb-10 text-gray-800">
        Our Bracelet Collection ✨
      </h1>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-yellow-600 font-bold mt-2">{product.price}</p>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full py-2 bg-yellow-400 text-black font-medium rounded-lg shadow hover:bg-yellow-500 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bracelets;
