import React, { useEffect, useState } from 'react'
import '../Style/style.css'

function Sumsung() {
    const [value, setValue]=useState(0)
    const [categoryProduct,setCategoryProduct]=useState([])
    console.log(categoryProduct);
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/smartphones`)
        .then(res=>res.json())
        .then(data=>setCategoryProduct(data.products))
      },[value])
      function handleChang(e){
        setValue(e.target.value)
      }
  return (
    <div>
        <div className="container">

       <div className="row">
        <div className="col-lg-4">
            <input type="checkbox" />
            <label >Assending</label> <br />
            <input type="checkbox" />
            <label >decending</label> <br />
            <input type="range" min={0} max={100} step={1} value={value} onChange={handleChang} />
            <p>{value}</p>
        </div>
        <div className="col-lg-8 d-flex ss" >
            {
                categoryProduct.map((product , i)=>
                
                <div className='cart_detail' key={product.id}>
                <div className="card">
         <img src={product.thumbnail} className="product_img" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className='d-flex justify-content-between'>
          <p className='price'>{`$${product.price}`}</p>
          <p className='price'>{product.rating}</p>
          </div>
          
          
          
        </div>
          </div>
             
             </div>
                
                
                )
            }
        </div>
       </div>

        </div>
    </div>
  )
}

export default Sumsung