import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function Navbar(props) {
  return (
    <nav id="navbar">
      <span id="app_name">Project Tracker</span>
      <span className="nav_item">
        <Link to="/">Summary</Link>
      </span>
      <span className="nav_item">
        <Link to="/schedule">Schedule</Link>
      </span>
      <span className="login-nav">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <a href="" onClick={() => localStorage.removeItem('user')}>Logout</a>
      </span>
      <span className="nav_item">Logged in as:</span>
    </nav>
  )
}
