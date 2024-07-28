import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../images/Group 5.png"
import img1 from "../images/pic1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"


const NewKuwaitLib = () => {
    return (
        <Container>
            <p className='my-4 title ' >New At Kuait National Library</p>
            <Row className='d-flex gap-3 mb-5'>
                <Col lg={3} sm={6}>
                    <img src={img} alt="" className='imgNewKuwait' />
                    <div className=''>
                        <div>
                            <span>Event</span>
                        </div>
                        <p className='font500 fontSize20'  >The Opening of Al Qurian festival at Kuwait national library</p>
                        <p className='graycolor'> Jun 8th | 12:00pm - 2:00pm </p>

                        <img src={img2} alt="" className='mt-4 imgNewKuwait1' />
                        <div>
                            <span>News</span>
                        </div>
                        <p className='font500 fontSize20'  >The Full ceremony of Dr. Taghreed Al Qudsi's book "To a Safe Life"</p>
                    </div>
                </Col>
                <Col lg={5} sm={12}>
                    <img src={img1} alt="" className='mb-4 imgNewKuwait2 ' />
                    <div>
                        <span>Staff Lists</span>
                    </div>
                    <p className='font500 fontsize32'  >Dr. Al-Ansari opens the exhibition of documents and pictures, documents and books about horses</p>
                    <p className='graycolor'>Check out this month's recommendations from Kuwait National Library. Visit our Books page for previous lists of recommendations.</p>
                </Col>
                <Col lg={3} sm={6}>
                    <div className='conNewLib' >
                        <div className='d-flex'>
                            <p className='font500'>The Full ceremony of Dr. Taghreed Al Qudsi's book "To a Safe Life"</p>
                            <img src={img2} alt="img" className='smallPic' />
                        </div>
                        <div className='d-flex'>
                            <p className='font500'>The Full ceremony of Dr. Taghreed Al Qudsi's book "To a Safe Life"</p>
                            <img src={img3} alt="img" className='smallPic' />
                        </div>
                        <div className='d-flex'>
                            <p className='font500'>The Full ceremony of Dr. Taghreed Al Qudsi's book "To a Safe Life"</p>
                            <img src={img} alt="img" className='smallPic' />
                        </div>
                        <div className='d-flex'>
                            <p className='font500'>The Full ceremony of Dr. Taghreed Al Qudsi's book "To a Safe Life"</p>
                            <img src={img2} alt="img" className='smallPic' />
                        </div>
                        <div className='d-flex'>
                            <p className='font500' >The Full ceremony of Dr. Taghreed Al Qudsi's book "To a Safe Life"</p>
                            <img src={img4} alt="img" className='smallPic' />
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default NewKuwaitLib