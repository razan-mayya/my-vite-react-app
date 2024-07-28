import React from 'react'

const CardImg = ({ cardImg, title, para, opacity }) => {
    return (
        <div>
            <img src={cardImg} alt="img" style={{ width: "85%", opacity: opacity }} />
            <p className='font500'>{title}</p>
            <p className='cardImgPara' >{para}</p>
        </div>
    )
}

export default CardImg