import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from "react-bootstrap"
import logo from "../../assets/img/logo.svg"
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { Button } from "@mui/material"
import "./NavBar.css"

const NavBar = () => {

    const [activeLink, setActiveLink] = useState("#home")

    return (
        <>
            <Navbar expand="lg">
                <Container className='container'>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link href="#home" onClick={() => setActiveLink("#home")} className={activeLink === "#home" ? "active navbar-link" : "navbar-link"}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="#skills" onClick={() => setActiveLink("#skills")} className={activeLink === "#skills" ? "active navbar-link" : "navbar-link"}>
                                Skills
                            </Nav.Link>
                            <Nav.Link href="#projects" onClick={() => setActiveLink("#projects")} className={activeLink === "#projects" ? "active navbar-link" : "navbar-link"}>
                                Projects
                            </Nav.Link>
                        </Nav>

                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="/"><img src={navIcon1} alt="" /></a>
                                <a href="/"><img src={navIcon2} alt="" /></a>
                                <a href="/"><img src={navIcon3} alt="" /></a>
                            </div>

                            <Button variant="contained" color='primary' href="#connect">
                                <span>Let's Connect</span>
                            </Button>
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar