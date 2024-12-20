import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  price: string;
}

export function ProductCard({ title, price }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900/80 border border-purple-500 p-6 backdrop-blur-lg relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{price}</span>
      </div>
    </motion.div>
  );
}