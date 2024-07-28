// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';
const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };



    return (
        <div className="card-slider">
            <Slider {...settings} >
                <Card title="Reference and Information Research."
                    para="Assists researchers in finding information using the library's automated catalog, providing access to a wide range of materials." />

                <Card title=" Database and Internet Research."
                    para="Allows researchers to search in subscribed databases and the internet for diverse, updated information sources. " />

                <Card title="Registration and Legal Deposit."
                    para="Protects authors' rights through registration and legal deposit, issuing a deposit number for intellectual property protection." />

                <Card title="Support for Researchers and Students"
                    para="Includes photocopying and scanning services to facilitate easy access and electronic storage of research materials." />

            </Slider>

        </div >
    );
};

export default CardSlider;
