import React from 'react'
import "./about.css"

import AboutCols from './aboutCols/AboutCols'

import img1 from "../../images/Logo_5.png"
import img2 from "../../images/Logo_3.png"
import img3 from "../../images/Logo_4.png"
import img4 from "../../images/Logo_6.png"
import img5 from "../../images/Logo_9.png"
import img6 from "../../images/Logo_4.png"
import img7 from "../../images/Logo_9.png"
import img8 from "../../images/Logo_10.png"
import img9 from "../../images/Logo_11.png"

const About = () => {
    return (
        <section className="about">
            <AboutCols />
            {/* <section className="cols_1_2">
                <section className="col_1">
                    <p className="a_feat">UNIQUE FEATURES</p>
                    <p className="col_1_header">Connect and Store all kinds of Cards</p>
                    <p className="a_desc">
                        Get your cards and connect and make seamless transactions worldwide
                        by making use of the unique features of our card today.
                    </p>
                    <button className="a_btn btn">Learn More</button>
                </section>
                <section className="col_2">
                    <img src={img1} alt="" className="img_1" />
                    <img src={img2} alt="" className="img_2" />
                    <img src={img3} alt="" className="img_3" />
                    <img src={img4} alt="" className="img_4" />
                    <img src={img5} alt="" className="img_5" />
                    <img src={img6} alt="" className="img_6" />
                    <img src={img7} alt="" className="img_7" />
                    <img src={img8} alt="" className="img_8" />
                    <img src={img9} alt="" className="img_9" />
                </section>
            </section> */}
        </section>
    )
}

export default About