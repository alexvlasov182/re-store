import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";
import "./app.css";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={2} total={115.65} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  );
};

export default App;
