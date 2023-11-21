import React from 'react';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';

function Navbar() {
  let activeLink = {
    color: "#3a444d",
    fontSize: "20px",
    fontWeight: "bold"
  };
  let inActiveLink = {
    color: "#3a444d",
    fontSize: "18px",
    fontWeight: "semi-bold"
  };

  return (
    <nav style={{backgroundColor:"#ffffff"}} className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-2" style={activeLink} to="/">
          Audi Booking
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
          <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close">
          </button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={inActiveLink}
                  activeClassName="active"
                  to="/"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={inActiveLink}
                  activeClassName="active"
                  to="/about"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={inActiveLink}
                  activeClassName="active"
                  to="/products"
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={inActiveLink}
                  activeClassName="active"
                  to="/team"
                  aria-current="page"
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={inActiveLink}
                  activeClassName="active"
                  to="/blog"
                  aria-current="page"
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={inActiveLink}
                  activeClassName="active"
                  to="/contact"
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
