import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { useReducer } from 'react'
import { useCallback } from 'react'
import { useContext } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { CartItem } from '../context/context'
import "../Style/style.css"
import Cart from './shared/Cart'

// import style from './product.module.css'

function Product({singleProduct}) {
  const cartItems = useContext(CartItem)
  const {item, setItem} = cartItems
 
  
  function handleClick(){
    const itemIndex =item.findIndex((itemIndex)=>itemIndex.id ===singleProduct.id)
    if(itemIndex >= 0){
      item[itemIndex].cartQty+=1

    }else{
      const temp ={...singleProduct, cartQty:1}
      item.push(temp)
      setItem(item)
      sessionStorage.setItem("selectedProduct",JSON.stringify(item))
    }
   
  }
  
  const navigate = useNavigate()
  
  function viewProduct (){
    navigate(`/single-product/${singleProduct.title}`)
    sessionStorage.setItem("productView",JSON.stringify(singleProduct))
    
  }

  
  return (
    <>
   
  <div className="col-lg-4" ke={singleProduct.id}>
        <div className="card">
         <img src={singleProduct.thumbnail} className="product_img" alt="..."/>
         <div className="card-body">
          <h5 className="card-title">{singleProduct.title}</h5>
          <p className="card-text">{singleProduct.description}</p>
          <div className='d-flex justify-content-between'>
          <p className='price'>{`$${singleProduct.price}`}</p>
          <p className='price'>{singleProduct.rating}</p>
          </div>
          
          <button className="btn btn-primary" 
          onClick={handleClick}>Add To Cart 
          
          </button>
          <a className="btn btn-primary ms-2" onClick={viewProduct}>View Details</a>
          
        </div>
          </div>
  
  </div>
  
  </>
  )
}

export default Product