import React, { useEffect, useState } from 'react'
import Slider from './Slider'
import SliderComponent from "react-slick";




function CategorySlides() {
  const style={
    width:'50%',
    backgroundColor:'darkgrey',
    backgroundImage:"url('https://picsum.photos/600')",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:"cover"

  }
  const [category,setCategory]=useState([])
  // console.log(category)
  useEffect(()=>{
    fetch('https://dummyjson.com/products/category/smartphones')
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

        {category?.map((Item , i)=> <Slider key={Item.id} item={Item}/>)}
      </SliderComponent>

    </div>
    </div>
  )
}

export default CategorySlides