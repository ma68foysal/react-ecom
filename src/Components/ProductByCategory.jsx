import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../context/context';
import { Banner } from '../util/banner';


function ProductByCategory({active,img}) {

    const cartItems = useContext(CartItem)
    const {item, setItem} = cartItems
    // const [img ,setImg]=useState(Banner[0].img[2])
    
   
    const excerpt = (str) => {
        if (str.length > 20) {
          str = str.substring(0, 20) + "...";
        }
        return str;
    };

    const [category,setCategory]=useState([])
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${active}`)
        .then(res=>res.json())
        .then(data=>setCategory(data.products))
      },[active])

      
    function handleClick(product){
      const itemI =item.findI((itemI)=>itemI.id === product.id)
      if(itemI >= 0){
        item[itemI].cartQty+=1
  
      }else{
        const temp ={...product, cartQty:1}
        item.push(temp)
        setItem(item)
        sessionStorage.setItem("selectedProduct",JSON.stringify(item))
      }
     
    }
    const navigate = useNavigate()
    function viewProduct (product){
      navigate(`/single-product/${product.title}`)
      sessionStorage.setItem("productView",JSON.stringify(product))
      
    }
  return (
    <div style={{width:'100%',height:'100%', margin:'auto',paddingBottom:'20px',}}
     className='d-flex flex-wrap'>
        <div style={{width:'40%',height:'100%',}}>
            
            <div className='m-auto w-75'>
              <img className='w-100' src={img} alt="" />
            </div>
        </div>

        <div style={{width:'60%',height:'100%',borderLeft: '1px solid #555',
    borderBottom: '1px solid #555',padding:'8px'}} className='d-flex flex-wrap'>
        {category?.map((product,i)=> 
        <>
        <div className="col-lg-4 mt-2 d-flex" key={product.id}>
        <div className="category-slide" key={product.id}>
        <div className='slide-img'><img src={product.thumbnail} className="product_img" alt="..."/></div>
         <div className="card-body p-1">
          <h5 className="card-title">{excerpt(product.title)}</h5>
          <p className="card-text">{excerpt(product.description)}</p>
          <div className='d-flex justify-content-between'>
          <p className='price slide-price'>{`$${product.price}`}</p>
          

          </div>
          <div className='d-flex justify-content-between p-1'>

          <button className="btn btn-primary" 
          onClick={()=>handleClick(product)}>Add To Cart 
          </button>
          <a className="btn btn-primary ms-2" onClick={()=>viewProduct(product)}>View Details</a>
          </div>

          
        </div>
          </div>
    
        </div>
        
        </>
    )}
    <div className="col-lg-4 ">
      <div className='view-all-btn-box'>

          <a className='view-all-btn' href="">View All </a>
      </div>
        </div>
        </div>
     


     
    </div>
  )
}

export default ProductByCategory
