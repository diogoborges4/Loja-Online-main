import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import "./Men.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Heart13 } from "../../components/Icons/Heart";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cart/slice";

const Men = () => {
  const [menStyle, setMenStyle] = useState([]);
  const [slideImg, setSlideImg] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa"
    );

    client.collections
      .media({ id: "bcczuzq", per_page: 12 })
      .then((media) => setSlideImg(media));

    client.collections
      .media({ id: "vl3t7oo", per_page: 12 })
      .then((media) => setMenStyle(media));
  }, []);

  console.log(slideImg);
  return (
    <div>
      <Navbar />
      <h1 className="h1-men">Men Style</h1>
      <div className="men-styles">
        {!menStyle.media && (
          <img src="/src/static/img/Infinity-3s-200px (1).gif" alt="" />
        )}
        {menStyle.media &&
          menStyle.media.map((men) => (
            <Link to={`/product/${men.id}`} props={men.id}>
              <div key={men.id} className="menCards">
                <img src={men.src.portrait} alt="img" />
                <h3>{men.alt}</h3>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Men;
