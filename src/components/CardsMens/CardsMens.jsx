import React from "react";
import { Link } from "react-router-dom";
import "./CardsMen.css";

const CardsMens = () => {
  return (
    <div className="card-div">
      <div className="detalhe">
        <div className="linha"></div>
        <h1>Similar Products</h1>
      </div>

      <div className="ctgory-for-men-img">
        <div className="cfm-1">
          <div className="btn-btn">
            <Link to={"/menProducts"}>
              <h4>Shirts</h4>
              <h6>Explore Now</h6>
            </Link>
          </div>
        </div>
        <div className="cfm-2">
          <div className="btn-btn">
            <Link to={"/menProducts"}>
              <h4>Printed T-Shirts</h4>
              <h6>Explore Now</h6>
            </Link>
          </div>
        </div>
        <div className="cfm-3">
          <Link to={"/summer"}>
            <div className="btn-btn">
              <h4>Plain T-Shirts</h4>
              <h6>Explore Now</h6>
            </div>
          </Link>
        </div>
        <div className="cfm-4">
          <div className="btn-btn">
            <Link to={"/menProducts"}>
              <h4>Polo T-Shirts</h4>
              <h6>Explore Now</h6>
            </Link>
          </div>
        </div>
        <div className="cfm-5">
          <div className="btn-btn">
            <Link to={"/winter"}>
              <h4>Hoodies & Sweetshirt</h4>
              <h6>Explore Now</h6>
            </Link>
          </div>
        </div>
        <div className="cfm-6">
          <div className="btn-btn">
            <Link to={"/winter"}>
              <h4>Jeans</h4>
              <h6>Explore Now</h6>
            </Link>
          </div>
        </div>
        <div className="cfm-7">
          <div className="btn-btn">
            <Link to={"/winter"}>
              <h4>Activewear</h4>
              <h6>Explore Now</h6>
            </Link>
          </div>
        </div>
        <div className="cfm-8">
          <Link to={"/summer"}>
            <div className="btn-btn">
              <h4>Boxes</h4>
              <h6>Explore Now</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsMens;
