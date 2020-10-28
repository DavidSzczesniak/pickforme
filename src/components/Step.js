import React from "react";
import "./Step.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Step = (props) => (
  <div className="step">
    <FontAwesomeIcon icon={props.icon} size="2x" />
    <h1>{props.title}</h1>
    <p>{props.desc}</p>
  </div>
);

export default Step;
