import React from 'react'

import icons from "../../../images/image_1.svg"

import "./features.css"

const Features = () => {

    const features = [
        {
            id: 0,
            img: icons,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 1,
            img: icons,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 2,
            img: icons,
            title: "Fast Performance",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 3,
            img: icons,
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
                                <img src={val.img} alt="img" />
                                <p>{val.title}</p>
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