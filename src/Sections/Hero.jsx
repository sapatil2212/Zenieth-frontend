import React, { useEffect, useState } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import heroimg from "../assets/gradient.png";
import lightBackground from "../assets/lightbg.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/heroimg.png";
import image3 from "../assets/image3.jpg";
import heartEmoji from "../assets/emoji2.png";
import heartEmoji1 from "../assets/emoji3.png";
import smileyEmoji from "../assets/emoji1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const images = [image1, image2, image3];
  const contents = [
    {
      title: "Crafting Unforgettable Hospitality Experiences",
      description:
        "At Zenith Hospitality Services, we bring luxury, comfort, and attention to every detail of your stay. Whether you're planning a grand event or looking for a serene retreat, our expert team ensures every moment is tailored to perfection.",
    },
    {
      title: "Uncompromised Luxury, Unforgettable Moments",
      description:
        "Discover the perfect blend of luxury and convenience with Zenith Hospitality Services. From elegant accommodations to personalized service, we ensure your stay is nothing short of extraordinary. Experience a world where your comfort is our mission.",
    },
    {
      title: "Tailored Experiences, Timeless Hospitality",
      description:
        "Zenith Hospitality Services is committed to delivering a seamless experience tailored just for you. From stunning venues to exquisite dining, we focus on the finer details to create unforgettable memories. Trust us to make your stay remarkable.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 700);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      id="hero"
      className={`${
        darkMode ? "dark bg-gray-900" : "light bg-white"
      } relative w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-32 lg:pb-24`}
      style={{
        backgroundImage: darkMode
          ? `url(${heroimg})`
          : `url(${lightBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 z-10 relative">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black dark:text-white font-semibold leading-tight lg:leading-[1.2] transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {contents[currentImageIndex].title}
          </h1>
          <p
            className={`text-black dark:text-gray-200 mt-4 text-sm sm:text-base lg:text-lg transition-opacity duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {contents[currentImageIndex].description}
          </p>
          <div className="mt-8 lg:mt-10">
            <Link
              to="/contact" // Use Link component for internal navigation
              className="inline-block rounded-md bg-loulou-950 dark:bg-loulou-500 px-4 py-3 text-sm font-semibold text-white dark:text-loulou-950 dark:hover:text-white shadow-sm dark:shadow-lg hover:bg-loulou-700 dark:hover:bg-loulou-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-loulou-950 transition-colors duration-300"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative overflow-hidden rounded-2xl mt-8 lg:mt-0 dark:shadow-2xl dark:border dark:border-gray-400">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                zIndex: index === currentImageIndex ? 1 : 0,
              }}
            >
              <img
                src={image}
                alt={`Sliding image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Emojis */}
        <img
          src={heartEmoji}
          alt="Heart Emoji"
          className="absolute bottom-[40%] right-[-10%] w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] z-20 animate-bounce"
        />
        <img
          src={heartEmoji1}
          alt="Smiley Emoji"
          className="absolute top-[5%] right-[100%] w-[50px] h-[50px] lg:w-[200px] lg:h-[200px] z-20 animate-bounce"
        />
        <img
          src={smileyEmoji}
          alt="Smiley Emoji"
          className="absolute top-[80%] right-[30%] w-[50px] h-[50px] lg:w-[200px] lg:h-[200px] z-20 animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;
