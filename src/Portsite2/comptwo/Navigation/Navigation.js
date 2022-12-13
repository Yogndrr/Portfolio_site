import React, { useState } from 'react'
import "./Navigation.css"
import { TbHome } from "react-icons/tb"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageDetail } from "react-icons/bi"
import { MdOutlineMiscellaneousServices } from "react-icons/md"

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => { setActiveNav("#") }} className={activeNav === "#" ? "active" : ""}><TbHome /></a>
      <a href="#about" onClick={() => { setActiveNav("#about") }} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => { setActiveNav("#experience") }} className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
      <a href="#services" onClick={() => { setActiveNav("#services") }} className={activeNav === "#services" ? "active" : ""}><MdOutlineMiscellaneousServices /></a>
      <a href="#contact" onClick={() => { setActiveNav("#contact") }} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail /></a>
    </nav>
  )
}

export default Navigation