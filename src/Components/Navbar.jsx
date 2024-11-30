import React from "react";
import ProfileCircle from "./ProfileCircle";
import "./Styles/Navbar.css";
import DarkModeIcon from "../assets/dark-mode.png";
import LightModeIcon from "../assets/light-mode.png";

const Navbar = ({ openSidebar, toggleTheme, theme }) => {
  return (
    <div
      className="navbar d-flex justify-content-between align-items-center px-sm-5 p-3 py-sm-3"
      data-aos="fade-down"
    >
      <ProfileCircle isLogo={true} theme={theme} />

      <div className="navIcons d-flex justify-content-between align-items-center">
        <div className="darkModeIcon" onClick={toggleTheme}>
          <img
            src={theme === "light" ? DarkModeIcon : LightModeIcon}
            alt="Toggle Theme"
            id="theme-icon"
          />
        </div>
        <div className="background float-end my-3 mx-3" onClick={openSidebar}>
          <button className="menu__icon">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
