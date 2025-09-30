import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const LoadingSpinner = ({ size = 'default', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    default: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-32 h-32'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-400"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-r-cyan-400"></div>
      </motion.div>
      
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
        <span className="text-white font-medium">{text}</span>
        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
