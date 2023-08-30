import React, { useEffect } from "react";
import { useState } from "react";
import { createClient } from "pexels";
import Navbar from "../../components/Navbar/Navbar";
import "./Woman.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Woman = () => {
  const [menStyle, setMenStyle] = useState([]);
  const [collect] = useState("wwznldv");

  useEffect(() => {
    window.scrollTo(0, 0);
    const client = createClient(
      "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa"
    );

    client.collections
      .media({ id: "wwznldv", per_page: 12 })
      .then((media) => setMenStyle(media));
  }, []);

  console.log(menStyle);
  return (
    <div>
      <Navbar />
      <h1 className="h1-woman">Woman Style</h1>
      <div className="men-styles">
        {!menStyle.media && (
          <img src="/src/static/img/Infinity-3s-200px (1).gif" alt="" />
        )}
        {menStyle.media &&
          menStyle.media.map((men) => (
            <Link to={`/product/${men.id}`} props={"wwznldv"}>
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

export default Woman;
