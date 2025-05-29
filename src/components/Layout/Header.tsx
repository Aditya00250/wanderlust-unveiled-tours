
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, User, Bell, Map } from 'lucide-react';
import LanguageSelector from '../UI/LanguageSelector';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Map className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Wanderlust
            </span>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            
            <motion.button
              className="p-2 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              onClick={() => onOpenAuth('login')}
              className="p-2 rounded-2xl bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:from-blue-600 hover:to-orange-600 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
