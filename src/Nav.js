import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://www.vectorlogo.zone/logos/netflix/netflix-official.svg"
        className="nav__logo"
        alt="netflix"
      />
      <img
        className="nav__menu"
        src="https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg"
        alt="menu"
      />
    </div>
  );
};

export default Nav;
