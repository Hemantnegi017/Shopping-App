const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              ShoppingApp
            </h2>

            <p className="mt-3 text-gray-400">
              Your one-stop destination for quality products at
              affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="/" className="hover:text-white">
                Home
              </a>

              <a href="/about" className="hover:text-white">
                About Us
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Support
            </h3>

            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 ShoppingApp. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;