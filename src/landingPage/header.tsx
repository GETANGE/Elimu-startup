import { useState } from 'react';
import HeroSection from "./herosection";
import About from "./About";
import Services from "./services";
import Footer from "./footer";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-800">Elimu Yetu</div>
            {/* Desktop Navigation */}
            <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <a href="#features" className="text-gray-700 hover:text-blue-800">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-800">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800">
                Contact
              </a>
            </nav>
            <div className="hidden md:flex">
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-md"
              >
                Get Started
              </a>
            </div>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="space-y-4 py-4 px-6">
              <a href="#features" className="text-gray-700 hover:text-blue-800 block">
                Features
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 block">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 block">
                Contact
              </a>
              <a
                href="#"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-md block text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Section Components */}
      <HeroSection />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default LandingPage;
