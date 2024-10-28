import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div>
            <div className="relative min-h-[calc(100vh-5rem)] bg-gradient-to-br from-pink-100 via-white to-pink-50 overflow-hidden flex flex-col justify-between pt-4">
                {/* Main Content */}
                <div className="flex-1 flex items-center z-50">
                    {/* Sparkles */}
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="sparkles absolute pointer-events-none"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        >
                            <svg
                                className="w-4 h-4 text-pink-300"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    ))}

                    {/* Decorative Elements */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-yellow-200/30 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-200/30 blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [90, 0, 90],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8 z-50"
                            >
                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-block z-50"
                                    >
                                        <span className="text-lg font-medium text-pink-500 bg-pink-50 px-4 py-2 rounded-full z-50">
                                            Now Open in Oran Park Podium 🌴
                                        </span>
                                    </motion.div>

                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-6xl md:text-7xl font-bold text-gray-800 z-50"
                                    >
                                        Happiness
                                        <span className="block text-pink-500 z-50">in Every Swirl</span>
                                    </motion.h1>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-xl text-gray-600 max-w-lg z-50"
                                    >
                                        Indulge in our artisanal frozen yogurt and açaí, crafted with premium ingredients and topped with your favorite treats.
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <motion.a
                                        href="#menu"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                                    >
                                        Explore Menu
                                    </motion.a>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-4 px-8 py-4"
                                    >
                                        <div className="flex -space-x-4">
                                            <div className="w-12 h-12 rounded-full border-2 border-white bg-yellow-100 flex items-center justify-center text-2xl">
                                                🍓
                                            </div>
                                            <div className="w-12 h-12 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center text-2xl">
                                                🫐
                                            </div>
                                            <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-2xl">
                                                🥭
                                            </div>
                                        </div>
                                        <div className="text-gray-600">
                                            <span className="block font-semibold">Fresh Toppings</span>
                                            <span className="text-sm">Daily prepared</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Image Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative flex items-center justify-center"
                            >
                                <div className="relative w-full max-w-lg mx-auto">
                                    {/* Main Image */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="relative aspect-square"
                                    >
                                        <img
                                            src="/img/Hero.jpg"
                                            alt="Frozen Yogurt"
                                            className="w-full h-full object-cover rounded-full shadow-2xl"
                                        />
                                    </motion.div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="absolute inset-0"
                                    >
                                        <motion.div
                                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg"
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <span className="text-4xl">🍨</span>
                                        </motion.div>
                                        <motion.div
                                            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                                            animate={{
                                                x: [0, 10, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <span className="text-4xl">🫐</span>
                                        </motion.div>
                                        <motion.div
                                            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-full shadow-lg"
                                            animate={{
                                                y: [0, 10, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <span className="text-4xl">🍓</span>
                                        </motion.div>
                                        <motion.div
                                            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg"
                                            animate={{
                                                x: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <span className="text-4xl">🥭</span>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator - Now in a semi-transparent container */}
                <motion.div
                    className="w-full py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        className="flex flex-col items-center"
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <svg
                            className="w-6 h-6 text-pink-500"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                        <span className="text-sm font-medium text-pink-500 mt-1">
                            {isMobile ? "Swipe up" : "Scroll to explore"}
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
