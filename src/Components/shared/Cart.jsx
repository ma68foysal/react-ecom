import React, { useContext, useEffect, useState } from 'react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartInfo, CartItem } from '../../context/context'
import '../../Style/style.css'
import { Scrollbars } from 'react-custom-scrollbars-2';


function Cart() {

  const cart = useContext(CartInfo)
  const {openCart,setOpeanCart}=cart
  const cartItems = useContext(CartItem)
  const{item,setItem}= cartItems
  // console.log(item);
//   let sum = 0 
// for(let i = 0; i <= item.length; i++ ) {
    
//     sum = i
// }
//  sum
  function removeItem (index){
    const temp = item.filter( (filitem , i)=>i !== index )
     return setItem(temp) 

   }
 
  const navigate = useNavigate()
  function handleClick (){
    setOpeanCart(!openCart)
    navigate('/cart-details')
  }
  const [qty , setQty]=useState(1)
 

 
  const Increament = (product) => {
    const currElement =item.map(cureitem => cureitem.id === product.id ? {
      ...cureitem,
      cartQty: cureitem.cartQty +=1,
      // price:cureitem.cartQty*price
      
    } : cureitem);
    setQty(currElement)
     
   
  };
  const Decreament = (product) => {
    const currElement =item.map(cureitem => cureitem.id === product.id ? {
      ...cureitem,
      cartQty:  cureitem.cartQty > 1 ? cureitem.cartQty -=1: cureitem.cartQty
    } : cureitem);
    setQty(currElement)
     
   
  };

  return (
    <> 
    <div className='cartBody' style={{ display:!openCart ?'none':'block'}} >
    
    <div className='cart'>
    <Scrollbars style={{ width: '100%', height: 300 }}>
   { 
   item.length > 0 ? item.map((cartProduct,index)=>
   <div className='cartItemBox mt-2 d-flex justify-content-between' key={cartProduct.id}>
          <div className='d-flex '>
            <img src={cartProduct.thumbnail} style={{width:'100px'}} alt="" />
            <div className='ms-2'>
              <p>{cartProduct.title}</p>
              <p>{cartProduct.description}</p>
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <div className='d-flex align-items-center ms-2 me-2'>
              <button className='inrease' onClick={()=>Increament(cartProduct)}>+</button>
              <p className='m-0 p-1'>{cartProduct.cartQty}</p>
              <button className='decrease' onClick={()=>Decreament(cartProduct)}>-</button>
              <p>{cartProduct.price}</p>
            </div>
            <div>
              
              <button className='remove-btn' onClick={()=>removeItem(index)}>remove</button>
            </div>
          </div>
        </div>
      
      ):
      <div className=' cart-box'>
        <div className='not-found text-center'>
          <h1 className='not-found-text'>Ops! Here's Nothing To See.....</h1>
        </div>
      </div>
    
    }
      </Scrollbars>
   <div className='text-center mt-3'>
   <button onClick={handleClick}>View CArt</button>
   </div>
    
     </div> 
         
    </div>
            
       
        
    </>
  )
}

export default memo(Cart) 