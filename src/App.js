import React from "react";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const bringIntoView = (e) => {
    const element = document.getElementById(e.target.getAttribute("name"));
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <>
      <Hero bringIntoView={bringIntoView} />

      <Features />

      <Pricing />

      <Contact />

      <Footer />
    </>
  );
};

export default App;
