import React from 'react'
import "./featuresmain.css"

import phone from "../../../images/Group_8.png"
import img1 from "../../../images/crown.png"
import img2 from "../../../images/briefcase.png"

const Featuresmain = () => {

    const featuresDesc = [
        {
            id: 0,
            img: img1,
            title: "Smart Features",
            desc: "There are a lot of smart features for african users and users all over the world"
        },
        {
            id: 1,
            img: img2,
            title: "Secure Comments",
            desc: "There are a lot of smart features for african users and users all over the world"
        }
    ]

    return (
        <section className="featuresmain">
            <section className="col_1">
                <img src={phone} alt="" className="col_1-img" />
            </section>
            <section className="col_2">
                <p className="u_feat">UNIQUE FEATURES</p>
                <p className="u_title">Features that would make this app even better to please you</p>
                <section className="card_box">
                    {
                        featuresDesc.map((val, id) => {
                            return (
                                <div className="card" key={id}>
                                    <div className="img_cont">
                                        <img src={val.img} alt="" className="icon" />
                                    </div>
                                    <div className="details">
                                        <p className="c_title">{val.title}</p>
                                        <p className="c_desc">{val.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </section>
    )
}

export default Featuresmain