import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListUnorderedIcon } from "@primer/octicons-react";

export default function Navbar(props) {
  const [theme, setTheme] = useState("Light");

  function changeTheme() {
    if (theme === "Light") {
      setTheme("Dark");
      document.body.dataset.bsTheme = "dark";
    } else {
      setTheme("Light");
      document.body.dataset.bsTheme = "light";
    }
  }

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm bg-body-tertiary navbar-inverse shadow p-3 bg-white rounded">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            <span className="h3 mb-0">{props.title}</span>
          </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <ListUnorderedIcon size={24} />
            </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <div style={{"width":"100%"}}>
              <ul className="navbar-nav">
                <li className="navbar-header">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cards">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={changeTheme}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {theme}
            </label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title",
};
