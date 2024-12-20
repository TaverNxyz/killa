import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className={`relative bg-gray-900/80 border ${
        isPopular ? 'border-purple-500' : 'border-gray-800'
      } p-6 backdrop-blur-lg`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-sm px-3 py-1">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-purple-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 border ${
        isPopular 
          ? 'bg-purple-500 border-purple-500 hover:bg-purple-600' 
          : 'border-purple-500 hover:bg-purple-500/10'
      } text-white transition-all duration-300`}>
        Get Started
      </button>
    </motion.div>
  );
}