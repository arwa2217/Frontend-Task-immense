import React from 'react';
import styles from "./button.module.scss";

const Button = ({ handleClick, buttonName, customClass , type , disabled }) => {
  return (
    <button  className={[styles.button, customClass].join(" ")} type={type}
        disabled={disabled}  onClick={() => {
           handleClick && handleClick();
        }}>
      {buttonName}
    </button>
  );
};

export default Button;
