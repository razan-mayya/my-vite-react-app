import React from 'react'
import previcon from "../images/lightprev.png"
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-prev" onClick={onClick}>
            <img src={previcon} alt="السابق" />
        </button>
    )
}

export default PrevArrow