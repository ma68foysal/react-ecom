import React, { useEffect, useState } from 'react'

import ProductCase from '../util/ProductCase';
import Product from './Product';
import Cart from './shared/Cart';
import SingleProductPage from './SingleProductPage';


function Products() {
  const [products , setProduct]=useState([]);


 useEffect(()=>{
   fetch('https://dummyjson.com/products')
   .then(res => res.json())
   .then((data)=>setProduct(data.products));
 }, [])

  return (
    <div>
      
      <ProductCase>
        
    {
      products?.map((singleProduct,i)=> 
      <>
        <Product singleProduct={singleProduct} key={i} />
        
      </>
      )}
    </ProductCase>
    </div>
  )
}

export default Products