import React from 'react'
import Featuresmain from './featuremain/Featuresmain'
import Features from './features/Features'

import "./featuresection.css"



const FeatureSection = () => {
  return (
    <section className="f_section">
        <Features />
        <Featuresmain />
    </section>
  )
}

export default FeatureSection