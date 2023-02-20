import React from 'react'
import Hero from '../Hero'
import SliderTab from '../SliderTab'
import CategorySlides from '../CategorySlides.jsx'
import Footer from '../shared/Footer'

function Home() {
  return (
    <>
    <Hero/>
    <CategorySlides/>
    <SliderTab/>
    <div className='container'>
     <img src="./footerBanner.png" alt="" />
    </div>
    <Footer/>
    
    </>
  )
}

export default Home