import React from 'react'
import Typewriter from 'typewriter-effect'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowCircleRight } from "react-icons/fa"
import headerImg from "../../assets/img/header-img.svg"
import "./FaceSection.css"

const FaceSection = () => {

    const skills = [
        "Web Developer",
        "Web Designer",
        "UI/UX Designer"
    ]

    const stuffObj = {
        autoStart: true,
        loop: true,
        delay: 40,
        strings: skills
    }
    
    // stuffObj is all syntax

    return (
        <section className='banner' id='home'>
            <Container className='container'>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className="firstline">Welcome To My Portfolio</span>
                        <h1>
                            {`Hi, I am Yogendra Awasthi`} <br /><br />
                            <span className="wrap">
                                <Typewriter options={stuffObj} />
                            </span>
                        </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint expedita quos consequuntur maiores saepe animi nostrum modi ipsa doloribus est dicta, libero enim iure voluptatem sunt minima! Delectus, provident reiciendis!</p>
                        <button>
                            Let's Connect <FaArrowCircleRight />
                        </button>
                    </Col>
                    <Col>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FaceSection