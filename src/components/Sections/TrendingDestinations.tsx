
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Heart } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Eiffel Tower',
    location: 'Paris, France',
    image: 'photo-1502602898536-47ad22581b52',
    scans: '2.4k',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Machu Picchu',
    location: 'Cusco, Peru',
    image: 'photo-1587595431973-160d0d94add1',
    scans: '1.8k',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Great Wall',
    location: 'Beijing, China',
    image: 'photo-1508804185872-d7badad00f7d',
    scans: '3.2k',
    rating: 4.7
  },
  {
    id: 4,
    name: 'Taj Mahal',
    location: 'Agra, India',
    image: 'photo-1564507592333-c60657eea523',
    scans: '2.1k',
    rating: 4.9
  }
];

const TrendingDestinations = () => {
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
            Trending
            <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Destinations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the most scanned landmarks and hidden gems from our community of travelers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={`https://images.unsplash.com/${destination.image}?auto=format&fit=crop&w=400&h=300`}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Camera className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">{destination.scans}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium text-gray-900">{destination.rating}</span>
                  </div>
                  
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-2 rounded-xl text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
