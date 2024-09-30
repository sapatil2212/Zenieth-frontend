import React, { useEffect } from "react";
import AOS, { init } from "aos";
import "aos/dist/aos.css";
import heroimg from "../assets/feature.png";
import { Wifi, AirVent, Bed, Cigarette } from "lucide-react";

const Features = () => {
  useEffect(() => {
    init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section
      className="w-full px-10 py-10 h-[200px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="grid grid-cols-7 md:grid-cols-6 gap-4 mt-8">
        <AmenityIcon Icon={Wifi} label="UNLIMITED WIFI" />
        <AmenityIcon Icon={AirVent} label="AIR CONDITIONING" />
        <AmenityIcon Icon={Bed} label="COMFORTABLE BEDS" />
        <AmenityIcon Icon={Cigarette} label="NON-SMOKING ROOM" />
        <AmenityIcon Icon={Cigarette} label="NON-SMOKING ROOM" />
        <AmenityIcon Icon={Cigarette} label="NON-SMOKING ROOM" />
      </div>
    </section>
  );
};

function AmenityIcon({ Icon, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white rounded-xl p-4 shadow-md transition-transform duration-300 transform hover:scale-105 w-full h-full flex flex-col items-center justify-center">
        <Icon className="w-6 h-6 text-loulou-600 mb-1" />
        <span className="text-xs font-medium text-gray-800 mt-1">{label}</span>
      </div>
    </div>
  );
}
export default Features;
