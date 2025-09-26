import React from "react";
import { useParams } from "react-router-dom";
import { NecklacesProducts } from "./Necklaces";

const ProductDetail = () => {
  const { id } = useParams();
  const product = NecklacesProducts.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-20 text-xl">Product not found!</p>;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12">
      
      {/* Left Side - Image with Vignette */}
      <div className="relative w-full md:w-1/2 h-96 md:h-[500px] flex justify-center items-center mb-8 md:mb-0">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 rounded-2xl"></div>
      </div>

      {/* Right Side - Product Info */}
      <div className="w-full md:w-1/2 md:pl-12 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{product.name}</h1>
        <p className="text-yellow-600 font-bold text-2xl mb-4">{product.price}</p>
        
        {/* Description placeholder */}
        <div className="text-gray-700 text-lg space-y-4">
          <p>Product description will go here. You can add multiple paragraphs describing the product.</p>
          <p>Additional details, materials, or special features can be listed here.</p>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-8 w-48 py-3 bg-yellow-400 text-black font-medium rounded-lg shadow hover:bg-yellow-500 transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetail;
