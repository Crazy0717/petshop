"use client";
import { FaBars } from "react-icons/fa6";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [barState, setBarState] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <div className="right">
        <div onClick={() => setBarState(!barState)} className="bars">
          <FaBars />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Cart</li>
        </ul>
        <button>Contact Us</button>
      </div>
      <div className={barState ? "barModal active" : "barModal"}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Cart</li>
        </ul>
        <button>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
