/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavBar = ({ authUser }) => (

  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
    <div className="container">
      <div className="topbar-left">
        <button className="topbar-toggler">☰</button>
        <Link className="topbar-brand" to="/">
          <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/logo-colour.png`} alt="logo" />
          <img className="logo-inverse" src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`} alt="logo" />
        </Link>
      </div>
      <div className="topbar-right">
        <ul className="topbar-nav nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/articles/create">Write new Article</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {authUser && authUser.user.name}
!
              <i className="fa fa-caret-down" />
            </a>
            <div className="nav-submenu">
              <a className="nav-link" href="page-login.html">My articles</a>
              <a className="nav-link" href>Logout</a>
            </div>
          </li>
          {
                        !authUser
                        && (
                        <li className="nav-item">
                          <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        )
                    }
          {
                        !authUser
                        && (
                        <li className="nav-item">
                          <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        )
                    }

        </ul>
      </div>
    </div>
  </nav>
)

NavBar.propTypes = {
  authUser: PropTypes.shape({
    user: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }),
}

NavBar.defaultProps = {
  authUser: null,
}
