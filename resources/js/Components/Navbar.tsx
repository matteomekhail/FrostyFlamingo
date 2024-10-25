import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Menu', href: '#menu' },
    { name: 'Toppings', href: '#toppings' },
    { name: 'About', href: '#about' },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/img/FrostyLogo2.png" 
                alt="Frosty Flamingo" 
                className="h-14 w-auto"
              />
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-5 py-2 text-base font-medium rounded-full transition-colors text-gray-700 hover:text-pink-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-current transform origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-pink-500 text-white shadow-lg"
            >
              <div className="text-2xl">
                {isOpen ? <FiX /> : <FiMenu />}
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col items-center space-y-8 p-8"
              >
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="text-white text-3xl font-bold hover:text-pink-200 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: index * 0.1 } 
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: 20,
                      transition: { delay: (menuItems.length - index - 1) * 0.1 } 
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                </motion.div>
                <motion.div
                  className="absolute bottom-20 right-10 text-8xl opacity-20"
                  animate={{ 
                    rotate: [0, -10, 0],
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  🦩
                </motion.div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;