import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './components/ProductCard';
import { DiscordLink } from './components/DiscordLink';
import { Disclaimer } from './components/Disclaimer';

function App() {
  const products = [
    {
      title: "Master of Ultra / Kappa w/ 1000m",
      price: "$280"
    },
    {
      title: "Master of Ultra lvl 1 standard account (permanent)",
      price: "$200"
    },
    {
      title: "Master of Ultra Unheard Edition Handmade (perm)",
      price: "$400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(75, 0, 130, 0.05) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(75, 0, 130, 0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              textShadow: [
                "0 0 10px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.7)",
                "0 0 10px rgba(168, 85, 247, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-center mb-20"
          >
            <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Killas Crib
            </h1>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <DiscordLink />
            
            <div className="grid gap-6 mb-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>

            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;