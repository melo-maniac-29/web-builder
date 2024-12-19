import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLetters } from './animations/AnimatedLetters';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Welcome to the future",
    "Where creativity meets technology",
    "Let's build something amazing"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhrase < phrases.length - 1) {
        setCurrentPhrase(prev => prev + 1);
      } else {
        onComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPhrase, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="w-24 h-24 border-4 border-blue-500 rounded-full relative">
              <motion.div
                className="absolute inset-0 border-4 border-white rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-20"
            >
              <AnimatedLetters
                text={phrases[currentPhrase]}
                className="text-4xl font-bold text-white"
                delay={0.2}
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="w-64 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}