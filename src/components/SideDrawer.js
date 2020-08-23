import React from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li onClick={props.drawerClickHandler}>
          <NavLink exact activeClassName="current" to="/pickforme/home">
            Home
          </NavLink>
        </li>
        <li onClick={props.drawerClickHandler}>
          <NavLink activeClassName="current" to="/pickforme/create">
            Create
          </NavLink>
        </li>
        <li onClick={props.drawerClickHandler}>
          <NavLink activeClassName="current" to="/pickforme/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
