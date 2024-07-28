import React from 'react'
import nexticon from "../images/lightnext.png"

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="slick-next" onClick={onClick}>
            <img src={nexticon} alt="التالي" />
        </button>
    )
}

export default NextArrow