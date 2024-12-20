import React from 'react';
import { motion } from 'framer-motion';

export function DiscordLink() {
  return (
    <motion.a
      href="https://discord.gg/xNxWc96GMr"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="block w-full bg-purple-600 text-white p-4 rounded-lg text-center font-bold hover:bg-purple-700 transition-colors duration-300 mb-8"
    >
      Join Our Discord
    </motion.a>
  );
}