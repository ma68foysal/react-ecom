import React, { useEffect, useState } from 'react'
import { banner } from '../util/banner';


function ProductByCategory({active}) {
   
    console.log(active);
    

    const excerpt = (str) => {
        if (str.length > 20) {
          str = str.substring(0, 20) + "...";
        }
        return str;
    };

    const [category,setCategory]=useState([])
    console.log(category);
    const [banner,setBanner]=useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${active}`)
        .then(res=>res.json())
        .then(data=>setCategory(data.products))
      },[active])

    // useEffect(()=>{
    //     fetch(`${banner}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    //   },[])

  return (
    <div style={{width:'100%',height:'100%', margin:'auto',paddingBottom:'20px',}}
     className='d-flex flex-wrap'>
        <div style={{width:'40%',height:'100%',}}>
            {/* {banner.map((currentimg,i)=>
            console.log(currentimg)
            
            )} */}
            {/* <img src={currentimg} alt="" /> */}
        </div>

        <div style={{width:'60%',height:'100%',}} className='d-flex flex-wrap'>
        {category?.map((product,i)=> 
        <div className="col-lg-4 mt-2 d-flex" key={product.id}>
        <div className="slide" key={product.id}>
        <div className='slide-img'><img src={product.thumbnail} className="product_img" alt="..."/></div>
         <div className="card-body">
          <h5 className="card-title">{excerpt(product.title)}</h5>
          <p className="card-text">{excerpt(product.description)}</p>
          <div className='d-flex justify-content-between'>
          <p className='price slide-price'>{`$${product.price}`}</p>

          </div>
          
        </div>
          </div>
    
        </div>
    )}
        </div>
     


     
    </div>
  )
}

export default ProductByCategory
