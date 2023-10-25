import React, { useState } from "react";
import "./Navbar.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="nav-logo">
            <a href="#" className="nav-logo-link">
              <h4 className="logo text-bold">
                IlhamAms.<span className="text-red">dev</span>
              </h4>
            </a>
          </div>

          <div className="nav-menu">
            <ul
              id="menu"
              className={this.state.clicked ? "#menu active" : "#menu"}
            >
              <li className="menu-items">
                <a href="#home" className="menu-items-link">
                  Home
                </a>
              </li>
              <li className="menu-items">
                <a href="#about" className="menu-items-link">
                  About
                </a>
              </li>
              <li className="menu-items">
                <a href="#portfolio" className="menu-items-link">
                  Project
                </a>
              </li>
              <li className="menu-items">
                <a href="#contact" className="menu-items-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="responsive-menu" onClick={this.handleClick}>
            {this.state.clicked ? (
              <AiOutlineCloseSquare className="icon" />
            ) : (
              <HiOutlineMenuAlt2 className="icon" />
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
