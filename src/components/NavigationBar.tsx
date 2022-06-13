import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-link">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
