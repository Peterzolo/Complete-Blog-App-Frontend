import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbarContaine">

      <div className="navBarleft">
        <i className=" topIconsLeft fab fa-github"></i>
        <i className=" topIconsLeft fab fa-facebook-square"></i>
        <i className=" topIconsLeft fab fa-linkedin"></i>
        <i className=" topIconsLeft fab fa-instagram"></i>
      </div>

      <div className="navBarCenter">
        <ul className="topList">
          <li className=" socialIcons topLinks">Home</li>
          <li className=" socialIcons topLinks">About Us</li>
          <li className=" socialIcons topLinks">Services</li>
          <li className=" socialIcons topLinks">Entertainment</li>
          <li className=" socialIcons topLinks">Post</li>
          <li className=" socialIcons topLinks">LogOut</li>
        </ul>
      </div>
      <div className="navBarRight">
        <img
          src="https://picsum.photos/200/300?random=1"
          alt="Profile pic"
          className="profilePic"
        />
        <i className="topSearch fas fa-search"></i>
      </div>
    </div>
  );
};

export default NavBar;
