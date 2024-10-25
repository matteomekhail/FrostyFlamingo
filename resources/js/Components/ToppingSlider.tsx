import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Topping {
  id: number;
  name: string;
  image: string;
  description: string;
  isVegetarian: boolean;
  isGlutenFree: boolean;
}

const toppings = [
  { id: 1, name: 'Banana', image: '/img/NoBackgroundPhotos/Banana.png', description: 'Fresh and sweet banana slices', isVegetarian: true, isGlutenFree: true },
  { id: 2, name: 'Biscoff Crumbs', image: '/img/NoBackgroundPhotos/BiscoffCrumbs.png', description: 'Crunchy crumbs of spiced Biscoff cookies', isVegetarian: true, isGlutenFree: false },
  { id: 3, name: 'Blueberry', image: '/img/NoBackgroundPhotos/Blueberry.png', description: 'Juicy and antioxidant-rich blueberries', isVegetarian: true, isGlutenFree: true },
  { id: 4, name: 'Blueberry Popping Boba', image: '/img/NoBackgroundPhotos/BlueberryPoppingBoba.png', description: 'Gelatin pearls filled with blueberry juice', isVegetarian: true, isGlutenFree: true },
  { id: 5, name: 'Brownies', image: '/img/NoBackgroundPhotos/Brownies.png', description: 'Soft and rich chocolate brownie pieces', isVegetarian: true, isGlutenFree: false },
  { id: 6, name: 'Caramel Crumble', image: '/img/NoBackgroundPhotos/CaramelCrumble.png', description: 'Crunchy caramel crumbs', isVegetarian: true, isGlutenFree: false },
  { id: 7, name: 'Chia Seeds', image: '/img/NoBackgroundPhotos/ChiaSeeds.png', description: 'Nutrient-rich chia seeds', isVegetarian: true, isGlutenFree: true },
  { id: 8, name: 'Chocolate Crumble', image: '/img/NoBackgroundPhotos/ChocolateCrumble.png', description: 'Crunchy chocolate crumbs', isVegetarian: true, isGlutenFree: false },
  { id: 9, name: 'Chocolate Freckles', image: '/img/NoBackgroundPhotos/ChocolateFreckles.png', description: 'Small colorful chocolate discs', isVegetarian: true, isGlutenFree: true },
  { id: 10, name: 'Chocolate Wafer', image: '/img/NoBackgroundPhotos/ChocolateWafer.png', description: 'Crispy chocolate wafers', isVegetarian: true, isGlutenFree: false },
  { id: 11, name: 'Coconut', image: '/img/NoBackgroundPhotos/Coconut.png', description: 'Sweet and crunchy coconut flakes', isVegetarian: true, isGlutenFree: true },
  { id: 12, name: 'Coke Bottles', image: '/img/NoBackgroundPhotos/CokeBottles.png', description: 'Cola-flavored gummy candies shaped like bottles', isVegetarian: false, isGlutenFree: true },
  { id: 13, name: 'Condensed Milk', image: '/img/NoBackgroundPhotos/CondensedMilk.png', description: 'Sweet and creamy condensed milk', isVegetarian: true, isGlutenFree: true },
  { id: 14, name: 'Cookies & Cream', image: '/img/NoBackgroundPhotos/CookiesCream.png', description: 'Chocolate cookie pieces in cream', isVegetarian: true, isGlutenFree: false },
  { id: 15, name: 'Granola', image: '/img/NoBackgroundPhotos/Granola.png', description: 'Crunchy mix of cereals, nuts, and dried fruits', isVegetarian: true, isGlutenFree: false },
  { id: 16, name: 'Gummy Bears', image: '/img/NoBackgroundPhotos/GummyBear.png', description: 'Colorful and fruity gummy bear candies', isVegetarian: false, isGlutenFree: true },
  { id: 17, name: 'Gummy Sharks', image: '/img/NoBackgroundPhotos/GummySharks.png', description: 'Shark-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
  { id: 18, name: 'Honeycomb', image: '/img/NoBackgroundPhotos/Honeycomb.png', description: 'Crunchy pieces of aerated caramel', isVegetarian: true, isGlutenFree: true },
  { id: 19, name: 'Jersey Caramel', image: '/img/NoBackgroundPhotos/JersleyCaramel.png', description: 'Creamy Jersey caramel', isVegetarian: true, isGlutenFree: true },
  { id: 20, name: 'Kinder Bueno', image: '/img/NoBackgroundPhotos/KinderBueno.png', description: 'Pieces of Kinder Bueno chocolate and hazelnut wafer', isVegetarian: true, isGlutenFree: false },
  { id: 21, name: 'KitKat', image: '/img/NoBackgroundPhotos/KitKat.png', description: 'Chocolate-covered KitKat wafer pieces', isVegetarian: true, isGlutenFree: false },
  { id: 22, name: 'Lemon Curd', image: '/img/NoBackgroundPhotos/LemonCurd.png', description: 'Thick and velvety lemon cream', isVegetarian: true, isGlutenFree: true },
  { id: 23, name: 'Lychee Popping Boba', image: '/img/NoBackgroundPhotos/LycheePoppingBoba.png', description: 'Gelatin pearls filled with lychee juice', isVegetarian: true, isGlutenFree: true },
  { id: 24, name: 'Lychees', image: '/img/NoBackgroundPhotos/Lychees.png', description: 'Sweet and juicy lychee pieces', isVegetarian: true, isGlutenFree: true },
  { id: 25, name: 'Maltesers', image: '/img/NoBackgroundPhotos/Maltesers.png', description: 'Chocolate-covered malt balls', isVegetarian: true, isGlutenFree: false },
  { id: 26, name: 'Mango Popping Boba', image: '/img/NoBackgroundPhotos/MangoPoppingBoba.png', description: 'Gelatin pearls filled with mango juice', isVegetarian: true, isGlutenFree: true },
  { id: 27, name: 'Marshmallows', image: '/img/NoBackgroundPhotos/Marshmallows.png', description: 'Soft marshmallows', isVegetarian: false, isGlutenFree: true },
  { id: 28, name: 'Milk Bottles', image: '/img/NoBackgroundPhotos/MilkBottles.png', description: 'Milk bottle-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
  { id: 29, name: 'Nerds', image: '/img/NoBackgroundPhotos/Nerds.png', description: 'Small, crunchy, and fruity candies', isVegetarian: true, isGlutenFree: true },
  { id: 30, name: 'Oreo', image: '/img/NoBackgroundPhotos/Oreo.png', description: 'Pieces of chocolate Oreo cookies', isVegetarian: true, isGlutenFree: false },
  { id: 31, name: 'Passionfruit Pulp', image: '/img/NoBackgroundPhotos/PassionfruitPulp.png', description: 'Fresh and tangy passionfruit pulp', isVegetarian: true, isGlutenFree: true },
  { id: 32, name: 'Pretzels', image: '/img/NoBackgroundPhotos/Pretzels.png', description: 'Salty and crunchy pretzel pieces', isVegetarian: true, isGlutenFree: false },
  { id: 33, name: 'Red Clouds', image: '/img/NoBackgroundPhotos/RedClouds.png', description: 'Red cloud-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
  { id: 34, name: 'Salted Cashews', image: '/img/NoBackgroundPhotos/SaltedCashews.png', description: 'Crunchy salted cashew nuts', isVegetarian: true, isGlutenFree: true },
  { id: 35, name: 'Skittles', image: '/img/NoBackgroundPhotos/Skittles.png', description: 'Colorful and fruity candies', isVegetarian: false, isGlutenFree: true },
  { id: 36, name: 'Snakes', image: '/img/NoBackgroundPhotos/Snakes.png', description: 'Snake-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
  { id: 37, name: 'Sour Gummy Worms', image: '/img/NoBackgroundPhotos/SourGummyWorms.png', description: 'Sour-flavored gummy worms', isVegetarian: false, isGlutenFree: true },
  { id: 38, name: 'Sprinkles', image: '/img/NoBackgroundPhotos/Sprinkles.png', description: 'Colorful sugar sprinkles', isVegetarian: true, isGlutenFree: true },
  { id: 39, name: 'Strawberries', image: '/img/NoBackgroundPhotos/Strawberry.png', description: 'Fresh and juicy strawberries', isVegetarian: true, isGlutenFree: true },
  { id: 40, name: 'Strawberry Popping Boba', image: '/img/NoBackgroundPhotos/StrawberryPoppingBoba.png', description: 'Gelatin pearls filled with strawberry juice', isVegetarian: true, isGlutenFree: true },
  { id: 41, name: 'Strawberry Rings', image: '/img/NoBackgroundPhotos/StrawberryRings.png', description: 'Ring-shaped strawberry gummy candies', isVegetarian: false, isGlutenFree: true },
  { id: 42, name: 'White Chocolate Buttons', image: '/img/NoBackgroundPhotos/WhiteChocolateButtons.png', description: 'White chocolate buttons', isVegetarian: true, isGlutenFree: true },
  { id: 43, name: 'White Freckles', image: '/img/NoBackgroundPhotos/WhiteFreckles.png', description: 'White chocolate discs with colorful sprinkles', isVegetarian: true, isGlutenFree: true }
];

const Toppings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedTopping, setSelectedTopping] = useState<Topping>(toppings[0]); // Set first topping as default
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const toppingsPerPage: number = 9;
  const totalPages: number = Math.ceil(toppings.length / toppingsPerPage);

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = toppings.map((topping) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = topping.image;
          img.onload = () => {
            setPreloadedImages((prev) => new Set([...prev, topping.image]));
            resolve(topping.image);
          };
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    };

    preloadImages();
  }, []);

  const getCurrentToppings = (): Topping[] => {
    const start = currentPage * toppingsPerPage;
    return toppings.slice(start, start + toppingsPerPage);
  };

  const handlePageChange = (newPage: number): void => {
    setCurrentPage(newPage);
  };

  const handleToppingSelect = (topping: Topping): void => {
    setSelectedTopping(topping);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLImageElement;
    target.src = '🍨';
    target.className = 'text-4xl text-center w-full';
  };

  return (
    <section className="py-20" id="toppings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 relative inline-block">
            OUR TOPPINGS
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            Create what makes you happy with our wide range of signature and seasonal toppings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Featured Topping */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTopping.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="h-full"
              >
                <div className="aspect-square relative mb-8">
                  <img
                    src={selectedTopping.image}
                    alt={selectedTopping.name}
                    className={`w-full h-full object-contain transition-opacity duration-300 ${
                      preloadedImages.has(selectedTopping.image) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={handleImageError}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {selectedTopping.name}
                    <div className="flex gap-2 mt-2">
                      {selectedTopping.isVegetarian && (
                        <span className="text-sm px-2 py-1 rounded-full border border-green-200 text-green-600">
                          Vegetarian
                        </span>
                      )}
                      {selectedTopping.isGlutenFree && (
                        <span className="text-sm px-2 py-1 rounded-full border border-blue-200 text-blue-600">
                          Gluten Free
                        </span>
                      )}
                    </div>
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedTopping.description}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Toppings Grid */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-3 gap-6">
              {getCurrentToppings().map((topping) => (
                <motion.div
                  key={topping.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedTopping?.id === topping.id 
                      ? 'ring-2 ring-pink-400 ring-offset-4 rounded-lg' 
                      : 'hover:ring-2 hover:ring-pink-200 hover:ring-offset-4 rounded-lg'
                  }`}
                  onClick={() => handleToppingSelect(topping)}
                >
                  <div className="aspect-square relative p-4">
                    <img
                      src={topping.image}
                      alt={topping.name}
                      className={`w-full h-full object-contain transition-opacity duration-300 ${
                        preloadedImages.has(topping.image) ? 'opacity-100' : 'opacity-0'
                      }`}
                      onError={handleImageError}
                    />
                  </div>
                  <div className="text-center pb-4">
                    <h3 className="text-sm font-medium text-gray-800">{topping.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 space-x-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="text-pink-500 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                <FiChevronLeft size={28} />
              </motion.button>
              <div className="flex space-x-3">
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => handlePageChange(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      currentPage === index ? 'bg-pink-500' : 'bg-pink-200'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="text-pink-500 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                <FiChevronRight size={28} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toppings;