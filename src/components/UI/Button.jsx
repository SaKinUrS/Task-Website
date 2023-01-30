import React from "react";
import Loader from "./Loader";

const Button = ({
  children,
  onClickBtn,
  isBought,
  isLoading,
  setIsLoading,
}) => {
  return (
    <button onClick={onClickBtn} className={` btn ${isBought ? "bought" : ""}`}>
      {isBought && (
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237"
            stroke="#F4F6F9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
