
import {useEffect,useState}from 'react'
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
      products?.map((singleProduct)=> 
      <>
        <Product singleProduct={singleProduct} key={singleProduct.id} />
        
      </>
      )}
    </ProductCase>
    </div>
  )
}

export default Products