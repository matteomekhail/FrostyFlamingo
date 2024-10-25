import React from 'react';
import { motion } from 'framer-motion';

interface Flavor {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

const flavors: Flavor[] = [
  {
    name: "Natural Yogurt",
    description: "Our signature creamy frozen yogurt, perfectly balanced between sweet and tangy",
    image: "https://plus.unsplash.com/premium_photo-1677528816927-39b1d36fe53e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
    tags: ["Classic", "Low Fat"]
  },
  {
    name: "Açaí",
    description: "Rich and creamy açaí blend, packed with antioxidants and natural energy",
    image: "https://images.unsplash.com/photo-1459984229830-6e16536c2e94?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Superfood", "Vegan"]
  },
  {
    name: "Chocolate",
    description: "Indulgent dark chocolate frozen yogurt made with premium cocoa",
    image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Fan Favorite"]
  },
  {
    name: "Pistachio",
    description: "Luxurious pistachio frozen yogurt with real nut pieces",
    image: "https://images.unsplash.com/photo-1502825751399-28baa9b81efe?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Premium"]
  },
  {
    name: "Strawberry",
    description: "Fresh strawberry frozen yogurt made with real fruit purée",
    image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Fruity", "Seasonal"]
  },
  {
    name: "Mango",
    description: "Tropical mango frozen yogurt bursting with summer flavors",
    image: "https://images.unsplash.com/photo-1669207334420-66d0e3450283?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Tropical", "Seasonal"]
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            OUR FLAVORS
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            Discover our signature flavors, crafted with care and natural ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{flavor.name}</h3>
                    <p className="text-sm text-gray-200 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {flavor.description}
                    </p>
                    <div className="flex gap-2">
                      {flavor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 rounded-2xl ring-4 ring-pink-400 ring-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">
            All our flavors can be customized with your favorite toppings!
          </p>
          <motion.a
            href="#toppings"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors"
          >
            Explore Toppings
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;