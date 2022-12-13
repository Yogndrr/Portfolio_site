import React, { useState } from 'react'
import "./AboutMe.css"
import yog from "../../../images/yogi-11.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const AboutMe = () => {

  const [open, setOpen] = useState(false)

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div onMouseOver={()=>{setOpen(true)}} onClick={()=>{setOpen(!open)}} className="about__me-image">
            <img src={yog} alt="" />
          </div>
        </div>
        <div className= {open?"about__content":"about__content-disabled"}>
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, modi! Esse impedit autem quod magni voluptates sapiente ipsam, pariatur incidunt possimus quisquam corrupti obcaecati, neque quasi harum veniam amet officia.</p>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe