import React from 'react'

import "./transactions.css"

import img1 from "../../images/Logo_7.png"
import img2 from "../../images/Group_8.png"

const Transactions = () => {
    return (
        <section className="t_section">
            <section className="t_row">
                <section className="col_1">
                    <p className="t_text">CORE FEATURES</p>
                    <p className="t_header">Secure Payment Transaction System with #1 Ranking</p>
                    <p className="t_desc">
                        Get your secure debit card today to make all online transactions seamlessly and with ease and
                        avoid every problems possible and become the best version of yourself.
                    </p>
                    <button className="t_btn">Learn More</button>
                </section>
                <section className="col_2">
                    <img src={img1} alt="" className='img_1'/>
                    <img src={img2} alt="" className='img_2'/>
                </section>
            </section>
        </section>
    )
}

export default Transactions