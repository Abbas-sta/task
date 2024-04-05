import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./E-commerce-Store/home/Home";
import React from "react";
import Product from './E-commerce-Store/product/Product'
import Checkout from "./E-commerce-Store/checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/productlisting" element={<Product/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default React.memo(App);
