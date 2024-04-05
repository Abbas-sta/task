import React, { useState, useEffect } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import "./../css/product.css";
import { all } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productAPI";
import { setCart, setProductNumber } from "../features/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const fetchProduct = useSelector((items) => items.product) || {};
  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the thunk to fetch products
  }, []);

  console.log("datafetch =>", fetchProduct);
  const {
    products,
    filteredProducts,
    currentPage,
    productsPerPage,
    totalPages,
    categories,
    productNumber,
    currentCategory,
    cart,
  } = fetchProduct;

  // new functions

  const handleAddToCart = (e, pid) => {
    const item = filteredProducts.filter((fp) => fp["id"] == pid);
    dispatch(setCart(item[0]));
  };

  const handleProductNumber = () => {
    const current = productNumber;
    const newproductNumber = Number(current) + Number(productsPerPage);
    dispatch(setProductNumber(newproductNumber));
  };

  console.log("productNumber: ", productNumber);

  const productsToShow = filteredProducts.slice(
    productNumber,
    productNumber + productsPerPage
  );

  return (
    <>
      <Navbar
        navtext="urban"
        categories={categories}
        cart={cart}
        currentCategory={currentCategory}
      />
      <div className="container p-3">
        <h1 className="product-text">Tops</h1>
      </div>
      <div className="listing-main-div">
        {
          // productsFetched
          // ?
          productsToShow.map((product) => (
            <div className="product" key={product.id}>
              {" "}
              {/* Add a unique key for each product */}
              <div className="product-img">
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={product.images[0]}
                  alt={product.name}
                />{" "}
                {/* Add image URL and alt text */}
              </div>
              <div><h4 className="product-h4">{product.title}</h4></div>
              <div><h5 className="product-h5">${product.price}</h5></div>
             <div> <button
                className="product-btn"
                onClick={(e) => handleAddToCart(e, product["id"])}
              >
                Add to cart
              </button></div>
            </div>
          ))
          // :
          // <>Loading...</>}
        }
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBlock: "10px",
        }}
      >
        <button
          style={{ width: "20%" }}
          className="product-btn"
          disabled={totalPages > 1 ? false : true}
          onClick={handleProductNumber}
        >
          Load More
        </button>
      </div>
      <Footer footerData="© 2024 URBAN E-RETAIL LIMITED All Rights Reserved." />
    </>
  );
};

export default React.memo(Product);
