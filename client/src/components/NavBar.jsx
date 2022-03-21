import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function Navbar(props) {
  // console.log(props.users[0]);
  // const user = props.users[0].name;
  return (
    <nav id="navbar">
      <span id="app_name">Project Tracker</span>
      
      <span className="nav_item">Summary</span>
      {/* <Link to="/schedule" className="nav_item">Schedule</Link> */}
      <span className="nav_item">Schedule</span>

      <span className="nav_item">
        <Link to="/projects/new">New Project</Link>
      </span>

      <span className="login-nav">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/logout"> Logout</Link> */}
      </span>
      <p className="nav_item">Logged in as:</p>
    </nav>
  )
}
