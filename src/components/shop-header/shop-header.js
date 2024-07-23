import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="row">
      <div className="shop-header">
        <Link to="/">
          <div className="logo text-dark">ReStore</div>
        </Link>
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            {numItems} items (${total})
          </div>
        </Link>
      </div>
    </header>
  );
};

export default ShopHeader;
