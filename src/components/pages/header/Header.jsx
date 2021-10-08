import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">fdsfgsdgsd</span>
        <span className="headerTitlelarge">sdgsdgsdgsdg</span>
      </div>
      <img
        src="https://picsum.photos/200/300?random=2"
        alt=""
        className="headerImage"
      />
    </div>
  );
};

export default Header;
