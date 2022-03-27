import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function Navbar(props) {
  return (
    <nav id="navbar">
      <div className="nav_wrapper">
      <span id="app_name">Simpli</span>
      <span className="nav_item">
        <Link to="/">Summary</Link>
      </span>
      <span className="nav_item">
        {/* <Link to="/schedule">Schedule</Link> */}
        <Link to="/scheduler">Scheduler</Link>
      </span>
      </div>
      <span className="login_nav">
        {!props.user && <Link to="/register">Register</Link>}
        {!props.user && <Link to="/login">Login</Link>}
        {props.user && <a href="" id="login_nav_item" onClick={() => localStorage.removeItem('user')}>Logout</a>}
        {props.user && <span id="login_nav_item">Logged in as: {props.user}</span> }
      </span>
    </nav>
  )
}
