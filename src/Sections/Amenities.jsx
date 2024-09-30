import React from "react";

import {
  Wifi,
  Bed,
  Utensils,
  Sofa,
  Users,
  Cctv,
  AirVent,
  MapPinHouse,
} from "lucide-react";
import { useDarkMode } from "../Components/DarkModeContext";

export default function Amenities() {
  const amenitiesData = [
    {
      icon: <Wifi />,
      title: "Free Wi-Fi",
      text: "Enjoy complimentary high-speed internet access in all areas.",
    },
    {
      icon: <Cctv />,
      title: "24/7 Security",
      text: "Round-the-clock security ensures a safe and secure environment.",
    },
    {
      icon: <Utensils />,
      title: "Free Breakfast",
      text: "Start your day with a delicious complimentary breakfast.",
    },
    {
      icon: <AirVent />,
      title: "AC Rooms",
      text: "All rooms are air-conditioned for your comfort.",
    },
    {
      icon: <Users />,
      title: "Spacious Living ",
      text: "Generously sized rooms offering ample space to relax and unwind.",
    },
    {
      icon: <Sofa />,
      title: "Modern Furniture",
      text: "Stylish and contemporary furnishings in every room.",
    },
    {
      icon: <MapPinHouse />,
      title: "Prime Locations",
      text: "Conveniently located in the heart of Mumbai’s business hubs.",
    },
    {
      icon: <MapPinHouse />,
      title: "House Keeping",
      text: "Regular housekeeping keeps your space clean and refreshed daily.",
    },
  ];
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "dark bg-gray-900 " : "light bg-white "
      } pb-12 py-12 "`}
    >
      <div className="container w-full max-w-6xl mx-auto  px-4 sm:px-2 lg:px-8 ">
        <h2 className="text-4xl font-bold text-center mb-8  dark:text-white">
          Our Best{" "}
          <span className="text-loulou-600  dark:text-white">Amenities</span>
        </h2>
        <p className="text-center dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          At Zenith Hospitality, we strive to offer more than just a place to
          stay—we provide an experience that ensures comfort, convenience, and
          luxury. Our service apartments are equipped with premium amenities
          designed to cater to the needs of today’s corporate travelers, making
          every stay enjoyable and stress-free.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 dark:text-gray-400">
          {amenitiesData.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 shadow-md transition-transform duration-300 transform hover:scale-105 w-full h-full flex flex-col items-center justify-center dark:bg-gray-800 dark:hover:shadow-lg dark:hover:shadow-black"
            >
              <div className="text-loulou-600 mb-4 dark:text-gray-200">
                {amenity.icon}
              </div>
              <h3 className="mb-2 text-center font-semibold dark:text-gray-400">
                {amenity.title}
              </h3>
              <p className="mb-2 text-center text-xs dark:text-gray-400">
                {amenity.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
