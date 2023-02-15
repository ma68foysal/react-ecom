import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Slider({item}) {
  const excerpt = (str) => {
    if (str.length > 20) {
      str = str.substring(0, 20) + "...";
    }
    return str;
  };
  
  return (
    

      
      <div className="slide" key={item.id}>
        <div className='slide-img'><img src={item.image} className="product_img" alt="..."/></div>
         
         <div className="card-body">
          <h5 className="card-title">{excerpt(item.title)}</h5>
          <p className="card-text">{excerpt(item.description)}</p>
          <div className='d-flex justify-content-between'>
          <p className='price slide-price'>{`$${item.price}`}</p>
          </div>
        </div>
          </div>
          

    
    
  )
}

export default Slider