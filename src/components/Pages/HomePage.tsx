
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../Sections/HeroSection';
import FeaturesSection from '../Sections/FeaturesSection';
import TrendingDestinations from '../Sections/TrendingDestinations';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <HeroSection />
      <FeaturesSection />
      <TrendingDestinations />
    </motion.div>
  );
};

export default HomePage;
