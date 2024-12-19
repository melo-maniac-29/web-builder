import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Background } from './components/three/Background';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { useDarkMode } from './hooks/useDarkMode';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useDarkMode();

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Background />
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          ) : (
            <>
              <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}