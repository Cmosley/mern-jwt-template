import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className="nav-wrapper">
      <ul id="nav-mobile" className="right">
      {user ?
        <>
          <li className="nav-link">Welcome, {user.name}</li>
          {/* <li><NavLink to="/users" className="nav-link">Users</NavLink></li> */}
        </>
      :
        <>
          <li><NavLink to="/login" className="nav-link">Log In</NavLink></li>
          {/* <li><NavLink to="/users" className="nav-link">Users</NavLink></li> */}
          <li><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
        </>
      }
      </ul>
    </nav>
  )
}

export default NavBar;
