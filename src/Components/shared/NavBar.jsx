import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartInfo } from '../../context/context'

function NavBar() {
  const cartItem = useContext(CartInfo)
  const {openCart,setOpeanCart}=cartItem
  function handleCart(){
    setOpeanCart(!openCart)
  }
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto  mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Shop</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sumsung</a></li>
            <li><a className="dropdown-item" href="#">Apple</a></li>
            
            <li><a className="dropdown-item" href="#">MI</a></li>
          </ul>
        </li>
       
      </ul>
     <div>
        <button onClick={handleCart}>Cart</button>
     </div>
    </div>
  </div>
</nav>
</>
  )
}

export default NavBar