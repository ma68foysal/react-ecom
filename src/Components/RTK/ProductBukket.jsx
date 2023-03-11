import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { products } from './slices/SliceTwo'


function ProductBukket() {
  const Items=useSelector((slice)=>slice.sliceTwo.state)

    const dispatch= useDispatch()
    const [count, setCount]=useState(3)
    function handleClick () {
      setCount((pre)=> pre + 3)
    }
    useEffect(()=>{
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>dispatch(products(data.products)));
    },[])
    const item = Items?.slice(0,count)

  return (
    <>
  
      
       
       <div className="container">

       <div className="row">
        
        <div className="col-lg-10 m-auto justify-content-start d-flex flex-wrap" >
          { item?.map((product , g)=> 
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
       
   <button onClick={handleClick}>Load More</button>
    </>
  )
}

export default ProductBukket