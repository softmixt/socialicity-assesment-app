import React from 'react';
import { NavLink } from 'react-router-dom';

export function CustomerTopMenu() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Baghina Radu Adrian</NavLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#customerTopNavbarCollapse"
          aria-controls="customerTopNavbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="customerTopNavbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink to="/customer/users" className="nav-link">
                <i className="fa-solid fa-users" />
                {' '}
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
