
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Plane } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover the World
              <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                One Landmark at a Time
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Snap photos of landmarks and instantly get rich historical context, 
              insider tips, and personalized travel recommendations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-6 h-6 inline mr-2" />
              Start Scanning
            </motion.button>
            
            <motion.button
              className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all border-2 border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-6 h-6 inline mr-2" />
              Explore Destinations
            </motion.button>
          </motion.div>
        </div>

        {/* Hero Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl h-80 md:h-96 flex items-center justify-center shadow-2xl">
            <div className="text-center text-gray-600">
              <Plane className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Interactive Travel Experience Coming Soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
