import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="top-nav">
        <h1 className="nav-tab">Project Tracker</h1>
        <span className="nav-tab">Summary</span>
        <span className="nav-tab">Schedule</span>
        <span className="login-nav">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          {/* <Link to="/logout"> Logout</Link> */}
        </span>
      </div>
    </nav>
  )
}
