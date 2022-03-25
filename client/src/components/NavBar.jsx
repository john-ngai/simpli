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
      <span className="login_nav">
        {!props.user && <Link to="/register">Register</Link>}
        {!props.user && <Link to="/login">Login</Link>}
        {props.user && <a href="" onClick={() => localStorage.removeItem('user')}>Logout</a>}
      </span>
      <span className="nav_item">Logged in as: {props.user}</span>
    </nav>
  )
}
