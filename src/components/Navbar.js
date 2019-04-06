import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  const navbarStyles = {
    backgroundColor: "green",
    display: "flex",
    justifyContent: "flex-end"
  };
  return (
    <nav className="navbar" style={navbarStyles}>
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
