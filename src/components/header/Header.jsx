import React from 'react'
import Hero from './hero/Hero'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <div className='header'>
        <Navbar/>
        <Hero />
    </div>
  )
}

export default Header