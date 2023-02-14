

import React, { useEffect, useState } from 'react'
import ReactCardSlider from 'react-card-slider-component';

function sliderClick(e){
    e.scrollLeft = e.scrollLeft + 500
}




function CategorySlides() {
    const[category,setCategory]=useState([])
    const {products}=category
    const [product, setPrtoduct]=useState([])
    console.log(product);
    

    useEffect(()=>{
    fetch('https://dummyjson.com/products/category/smartphones')
    .then(res => res.json())
     .then(data=> setCategory(data.products))
    },[])
     const slides = [
        {image:'',title:"This is a title" ,description:"This is a description",clickEvent:sliderClick},
        {image:"https://picsum.photos/600/500",title:"This is a second title",description:"This is a second description",clickEvent:sliderClick},
        {image:"https://picsum.photos/700/600",title:"This is a third title",description:"This is a third description",clickEvent:sliderClick},
        {image:"https://picsum.photos/500/400",title:"This is a fourth title",description:"This is a fourth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/200/300",title:"This is a fifth title",description:"This is a fifth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/800/700",title:"This is a sixth title",description:"This is a sixth description",clickEvent:sliderClick},
        {image:"https://picsum.photos/300/400",title:"This is a seventh title",description:"This is a seventh description",clickEvent:sliderClick},
    ]
    
  return (
    
    <div style={{width:'77%',margin:'auto'}}>
        {category?.products?.map((item)=><ReactCardSlider slides={item}/>)}
    <ReactCardSlider slides={slides}/>

    </div>
  )
}

export default CategorySlides