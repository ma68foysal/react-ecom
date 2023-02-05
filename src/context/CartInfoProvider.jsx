import React, { useState } from 'react'
import { CartInfo } from './context'


function CartInfoProvider({children}) {
    const [openCart,setOpeanCart]=useState(false)
    const cartItems ={
        openCart:openCart,
        setOpeanCart:setOpeanCart
        
    }
  return (
    <CartInfo.Provider value={cartItems}>
         {children}
    </CartInfo.Provider>
  )
}

export default CartInfoProvider