
import { Carousel } from "react-bootstrap"
import img from "../images/slide1.png"
import img1 from "../images/Rectangle 4.png"
const CarouselCom = ({ prevIcon, nextIcon, heightImg, displayPagigation }) => {
    {
        var arr = [
            img, img1, img
        ]
    }

    return (
        <Carousel prevIcon={prevIcon}
            nextIcon={nextIcon}>
            {arr.map((ele, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={ele}
                        style={{ height: heightImg }}
                    />
                    <p style={{ display: displayPagigation }}>{index} <span className="graycolor">\{arr.length}</span></p>
                </Carousel.Item>
            ))}

        </Carousel>
    )
}

export default CarouselCom