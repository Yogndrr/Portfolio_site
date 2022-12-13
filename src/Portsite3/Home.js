import React from 'react'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import FaceSection from './components/FaceSection/FaceSection'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <FaceSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home