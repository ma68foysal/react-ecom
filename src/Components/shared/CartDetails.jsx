import React, { useContext } from 'react'
import { CartItem } from '../../context/context'

function CartDetails() {
  const cartItems = useContext(CartItem)
  const{item , setItem}=cartItems
  function inreasePrice(){
    let current = item.price
   return current + item.price
  }

  return (
    <> 
    <div className='cart_Body' >
     {
      item.map((cartProduct)=>
      <div className='cart_details'>
       <div className='cartItemBox d-flex justify-content-between'>
         <div className='d-flex '>
           <img src={cartProduct.thumbnail} style={{width:'100px'}} alt="" />
           <div className='content'>
             <p>{cartProduct.title}</p>
             <p>{cartProduct.description}</p>
           </div>
         </div>
         <div className='d-flex'>
           <div className='d-flex align-items-center'>
             <button className='inrease' onClick={inreasePrice}>+</button>
             <p>{cartProduct.price}</p>
             <button className='decrise me-2'>-</button>
           </div>
           <div className='d-flex align-items-center'>
             <button>remove</button>
           </div>
         </div>
       </div>
    
    </div>
      )
       
    }        
    </div>
            
       
        
    </>
  )
}

export default CartDetails