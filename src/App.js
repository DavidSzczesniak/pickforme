import React, { Component } from "react";
import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  // simple toggle to show/hide the side drawer and backdrop components
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // Creates a data-scroll attribute on the html element that can be used in CSS.
    // Uses debouncing to tackle possible performance issues with scroll events.
    const debounce = (fn) => {
      let frame;

      return (...params) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="container">
        <div className="wrapper">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer
            drawerClickHandler={this.drawerToggleClickHandler}
            show={this.state.sideDrawerOpen}
          />
          {backdrop}
          <main>
            <Main />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
