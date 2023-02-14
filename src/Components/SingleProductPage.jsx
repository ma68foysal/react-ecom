import React, { useContext, useState } from 'react'
import { CartItem } from '../context/context'
import '../Style/style.css'
import ReactImageMagnify from 'react-image-magnify';

function SingleProductPage() {
  
  const productView=JSON.parse(sessionStorage.getItem('productView'))

  const cartItems = useContext(CartItem)
  const {item, setItem} = cartItems
    function handleClick(){
      const itemIndex =item.findIndex((itemIndex)=>itemIndex.id ===productView.id)
    if(itemIndex >= 0){
      item[itemIndex].cartQty+=1

    }else{
      const temp ={...productView, cartQty:1}
      item.push(temp)
      setItem(item)
      sessionStorage.setItem("selectedProduct",JSON.stringify(item))
    }
    }

  const [img , setImg]=useState(productView.images[0])
    function handleHover(productIMG,i){
      setImg(productIMG)
    }
  
  return (
    <div>
    
    {
       productView ? 
       <div className="container">
        <div className="row">

        <div className="col-lg-6">
          <div className='d-flex'>
          <div>
           {
           productView.images.map((productIMG ,i)=>
           
           <div onMouseOver={()=>handleHover(productIMG,i)}>
           
          <img className='product-img' src={productIMG} alt="" />
           </div>
              
           )
           
           }
          </div>
       <div className="ms-2" key={productView.id}>
       <ReactImageMagnify {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: img
              },
              largeImage: {
                  src: img,
                  width: 1000,
                  height: 1200
              },
              isActivatedOnTouch:true
          }} />
       
         </div>
         {/* ./card */}
          </div>
          
        </div>
        {/* ./col-lg-4 left */}
        <div className="col-lg-4">
       <div className="" key={productView.id}>
        <div className="card-body">
         <h5 className="card-title">{productView.title}</h5>
         <p className="card-text">{productView.description}</p>
         <div className='d-flex justify-content-between'>
         <p className='price'>{`$${productView.price}`}</p>
         <p className='price'>{productView.rating}</p>
         </div>
         <a href="#" className="btn btn-primary" onClick={handleClick}>Add To Cart</a>
         </div>
         {/* ./card-body */}
         </div>
         {/* ./card */}
        </div>
        {/* ./col-lg-4 right */}
        </div>
        {/* row */}
       </div>
      :<h1>go to hell</h1>
    }
    
    </div>
  )
}

export default SingleProductPage