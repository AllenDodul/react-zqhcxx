import React from "react";
import "./style.css";

//Import All components
import Nav from './Nav';
import Cart from './Cart';
import ProductList from './ProductList';

const App = ()=>{
  return(
    <div>
      <Nav />
      <div className="page-content">
        <ProductList />
        <Cart />
      </div>
    </div>
  )
}
export default App;