import React from 'react'
import icon1 from "../images/icon1.png"
const Card = ({ title, para }) => {
    return (
        <div className='cardCon bggray'  >
            <div className='iconCircle' ><img src={icon1} alt="" /></div>
            <p className='titleCard' >{title}</p>
            <p className='paraCard' >{para}</p>
        </div>
    )
}

export default Card
