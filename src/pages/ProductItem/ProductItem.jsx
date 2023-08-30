import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "pexels";
import { StarHalf1 } from "../../components/Icons/StarHalf1";
import { StarOutline2 } from "../../components/Icons/StarOutline2";
import { StarPurple5004 } from "../../components/Icons/StarPurple5004";
import "./ProductItem.css";
import Navbar from "../../components/Navbar/Navbar";
import { Button } from "../../components/Button/Button";
import { ShoppingCart } from "../../components/Icons/ShoppingCard";
import CardsMens from "../../components/CardsMens/CardsMens";
import Footer from "../../components/Footer/Footer";
import CardsWoman from "../../components/CardsMens/CardsWoman";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/action";

const ProductItem = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const heightValue = product.height;
  const realValue = (heightValue / 100).toFixed(2);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchItem() {
      const client = createClient(
        "pJK182Tw7MoTdDvQD3dzdx9jx3Mxyzf9kuniyZ7hFhCUnqWbLL5jI4Xa"
      );

      client.photos.show({ id: id }).then((photo) => setproduct(photo));
    }

    fetchItem();
  }, []);

  const HandleProductClick = () => {
    dispatch(addProductToCart(product));
  };

  console.log(realValue);
  return (
    <div>
      <Navbar />
      {!product.id && (
        <img
          className="loading"
          src="/src/static/img/Infinity-3s-200px (1).gif"
          alt=""
        />
      )}
      {realValue && product.id && (
        <div key={product.id} className="div-principal">
          <img src={product.src.large2x} alt="img" />
          <div className="info-img">
            <h1>{product.alt}</h1>
            <div className="stars">
              <StarPurple5004 />
              <StarPurple5004 />
              <StarPurple5004 />
              <StarPurple5004 />
              <StarHalf1 />
              <p>4.5</p>
            </div>
            <h4>Select Size</h4>
            <div className="btn-size">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <h4>Colors avaliable</h4>
            <div className="btn-color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="11" fill="#3C4242" />
                <circle cx="15" cy="15" r="14.5" stroke="#3F4646" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="11" fill="#EDD146" />
                <circle cx="15" cy="15" r="14.5" stroke="#3F4646" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="11" fill="#EB84B0" />
                <circle cx="15" cy="15" r="14.5" stroke="#3F4646" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <circle cx="15" cy="15" r="11" fill="#9C1F35" />
                <circle cx="15" cy="15" r="14.5" stroke="#3F4646" />
              </svg>
            </div>
            <div className="btn-buy">
              <button className="btn-cart2" onClick={HandleProductClick}>
                Add to cart
              </button>
              <button className="btn-price">${realValue}</button>
            </div>
            <div className="detail-prod">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                  <path
                    d="M15 18.75H30M18 26.25H21M24 26.25H27M17.4 30H27.6C28.4401 30 28.8601 30 29.181 29.7956C29.4632 29.6159 29.6927 29.329 29.8365 28.9762C30 28.5751 30 28.0501 30 27V18C30 16.9499 30 16.4249 29.8365 16.0238C29.6927 15.671 29.4632 15.3841 29.181 15.2044C28.8601 15 28.4401 15 27.6 15H17.4C16.5599 15 16.1399 15 15.819 15.2044C15.5368 15.3841 15.3073 15.671 15.1635 16.0238C15 16.4249 15 16.9499 15 18V27C15 28.0501 15 28.5751 15.1635 28.9762C15.3073 29.329 15.5368 29.6159 15.819 29.7956C16.1399 30 16.5599 30 17.4 30Z"
                    stroke="#3C4242"
                    stroke-width="1.1"
                    stroke-linecap="round"
                  />
                </svg>
                <h3>Secure payment</h3>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                  <path
                    d="M23.8 26.6667V15.4667C23.8 15.2089 23.5985 15 23.35 15H13.45C13.2015 15 13 15.2089 13 15.4667V26.6667C13 26.9244 13.2015 27.1333 13.45 27.1333H14.8M23.8 26.6667C23.8 26.9244 23.5985 27.1333 23.35 27.1333H18.4M23.8 26.6667V18.2667C23.8 18.0089 24.0015 17.8 24.25 17.8H27.2136C27.333 17.8 27.4474 17.8492 27.5318 17.9367L30.8682 21.3967C30.9526 21.4842 31 21.6029 31 21.7266V26.6667C31 26.9244 30.7985 27.1333 30.55 27.1333H29.2M23.8 26.6667C23.8 26.9244 24.0015 27.1333 24.25 27.1333H25.6M14.8 27.1333C14.8 28.1643 15.6059 29 16.6 29C17.5941 29 18.4 28.1643 18.4 27.1333M14.8 27.1333C14.8 26.1024 15.6059 25.2667 16.6 25.2667C17.5941 25.2667 18.4 26.1024 18.4 27.1333M25.6 27.1333C25.6 28.1643 26.4059 29 27.4 29C28.3941 29 29.2 28.1643 29.2 27.1333M25.6 27.1333C25.6 26.1024 26.4059 25.2667 27.4 25.2667C28.3941 25.2667 29.2 26.1024 29.2 27.1333"
                    stroke="#3C4242"
                    stroke-width="1.1"
                  />
                </svg>
                <h3>Free shipping</h3>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                  <path
                    d="M25.6349 30H18.3651C17.3613 30 16.5476 29.2007 16.5476 28.2147V21.5796C16.5476 21.0634 15.9122 20.8049 15.5406 21.1699C15.2014 21.5032 14.6205 21.3203 14.5417 20.8555L14.0248 17.8091C13.9021 17.0857 14.2422 16.3621 14.8825 15.9847L18.1965 14.0315C18.293 13.9746 18.4175 13.9966 18.4878 14.0829C20.2884 16.2938 23.7116 16.2938 25.5122 14.0829C25.5825 13.9966 25.707 13.9746 25.8035 14.0315L29.1175 15.9847C29.7578 16.3621 30.0979 17.0857 29.9752 17.8091L29.4583 20.8555C29.3795 21.3203 28.7986 21.5032 28.4594 21.1699C28.0878 20.8049 27.4524 21.0634 27.4524 21.5796V28.2147C27.4524 29.2007 26.6387 30 25.6349 30Z"
                    stroke="#3C4242"
                    stroke-width="1.1"
                  />
                </svg>
                <h3>Size & fit</h3>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <circle cx="22" cy="22" r="22" fill="#F6F6F6" />
                  <path
                    d="M18.4444 28.2222C18.4444 29.2041 17.6485 30 16.6667 30C15.6848 30 14.8889 29.2041 14.8889 28.2222C14.8889 27.2404 15.6848 26.4444 16.6667 26.4444C17.6485 26.4444 18.4444 27.2404 18.4444 28.2222ZM18.4444 28.2222H25.5556C26.5374 28.2222 27.3333 27.4263 27.3333 26.4444V22.8889M25.5556 15.7778C25.5556 16.7596 26.3515 17.5556 27.3333 17.5556C28.3152 17.5556 29.1111 16.7596 29.1111 15.7778C29.1111 14.7959 28.3152 14 27.3333 14C26.3515 14 25.5556 14.7959 25.5556 15.7778ZM25.5556 15.7778H18.4444C17.4626 15.7778 16.6667 16.5737 16.6667 17.5556V21.1111M30 24.6667L27.6476 22.1398C27.474 21.9534 27.1926 21.9534 27.0191 22.1398L24.6667 24.6667M19.3333 19.3333L16.9809 21.8602C16.8074 22.0466 16.526 22.0466 16.3524 21.8602L14 19.3333"
                    stroke="#3C4242"
                    stroke-width="1.1"
                    stroke-linecap="round"
                  />
                </svg>
                <h3>Free Shipping & Returns</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {product.id && product.alt.includes("Man") ? (
          <CardsMens />
        ) : (
          <CardsWoman />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default ProductItem;
