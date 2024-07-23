/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./shop-header.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="row">
      <div className="shop-header">
        <a className="logo text-dark" href="#">
          ReStore
        </a>
        <a href="#" className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </a>
      </div>
    </header>
  );
};

export default ShopHeader;
