import React, { useState } from 'react'
import { CartInfo } from './context'


function CartInfoProvider({children}) {
    const [openCart,setOpeanCart]=useState(false)
  const [count, setCount]=useState()

    const cartItems ={
        openCart,
        setOpeanCart,
        count,
        setCount
        
    }
  return (
    <CartInfo.Provider value={cartItems}>
         {children}
    </CartInfo.Provider>
  )
}

export default CartInfoProvider