
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Download, Share, Bell, User } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Instant Landmark Scanner',
    description: 'Snap a photo and get instant historical context, opening hours, and insider tips.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: MapPin,
    title: 'Smart Itinerary Builder',
    description: 'Drag-and-drop planning with route optimization and real-time updates.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Download,
    title: 'Offline City Packs',
    description: 'Download complete city guides for offline access anywhere you travel.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Share,
    title: 'Community Sharing',
    description: 'Share your discoveries and learn from fellow travelers worldwide.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Bell,
    title: 'Safety Alerts',
    description: 'Get real-time safety and accessibility information for any destination.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: User,
    title: 'Personalized Experience',
    description: 'AI-powered recommendations based on your interests and travel history.',
    color: 'from-indigo-500 to-indigo-600'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Travel Smarter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From instant landmark recognition to personalized itineraries, 
            we've got every aspect of your journey covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
