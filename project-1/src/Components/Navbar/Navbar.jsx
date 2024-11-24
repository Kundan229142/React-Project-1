import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (

    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>

        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contect us</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? "✖" : "☰"}
      </button>

    </nav>
  );
};

export default Navbar;
