import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/95 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">Wix</Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/templates" className="text-gray-600 hover:text-gray-900 transition-colors">Creation</Link>
            <Link to="/business" className="text-gray-600 hover:text-gray-900 transition-colors">Business</Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900 transition-colors">Resources</Link>
            <Link to="/enterprise" className="text-gray-600 hover:text-gray-900 transition-colors">Enterprise</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Log In</Link>
            <Link 
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}