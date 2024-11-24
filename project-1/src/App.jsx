import React from 'react'
import { useState } from "react";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ContactForm from './Components/ContectUs/ContactForm'
import Footer from './Components/Footer/Footer'

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">MyLogo</div>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>

          <li><Link to={"/"}>Home </Link></li>
          <li><Link to={"/about"}>About </Link></li>
          <li><Link to={"/contectus"}>Contect Us </Link></li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? "✖" : "☰"}
        </button>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contectus' element={<ContactForm />} />
      </Routes>
      
      <footer className="footer" id="contact">
        <p>Copuyright © 2024 Kundan Prajapati. All rights reserved.</p>
      </footer>



      {/* <Navbar />
      <Home />
      <About />
      <ContactForm />
      <Footer /> */}

    </div>
  )
}

export default App