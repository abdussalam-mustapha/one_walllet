import React from 'react'
import Featuresmain from './featuremain/Featuresmain'
import Features from './features/Features'



const FeatureSection = () => {
  return (
    <section className="feat_section">
        <Features />
        <Featuresmain />
    </section>
  )
}

export default FeatureSection