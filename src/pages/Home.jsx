import React from "react";
import Hero from "../Sections/Hero";
import Welcome from "../Sections/Welcome";
import Amenities from "../Sections/Amenities";
import RoomShowcase from "../Sections/RoomShowcase";
import OurClient from "../Sections/OurClient";
import ApartmentCards from "../Sections/ApartmentCards";
import Contact from "../Sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Amenities />
      <RoomShowcase />
      <OurClient />
      <ApartmentCards />
      <Contact />
    </>
  );
};

export default Home;
