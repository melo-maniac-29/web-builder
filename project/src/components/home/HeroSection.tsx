import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../Button';
import { AnimatedText } from '../animations/AnimatedText';
import { AnimatedLetters } from '../animations/AnimatedLetters';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
      >
        <h1 className="text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          <AnimatedLetters text="Create a Website" delay={0.2} />
          <br />
          <AnimatedLetters text="You're Proud Of" delay={0.4} />
        </h1>
        <div className="mb-12 max-w-3xl mx-auto">
          <AnimatedText
            text="Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want."
            className="text-2xl text-gray-600 dark:text-gray-300"
            delay={0.6}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <Button to="/signup" variant="primary" className="text-lg px-8 py-4">
            Get Started <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <Button to="/demo" variant="secondary" className="text-lg px-8 py-4">
            Watch Demo <Play className="ml-2 w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}