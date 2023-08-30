import React from "react";

export const RightBlack = ({ color = "#3C4242", style }) => {
  return (
    <svg
      className="right"
      style={style}
      fill="none"
      height="30"
      viewBox="0 0 20 20"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15"
        stroke={color}
        color="#3c4242"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const RightWhite = ({ color = "#fff", style }) => {
  return (
    <svg
      className="right"
      style={style}
      fill="none"
      height="30"
      viewBox="0 0 20 20"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15"
        stroke={color}
        color="#3c4242"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
