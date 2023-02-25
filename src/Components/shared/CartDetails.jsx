import React, { useContext, useState } from 'react'
import { CartItem } from '../../context/context'
import '../../Style/style.css'
import { Scrollbars } from 'react-custom-scrollbars-2';

function CartDetails() {
  
  
  const cartItems = useContext(CartItem)
  const{item , setItem}=cartItems
  const[totalPrice,setTotalPrice]=useState()
  const selectedProduct = JSON.parse(sessionStorage.getItem('selectedProduct'))

  
  const [qty , setQty]=useState(1)

  function removeItem (index){
    const temp = item.filter( (filitem , i)=>i !== index )
     return setItem(temp) 

   }
  
     
  
  const Increament = (product) => {
    const currElement =item.map(cureitem => cureitem.id === product.id ? {
      ...cureitem,
      cartQty: cureitem.cartQty +=1
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
    
    <div className='cart_Body' >
    <Scrollbars style={{ width: '60%', height: 300,margin: '50px auto' }}>
     {item.length > 0 ?
     item.map((item , index)=>
      <div className='cart_details' key={item.id}>
       <div className='cartItemBox d-flex justify-content-between'>
         <div className='d-flex '>
           <img src={item.thumbnail} style={{width:'100px'}} alt="" />
           <div className='content'>
             <p>{item.title}</p>
             <p>{item.description}</p>
           </div>
         </div>
         <div className='d-flex'>
           <div className='d-flex align-items-center'>
             <button className='inrease' onClick={()=>Increament(item)}>+</button>
             <p>{item.cartQty}</p>
             <button className='decrease me-2' onClick={()=>Decreament(item)}>-</button>
           </div>
           <div className='d-flex align-items-center'>
            
             <button onClick={()=>removeItem(index)}>remove</button>
             <p>{item.price}</p>
           </div>
         </div>
       </div>
    
    </div>
    
      )
      :<div className='container'>
      <div className=' cart-detals-box'>
        <div className='not-found text-center'>
          <h1>Ops! Here's Nothing To See.....</h1>
        </div>
      </div>
    </div>
      
       
    } 
     </Scrollbars> 
     <div className="container">
   
     </div>
    </div>
    
            
     
        
    </>
  )
}

export default CartDetails