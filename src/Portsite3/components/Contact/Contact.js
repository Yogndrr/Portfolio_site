import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from '@mui/material'
import "./Contact.css"
import contactImg from "../../assets/img/contact-img.svg";

const Contact = () => {

    const formQuestions = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }

    const [formDetails, setFormDetails] = useState(formQuestions)

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const [buttonText, setButtonText] = useState("Send")

    const submitHandler = (event) => {
        event.preventDefault()
        setButtonText("Sent Successfully")
        setInterval(() => {
            setButtonText("Send")
        }, 3000);
    }

    return (
        <section className='contact' id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={submitHandler}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" placeholder="First Name" value={formDetails.firstName}
                                        onChange={(event) => { onFormUpdate('firstName', event.target.value) }} />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" value={formDetails.lastName}
                                        onChange={(event) => { onFormUpdate('lastName', event.target.value) }} />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" placeholder="Email Address" value={formDetails.email}
                                        onChange={(event) => { onFormUpdate('email', event.target.value) }} />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" placeholder="Phone No." value={formDetails.phone}
                                        onChange={(event) => { onFormUpdate('phone', event.target.value) }} />
                                </Col>

                                <Col size={12} className="px-1">
                                    <textarea rows="6" placeholder="Message" value={formDetails.message}
                                        onChange={(e) => onFormUpdate('message', e.target.value)}>
                                    </textarea>

                                    <Button disabled={!formDetails} variant='contained' color='success' type="submit">
                                        <span> {buttonText} </span>
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact