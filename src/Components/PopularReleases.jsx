import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import popimg1 from "../images/popimg.png"
import popimg0 from "../images/popimg0.png"
import popimg2 from "../images/popimg2.png"
import popimg3 from "../images/popimg3.png"
import popimg4 from "../images/popimg4.png"
import popimg5 from "../images/popimg5.png"
import popimg6 from "../images/popimg6.png"
import popimg7 from "../images/popimg7.png"
import CarouselCom from '../Utility/CarouselCom'
import CardImg from './CardImg'
const PopularReleases = () => {
    return (
        <div className='popularContainer px-5'>
            <p className='title'> Popular Releases From KNL</p>
            <Container>
                <Row >
                    <Col md={4} sm={6} className='mb-5'>
                        <div className='flexBetween '>
                            <div className='flexCol ' >
                                <CardImg cardImg={popimg4} title="Mural" para="Mahmoud Darwish" opacity="0.2" />
                                <CardImg cardImg={popimg1} title="Gate of the sun" para="Elias Khoury" />
                            </div>
                            <div className='flexCol'>
                                <CardImg cardImg={popimg2} title="Men in the sun" para="Ghassan Kanafani" />
                                <CardImg cardImg={popimg7} title="The bamboo stalk" para="Saud Alsanousi" opacity="0.2" />
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={6} className='mb-5 dis-flex'>
                        <CarouselCom prevIcon={<div className='arrowDiv'>
                            <i className="fa-solid fa-chevron-left fa-xs" style={{ color: "#000000" }}></i>
                        </div>}
                            nextIcon=
                            {<div className='arrowDiv'>
                                <i className="fa-solid fa-chevron-right fa-xs" style={{ color: "#000000" }}></i>
                            </div>}
                            heightImg="100%"
                            displayPagigation="none"
                        />
                        <p className=' font500 fontSize20 mt-3' class>Samaritan art</p>
                        <p className='paraCard'>taha hussein</p>
                    </Col>
                    <Col md={4} sm={6} className='mb-5'>
                        <div className='flexBetween'>
                            <div className='flexCol'>
                                <CardImg cardImg={popimg4} title="Mural" para="Mahmoud Darwish" />
                                <CardImg cardImg={popimg5} opacity="0.2" />
                            </div>
                            <div className='flexCol pos-rel-bottom' >
                                <CardImg cardImg={popimg6} title="Advances in the embroidery" para="Ahmad al-Ashqar" opacity="0.2" />
                                <CardImg cardImg={popimg7} title="The bamboo stalk" para="Saud Alsanousi" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default PopularReleases