/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./HideView.css";

export const HideView = ({ property1, style }) => {
  return (
    <img
      className={`hide-view ${property1}`}
      style={style}
      alt="Property see"
      src={property1 === "hide" ? "src/static/img/property-1-hide.svg" : "src/static/img/property-1-see.svg"}
    />
  );
};

HideView.propTypes = {
  property1: PropTypes.oneOf(["hide", "see"]),
};
