import React from "react";
import "./Button.css";

const Button = (props) => (
  <button
    type={props.type}
    onClick={props.click}
    className={`btn-${props.btnStyle}`}
  >
    {props.text}
  </button>
);

export default Button;
