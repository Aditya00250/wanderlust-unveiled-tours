
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Camera, List, User, Share } from 'lucide-react';

const navigationItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'scanner', icon: Camera, label: 'Scanner' },
  { id: 'itinerary', icon: List, label: 'Itinerary' },
  { id: 'community', icon: Share, label: 'Community' },
  { id: 'profile', icon: User, label: 'Profile' },
];

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <motion.nav 
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around items-center py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-2xl transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;
