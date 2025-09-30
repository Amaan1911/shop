import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  selectCartItems,
  selectCartTotal,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
} from "../store/cartSlice";
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Sparkles } from "lucide-react";

const CartPage = () => {
  const dispatch = useDispatch();
  const reduxCartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);
  
  // Optional: local state to initialize from localStorage
  const [cartItems, setCartItems] = useState(reduxCartItems);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Sync localStorage cart with state if Redux is empty
    if (reduxCartItems.length === 0) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) setCartItems(JSON.parse(storedCart));
    } else {
      setCartItems(reduxCartItems);
    }
  }, [reduxCartItems]);

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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="min-h-screen mt-[-30px] bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
      </div>

      <div className="relative z-10 px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ShoppingCart className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl md:text-2xl mt-[-20px] font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Your Cart
            </h1>
            <ShoppingCart className="w-8 h-8 text-yellow-400" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Review your selected items and proceed to checkout
          </motion.p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="card-dark p-12">
              <motion.div
                className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ShoppingCart className="w-16 h-16 text-black" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Cart is Empty
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Looks like you haven't added any items to your cart yet. 
                Start shopping to discover our amazing jewelry collection!
              </p>

              <motion.button
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
              >
                Start Shopping
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Enhanced Cart Summary */}
            <motion.div
              variants={itemVariants}
              className="card-dark mb-8 p-8"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 text-yellow-400" />
                  </motion.div>
                  <div>
                    <span className="text-2xl font-bold text-white">
                      Items: {cartItems.reduce((s, i) => s + i.qty, 0)}
                    </span>
                    <p className="text-sm text-gray-400">Total items in your cart</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => dispatch(clearCart())}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-red-500/20 border border-red-500 text-red-400 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                >
                  <Trash2 className="w-5 h-5" />
                  <span className="font-semibold">Clear Cart</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Cart Items */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    exit="exit"
                    className="card-dark p-8"
                  >
                    <div className="flex items-center space-x-8">
                      {/* Enhanced Product Image */}
                      <motion.div
                        className="relative overflow-hidden rounded-xl"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
                      </motion.div>

                      {/* Enhanced Product Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                            ₹{item.priceNumber}
                          </p>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Sparkles key={i} className="w-4 h-4 text-yellow-400 opacity-60" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <motion.button
                          onClick={() => dispatch(decreaseQty(item.id))}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <Minus className="w-5 h-5 text-white" />
                        </motion.button>
                        
                        <motion.span
                          className="px-6 py-3 bg-gray-800 rounded-lg text-white font-bold min-w-[4rem] text-center text-xl"
                          key={item.qty}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.qty}
                        </motion.span>
                        
                        <motion.button
                          onClick={() => dispatch(increaseQty(item.id))}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <Plus className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>

                      {/* Enhanced Remove Button */}
                      <motion.button
                        onClick={() => dispatch(removeItem(item.id))}
                        whileHover={{ scale: 1.1, color: "#ef4444" }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 text-gray-400 hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
                      >
                        <Trash2 className="w-6 h-6" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Checkout Section */}
            <motion.div
              variants={itemVariants}
              className="card-dark mt-8 p-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Total Amount
                  </h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                    ₹{totalPrice}
                  </p>
                  <p className="text-gray-400 text-lg">
                    Including all taxes and fees
                  </p>
                </div>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.button
                    onClick={() => window.history.back()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline px-8 py-4 text-lg font-semibold"
                  >
                    <span>Continue Shopping</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-gold px-10 py-4 text-lg font-bold rounded-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center space-x-3"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
