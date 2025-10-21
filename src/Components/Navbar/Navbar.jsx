import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 position-fixed top-0 start-0 end-0 z-3">
        <div className="container">
          <NavLink
            to={""}
            className="navbar-brand text-uppercase text-white fs-2 fw-bold"
          >
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse my-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-lg-0" id="scrol">
              <li className="nav-item">
                <NavLink
                  to={"About"}
                  className={({ isActive }) =>
                    `nav-link text-uppercase fw-bold mx-2 text-white ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"portfolio"}
                  className={({ isActive }) =>
                    `nav-link text-uppercase fw-bold mx-2 text-white ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <a aria-current="page" href="#"></a>
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    `nav-link text-uppercase fw-bold mx-2 text-white ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
