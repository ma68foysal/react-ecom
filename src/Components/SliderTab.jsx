import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductCategory } from '../context/context';
import { Banner } from '../util/banner';
import ProductByCategory from './ProductByCategory';



const TabBtn = styled.button `
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  transition:0.5s;
  ${({ active }) =>
    active &&
    `
    background-color:#0d6efd;
    color:#fff;
    border-radius:8px;
    opacity: 1;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  width:60%;
  margin-left:auto;
  border: 1px solid #999;
  padding: 10px;
`;

   
function SliderTab() {
    const [img ,setImg]=useState(Banner[0].img[2])
    
    const categoryContext=useContext(ProductCategory)

    const {category,setCategory}=categoryContext
    const Category = category.slice(0,5)

    const [active, setActive] = useState(Category[0]);

    useEffect(()=>{
      fetch('https://dummyjson.com/products/categories')
      .then(res=>res.json())
      .then(data=>setCategory(data))
    },[])
    function hndle(categoryName,i){
      setActive(categoryName)
      setImg(Banner[0].img[i])
    }
    return (
      <>
        <div className='category-tab'>
        <h2 className='ms-auto'>Shop By Category</h2>
        <ButtonGroup>
            {Category.map((categoryName,i) => (
            <TabBtn
                key={categoryName}
                active={active === categoryName}
                onClick={() => 
                hndle(categoryName,i)
                
                }
            >
                
                {categoryName}
            </TabBtn>
            ))}
        </ButtonGroup>
      
        </div>
         <ProductByCategory active={active} img={img}/> 
         </>
    );
    }
    ProductByCategory.defaultProps={
      active:"smartphones"

    }
// Usage
export default SliderTab