import React, { useState, useEffect } from "react";
import { Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useDarkMode } from "../Components/DarkModeContext";
import bgimg from "../assets/gradient.png";

import Apartmentimg1 from "../assets/showcase2.png";
import Apartmentimg2 from "../assets/showcase3.png";
import Apartmentimg3 from "../assets/prabhadevi/prabhadevi1.jpg";
import Apartmentimg4 from "../assets/prabhadevi/prabhadevi2.jpg";
import Bkc1 from "../assets/bkc/7.jpg";
import Bkc2 from "../assets/bkc/6.jpg";
import Bkc3 from "../assets/bkc/5.jpg";
import Bkc4 from "../assets/bkc/4.jpg";
import Bandra1 from "../assets/bandra/1.jpg";
import Bandra2 from "../assets/bandra/2.jpg";
import Bandra3 from "../assets/bandra/3.jpg";
import Bandra4 from "../assets/bandra/4.jpg";
import Worli1 from "../assets/worli/1.png";
import Worli2 from "../assets/worli/2.png";
import Worli3 from "../assets/worli/3.png";
import Worli4 from "../assets/worli/4.png";
import Shilip1 from "../assets/shiliptower/1.jpg";
import Shilip2 from "../assets/shiliptower/2.jpg";
import Shilip3 from "../assets/shiliptower/3.jpg";
import Shilip4 from "../assets/shiliptower/4.jpg";
import Ghansoli1 from "../assets/ghansoli/1.png";
import Ghansoli2 from "../assets/ghansoli/2.png";
import Ghansoli3 from "../assets/ghansoli/3.png";
import Ghansoli4 from "../assets/ghansoli/4.png";

const galleryData = [
  {
    id: 1,
    title: "Prabhadevi, Mumbai",
    images: [Apartmentimg1, Apartmentimg2, Apartmentimg3, Apartmentimg4],
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
    location: "Ghansoli, Mumbai",
    images: [Ghansoli1, Ghansoli2, Ghansoli3, Ghansoli4],
  },
];

const Apartments = () => {
  const { darkMode } = useDarkMode();
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    galleryData.map(() => 0)
  );
  const [popupImage, setPopupImage] = useState(null);
  const [popupIndex, setPopupIndex] = useState(null);

  // Automatic image sliding effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map(
          (index, i) => (index + 1) % galleryData[i].images.length
        )
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const handlePrevImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] - 1 + galleryData[index].images.length) %
        galleryData[index].images.length;
      return newIndexes;
    });
  };

  const handleNextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] =
        (newIndexes[index] + 1) % galleryData[index].images.length;
      return newIndexes;
    });
  };

  const handleImageClick = (image, index) => {
    setPopupImage(image);
    setPopupIndex(index);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupIndex(null);
  };

  const handlePopupPrev = () => {
    if (popupIndex !== null) {
      setPopupIndex(
        (prevIndex) =>
          (prevIndex - 1 + galleryData[popupIndex].images.length) %
          galleryData[popupIndex].images.length
      );
      setPopupImage(galleryData[popupIndex].images[popupIndex]);
    }
  };

  const handlePopupNext = () => {
    if (popupIndex !== null) {
      setPopupIndex(
        (prevIndex) => (prevIndex + 1) % galleryData[popupIndex].images.length
      );
      setPopupImage(galleryData[popupIndex].images[popupIndex]);
    }
  };

  return (
    <section
      className={`${
        darkMode
          ? "dark bg-gray-900 bg-no-repeat bg-center bg-cover"
          : "light bg-white"
      } pb-12 py-20`}
      style={{
        backgroundImage: darkMode ? `url(${bgimg})` : "",
      }}
    >
      <div className="container w-full max-w-6xl mx-auto px-4 sm:px-2 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 mt-5 dark:text-white">
          Explore Our{" "}
          <span className="text-loulou-600 dark:text-white">
            Accommodations
          </span>
        </h2>
        <p className="text-center dark:text-gray-400 mb-8 mt-2">
          Explore the beauty and elegance of Zenith Hospitality Services through
          our gallery. <br /> Here, we invite you to take a visual tour of our
          stunning accommodations, exquisite dining options, vibrant events, and
          the welcoming atmosphere that defines our hospitality.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((location, index) => (
            <div
              key={location.id}
              className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 dark:border dark:border-gray-700"
            >
              {/* Main Image with Previous and Next Arrows */}
              <div className="relative h-64 transition-transform duration-300 transform hover:scale-105">
                <div className="absolute inset-0 flex">
                  {location.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                        imgIndex === currentImageIndexes[index]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      onClick={() => handleImageClick(image, index)} // Allow click to enlarge
                    >
                      <img
                        src={image}
                        alt={location.title}
                        className="w-full h-full object-cover cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handlePrevImage(index)}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleNextImage(index)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnails Section */}
              <div className="flex justify-center space-x-4 mb-1 mt-2">
                {location.images.slice(0, 4).map((thumbnail, i) => (
                  <img
                    key={i}
                    src={thumbnail}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-16 h-16 rounded-lg cursor-pointer object-cover"
                    onClick={() => handleImageClick(thumbnail, index)}
                  />
                ))}
              </div>

              {/* Location and View Button Section */}
              <div className="p-4 text-center mt-0">
                <h3 className="font-semibold text-lg mb-0 dark:text-white">
                  {location.title}
                </h3>

                {/* Centered View Button */}
                <div className="flex justify-center mt-2">
                  <button
                    onClick={() => handleImageClick(location.images[0], index)}
                    className="flex justify-center items-center space-x-2 py-2 px-4 bg-loulou-600 text-white rounded-lg shadow-md hover:bg-loulou-500 transition-colors duration-200"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Image Section */}
      {popupImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={handlePopupPrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handlePopupNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <img
              src={popupImage}
              alt="Enlarged"
              className="max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Apartments;
