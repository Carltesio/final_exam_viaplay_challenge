import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          ViaPlay
        </Link>  
      </div>
    </nav>

    
  );
};

export default Header;