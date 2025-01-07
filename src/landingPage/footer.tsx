const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">About Elimu Yetu</h4>
            <p className="text-sm text-gray-400">
              Elimu Yetu is dedicated to connecting students to their dream universities,
              empowering them with the tools and knowledge they need for a brighter future.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:info@elimuyetu.co.ke" className="text-blue-400 hover:underline">info@elimuyetu.co.ke</a></li>
              <li>Twitter: <a href="https://twitter.com/elimukenya" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">@elimukenya</a></li>
              <li>Facebook: <a href="https://facebook.com/ElimuYetu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Elimu Yetu</a></li>
              <li>Postal Address: P.O. Box 2704 Eldoret, Kenya, Code 30100</li>
              <li>Tel: +254 786 811 833</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#about" className="text-blue-400 hover:underline">About Us</a></li>
              <li><a href="#features" className="text-blue-400 hover:underline">Key Features</a></li>
              <li><a href="#services" className="text-blue-400 hover:underline">Our Services</a></li>
              <li><a href="#contact" className="text-blue-400 hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 Elimu Yetu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;