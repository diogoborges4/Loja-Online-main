import React from "react";
import "./Home.css";
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { Search } from "../../components/Icons/Search";
import { SelectLangauge } from "../../components/SelectLangauge/SelectLangauge";
import { Link } from "react-router-dom";
import { Google } from "../../components/Icons/Google/Google";
import { Twitter } from "../../components/Icons/Twitter";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Logo />
        <button className="btn-search">
          <Search />
          Search
        </button>

        <p className="p-linguage">
          <SelectLangauge />
        </p>
        <button className="btn-login">
          <Link className="a-login" to={"/shop"}>
            Login
          </Link>
        </button>
        <button className="btn-sign">Sign Up</button>
      </div>
      <div className="main-img">
        <img
          className="imgLogin-1"
          src="src\static\img\bert-b-rhnff6hb41s-unsplash-1.png"
          alt=""
        />
        <div className="sign">
          <h1>Sign In Page</h1>
          <button className="btn-google">
            <Google />
            <p>Continue With Google</p>
          </button>
          <button className="btn-twitter">
            <Twitter />
            <p>Continue With Twitter</p>
          </button>
          <h4 className="or">OR</h4>

          <input type="text" placeholder="User name ou email address" />
          <input type="text" placeholder="Password" />
          <button className="btn-sign2">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
