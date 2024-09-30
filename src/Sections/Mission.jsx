import { Target, Eye, Medal } from "lucide-react";
import { useDarkMode } from "../Components/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function MissionVisionValues() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const items = [
    {
      title: "OUR MISSION",
      icon: Target,
      color: "text-red-500",
      description:
        "Our mission is to create memorable experiences by offering top-notch accommodations and personalized services. We believe that every guest deserves the highest level of comfort and care, and we strive to exceed expectations at every opportunity.",
    },
    {
      title: "OUR VISION",
      icon: Eye,
      color: "text-blue-500",
      description:
        "To be recognized as a premier hospitality provider that sets the standard for excellence in service and guest satisfaction. We aim to foster an environment where guests feel at home, whether they are traveling for business or leisure.",
    },
    {
      title: "OUR VALUES",
      icon: Medal,
      color: "text-green-500",
      description:
        "At Zenith Hospitality Services, our core values guide every aspect of our operations and interactions. They reflect our commitment to excellence and our dedication to our guests and community:",
    },
  ];

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-800" : "light bg-loulou-100"
      } container mx-auto relative w-full justify-center items-center px-4 sm:px-6 lg:px-8 pt-1 pb-2 lg:pt-4 lg:pb-3`}
    >
      <div className="pb-20 pt-4 sm:pb-16 sm:pt-8 lg:pb-20 lg:pt-12">
        {" "}
        <div className="relative mx-auto max-w-7xl px- sm:static sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <item.icon className={`w-16 h-16 ${item.color}`} />
                <h2 className="mt-4 text-2xl font-bold">
                  {item.title.split(" ").map((word, i) => (
                    <span key={i} className={i === 1 ? item.color : ""}>
                      {word}{" "}
                    </span>
                  ))}
                </h2>
                <p
                  className="mt-2 text-gray-600 dark:text-gray-500"
                  style={{ fontSize: "0.8rem" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
