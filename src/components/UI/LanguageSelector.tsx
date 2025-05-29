
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {selectedLanguage.code.toUpperCase()}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 min-w-48 z-50"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                onClick={() => {
                  setSelectedLanguage(language);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition-colors ${
                  selectedLanguage.code === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
