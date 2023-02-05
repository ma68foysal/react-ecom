import react from 'react';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/shared/Cart';
import CartDetails from './Components/shared/CartDetails';
import NavBar from './Components/shared/NavBar';
import SingleProductPage from './Components/SingleProductPage';
import CartInfoProvider from './context/CartInfoProvider';
import CartItemProvider from './context/CartItemProvider';




function App() {
 
  
  
  return (
  <>
  <CartItemProvider>
   <CartInfoProvider>
    <Router>
      <NavBar/>
      <Cart/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart-details' element={<CartDetails/>}/>
        <Route path='/single-product/:id' element={<SingleProductPage/>}/>
      </Routes>
    </Router>
    </CartInfoProvider>
    </CartItemProvider>
    
  </>

  );
}

export default App;
