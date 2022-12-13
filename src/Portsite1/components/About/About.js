import React from 'react'
import "./About.css"
import abt from "../../../images/yogi-11.jpg"

const About = () => {

  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={abt} alt="" />
            </div>
          </div>

          <div className="about__content">

            <div className="about__cards">

              <article className="about__card">
                <h4>Experience</h4>
                <small>3+ Years</small>
              </article>

              <article className="about__card">
                <h4>Clients</h4>
                <small>300+ Worldwide</small>
              </article>

              <article className="about__card">
                <h4>Projects</h4>
                <small>80+ Completed</small>
              </article>

            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quae minus ut? Sed aliquid expedita quas commodi modi quos dolores ipsam. Aperiam rerum quis, magni libero molestias quaerat et cupiditate?</p>
            <a href="#contact" className="btn btn-primary">Contact Me</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About