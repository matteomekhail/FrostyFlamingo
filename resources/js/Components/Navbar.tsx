import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-pink-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img 
                src="/img/FrostyLogo2.png" 
                alt="Frosty Flamingo" 
                className="h-12 w-auto cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Flavours</a>
            <a href="#toppings" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">Toppings</a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">About Us</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-pink-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-300 rotate-0" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile menu with smooth transition */}
      <div 
        className={`fixed inset-0 bg-pink-50 z-40 md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className={`flex flex-col items-center justify-center h-full transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a 
            href="#" 
            className="text-3xl font-medium text-pink-600 hover:text-pink-700 transition-all duration-200 transform hover:scale-110 my-4"
            onClick={() => setIsOpen(false)}
          >
            Flavours
          </a>
          <a 
            href="#" 
            className="text-3xl font-medium text-pink-600 hover:text-pink-700 transition-all duration-200 transform hover:scale-110 my-4"
            onClick={() => setIsOpen(false)}
          >
            Toppings
          </a>
          <a 
            href="#" 
            className="text-3xl font-medium text-pink-600 hover:text-pink-700 transition-all duration-200 transform hover:scale-110 my-4"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}
