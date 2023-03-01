import React from 'react'

import "./learn.css"

const Learn = () => {

    const learnItems = [
        {
            id: 0,
            no: 1,
            title: "Set disbursement instructions",
            desc: "set your card's disbursement value to the best possible one for optimum user experience"
        },
        {
            id: 1,
            no: 2,
            title: "Set disbursement instructions",
            desc: "set your card's disbursement value to the best possible one for optimum user experience"
        },
        {
            id: 2,
            no: 3,
            title: "Set disbursement instructions",
            desc: "set your card's disbursement value to the best possible one for optimum user experience"
        },
        {
            id: 3,
            no: 4,
            title: "Set disbursement instructions",
            desc: "set your card's disbursement value to the best possible one for optimum user experience"
        },
    ]

    return (
        <section className="learn">
            <p className="l_text">WHAT'S THE MAIN THING</p>
            <p className="l_header">Learn how the app works</p>
            <section className="l_cols">
                {
                    learnItems.map((val, id) => {
                        return (
                            <div className="card">
                                <div className="no_circle">
                                    <p className="no">0{val.no}</p>
                                </div>
                                <p>{val.title}</p>
                                <p>{val.desc}</p>
                            </div>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Learn