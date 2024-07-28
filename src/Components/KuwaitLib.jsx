import { Col, Container, Row } from "react-bootstrap"
import vector from "../images/Vector.png"
import previcon from "../images/pecIcon.png"
import nexticon from "../images/nextIcon.png"
import CarouselCom from "../Utility/CarouselCom";
const KuwaitLib = () => {
    return (
        <Row className="KuwaitRow" >
            <Col md={4} sm={4} className="p-5" >
                <p className="title">Kuwait National Library</p>
                <p className="graycolor">Preserving the history of Kuwait, illuminating its present, and safeguarding national memory.</p>
                <div className="d-flex my-4 " >
                    <button className="bluebtn whiteColor bgBlue ">Our Services</button>
                    <b className="mx-3 mt-2 ContactUs" >Contact Us </b>
                </div>
            </Col>

            <Col md={8} sm={8} style={{ position: "relative" }}>
                <img src={vector} alt="img" className="bgImg" />
                <CarouselCom prevIcon={<img src={previcon} alt="prev icon" className="custom-prev-icon" />}
                    nextIcon={<img src={nexticon} alt="Next" className="custom-next-icon " />} heightImg="600px"
                />
            </Col>
        </Row>
    )
}

export default KuwaitLib