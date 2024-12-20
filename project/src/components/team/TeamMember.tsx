import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay: number;
}

export function TeamMember({ name, role, imageUrl, delay }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient" />
        <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-2xl z-10">
          <div className="p-6">
            <motion.div 
              className="relative w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20" />
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}