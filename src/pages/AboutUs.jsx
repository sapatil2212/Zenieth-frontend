import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import heroimg from "../assets/gradient.png";
import lightBackground from "../assets/aboutus.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { SiZebpay } from "react-icons/si";
import Mission from "../Sections/Mission";
import Amenities from "../sections/Amenities";

import image1 from "../assets/bandra/1.jpg";
import image2 from "../assets/bandra/2.jpg";
import image3 from "../assets/bandra/3.jpg";
import image4 from "../assets/bandra/4.jpg";

import image5 from "../assets/bkc/1.jpg";
import image6 from "../assets/bkc/2.jpg";
import image7 from "../assets/bkc/3.jpg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div
        className="relative overflow-hidden bg-white dark:bg-gray-900 pb-12"
        style={{
          backgroundImage: darkMode
            ? `url(${heroimg})`
            : `url(${lightBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pb-80 pt-24 sm:pb-40 sm:pt-8 lg:pb-48 lg:pt-60">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1
                style={{ fontSize: "3rem" }}
                className="font-bold tracking-tight text-gray-900 dark:text-gray-100 text-4xl sm:text-5xl lg:text-6xl text-center md:text-left mt-16 md:mt-0"
              >
                About Us @ Zenith Hospitality Services
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-500 dark:text-gray-300 text-center md:text-left">
                Welcome to Zenith Hospitality Services, where exceptional
                hospitality meets personalized service. We are not just a place
                to stay; we are your home away from home, dedicated to crafting
                unforgettable experiences tailored to your individual needs.
                With a profound commitment to quality and a passion for service,
                we have become a benchmark in the hospitality industry, ensuring
                every guest leaves with cherished memories.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* Image columns */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={image1}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image2}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image3}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image4}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image7}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image5}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={image6}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mission />
      <Amenities />
    </>
  );
};

export default AboutUs;
