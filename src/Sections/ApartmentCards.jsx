import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDarkMode } from "../Components/DarkModeContext";

import bgimg from "../assets/gradient.png";

import Apartmentimg from "../assets/heroimg.png";
import Apartmentimg1 from "../assets/showcase2.png";
import Apartmentimg2 from "../assets/showcase3.png";
import Apartmentimg3 from "../assets/prabhadevi/prabhadevi1.jpg";
import Apartmentimg4 from "../assets/prabhadevi/prabhadevi2.jpg";

{
  /*BKC Apartment images*/
}
import Bkc1 from "../assets/bkc/7.jpg";
import Bkc2 from "../assets/bkc/6.jpg";
import Bkc3 from "../assets/bkc/5.jpg";
import Bkc4 from "../assets/bkc/4.jpg";

{
  /*Bandra Apartment images*/
}
import Bandra1 from "../assets/bandra/1.jpg";
import Bandra2 from "../assets/bandra/2.jpg";
import Bandra3 from "../assets/bandra/3.jpg";
import Bandra4 from "../assets/bandra/4.jpg";

{
  /*Worli Apartment images*/
}
import Worli1 from "../assets/worli/1.png";
import Worli2 from "../assets/worli/2.png";
import Worli3 from "../assets/worli/3.png";
import Worli4 from "../assets/worli/4.png";

{
  /*Shilip Tower Apartment images*/
}
import Shilip1 from "../assets/shiliptower/1.jpg";
import Shilip2 from "../assets/shiliptower/2.jpg";
import Shilip3 from "../assets/shiliptower/3.jpg";
import Shilip4 from "../assets/shiliptower/4.jpg";

{
  /*Ghansoli Apartment images*/
}
import Ghansoli1 from "../assets/ghansoli/1.png";
import Ghansoli2 from "../assets/ghansoli/2.png";
import Ghansoli3 from "../assets/ghansoli/3.png";
import Ghansoli4 from "../assets/ghansoli/4.png";

const apartmentData = [
  {
    id: 1,
    title: "Premium Service Apartment",
    price: "User Choice",
    details: " ",
    location: "Prabhadevi, Mumbai",
    images: [
      Apartmentimg,
      Apartmentimg1,
      Apartmentimg2,
      Apartmentimg3,
      Apartmentimg4,
    ],
  },
  {
    id: 2,
    title: "Premium Service Apartment",
    location: "BKC, Mumbai",
    images: [Bkc1, Bkc2, Bkc3, Bkc4],
  },
  {
    id: 3,
    title: "Premium Service Apartment",
    location: "Bandra, Mumbai",
    images: [Bandra1, Bandra2, Bandra3, Bandra4],
  },
  {
    id: 4,
    title: "Premium Service Apartment",
    location: "Worli, Mumbai",
    images: [Worli1, Worli2, Worli3, Worli4],
  },
  {
    id: 5,
    title: "Premium Service Apartment",
    location: "Shilip Tower, Mumbai",
    images: [Shilip1, Shilip2, Shilip3, Shilip4],
  },
  {
    id: 6,
    title: "Premium Service Apartment",
    price: "User Choice",
    location: "Ghansoli, Mumbai",
    images: [Ghansoli1, Ghansoli2, Ghansoli3, Ghansoli4],
  },
];

export default function ApartmentCards() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    apartmentData.map(() => 0)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map(
          (index, i) => (index + 1) % apartmentData[i].images.length
        )
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] - 1 + apartmentData[index].images.length) %
        apartmentData[index].images.length;
      return newIndexes;
    });
  };

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % apartmentData[index].images.length;
      return newIndexes;
    });
  };

  return (
    <section
      className={`${
        darkMode
          ? "dark bg-gray-900 bg-no-repeat bg-center bg-cover"
          : "light bg-white"
      } pb-12 py-12`}
      style={{
        backgroundImage: darkMode ? `url(${bgimg})` : "",
      }}
    >
      <div className="container w-full max-w-6xl mx-auto px-4 sm:px-2 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Our Apartment's{" "}
          <span className="text-loulou-600 dark:text-white">Locations</span>
        </h2>
        <p className="text-center dark:text-gray-400 mb-10 max-w-3xl mx-auto">
          Zenith Hospitality offers service apartments in some of the most
          sought-after locations in Mumbai, providing easy access to the city’s
          vibrant business districts, dining, and entertainment options.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {apartmentData.map((apartment, index) => (
            <div
              key={apartment.id}
              className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700"
            >
              <div className="relative h-64 transition-transform duration-300 transform hover:scale-105">
                <div className="absolute inset-0 flex">
                  {apartment.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                        imgIndex === currentImageIndexes[index]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <img
                        src={image}
                        alt={apartment.title}
                        className="w-full h-full object-cover "
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handlePrevImage(index)}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md "
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleNextImage(index)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-2 py-1 rounded">
                  {apartment.price}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  {apartment.title}
                </h3>
                <p className="text-gray-600 mb-1">{apartment.details}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {apartment.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
