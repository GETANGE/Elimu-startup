import HeroSection from "./herosection";
import About from "./About";
import Services from "./services";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-800">Brand Name</div>
            <nav className="hidden md:flex space-x-6">
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
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Build Your Future with Us
          </h1>
          <p className="mt-4 text-lg">
            A platform designed to help you achieve your dreams.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="px-6 py-3 bg-white text-blue-800 rounded-md text-lg font-medium hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <HeroSection/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
