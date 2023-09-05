import React from "react";
import pc from "../gifs/pci.png";

const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="pricing-header">
        <div className="pricing-dialog">
          <h1>Juste pour 5000 DZD</h1>
          <h1>Gangnez un scanner code barre gratuitement!</h1>
          <h1>Allez-y</h1>
        </div>
        <img className="pc-img" src={pc} alt="pc" />
      </div>
      <a
        className="download-btn"
        href="./download/Setup.exe"
        download="POS V1.0.0"
      >
        Download Trial Version For Free
      </a>
    </div>
  );
};

export default Pricing;
