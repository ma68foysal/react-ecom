import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/style.css'


function ShopHero({setQuery}) {
  const style={
    category:{
      with:'200px',
      height:'200px',
    }
  }
  function handleChange(e){
    setQuery(e.target.value)
  }
  return (
    <>
    <div className=" shop-fluid">
  <div className="container Shop-hero-box d-flex align-items-center">
    <div className='text-center w-100' >
    <h1 className="display-4 shop-hero-title">Find Your Gadget</h1>
    <p className='shop-hero-text'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    <input type="text" placeholder='Search' className='search-box' onChange={handleChange} />
    <Link to="/shop" className='shop-hero-btn'>Search</Link>
    </div>
    
  </div>
</div>

      
      </>
  )
}

export default ShopHero