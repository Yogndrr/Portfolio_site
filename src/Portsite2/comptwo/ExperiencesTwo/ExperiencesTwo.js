import React from 'react'
import "./ExperiencesTwo.css"
import { BsPatchCheckFill } from "react-icons/bs"

const ExperiencesTwo = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>HTML</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>CSS</h4>
              <small className='text-light'>experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>Javascript</h4>
              <small className='text-light'>intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>Bootstrap</h4>
              <small className='text-light'>intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>Tailwind</h4>
              <small className='text-light'>beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>React</h4>
              <small className='text-light'>intermediate</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>Node JS</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>Mongo DB</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>PHP</h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons' />
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesTwo