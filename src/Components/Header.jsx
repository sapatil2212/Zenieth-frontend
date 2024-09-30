import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Logo from "../assets/logo.png";
import darkLogo from "../assets/logo-white.png";
import { useDarkMode } from "../Components/DarkModeContext";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Apartments", href: "/apartments" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ's", href: "/faqs" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled
            ? "mt-4 rounded-full shadow-lg w-11/12 max-w-5xl"
            : "mt-0 rounded-none shadow-lg w-full"
        } ${
          darkMode
            ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-r from-loulou-50 via-white to-loulou-50"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                {" "}
                <img
                  className="h-8 w-auto"
                  src={darkMode ? darkLogo : Logo}
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-200"
                    } transition duration-150 ease-in-out`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 text-black"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                className={`${
                  darkMode
                    ? "bg-loulou-900 hover:bg-loulou-700"
                    : "bg-loulou-900 hover:bg-loulou-700"
                } text-white font-semibold py-2 px-4 rounded-full transition duration-150 ease-in-out`}
                onClick={() => window.scrollTo(0, document.body.scrollHeight)} // **Added scroll-to functionality**
              >
                Contact Us !
              </button>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 text-black"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  darkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className={`fixed inset-0 ${
                darkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between p-4">
                <Link to="/" className="flex-shrink-0">
                  {" "}
                  {/* **Updated to Link** */}
                  <img
                    className="h-8 w-auto"
                    src={darkMode ? darkLogo : Logo}
                    alt="Logo"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex items-center justify-center p-2 rounded-md ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-gray-900"
                  } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
                >
                  <span className="sr-only">Close main menu</span>
                  <X className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {menuItems.map((item) => (
                  <Link // **Updated to Link for routing**
                    key={item.name}
                    to={item.href} // **Updated to use to instead of href**
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
