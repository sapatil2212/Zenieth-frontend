import React from "react";
import Heroimg from "../assets/heroimg.png";
import { Wifi, AirVent, Bed, Cigarette } from "lucide-react";
import { useDarkMode } from "../Components/DarkModeContext";

export default function Welcome() {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`${
        darkMode ? "dark bg-black" : "light bg-loulou-100"
      } pb-16 py-8 relative`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 py-8 dark:text-white">
          Welcome to{" "}
          <span className="text-loulou-600 dark:text-white">
            Zenieth Hospitality Services
          </span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={Heroimg}
              alt="Zenieth Hotel Room"
              className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between h-full dark:text-gray-300">
            <div className="space-y-7">
              <p className="text-sm">
                Zenieth Hotels & Resorts, the perfect destination for the
                discerning traveler seeking a luxurious yet relaxing getaway.
                With five resorts nestled in the majestic hills of Lonavala,
                each offering its own unique style and atmosphere, you're sure
                to find your ideal escape.
              </p>
              <p className="text-sm">
                Indulge in a variety of amenities, from outdoor pools to indoor
                SPA that pamper you with rejuvenating treatments. Enjoy
                succulent local dishes as well as international fare at our
                restaurants, or dive straight into nature's untouched beauty
                with exciting mountain adventures and enriching cultural
                explorations nearby.
              </p>
              <p className="text-sm">
                In short, Zenieth Hotels & Resorts offers a truly one-of-a-kind
                vacation experience that turns any stay into an unforgettable
                journey.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <AmenityIcon Icon={Wifi} label="UNLIMITED WIFI" />
              <AmenityIcon Icon={AirVent} label="AIR CONDITIONING" />
              <AmenityIcon Icon={Bed} label="COMFORTABLE BEDS" />
              <AmenityIcon Icon={Cigarette} label="NON-SMOKING ROOM" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AmenityIcon({ Icon, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white rounded-xl p-3 shadow-md transition-transform duration-300 transform hover:scale-105 w-full h-full flex flex-col items-center justify-center dark:bg-gray-800">
        <Icon className="w-6 h-6 text-loulou-600 mb-1 dark:text-gray-400" />
        <span className="text-xs font-medium text-gray-800 mt-1 dark:text-gray-400">
          {label}
        </span>
      </div>
    </div>
  );
}
