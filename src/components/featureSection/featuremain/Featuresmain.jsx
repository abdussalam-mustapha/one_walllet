import React from 'react'
import "./featuresmain.css"

import phone from "../../../images/Group_8.png"

const Featuresmain = () => {

    const featuresDesc = [
        {
            id: 0,
            img: phone,
            title: "Smart Features",
            desc: "There are a lot of smart features for african users and users all over the world"
        },
        {
            id: 1,
            img: phone,
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
                <p className="u_title">FEATURES THAT WOULD MAKE THIS APP EVEN BETTER TO PLEASE YOU</p>
                <section className="card_box">
                    {
                        featuresDesc.map((val, id) => {
                            return (
                                <div className="card" key={id}>
                                    <img src={phone} alt="" className="icon" />
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