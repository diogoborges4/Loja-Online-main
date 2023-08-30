import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Icons/Search";
import { Heart13 } from "../Icons/Heart";
import { User1 } from "../Icons/User";
import { Logo } from "../Logo/Logo";
import { ShoppingCart } from "../Icons/ShoppingCard";
import { useSelector } from "react-redux";
import { selectProductCount } from "../../redux/cart/cart.selectors";

const Navbar = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsCount = useSelector(selectProductCount);

  return (
    <div>
      <div className="header">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="pages-link">
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/menProducts"}>Men</Link>
          <Link to={"/womanProducts"}>Woman</Link>
          <Link to={"/summer"}>Summer</Link>
          <Link to={"/winter"}>Winter</Link>
        </div>
        <button className="btn-search">
          <Search />
          Search
        </button>
        <div className="btn-icons">
          <button className="btn-heart">
            <Heart13 />
          </button>
          <button className="btn-user">
            <User1 />
          </button>
          <button className="btn-cart">
            <Link to={"/cart"}>
              <ShoppingCart />
              {productsCount}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
