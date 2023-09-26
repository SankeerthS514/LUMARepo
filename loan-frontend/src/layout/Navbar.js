import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const userId = location.state && location.state.userId;

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-dark fixed-top navbar-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Loan Management Application
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {userId && (
                <li className="nav-item">
                  <span className="nav-link">
                    Welcome, (ID: {userId})
                  </span>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;