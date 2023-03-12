import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/style.css'


function Hero() {

  return (
    <>
    <div className="jumbotron jumbotron-fluid">
      
  <div className="container d-flex align-items-center h-100">
    <div >
    <h1 className="display-4 hero-title">Find Your Gadget</h1>
    <p className='hero-text'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <Link to="/shop" className='hero-btn'>Shop Now</Link>
    </div>
    
  </div>
</div>
      
      </>
  )
}

export default Hero