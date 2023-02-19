import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import SliderComponent from "react-slick";




function CategorySlides() {
 
  const [category,setCategory]=useState([])
  // console.log(category)
  useEffect(()=>{
    fetch('https://dummyjson.com/products/category/womens-watches')
    .then(res=>res.json())
    .then(data=>setCategory(data.products))
  },[])
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className:'slideBG'
  };
   
  return (
    <div className='d-flex justify-content-between'>
  
    <div style={{width:'90%',height:'100%', margin:'auto',paddingTop:'20px',paddingBottom:'20px',}}>
      <h3>TRENDING NOW</h3>
      <SliderComponent {...settings}>

        {category?.map((product , i)=> <Slider key={product.id} product={product}/>)}
      </SliderComponent>

    </div>
    </div>
  )
}

export default CategorySlides