import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiClock, FiMapPin, FiInstagram, FiFacebook } from 'react-icons/fi';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-gradient-to-br from-pink-900 via-pink-800 to-purple-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.img 
              src="/img/FrostyLogo2.png"
              alt="Frosty Flamingo"
              className="h-16 w-auto brightness-200"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-pink-100 text-sm">
              Serving happiness one scoop at a time with our delicious frozen yogurt and açaí bowls.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#E1306C' }}
                className="text-pink-200 hover:text-white transition-colors"
              >
                <FiInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#4267B2' }}
                className="text-pink-200 hover:text-white transition-colors"
              >
                <FiFacebook size={24} />
              </motion.a>
            </div>
          </div>

          {/* Hours Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FiClock className="text-pink-300" />
              Opening Hours
            </h3>
            <div className="space-y-3">
              <p className="text-pink-200">
                Open Daily
                <span className="block text-white font-medium">9:00 AM - 9:00 PM</span>
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FiMapPin className="text-pink-300" />
              Find Us
            </h3>
            <address className="text-pink-200 not-italic">
              351 Oran Park Dr<br />
              Oran Park, NSW<br />
              (Oran Park Podium)
            </address>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FiMail className="text-pink-300" />
              Contact
            </h3>
            <a 
              href="mailto:info@frostyflamingo.com.au"
              className="text-pink-200 hover:text-pink-300 transition-colors"
            >
              info@frostyflamingo.com.au
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-pink-200 text-sm text-center md:text-left">
              © {currentYear} Frosty Flamingo. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-pink-200">
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="/privacy" className="hover:text-pink-300 transition-colors">
                  Privacy Policy
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <a href="/terms" className="hover:text-pink-300 transition-colors">
                  Terms of Service
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;