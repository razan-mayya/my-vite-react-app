import React from 'react'
import NavBar from '../../Utility/NavBar'
import BeforNav from '../../Utility/BeforNav'
import Section from '../../Components/Section'
import NewKuwaitLib from '../../Components/NewKuwaitLib'
import PopularReleases from '../../Components/PopularReleases'
import KuwaitLib from '../../Components/KuwaitLib'
import previcon from "../../images/pecIcon.png"
import nexticon from "../../images/nextIcon.png"
import HelpSec from '../../Components/HelpSec'
import CardSlider from '../../Components/CardSlider'
import Footer from '../../Utility/Footer'

const Home = () => {
    // const fun1=()=>(

    // )
    return (
        <div>
            <BeforNav />
            <NavBar />
            <KuwaitLib />
            <Section />
            <NewKuwaitLib />
            <PopularReleases />
            <HelpSec />
            <Footer />
        </div>
    )
}

export default Home