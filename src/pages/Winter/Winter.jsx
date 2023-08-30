import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./Winter.css";
import AutoPlay from "../../components/Slide/SlideProduct";

const Winter = () => {
  const [menStyle, setMenStyle] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa"
    );

    client.collections
      .media({ id: "5vkowdr", per_page: 12 })
      .then((media) => setMenStyle(media));
  }, []);

  console.log(menStyle);
  return (
    <div>
      <Navbar />
      <div className="h1-slide">
        <h1 className="h1-winter">Winter vibes</h1>
        <div className="title-slide">
          <AutoPlay />
        </div>
      </div>
      {!menStyle.media && (
        <img
          className="loading"
          src="/src/static/img/Infinity-3s-200px (1).gif"
          alt=""
        />
      )}
      <div className="men-styles">
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

export default Winter;
