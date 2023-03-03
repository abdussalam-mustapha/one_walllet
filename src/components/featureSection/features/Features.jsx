import React from 'react'

import icon1 from "../../../images/Shape_1.png"
import icon2 from "../../../images/Forma_1.png"

import "./features.css"

const Features = () => {

    const features = [
        {
            id: 0,
            img: icon1,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 1,
            img: icon1,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 2,
            img: icon2,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 3,
            img: icon2,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
    ]

    return (
        <section className="feat_section">
            <p className="abt_feat">WHAT'S THE FUN THING</p>
            <p className="feat_title">Basic features of products</p>
            <section className="f_cols">
                {
                    features.map((val, id) => {
                        return (
                            <section className="card" key={id}>
                                <div className="img_cont">
                                <img src={val.img} alt="img" />
                                </div>
                                <p className='c_t'>{val.title}</p>
                                <p>{val.desc}</p>
                            </section>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Features