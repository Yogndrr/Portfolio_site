import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="project__content">
                <img src={imgUrl} alt="" />
                <div className="project__details">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard