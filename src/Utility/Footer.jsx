import { Col, Container, NavDropdown, Row } from 'react-bootstrap'
import logo from "../images/logo.png"
import footerImg from "../images/footerImg.png"
import footerImg1 from "../images/footerImg1.png"
import footerIcon1 from "../images/footerIcon1.png"
import footerIcon2 from "../images/footerIcon2.png"
import footerIcon4 from "../images/footerIcon4.png"
const Footer = () => {
    return (
        <div style={{ marginTop: "270px" }}>
            <div className='bggray'>
                <Container>
                    <Row style={{ padding: "20px 0px" }}>
                        <Col lg={3} md={6} sm={6}>
                            <img src={logo} alt="logo" style={{ width: "100%" }} />
                            <p className='graycolor'>Contact the library:</p>
                            <p>nlk@nlk.gov.kw</p>
                            <p lassName='graycolor'>Call us:</p>
                            <p>22929827</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} className='dis-flex'>
                            <p className='font500'>About</p>
                            <p className='graycolor'>About KNL</p>
                            <p className='graycolor'>Our Services</p>
                            <p className='graycolor'>Library Halls</p>
                            <p className='graycolor'>Releases</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} className='dis-flex'>
                            <p className='font500'>Useful links</p>
                            <p className='graycolor'>Event calendar</p>
                            <p className='graycolor'>Advanced Search</p>
                            <p className='graycolor'>Gallery</p>
                            <p className='graycolor'>Contact us</p>
                        </Col>
                        <Col lg={3} md={6} sm={6} className='dis-flex '>
                            <div className='d-flex justify-content-between'>
                                <img src={footerImg} alt="" style={{ width: "30%" }} />
                                <img src={footerImg1} alt="" style={{ width: "65%" }} />
                            </div>
                            <div className='d-flex justify-content-between mt-3' style={{ width: "100%" }}>
                                <img src={footerIcon1} alt="" />
                                <img src={footerIcon2} alt="" />
                                <img src={footerIcon2} alt="" />
                                <img src={footerIcon4} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div className='d-flex justify-content-between my-3'>
                    <p className='graycolor'>Copyright © 2024, Kuwait National Library. KNL. All Rights Reserved.</p>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="English"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Aradic
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Frace</NavDropdown.Item>
                        <NavDropdown.Divider />

                    </NavDropdown>
                </div>
            </Container>

        </div>
    )
}

export default Footer