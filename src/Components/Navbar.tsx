// src/components/Navbar.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Offerings', path: '/offerings' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const handleBookNow = () => {
    navigate('/contact');
    setIsOpen(false); // close mobile menu
  };

  const handleLinkClick = () => {
    setIsOpen(false); // close mobile menu when a link is clicked
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/images/theabroadlink.png" alt="Abroad Link Logo" className="h-20" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-3 py-2 rounded text-gray-700 hover:bg-red-700 hover:text-white text-sm font-medium transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            onClick={handleBookNow}
            className="border-2 text-blue-900 hover:bg-red-700 hover:text-white text-sm px-4 py-1 rounded transition-all"
          >
            Book now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleLinkClick}
                className="px-3 py-2 rounded text-gray-700 hover:bg-red-700 hover:text-white text-sm font-medium transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleBookNow}
              className="mt-2 border border-blue-900 text-blue-900 hover:bg-red-700 hover:text-white text-sm px-4 py-1 rounded transition-all"
            >
              Book now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
