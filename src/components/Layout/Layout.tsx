
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import AuthModal from '../Auth/AuthModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header onOpenAuth={openAuth} />
      
      <main className="pb-20 pt-16">
        {children}
      </main>
      
      <BottomNavigation />
      
      <AnimatePresence>
        {isAuthModalOpen && (
          <AuthModal
            mode={authMode}
            onClose={() => setIsAuthModalOpen(false)}
            onSwitchMode={setAuthMode}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
