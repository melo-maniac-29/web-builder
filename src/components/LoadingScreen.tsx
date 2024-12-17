import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => Math.min(prev + 20, 100));
      } else {
        onComplete();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <motion.div
              className="text-6xl font-bold text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              echo-one
            </motion.div>
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}