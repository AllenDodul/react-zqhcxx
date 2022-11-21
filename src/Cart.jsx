import React from "react";
import {useState} from 'react';
import "./style.css";
import './Cart.css';

const Cart = ()=>{
  const [cartItem, setCartItem] = useState([]);
  return(
    <div className="shopping-cart">
      <h4>Shopping Cart</h4>
      
    </div>
  )
}
export default Cart;