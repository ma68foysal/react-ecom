import React, { useEffect, useState } from 'react'
import '../Style/style.css'
import ShopHero from './ShopHero.jsx'

function Sumsung() {
    
    const [categoryProduct,setCategoryProduct]=useState([])
    const priceArr =categoryProduct.map((element)=> element.price);
    const maxPrice =priceArr.reduce((accu, currentvalue)=>Math.max(accu, currentvalue),0)
    const minPrice =Math.min(...priceArr)
    const [value, setValue]=useState(1000)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products`)
        .then(res=>res.json())
        .then(data=>setCategoryProduct(data.products))
      },[value])
      function handleChang(e){
        setValue(e.target.value)
      }
   
    
  return (
    <div>
      <ShopHero/>
        <div className="container">

       <div className="row">
        <div className="col-lg-2">
            <input type="checkbox" />
            <label >Assending</label> <br />
            <input type="checkbox" />
            <label >decending</label> <br />
            <input type="range" min={minPrice} value={value}   max={maxPrice} step={10}  onChange={handleChang} />
            <p>{value}</p>
        </div>
        <div className="col-lg-10 justify-content-start d-flex flex-wrap" >
          {categoryProduct.filter((current)=>current.price <= value).map((product)=>
          <div className="card m-1 cart-width">
          <img src={product.thumbnail} className="product_img" alt="..."/>
          <div className="card-body">
           <h5 className="card-title">{product.title}</h5>
           <p className="card-text">{product.description}</p>
           <div className='d-flex justify-content-between'>
           <p className='price'>{`$${product.price}`}</p>
           <p className='price'>pp</p>
           </div>
         </div>
           </div>
          )}
        
        
             
             
                
                
              
        </div>
       </div>

        </div>
    </div>
  )
}

export default Sumsung