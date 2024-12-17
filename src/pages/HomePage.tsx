import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Globe, Shield, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6">
              Create a Website You're Proud Of
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.
            </p>
            <div className="flex justify-center space-x-4">
              <Button to="/signup" variant="primary">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button to="/demo" variant="secondary">
                Watch Demo <Play className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the sections... */}
    </motion.div>
  );
}