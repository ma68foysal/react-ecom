import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductCategory } from '../context/context';
import { Banner } from '../util/banner';
import ProductByCategory from './ProductByCategory';



const Stab = styled.button `
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
    console.log(category);
    const Category = category.slice(0,5)

    const [active, setActive] = useState(Category[0]);

    useEffect(()=>{
      fetch('https://dummyjson.com/products/categories')
      .then(res=>res.json())
      .then(data=>setCategory(data))
    },[])
    function hndle(type,i){
      setActive(type)
      setImg(Banner[0].img[i])
    }
    return (
      <>
        <div style={{marginTop:'50px'}}>
        <ButtonGroup>
            {Category.map((type,i) => (
            <Stab
                key={type}
                active={active === type}
                onClick={() => 
                hndle(type,i)
                
                }
            >
                
                {type}
            </Stab>
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