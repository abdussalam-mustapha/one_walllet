import React from 'react'

import icons from "../../images/Group_8.png"
import img1 from "../../images/twitter.png"
import img2 from "../../images/facebook.png"
import img3 from "../../images/instagram.png"
import img4 from "../../images/youtube.png"

import "./footer.css"


const Footer = () => {
    return (
        <section className="footer">
            <section className="f_row">
                <section className="col_1">
                    <p className="f_header">Manage Your Cards on the go</p>
                    <p className="f_desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid facere inventore fugit cum odio dolorum, quod
                        voluptas nisi voluptate, libero nobis, asperiores perspiciatis nostrum?
                        Aspernatur distinctio voluptate laboriosam ipsam laudantium!
                    </p>
                    <div className="m_icons">
                        <p>On the App</p>
                        <div className="icons">
                            <div className="icon_1"></div>
                            <div className="icon_2"></div>
                        </div>
                    </div>
                </section>
                <section className="col_2">
                    <img src={icons} alt="" />
                    <img src={icons} alt="" />
                </section>
            </section>
            <section className="f_bar">
                <p className="f_bar-text">&copy; 2023 One wallet all right reserved</p>
                <div className="socials">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </section>
        </section>
    )
}

export default Footer