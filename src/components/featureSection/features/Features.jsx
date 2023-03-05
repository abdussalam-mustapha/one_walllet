import React from 'react'

import icon1 from "../../../images/Shape_1.png"
import icon2 from "../../../images/Forma_1.png"
import icon3 from "../../../images/crown.png"
import icon4 from "../../../images/briefcase.png"

import "./features.css"

const Features = () => {

    const features = [
        {
            id: 0,
            img: icon1,
            title: "Fast Performance",
            backgroundColor: "purple",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 1,
            img: icon3,
            title: "Fast Performance",
            backgroundColor: "rgb(11, 228, 243)",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 2,
            img: icon4,
            title: "Fast Performance",
            backgroundColor: "rgb(160, 247, 203)",
            desc: "The product is optimized to give the best posisible performance among digital products"
        },
        {
            id: 3,
            img: icon2,
            title: "Fast Performance",
            backgroundColor: "rgb(245, 150, 7)",
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

                    const {img, title, desc} = val

                        return (
                            <section className="card" key={id}>
                                <div className="img_cont" style={{background: features[id].backgroundColor}}>
                                <img src={img} alt="img" />
                                </div>
                                <p className='c_t'>{title}</p>
                                <p>{desc}</p>
                            </section>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Features