
import {useEffect,useState}from 'react'
import ProductCase from '../util/ProductCase';
import Hero from './Hero';
import Product from './Product';
import Cart from './shared/Cart';
import ShopHero from './ShopHero';
import SingleProductPage from './SingleProductPage';


function Products() {
  const [products , setProduct]=useState([]);
  const [query,setQuery]=useState("")


      useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((data)=>setProduct(data.products));
      }, [])

  return (
    <div>
      <ShopHero setQuery={setQuery}/>
      <ProductCase>
        
    {
      products?.filter(product=>product.title.toLowerCase().includes(query)).map((singleProduct)=> 
      <>
        <Product singleProduct={singleProduct} key={singleProduct.id} />
        
      </>
      )}
    </ProductCase>
    </div>
  )
}

export default Products