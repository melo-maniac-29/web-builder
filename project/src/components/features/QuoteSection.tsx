import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function QuoteSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-4 py-20 text-center"
    >
      <Quote className="w-12 h-12 mx-auto mb-6 text-blue-500 dark:text-blue-400" />
      <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
        "The future of web development is here. Create stunning websites with unparalleled ease and flexibility."
      </blockquote>
      <div className="text-gray-600 dark:text-gray-400">
        <p className="font-semibold">John Doe</p>
        <p className="text-sm">CEO at TechCorp</p>
      </div>
    </motion.div>
  );
}