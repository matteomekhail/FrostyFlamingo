import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-50"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800 z-50">Our Story</h2>
            <p className="text-gray-600 mb-4 z-50">
              Founded in 2024, Frosty Flamingo was born from a passion for creating delicious, healthy treats that bring joy to our community. Our commitment to using only the finest ingredients and creating unique flavor combinations has made us a local favorite.
            </p>
            <p className="text-gray-600 mb-4 z-50">
              We take pride in offering a wide variety of frozen yogurt flavors and açaí bowls, all made with organic ingredients and served with a smile. Our tropical-inspired atmosphere and dedication to quality make every visit a delightful experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-96 z-50"
          >
            <div className="absolute inset-0 bg-pink-200 rounded-lg transform rotate-3 z-40"></div>
            <div className="absolute inset-0 bg-purple-200 rounded-lg transform -rotate-3 z-40"></div>
            <div className="absolute inset-0 flex items-center justify-center z-50">
              <img 
                src="/img/about.jpg" 
                alt="About Frosty Flamingo" 
                className="object-cover w-full h-full rounded-lg z-50" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;