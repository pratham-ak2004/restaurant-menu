import React  , {useState} from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const bodyElement = document.body;

  const [theme , setTheme] = useState("Light")

  function changeTheme(){
    if(theme === "Light"){
      setTheme("Dark")
      document.body.dataset.bsTheme = "dark"
    }else{
      setTheme("Light")
      document.body.dataset.bsTheme = "light"
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-header">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={changeTheme}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {theme}
            </label>
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