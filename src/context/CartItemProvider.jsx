import React, { useState } from 'react'
import { CartItem } from './context'

function CartItemProvider({children}) {
 
    const [item, setItem]=useState([])
    
    const items ={
        item,
        setItem,
        
        
    }

  return (
    <CartItem.Provider value={items}>
         {children}
    </CartItem.Provider>
  )
}

export default CartItemProvider