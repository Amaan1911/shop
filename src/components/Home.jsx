import { useState, useEffect, useRef } from "react";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import { useNavigate } from "react-router-dom";
import { Sparkles, Star, Gem, Crown } from "lucide-react";

const Home = () => {
  const images = [image1, image2, image3];
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const containerRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);




  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden font-sans"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)" }}
    >
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 opacity-30 animate-gradient"
        style={{
          background: "linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ease-in-out ${
              index === current ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              filter: "brightness(0.3) contrast(1.2) saturate(1.5)",
            }}
          />
        ))}
      </div>

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />



      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Decorative Icons */}
        <div className="flex space-x-8 mb-8 animate-slideInUp">
          <div className="animate-rotate">
            <Crown className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="animate-float">
            <Gem className="w-10 h-10 text-blue-400" />
          </div>
          <div className="animate-rotate-reverse">
            <Star className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 animate-slideInUp">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
            Welcome to
          </span>
        </h1>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-scaleIn">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            A.K Artificial
          </span>
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Jewellery
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed animate-fadeIn">
          ✨ <span className="text-yellow-400 font-semibold">Elegant designs</span> •
          <span className="text-cyan-400 font-semibold"> Timeless beauty</span> •
          <span className="text-purple-400 font-semibold"> Modern luxury</span> ✨
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-around sm:flex-row gap-10 animate-slideInUp">
          <button
            onClick={() => navigate("/necklaces")}
            className="group relative px-12 py-4 rounded-full font-bold text-lg overflow-hidden hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
              color: "#000",
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Sparkles className="w-5 h-5" />
              <span>Shop Now</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </button>

          <button
            onClick={() => navigate("/best-sellers")}
            className="group  relative px-12 py-4 rounded-full font-bold text-lg border-2 border-cyan-400 text-cyan-400 hover:text-black transition-all duration-300 overflow-hidden hover:scale-105 hover:-translate-y-1"
            style={{
              boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
            }}
          >
            <span className="relative z-10 flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Best Sellers</span>
            </span>
            <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2  transform -translate-x-1/2 animate-fadeIn">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-glow">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-float" />
          </div>
        </div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }} />
      </div>
    </div>
  );
};

export default Home;
