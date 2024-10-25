import React from 'react';
import { motion } from 'framer-motion';
import { FiFeather, FiHeart, FiStar, FiRefreshCcw } from 'react-icons/fi';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiFeather className="w-8 h-8" />,
      title: "All Natural",
      description: "Made with organic ingredients and natural sweeteners"
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Health Conscious",
      description: "Low-fat, probiotic-rich options for a balanced lifestyle"
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Carefully sourced ingredients for the best taste"
    },
    {
      icon: <FiRefreshCcw className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "Made fresh every day for the perfect consistency"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="inline-block p-4 bg-pink-100 rounded-full text-pink-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;