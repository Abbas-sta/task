import "../css/navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { UseDispatch, useDispatch } from "react-redux";
import { setSelectedCategory } from "../features/productSlice";

const Navbar = ({ navtext, categories, cart, currentCategory }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setToggle(true);
  };

  const closeWindow = () => {
    if (toggle) {
      setToggle(false);
    }
  };

  const handleSelectCategory = (e, category) => {
    dispatch(setSelectedCategory(category));
  };
  return (
    <>
      <div className="container text-center p-3">
        <Link className="linking1" to="/"><h1 className="nav-text">{navtext}</h1></Link>
      </div>
      <div className="web-home-navbar-section">
        <div className="web-home-navbar-firstdiv"></div>
        <GiHamburgerMenu className="ham-icon-nav" onClick={handleToggle} />
        <div
          className={`${toggle ? "ham-disply" : "web-home-navbar-seconddiv"}`}
        >
          <ul className="web-home-navbar-ul">
            {categories && categories.length > 0 ? (
              categories.map((cat) => {
                return (
                  <li className="web-home-navbar-li" key={cat}>
                    <Link
                      className="linking"
                      style={{ textTransform: "capitalize" }}
                      onClick={(e) => handleSelectCategory(e, cat)}
                      to="/productlisting"
                    >
                      {cat}
                    </Link>
                  </li>
                );
              })
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="web-home-navbar-butoon">
          <FaRegUser className="nav-icon" />
          <Link className="linking" to="/checkout">
            <MdOutlineShoppingCart className="nav-icon" />
            {cart.length}
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
