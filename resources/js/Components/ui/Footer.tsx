import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Frosty Flamingo</h3>
            <p className="text-gray-400">Serving happiness one scoop at a time</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <p className="text-gray-400">Mon-Thu: 11am-9pm</p>
            <p className="text-gray-400">Fri-Sat: 11am-10pm</p>
            <p className="text-gray-400">Sun: 12pm-8pm</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">123 Beach Street</p>
            <p className="text-gray-400">Miami, FL 33139</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-500">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-pink-500">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-pink-500">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2023 Frosty Flamingo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;