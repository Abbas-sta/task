import "../css/home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productAPI";
// import { fetchHomePageData } from "../features/homeAPI";
import Footer from "../component/Footer";
const backendUrl = "https://run.mocky.io/v3";
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
  const [homeData, setHomeData] = useState(undefined);
  const [dataFetched, setDataFetched] = useState(false);
  const dispatch = useDispatch();

  const fetchProduct = useSelector((items) => items.product) || {};

  // const fetchHomePage = useSelector((data) => data.home) || {};

  useEffect(() => {
    // dispatch(fetchHomePageData())
    dispatch(fetchProducts()); // Dispatch the thunk to fetch products
  },[]);

  useEffect(() => {
    fetchHomePageData()
  },[])

  const fetchHomePageData = async() => {
    const response = await axios.get(`${backendUrl}/48f264ae-db1c-402b-987f-8e9ee653d10b`)
    if (response.statusText == "OK") { // Check for successful response
    
      var data = response.data;
      const stringified = JSON.stringify(data)
      const parsed = JSON.parse(stringified)
      setHomeData(parsed)
      setDataFetched(true)
    } else {
      
    }
  }

  console.log("homeData: ", homeData)

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % 3; // Assuming 3 divs (adjust for more)
    setCurrentIndex(nextIndex);
  };

  const handlePrevClick = () => {
    const prevIndex = currentIndex === 0 ? 2 : currentIndex - 1; // Handle first image case
    setCurrentIndex(prevIndex);
  };

  const { categories, cart } = fetchProduct;

  return (
    <>
      <Navbar navtext="urban" categories={categories} cart={cart} />
      <div className="home-img"></div>
      <div className="car-section">
        <div className="car-box">
          <div className="car-sub-section">
            <h3 className="car-sub-section-h3">Bestseller</h3>
          </div>
          <div className="car-sub-icons">
            <IoIosArrowBack className="home-icons" onClick={handlePrevClick} />

            <IoIosArrowForward
              className="home-icons"
              onClick={handleNextClick}
            />
          </div>
        </div>
        <div className="img-car-box">
          {currentIndex === 0 ? (
            <div className="img1-car" key={currentIndex}>
              <div className="img-div-home">
                <img
                  className="home-img"
                  src={require("../../assets/product1.jpg")}
                />{" "}
              </div>
              <div className="img-car-seconddiv-second">
                <div className="img2-car">
                  <img
                    className="home-img-2"
                    src={require("../../assets/product1.jpg")}
                  />
                </div>
                <div className="img2-car">
                  <img
                    className="home-img-2"
                    src={require("../../assets/product1.jpg")}
                  />
                </div>
              </div>
            </div>
          ) : currentIndex === 1 ? (
            <div className="img-car-seconddiv" key={currentIndex}>
              <div className="img2-car" key={currentIndex - 1}>
                <img
                  className="home-img-3"
                  src={require("../../assets/product1.jpg")}
                  alt="Product 2"
                />
              </div>
            </div>
          ) : (
            <div className="img-car-seconddiv" key={currentIndex}>
              <div className="img2-car" key={currentIndex - 1}>
                <img
                  className="home-img-3"
                  src={require("../../assets/product1.jpg")}
                />
              </div>
              <div className="img2-car" key={currentIndex}>
                <img
                  className="home-img-3"
                  src={require("../../assets/product1.jpg")}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer footerData="© 2024 URBAN E-RETAIL LIMITED All Rights Reserved." />
    </>
  );
};

export default React.memo(Home);
