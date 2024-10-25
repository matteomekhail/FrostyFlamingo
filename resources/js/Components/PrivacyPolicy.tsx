import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information Collection</h2>
              <p>Our website is for informational purposes only. We do not collect, store, or process any personal information from visitors.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Cookies and Analytics</h2>
              <p>We may use basic analytics tools to understand website traffic patterns. These tools collect anonymous data such as:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Pages visited</li>
                <li>Time spent on the website</li>
                <li>Browser type and device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Third-Party Links</h2>
              <p>Our website may contain links to social media platforms. These third-party sites have their own privacy policies, which we encourage you to review.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Contact Information</h2>
              <p>For any privacy-related questions, please contact us at:</p>
              <p className="mt-2">
                <a href="mailto:info@frostyflamingo.com.au" className="text-pink-500 hover:text-pink-600">
                  info@frostyflamingo.com.au
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Updates to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page.</p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            Last revised: October 2024
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;