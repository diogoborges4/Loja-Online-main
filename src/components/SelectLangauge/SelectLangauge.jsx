/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./SelectLangauge.css";

export const SelectLangauge = ({
  style,
  vectorStyle,
  vector = "/src/static/img/vector-3.png",
}) => {
  return (
    <div className="select-langauge" style={style}>
      <div className="english-united">English (united States)</div>
      <img className="img" alt="Vector" src="/src/static/img/vector-2.svg" />
    </div>
  );
};

SelectLangauge.propTypes = {
  vector: PropTypes.string,
};
