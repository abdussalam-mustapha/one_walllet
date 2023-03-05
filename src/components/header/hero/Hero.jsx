import React from 'react'
import "./hero.css"

import phoneImg from "../../../images/image_1.svg"

const Hero = () => {
  return (
    <section className='hero_section'>
        <section className="col_1">
            <p className="h_text">A safer way to keep your cards</p>
            <p className="h_desc">This platform aids you store your cards for future use</p>
            <div className="c1_btn-section">
                <button className="btn_1 btn">Download App</button>
                <button className="btn_2 btn">Learn More</button>
            </div>
        </section>
        <section className="col_2">
            <img src={phoneImg} alt="" className="col_2-img" id="phone_img"/>
        </section>
    </section>
  )
}

export default Hero