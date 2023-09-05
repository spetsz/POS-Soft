import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { MdTouchApp } from "react-icons/md";
import banner from "../gifs/banner.jpg";

const Features = ({ bringIntoView }) => {
  const [trigger, setTrigger] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position + 100 > document.getElementById("banner").clientHeight) {
      setTrigger(true);
    } else {
      setTrigger(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav bringIntoView={bringIntoView} trigger={trigger} />
      <div className="banner" id="banner">
        <div className="dark-overlay"></div>
        <div className="hero-header">
          <h1>POS Soft v 1.0.0</h1>
          <h2>Try it, it makes running your business easier!</h2>
        </div>

        <button className="hero-button">
          <MdTouchApp /> Try for free
        </button>
        <img src={banner} alt="banner" />
      </div>
    </>
  );
};

export default Features;
