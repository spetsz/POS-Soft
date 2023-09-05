import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <div className="footer">
      <div className="footer-socials">
        <div className="footer-socials-text">Get in touch with us on :</div>
        <div className="footer-socials-links">
          <a
            href="https://www.facebook.com/profile.php?id=61550740805830"
            target="_blank"
          >
            <FaFacebookF className="link-facebook" />
          </a>
          <a href="https://www.tiktok.com/@posolutions" target="_blank">
            <FaTiktok className="link-tiktok" />
          </a>
          <a href="#">
            <FaYoutube className="link-youtube" />
          </a>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">Copyright &copy; {year} POS Soft</div>
      </div>
    </div>
  );
};

export default Footer;
