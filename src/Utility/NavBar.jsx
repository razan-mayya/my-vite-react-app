import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div className='bgBlue mb-4'>
            <Container  >
                <Row className=' d-flex justify-content-between navBar '>
                    <Col className='d-flex gap-3 par' md={10} sm={12} xs={12}   >
                        <p className='whiteColor'>About The library</p>
                        <p className='whiteColor'>Library Halls</p>
                        <p className='whiteColor'>Services</p>
                        <p className='whiteColor'>Gallery</p>
                        <p className='whiteColor'>Contact Us</p>
                    </Col>
                    <Col className='d-flex  par' md={2} sm={12} xs={12} >
                        <i className="fa-regular fa-calendar-days" style={{ color: "#ffffff" }}></i>
                        <p className='whiteColor'>Events Calender</p>
                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default NavBar