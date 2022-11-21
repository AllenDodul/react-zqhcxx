import React from "react";
import "./style.css";
import "./Nav.css";

const Nav = ()=>{
  return(
    <nav>
      <div className="logo-container">
        <h3 className="logo">Name</h3>
      </div>
      <div className="link-container">
        <ul>
          <li>Cart</li>
          <li>Product List</li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;