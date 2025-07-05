import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/board", label: "Board" },
    { path: "/projects", label: "Projects" },
    { path: "/gallery", label: "Gallery" },
    { path: "/join", label: "Join" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-rose-600 dark:text-rose-400">
          RaC PPGIT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="hover:text-rose-600 dark:hover:text-rose-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/admin"
            className="text-xs text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition ml-4"
            title="Admin Panel"
          >
            ⚙️
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-gray-800 dark:text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-6 pb-4 space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-base hover:text-rose-600 dark:hover:text-rose-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setIsOpen(false)}
            className="block text-sm text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition mt-4"
          >
            ⚙️ Admin
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
