import React, { useState } from "react";
import login from "../gifs/login.gif";
import sell from "../gifs/sell.gif";
import stock from "../gifs/stock.gif";
import transactions from "../gifs/transactions.gif";
import clients from "../gifs/clients.gif";
import parameters from "../gifs/parameters.gif";
import info from "../gifs/info.gif";
import { BiSolidLogInCircle } from "react-icons/bi";
import {
  FaCashRegister,
  FaWarehouse,
  FaInfoCircle,
  FaUsers,
} from "react-icons/fa";

import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

const Hero = () => {
  const [gif, setGif] = useState(login);

  return (
    <div className="hero" id="features">
      <ul className="gif-options">
        <li
          className={gif === login ? "gif-option active" : "gif-option"}
          onClick={() => setGif(login)}
        >
          <BiSolidLogInCircle />
          Loggin
        </li>
        <li
          className={gif === sell ? "gif-option active" : "gif-option"}
          onClick={() => setGif(sell)}
        >
          <FaCashRegister />
          Selling
        </li>

        <li
          className={gif === stock ? "gif-option active" : "gif-option"}
          onClick={() => setGif(stock)}
        >
          <FaWarehouse />
          Stock
        </li>

        <li
          className={gif === transactions ? "gif-option active" : "gif-option"}
          onClick={() => setGif(transactions)}
        >
          <FaMoneyBillTransfer />
          Trans
        </li>
        <li
          className={gif === clients ? "gif-option active" : "gif-option"}
          onClick={() => setGif(clients)}
        >
          <FaUsers />
          Clients
        </li>

        <li
          className={gif === parameters ? "gif-option active" : "gif-option"}
          onClick={() => setGif(parameters)}
        >
          <IoSettings />
          Params
        </li>

        <li
          className={gif === info ? "gif-option active" : "gif-option"}
          onClick={() => setGif(info)}
        >
          <FaInfoCircle />
          Info
        </li>
      </ul>
      <div className="screen">
        <div className="screen-nav">
          <div className="dark-layer">
            <div className="circle"></div>
          </div>
        </div>

        <img
          name={gif === login ? "login" : ""}
          src={gif}
          alt="gif"
          style={{
            width: gif === login ? "300px" : "100%",
            margin: gif === login ? "20px auto" : "0",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
