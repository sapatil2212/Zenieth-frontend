import React, { useState, useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";
import { FaLocationDot, FaPhoneVolume, FaHeart } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../assets/logo-white.png"; // Change this to a dark logo as needed for dark mode

import image1 from "../assets/bandra/1.jpg";
import image2 from "../assets/bkc/1.jpg";
import image3 from "../assets/ghansoli/1.png";
import image4 from "../assets/worli/1.png";

const Footer = () => {
  const { darkMode } = useDarkMode();
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  // Handle scroll to show/hide the "scroll to top" icon
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIcon(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-loulou-950"
        } w-full m-auto lg:px-20 px-10 py-10 grid lg:grid-cols-3 grid-cols-1 gap-10`} // Reduced padding from 20 to 10
      >
        {/* About Us Section */}
        <div className="flex flex-col items-start gap-5">
          <img
            src={logo}
            className="h-10 w-auto mb-6" // Adjusted bottom margin
            alt="Zenith Hospitality Logo"
          />
          <h1 className="text-white text-lg font-semibold">About Us</h1>{" "}
          {/* Font size changed */}
          <p className="text-slate-200 text-sm">
            {" "}
            At Zenith Hospitality Services, we are dedicated to elevating your
            hospitality experience. Our commitment to excellence ensures that
            every guest feels valued and pampered.We are not just a place to
            stay; we are your home away from home, dedicated to crafting
            unforgettable experiences tailored to your individual needs.
          </p>
          <div className="flex items-center gap-5 mt-4">
            <h1 className="text-white text-sm font-bold">Follow Us:</h1>{" "}
            {/* Font size changed */}
            <div className="p-3 bg-white rounded-full hover:bg-blue-400 cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <FaFacebook className="text-blue-600 hover:text-white" />
              </a>
            </div>
            <div className="p-3 bg-white rounded-full hover:bg-pink-500 cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <FaInstagram className="text-pink-600 hover:text-white" />
              </a>
            </div>
            <div className="p-3 bg-white rounded-full hover:bg-blue-400 cursor-pointer transform hover:scale-110 transition-transform duration-300">
              <a href="https://www.twitter.com/" aria-label="Twitter">
                <FaTwitter className="text-blue-500 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col justify-start items-start gap-5">
          {" "}
          {/* Align items consistently */}
          <h1 className="text-white text-lg font-semibold">Contact Us </h1>{" "}
          {/* Font size changed */}
          <div className="flex justify-start items-start gap-3">
            <FaLocationDot className="text-white size-12" />
            <p className="text-slate-200 text-sm">
              {" "}
              {/* Font size changed */}
              Prithvi Emperor Building 9th floor 902 New Prabhadevi Road, near
              Prabhadevi Temple, Dadar West, Prabhadevi, Mumbai, Maharashtra
              400025
            </p>
          </div>
          <div className="flex justify-start items-start gap-1">
            <FaPhoneVolume className="text-white size-5" />
            <h1 className="text-slate-200 font-semibold text-sm">
              {" "}
              {/* Font size changed */}
              <a href="tel:+919004095581" className="hover:text-loulou-800">
                +91 90040 95581
              </a>{" "}
              /
              <a href="tel:+919146855021" className="hover:text-loulou-800">
                +91 91468 55021
              </a>
            </h1>
          </div>
          <hr className="border-t-1 border-white w-full my-4" />
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="flex justify-start items-start gap-3">
              <FaLocationDot className="text-white size-12" />
              <p className="text-slate-200 text-sm">
                {" "}
                {/* Font size changed */}
                301 Sindhuratna CHS, 3rd Floor Madhusudan Kalekar Road, Kala
                Nagar Jagat Vidya Marg, Bandra East Mumbai 400051 Opposite
                Gurunanak Hospital
              </p>
            </div>
            <div className="flex justify-start items-start gap-3">
              <FaPhoneVolume className="text-white size-5" />
              <h1 className="text-slate-200 font-semibold text-sm">
                {" "}
                {/* Font size changed */}
                <a href="tel:+919326232806" className="hover:text-loulou-800">
                  +91 93262 32806
                </a>{" "}
                /
                <a href="tel:+917400057303" className="hover:text-loulou-800">
                  +91 74000 57303
                </a>
              </h1>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-lg font-semibold">Quick Links</h1>{" "}
          <ul className="space-y-2 text-sm">
            {" "}
            <li>
              <a href="#" className="text-white hover:text-purple-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-500">
                Apartments
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-500">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex flex-col justify-end h-full">
            {" "}
            {/* Flex container for alignment */}
            <div className="grid lg:grid-cols-2 grid-cols-2 gap-2">
              {" "}
              {/* Reduced gap to 2 */}
              <img
                src={image1}
                alt="Property"
                className="rounded-xl w-[200px] h-[150px] object-cover"
              />
              <img
                src={image3}
                alt="Property"
                className="rounded-xl w-[200px] h-[150px] object-cover"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollIcon && (
        <div className="fixed right-6 lg:bottom-12 bottom-6 space-y-4">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-full hover:bg-gradient-to-r hover:from-purple-700 hover:via-pink-700 hover:to-red-700 cursor-pointer shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110">
            <Link to="hero" spy={true} offset={-100} smooth={true}>
              <FaArrowUp className="text-white text-2xl animate-bounce" />
            </Link>
          </div>
        </div>
      )}

      {/* Footer Bottom */}
      <div className="w-full py-5 bg-gray-900 text-gray-400 lg:px-20 px-10 text-center text-sm">
        {" "}
        {/* Font size changed */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p>
            Copyright &copy; Zenith Hospitality Services. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-red-600" /> by{" "}
            <a
              href="https://www.digiworldinfotech.in/"
              className="text-gray-400 hover:underline"
            >
              Digiworld Infotech
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
``;
