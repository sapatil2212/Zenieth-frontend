import React, { useEffect } from "react";
import { useDarkMode } from "../Components/DarkModeContext";
import aboutimg from "../assets/aboutimg.png";
import AOS, { init } from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  return (
    <section
      id="about"
      className={`${
        darkMode ? "dark bg-gray-900" : "light bg-white"
      } w-full m-auto lg:px-40 px-10 pt-24 pb-20 grid lg:grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-5`}
    >
      <div>
        <img
          data-aos="zoom-in"
          src={aboutimg}
          alt="about image"
          className="rounded-2xl lg:h-[500px] shadow-lg"
        />
      </div>

      <div className="flex flex-col justify-center items-start gap-4">
        <h1
          data-aos="zoom-right"
          className="text-loulou-900 text-[40px] font-semibold leading-10 dark:text-white"
        >
          Who we are
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-[20px] leading-10 dark:text-white"
        >
          At Zenith Hospitality Services, we are dedicated to elevating your
          hospitality experience. With years of industry expertise, we
          specialize in providing comprehensive solutions that cater to both
          leisure and business travelers. Our commitment to excellence drives us
          to create unforgettable moments, ensuring that every guest feels
          valued and pampered.
        </h1>
      </div>
    </section>
  );
};

export default About;
