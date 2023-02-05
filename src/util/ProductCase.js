import React from 'react'

function ProductCase({children}) {
  return (
    <div className='container'>
    <div className='row'>
    {children}
    </div>
  </div>
  )
}

export default ProductCase