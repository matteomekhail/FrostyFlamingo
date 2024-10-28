import React, { useEffect, useRef, useState } from 'react';
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
    // Frutta fresca
    { id: 39, name: 'Strawberries', image: '/img/NoBackgroundPhotos/Strawberry.png', description: 'Fresh and juicy strawberries', isVegetarian: true, isGlutenFree: true },
    { id: 1, name: 'Banana', image: '/img/NoBackgroundPhotos/Banana.png', description: 'Fresh and sweet banana slices', isVegetarian: true, isGlutenFree: true },
    { id: 3, name: 'Blueberry', image: '/img/NoBackgroundPhotos/Blueberry.png', description: 'Juicy and antioxidant-rich blueberries', isVegetarian: true, isGlutenFree: true },
    { id: 24, name: 'Lychees', image: '/img/NoBackgroundPhotos/Lychees.png', description: 'Sweet and juicy lychee pieces', isVegetarian: true, isGlutenFree: true },
    
    // Frutta in forma di salsa/purea
    { id: 31, name: 'Passionfruit Pulp', image: '/img/NoBackgroundPhotos/PassionfruitPulp.png', description: 'Fresh and tangy passionfruit pulp', isVegetarian: true, isGlutenFree: true },
    { id: 22, name: 'Lemon Curd', image: '/img/NoBackgroundPhotos/LemonCurd.png', description: 'Thick and velvety lemon cream', isVegetarian: true, isGlutenFree: true },
    
    // Popping boba
    { id: 4, name: 'Blueberry Popping Boba', image: '/img/NoBackgroundPhotos/BlueberryPoppingBoba.png', description: 'Gelatin pearls filled with blueberry juice', isVegetarian: true, isGlutenFree: true },
    { id: 23, name: 'Lychee Popping Boba', image: '/img/NoBackgroundPhotos/LycheePoppingBoba.png', description: 'Gelatin pearls filled with lychee juice', isVegetarian: true, isGlutenFree: true },
    { id: 26, name: 'Mango Popping Boba', image: '/img/NoBackgroundPhotos/MangoPoppingBoba.png', description: 'Gelatin pearls filled with mango juice', isVegetarian: true, isGlutenFree: true },
    { id: 40, name: 'Strawberry Popping Boba', image: '/img/NoBackgroundPhotos/StrawberryPoppingBoba.png', description: 'Gelatin pearls filled with strawberry juice', isVegetarian: true, isGlutenFree: true },
    
    // Crumble e briciole
    { id: 2, name: 'Biscoff Crumbs', image: '/img/NoBackgroundPhotos/BiscoffCrumbs.png', description: 'Crunchy crumbs of spiced Biscoff cookies', isVegetarian: true, isGlutenFree: false },
    { id: 6, name: 'Caramel Crumble', image: '/img/NoBackgroundPhotos/CaramelCrumble.png', description: 'Crunchy caramel crumbs', isVegetarian: true, isGlutenFree: false },
    { id: 8, name: 'Chocolate Crumble', image: '/img/NoBackgroundPhotos/ChocolateCrumble.png', description: 'Crunchy chocolate crumbs', isVegetarian: true, isGlutenFree: false },
    { id: 14, name: 'Cookies & Cream', image: '/img/NoBackgroundPhotos/CookiesCream.png', description: 'Chocolate cookie pieces in cream', isVegetarian: true, isGlutenFree: false },
    { id: 30, name: 'Oreo', image: '/img/NoBackgroundPhotos/Oreo.png', description: 'Pieces of chocolate Oreo cookies', isVegetarian: true, isGlutenFree: false },
    
    // Cioccolato e wafer
    { id: 5, name: 'Brownies', image: '/img/NoBackgroundPhotos/Brownies.png', description: 'Soft and rich chocolate brownie pieces', isVegetarian: true, isGlutenFree: false },
    { id: 9, name: 'Chocolate Freckles', image: '/img/NoBackgroundPhotos/ChocolateFreckles.png', description: 'Small colorful chocolate discs', isVegetarian: true, isGlutenFree: true },
    { id: 10, name: 'Chocolate Wafer', image: '/img/NoBackgroundPhotos/ChocolateWafer.png', description: 'Crispy chocolate wafers', isVegetarian: true, isGlutenFree: false },
    { id: 20, name: 'Kinder Bueno', image: '/img/NoBackgroundPhotos/KinderBueno.png', description: 'Pieces of Kinder Bueno chocolate and hazelnut wafer', isVegetarian: true, isGlutenFree: false },
    { id: 21, name: 'KitKat', image: '/img/NoBackgroundPhotos/KitKat.png', description: 'Chocolate-covered KitKat wafer pieces', isVegetarian: true, isGlutenFree: false },
    { id: 42, name: 'White Chocolate Buttons', image: '/img/NoBackgroundPhotos/WhiteChocolateButtons.png', description: 'White chocolate buttons', isVegetarian: true, isGlutenFree: true },
    { id: 43, name: 'White Freckles', image: '/img/NoBackgroundPhotos/WhiteFreckles.png', description: 'White chocolate discs with colorful sprinkles', isVegetarian: true, isGlutenFree: true },
    
    // Caramelle e gomme
    { id: 12, name: 'Coke Bottles', image: '/img/NoBackgroundPhotos/CokeBottles.png', description: 'Cola-flavored gummy candies shaped like bottles', isVegetarian: false, isGlutenFree: true },
    { id: 16, name: 'Gummy Bears', image: '/img/NoBackgroundPhotos/GummyBear.png', description: 'Colorful and fruity gummy bear candies', isVegetarian: false, isGlutenFree: true },
    { id: 17, name: 'Gummy Sharks', image: '/img/NoBackgroundPhotos/GummySharks.png', description: 'Shark-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
    { id: 28, name: 'Milk Bottles', image: '/img/NoBackgroundPhotos/MilkBottles.png', description: 'Milk bottle-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
    { id: 29, name: 'Nerds', image: '/img/NoBackgroundPhotos/Nerds.png', description: 'Small, crunchy, and fruity candies', isVegetarian: true, isGlutenFree: true },
    { id: 33, name: 'Red Clouds', image: '/img/NoBackgroundPhotos/RedClouds.png', description: 'Red cloud-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
    { id: 35, name: 'Skittles', image: '/img/NoBackgroundPhotos/Skittles.png', description: 'Colorful and fruity candies', isVegetarian: false, isGlutenFree: true },
    { id: 36, name: 'Snakes', image: '/img/NoBackgroundPhotos/Snakes.png', description: 'Snake-shaped gummy candies', isVegetarian: false, isGlutenFree: true },
    { id: 37, name: 'Sour Gummy Worms', image: '/img/NoBackgroundPhotos/SourGummyWorms.png', description: 'Sour-flavored gummy worms', isVegetarian: false, isGlutenFree: true },
    { id: 41, name: 'Strawberry Rings', image: '/img/NoBackgroundPhotos/StrawberryRings.png', description: 'Ring-shaped strawberry gummy candies', isVegetarian: false, isGlutenFree: true },
    
    // Frutta secca e cereali
    { id: 34, name: 'Salted Cashews', image: '/img/NoBackgroundPhotos/SaltedCashews.png', description: 'Crunchy salted cashew nuts', isVegetarian: true, isGlutenFree: true },
    { id: 15, name: 'Granola', image: '/img/NoBackgroundPhotos/Granola.png', description: 'Crunchy mix of cereals, nuts, and dried fruits', isVegetarian: true, isGlutenFree: false },
    { id: 7, name: 'Chia Seeds', image: '/img/NoBackgroundPhotos/ChiaSeeds.png', description: 'Nutrient-rich chia seeds', isVegetarian: true, isGlutenFree: true },
    { id: 11, name: 'Coconut', image: '/img/NoBackgroundPhotos/Coconut.png', description: 'Sweet and crunchy coconut flakes', isVegetarian: true, isGlutenFree: true },
    
    // Altri topping
    { id: 13, name: 'Condensed Milk', image: '/img/NoBackgroundPhotos/CondensedMilk.png', description: 'Sweet and creamy condensed milk', isVegetarian: true, isGlutenFree: true },
    { id: 18, name: 'Honeycomb', image: '/img/NoBackgroundPhotos/Honeycomb.png', description: 'Crunchy pieces of aerated caramel', isVegetarian: true, isGlutenFree: true },
    { id: 19, name: 'Jersey Caramel', image: '/img/NoBackgroundPhotos/JersleyCaramel.png', description: 'Creamy Jersey caramel', isVegetarian: true, isGlutenFree: true },
    { id: 25, name: 'Maltesers', image: '/img/NoBackgroundPhotos/Maltesers.png', description: 'Chocolate-covered malt balls', isVegetarian: true, isGlutenFree: false },
    { id: 27, name: 'Marshmallows', image: '/img/NoBackgroundPhotos/Marshmallows.png', description: 'Soft marshmallows', isVegetarian: false, isGlutenFree: true },
    { id: 32, name: 'Pretzels', image: '/img/NoBackgroundPhotos/Pretzels.png', description: 'Salty and crunchy pretzel pieces', isVegetarian: true, isGlutenFree: false },
    { id: 38, name: 'Sprinkles', image: '/img/NoBackgroundPhotos/Sprinkles.png', description: 'Colorful sugar sprinkles', isVegetarian: true, isGlutenFree: true },
];

const Toppings: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [selectedTopping, setSelectedTopping] = useState<Topping>(toppings[0]);
    const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
    const [isImageHovered, setIsImageHovered] = useState(false);
    const toppingsPerPage: number = 9;
    const totalPages: number = Math.ceil(toppings.length / toppingsPerPage);
    const isMobileRef = useRef<boolean>(false);

    // Preload all images
    useEffect(() => {
        const preloadImage = (src: string) => {
            if (!preloadedImages.has(src)) {
                const img = new Image();
                img.src = src;
                setPreloadedImages(prev => new Set(prev).add(src));
            }
        };

        toppings.forEach(topping => {
            preloadImage(topping.image);
        });
    }, []);

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkMobile = () => {
            isMobileRef.current = window.innerWidth < 1024;
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getCurrentToppings = (): Topping[] => {
        const start = currentPage * toppingsPerPage;
        return toppings.slice(start, start + toppingsPerPage);
    };

    const handlePageChange = (newPage: number): void => {
        setCurrentPage(newPage);
    };

    const handleToppingInteraction = (topping: Topping, isClick: boolean = false): void => {
        if (isClick && isMobileRef.current) {
            setSelectedTopping(topping);
        } else if (!isMobileRef.current && !isClick) {
            setSelectedTopping(topping);
        }
    };

    return (
        <section id="toppings" className="py-20 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-300 rounded-full filter blur-3xl -z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 relative inline-block z-50">
                        OUR TOPPINGS
                        <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
                    </h2>
                    <p className="text-xl text-gray-600 mt-6 z-50">
                        Create what makes you happy with our wide range of signature and seasonal toppings
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-50">
                    {/* Featured Topping */}
                    <div className="lg:col-span-1 z-50">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTopping.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="rounded-2xl p-8 shadow-xl z-50"
                            >
                                <motion.div
                                    className="aspect-square relative mb-6 overflow-hidden rounded-xl cursor-zoom-in"
                                    onHoverStart={() => setIsImageHovered(true)}
                                    onHoverEnd={() => setIsImageHovered(false)}
                                >
                                    <motion.img
                                        src={selectedTopping.image}
                                        alt={selectedTopping.name}
                                        className="w-full h-full object-contain z-50"
                                        initial={{ scale: 1 }}
                                        animate={{
                                            scale: isImageHovered ? 1.2 : 1,
                                            transition: { duration: 0.3 }
                                        }}
                                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '🍨';
                                            target.className = 'text-8xl text-center w-full';
                                        }}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="z-50"
                                >
                                    <h3 className="text-3xl font-bold text-gray-800 mb-4 z-50">
                                        {selectedTopping.name}
                                        {selectedTopping.isVegetarian && (
                                            <span className="ml-2 text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full z-50">V</span>
                                        )}
                                        {selectedTopping.isGlutenFree && (
                                            <span className="ml-2 text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full z-50">GF</span>
                                        )}
                                    </h3>
                                    <p className="text-gray-600 text-lg z-50">{selectedTopping.description}</p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Rest of the component remains the same */}
                    <div className="lg:col-span-1 z-50">
                        <div className="grid grid-cols-3 gap-4 z-50">
                            {getCurrentToppings().map((topping) => (
                                <motion.div
                                    key={topping.id}
                                    onClick={() => handleToppingInteraction(topping, true)}
                                    onMouseEnter={() => handleToppingInteraction(topping)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`cursor-pointer rounded-xl overflow-hidden transition-all duration-300 z-50 ${selectedTopping?.id === topping.id
                                            ? 'ring-2 ring-pink-400 ring-offset-4'
                                            : 'hover:ring-2 hover:ring-pink-200 hover:ring-offset-4'
                                        }`}
                                >
                                    <div className="aspect-square relative p-4">
                                        <img
                                            src={topping.image}
                                            alt={topping.name}
                                            className="w-full h-full object-contain z-50"
                                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = '🍨';
                                                target.className = 'text-4xl text-center w-full';
                                            }}
                                        />
                                    </div>
                                    <div className="p-2 text-center bg-gradient-to-b from-transparent to-pink-50 z-50">
                                        <h3 className="text-sm font-medium text-gray-800 z-50">{topping.name}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center mt-8 space-x-4 z-50">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                                disabled={currentPage === 0}
                                className="p-2 rounded-full bg-pink-100 text-pink-600 disabled:opacity-50 disabled:cursor-not-allowed z-50"
                            >
                                <FiChevronLeft size={24} className="z-50" />
                            </motion.button>
                            <div className="flex space-x-2 z-50">
                                {[...Array(totalPages)].map((_, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => handlePageChange(index)}
                                        className={`w-3 h-3 rounded-full transition-colors z-50 ${currentPage === index ? 'bg-pink-500' : 'bg-pink-200 hover:bg-pink-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
                                disabled={currentPage === totalPages - 1}
                                className="p-2 rounded-full bg-pink-100 text-pink-600 disabled:opacity-50 disabled:cursor-not-allowed z-50"
                            >
                                <FiChevronRight size={24} className="z-50" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toppings;
