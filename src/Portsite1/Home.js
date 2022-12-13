import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Header from './components/Header/Header'
import Experience from './components/Experience/Experience'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home