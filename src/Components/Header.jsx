import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="logo">OLX - Clone</h3>
        </Link>

        {/* <img
          className="logo"
          src="data:image/png;base64,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"
          alt="logo"
        /> */}
      </div>{" "}
      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/svg/483/483356.svg"
          alt="search-icon"
        />
        <input placeholder="search" />
        <button className="search-btn">search</button>
        {/* add search Results
               TODO ------------------->
              */}
      </div>
      <div className="right-nav">
        <div className="nav-links">
          <ul>
            <Link to="/login">
              <li id="login">Log in</li>
            </Link>
            <li id="register">Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
