import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {

  const [pageSection, setPageSection] = useState("#")

  return (
    <>
      <nav>
        <a href="#" onClick={() => { setPageSection("#") }} className={pageSection === "#" ? "active" : ""}>Home</a>
        {/* If pageSection is equal to # then className will be active otherwise it will remain empty */}
        <a href="#about" onClick={() => { setPageSection("#about") }} className={pageSection === "#about" ? "active" : ""}>About</a>
        <a href="#experience" onClick={() => { setPageSection("#experience") }} className={pageSection === "#experience" ? "active" : ""}>Experience</a>
        <a href="#services" onClick={() => { setPageSection("#services") }} className={pageSection === "#services" ? "active" : ""}>Services</a>
        <a href="#contact" onClick={() => { setPageSection("#contact") }} className={pageSection === "#contact" ? "active" : ""}>Contact</a>
      </nav>
    </>
  )
}

export default Navbar