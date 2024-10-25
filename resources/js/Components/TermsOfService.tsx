import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Website Usage</h2>
              <p>This website is for informational purposes only. By accessing Frosty Flamingo's website, you agree to these terms of service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Intellectual Property</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>All content on this website is the property of Frosty Flamingo</li>
                <li>You may not use our content without explicit permission</li>
                <li>Our logo, brand name, and images are protected by copyright</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
              <p>While we strive to keep our website information accurate:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Product availability and prices may vary in store</li>
                <li>Images are for illustrative purposes only</li>
                <li>Menu items and prices are subject to change without notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Health Information</h2>
              <p>For the most accurate allergen and nutritional information:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Please visit our store in person</li>
                <li>Speak with our staff about any dietary requirements</li>
                <li>Information on the website may not reflect recent changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contact Information</h2>
              <p>For any questions about these terms, please contact us at:</p>
              <p className="mt-2">
                <a href="mailto:info@frostyflamingo.com.au" className="text-pink-500 hover:text-pink-600">
                  info@frostyflamingo.com.au
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            Last updated: October 2024
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;