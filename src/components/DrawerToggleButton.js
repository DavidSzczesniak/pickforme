import React from "react";
import "./DrawerToggleButton.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.click}>
    <FontAwesomeIcon icon={faBars} size="2x" />
  </button>
);

export default DrawerToggleButton;
