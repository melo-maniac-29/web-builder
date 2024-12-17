import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export function Button({ to, variant = 'primary', children, className = '' }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full text-lg transition-shadow";
  const variantClasses = variant === 'primary' 
    ? "bg-blue-600 text-white hover:bg-blue-700" 
    : "border border-gray-300 text-gray-700 hover:bg-gray-50";

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </motion.span>
  );

  return to ? (
    <Link to={to}>{buttonContent}</Link>
  ) : (
    buttonContent
  );
}