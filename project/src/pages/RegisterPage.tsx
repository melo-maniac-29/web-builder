import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function RegisterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
          <h1 className="text-3xl font-bold text-center mb-8 dark:text-white">Create Account</h1>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Create a password"
                />
              </div>
            </div>
            <Button className="w-full">Create Account</Button>
          </form>
          <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}