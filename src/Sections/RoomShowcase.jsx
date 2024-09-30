import React, { useState, useEffect } from "react";
import room1 from "../assets/showcase1.png";
import room2 from "../assets/showcase2.png";
import room3 from "../assets/showcase3.png";
import Bkc1 from "../assets/bkc/7.jpg";
import Bkc2 from "../assets/bkc/6.jpg";

import Bandra3 from "../assets/bandra/3.jpg";
import Bandra4 from "../assets/bandra/4.jpg";
import Worli1 from "../assets/worli/1.png";
import Worli2 from "../assets/worli/2.png";

import { useDarkMode } from "../Components/DarkModeContext";

const resorts = [
  {
    name: "Meritas Seawind Beach Resort",
    location: "Shrivardhan",
    image: room1,
    badge: "NEW",
  },
  {
    name: "Meritas Picaddle Resort",
    location: "Lonavala",
    image: room2,
    badge: "Travelers' Choice",
  },
  {
    name: "Meritas Aura Resort",
    location: "Lonavala",
    image: room3,
    badge: "NEW",
  },
  {
    name: "Meritas Crystal Resort",
    location: "Lonavala",
    image: Bkc1,
    badge: "Travelers' Choice",
  },
  {
    name: "Meritas Grand Resort",
    location: "Matheran",
    image: Bkc2,
    badge: "NEW",
  },
  {
    name: "Meritas Valley Resort",
    location: "Khandala",
    image: Bkc2,
    badge: "Exclusive",
  },
  {
    name: "Meritas Lakeview Resort",
    location: "Lonavala",
    image: Bandra3,
    badge: "Travelers' Choice",
  },
  {
    name: "Meritas Eco Resort",
    location: "Maharashtra",
    image: Worli1,
    badge: "Recommended",
  },
  {
    name: "Meritas Heritage Resort",
    location: "Mahabaleshwar",
    image: Bandra4,
    badge: "NEW",
  },
  {
    name: "Meritas Heritage Resort",
    location: "Mahabaleshwar",
    image: Worli2,
    badge: "NEW",
  },
  {
    name: "Meritas Heritage Resort",
    location: "Mahabaleshwar",
    image: Worli2,
    badge: "NEW",
  },
  {
    name: "Meritas Heritage Resort",
    location: "Mahabaleshwar",
    image: Worli2,
    badge: "NEW",
  },
];

export default function RoomShowcase() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % Math.ceil(resorts.length / 4)
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={`${
        darkMode ? "dark bg-gray-800 " : "light bg-loulou-100 "
      }pt-12 pb-12 bg-gray-100 py-16"`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">
          Experience{" "}
          <span className="text-loulou-600  dark:text-white">
            the Zenith Difference
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto  dark:text-gray-400">
          At Zenith Hospitality, we believe that comfort and functionality are
          key to a successful stay. Our thoughtfully designed rooms are perfect
          for both relaxation and productivity, offering a home-like atmosphere
          for our guests.
        </p>
        <div className="flex overflow-hidden justify-center">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }} // Change to slide 4 images
          >
            {resorts.map((resort, index) => (
              <div key={index} className="w-1/5 flex-shrink-0 px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-72">
                  <img
                    src={resort.image}
                    alt={resort.name}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {resort.name}
                    </h3>
                    <p className="text-gray-600">{resort.location}</p>
                    {resort.badge && (
                      <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mt-2">
                        {resort.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(resorts.length / 4) }).map(
            (_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${
                  index === currentIndex ? "bg-loulou-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
