import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./Components/DarkModeContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Apartments from "./pages/Apartments";
import Contact from "./pages/Contact";
import FAQ from "./pages/Faqs";

const App = () => {
  return (
    <Router>
      <DarkModeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQ />} />
        </Routes>
        <Footer />
      </DarkModeProvider>
    </Router>
  );
};

export default App;
