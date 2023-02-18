import React, { useEffect, useState } from 'react'
import { ProductCategory } from './context'

function CategoryProvider({children}) {
  const [category,setCategory]=useState([])

   const categories={
    category:category,
    setCategory:setCategory
   }

    useEffect(()=>{
        fetch('https://dummyjson.com/products/categories')
        .then(res=>res.json())
        .then(data=>setCategory(data))
      },[])
      

  return (
    <ProductCategory.Provider value={categories}>
    {children}
   </ProductCategory.Provider>
  )
}

export default CategoryProvider