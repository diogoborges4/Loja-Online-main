import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideHome.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        background: "black",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

const SlideHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="img121">
          <div className="text-img">
            <h5>T-shirt / Tops</h5>
            <h1>Summer Value Pack</h1>
            <h4>cool / colorful / comfy</h4>
            <Link to={"/summer"}>Shop Now</Link>
          </div>
        </div>
        <div className="img121-1">
          <div className="text-img">
            <h5>Urban Shirts</h5>
            <h1>Live in confort FLAT 60% OFF</h1>
            <Link to={"/winter"}>Shop Now</Link>
          </div>
        </div>
        <div className="img121-2">
          <div className="text-img">
            <h1>Black Sweatshirt with...</h1>
            <h4>Explore Now</h4>
            <Link to={"/winter"}>Shop Now</Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SlideHome;
