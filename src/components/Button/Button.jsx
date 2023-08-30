import PropTypes from "prop-types";
import React from "react";
import { RightBlack } from "../Icons/ArrowRight";
import { ShoppingCart } from "../Icons/ShoppingCard";
import "./Button.css";

export const Button = ({
  label = "Button",
  CTAIcon = true,
  label1 = true,
  icons = true,
  buttonType,
  buttonState,
  style,
}) => {
  return (
    <div className={`button ${buttonType} ${buttonState}`} style={style}>
      {icons && (
        <ShoppingCart
          color={
            buttonType === "primary" &&
            ["enabled", "focused", "hover"].includes(buttonState)
              ? "white"
              : buttonState === "disabled"
              ? "#807D7E"
              : "#8A33FD"
          }
          style={{
            height: "20px",
            minWidth: "20px",
            position: "relative",
          }}
        />
      )}

      {label1 && <div className="text-wrapper">{label}</div>}

      {CTAIcon && (
        <RightBlack
          color={
            buttonType === "primary" &&
            ["enabled", "focused", "hover"].includes(buttonState)
              ? "white"
              : buttonState === "disabled"
              ? "#807D7E"
              : "#8A33FD"
          }
          style={{
            height: "20px",
            minWidth: "20px",
            position: "relative",
          }}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  CTAIcon: PropTypes.bool,
  label1: PropTypes.bool,
  icons: PropTypes.bool,
  buttonType: PropTypes.oneOf(["primary", "text", "secondary", "elevated"]),
  buttonState: PropTypes.oneOf(["disabled", "focused", "hover", "enabled"]),
};
