import React, { useContext } from 'react'
import { CartItem } from '../context/context';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Slider({product}) {
  const cartItems = useContext(CartItem)
  const {item, setItem} = cartItems
  const excerpt = (str) => {
    if (str.length > 20) {
      str = str.substring(0, 20) + "...";
    }
    return str;
  };
  function handleClick(product){
    const itemIndex =item.findIndex((itemIndex)=>itemIndex.id === product.id)
    if(itemIndex >= 0){
      item[itemIndex].cartQty+=1

    }else{
      const temp ={...product, cartQty:1}
      item.push(temp)
      setItem(item)
      sessionStorage.setItem("selectedProduct",JSON.stringify(item))
    }
   
  }
  
  return (
    

      
      <div className="slide" key={product.id}>
        <div className='slide-img'><img src={product.thumbnail} className="product_img" alt="..."/></div>
         <div className="card-body">
          <h5 className="card-title">{excerpt(product.title)}</h5>
          <p className="card-text">{excerpt(product.description)}</p>
          <div className='d-flex justify-content-between'>
          <p className='price slide-price'>{`$${product.price}`}</p>
          <button className="slider-btn" 
          onClick={()=>handleClick(product)}>Add To Cart 
          
          </button>

          </div>
          
        </div>
          </div>
          

    
    
  )
}

export default Slider