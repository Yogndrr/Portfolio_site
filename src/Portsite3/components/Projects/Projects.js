import React from 'react'
import "./Projects.css"
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

import projImg1 from "../../assets/img/project-img1.png"
import projImg2 from "../../assets/img/project-img2.png"
import projImg3 from "../../assets/img/project-img3.png"
import colorSharp2 from "../../assets/img/color-sharp2.png"


const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita quidem ratione officia minima atque quasi? Vero maxime id omnis ratione, corporis consectetur consequatur quibusdam laboriosam optio aliquam molestias quas!</p>
                        <Tab.Container>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="" />
        </section>
    )
}

export default Projects