import React from 'react';
import { Header } from '../Header';
import { Background } from '../three/Background';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleDarkMode: () => void;
}

export function Layout({ children, isDark, toggleDarkMode }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Background />
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
    </div>
  );
}