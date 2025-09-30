import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
  selectCartItems,
  selectCartTotal,
} from "../store/cartSlice";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  // Helper component for the quantity controls
  const QuantityControls = ({ item }) => (
    <div className="flex items-center border border-gray-700 rounded-md overflow-hidden">
      <motion.button
        onClick={() => dispatch(decreaseQty(item.id))}
        whileTap={{ scale: 0.95 }}
        className="p-2 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
        aria-label={`Decrease quantity of ${item.name}`}
      >
        <Minus className="w-4 h-4 text-white" />
      </motion.button>

      <span className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white font-medium text-lg">
        {item.qty}
      </span>

      <motion.button
        onClick={() => dispatch(increaseQty(item.id))}
        whileTap={{ scale: 0.95 }}
        className="p-2 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 transition-colors"
        aria-label={`Increase quantity of ${item.name}`}
      >
        <Plus className="w-4 h-4 text-white" />
      </motion.button>
    </div>
  );

  const CartItem = ({ item }) => (
    <motion.div
      variants={itemVariants}
      exit="exit"
      className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] gap-4 p-4 md:p-6 items-start">
        {/* LEFT: Product Image (Two-column layout on medium screens and up) */}
        <div className="md:col-span-1 flex justify-center md:justify-start">
          <motion.div
            className="relative overflow-hidden rounded-lg w-full h-auto aspect-square max-w-[150px] md:max-w-none"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* RIGHT: Product Details and Controls */}
        <div className="md:col-span-1 flex flex-col justify-between w-full h-full">
          {/* Top: Name and Price */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400">
                Item ID: <span className="font-mono">{item.id.substring(0, 8)}</span>
              </p>
            </div>
            <p className="text-xl font-bold text-teal-400">
              ₹{item.priceNumber}
            </p>
          </div>

          {/* Bottom: Qty Controls and Remove Button */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
            <QuantityControls item={item} />
            <button
              onClick={() => dispatch(removeItem(item.id))}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors rounded-full hover:bg-gray-800"
              aria-label={`Remove ${item.name} from cart`}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto min-h-screen bg-gray-950 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-16 text-white tracking-tight"
      >
        Shopping Cart 🛒
      </motion.h2>

      {items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl"
        >
          <ShoppingBag className="w-16 h-16 text-gray-500 mb-6" />
          <p className="text-xl text-gray-400 mb-8 font-light">
            Your cart is looking a little empty!
          </p>
          <Link
            to="/"
            className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold shadow-md hover:bg-teal-500 transition-all text-lg"
          >
            Start Shopping Now
          </Link>
        </motion.div>
      ) : (
        /* MAIN CART LAYOUT: Two columns on medium screens and up */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* COLUMN 1: Cart Items List (2/3 width on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6"
          >
            <AnimatePresence>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* COLUMN 2: Cart Summary (1/3 width on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 mt-6 lg:mt-0 sticky top-28 h-fit"
          >
            <div className="bg-gray-900 border border-gray-800 p-6 md:p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
                Order Summary
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="text-lg">Subtotal ({items.length} items)</span>
                  <span className="text-white font-medium text-lg">₹{total}</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span className="text-lg">Shipping Estimate</span>
                  <span className="text-green-400 font-semibold text-lg">Free</span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6 mt-6 flex justify-between items-center">
                <span className="text-xl font-bold text-white">Order Total</span>
                <span className="text-3xl font-extrabold text-teal-400">₹{total}</span>
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <button
                  className="w-full px-6 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-500 transition-all shadow-md"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full px-6 py-3 border border-red-600 text-red-500 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-all text-base"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Cart;