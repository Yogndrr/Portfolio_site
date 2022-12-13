import React from 'react'
import "./Heading.css"
import ME from "../../../images/yogi-2.jpg"
import Socials from './Socials'

const Heading = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I am</h5>
                <h1>Yogendra Awasthi</h1>
                <h5 className='text-light'>Full Stack Developer</h5>

                <div className='buttons'>
                    <a href="/" className='btn'>Download CV</a>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

                <Socials />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>

            </div>
        </header>
    )
}

export default Heading