import React from "react";
import { Link } from "react-router-dom";
import bgVideo from "../assets/Earings/assetVideo.mp4"
import image1 from "../assets/Earings/1.jpg"
import image2 from "../assets/Earings/2.jpg"
import image3 from "../assets/Earings/3.jpg"
import image4 from "../assets/Earings/4.jpg"


export const EaringsProducts = [
  { id: 1, name: "Elegant Pearl Earrings", price: "₹799", img:image1 },
  { id: 2, name: "Classic Gold Hoops", price: "₹999", img: image2 },
  { id: 3, name: "Diamond Studs", price: "₹1499", img: image3 },
  { id: 4, name: "Silver Drop Earrings", price: "₹599", img: image4},
];

const Earings = () => {
  return (
    <div className="relative min-h-screen flex mt-[-15px] flex-col">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Earrings Collection
        </h1>
        <p className="text-lg text-gray-200 text-center max-w-2xl mb-12">
          Discover our stunning collection of earrings. Handcrafted with elegance and modern design.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {EaringsProducts.map((product) => (
            <Link key={product.id} to={`/product/earrings/${product.id}`}>
              <div
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-700">{product.price}</p>
                  <button className="mt-3 px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg shadow hover:bg-yellow-500 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Earings;
