import React from 'react'

import "./aboutCols.css"
import icon from "../../../images/Logo_6.png"

const AboutCols = () => {

    const aboutItems = [
        {
            id: 0,
            img: icon,
            title: "Best Services",
            desc: "Get the best quality services in africa and the world, from top professionals"
        },
        {
            id: 1,
            img: icon,
            title: "Best Services",
            desc: "Get the best quality services in africa and the world, from top professionals"
        },
        {
            id: 2,
            img: icon,
            title: "Best Services",
            desc: "Get the best quality services in africa and the world, from top professionals"
        },
    ]

    return (
        <section className="about_cols">
            <p className="a_text">QUALITY PREMIUM</p>
            <p className="about_header">Why onewallet is the best for you</p>
            <div className="about_cols-col">
                {
                    aboutItems.map((val, id) => {
                        return (
                            <div className="card">
                                <div className="cols">
                                    <div className="logo"><img src="" alt="" /></div>
                                </div>
                                <div className="d_box">
                                    <img src={icon} alt="" />
                                    <p>{val.title}</p>
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AboutCols