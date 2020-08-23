import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "./DrawerToggleButton";
import logo from "../assets/pfm-logo.svg";
import { NavLink } from "react-router-dom";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">
            <img src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <NavLink exact activeClassName="current" to="/pickforme/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/pickforme/create">
                Create
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/pickforme/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
