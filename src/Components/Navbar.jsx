import React from "react";
import ProfileCircle from "./ProfileCircle";
import "./Style/Navbar.css";

const Navbar = ({ openSidebar }) => {
  return (
    <div className="navbar d-flex justify-content-between align-items-center px-sm-5 p-3 py-sm-3">
      <ProfileCircle isLogo={true}></ProfileCircle>
      <div className="background float-end my-3 mx-3" onClick={openSidebar}>
        <button className="menu__icon">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
