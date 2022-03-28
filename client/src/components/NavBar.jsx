import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { Avatar, Stack } from "@mui/material";

export default function Navbar(props) {
  return (
    <nav id="navbar">
      <div className="nav_wrapper">
      <span id="app_name">Simpli</span>
      <span className="nav_item">
        <Link to="/">Summary</Link>
      </span>
      <span className="nav_item">
        <Link to="/scheduler">Scheduler</Link>
      </span>
      </div>
      <span className="login_nav">
        {!props.user && <Link to="/register">Register</Link>}
        {!props.user && <Link to="/login">Login</Link>}
        {props.user && <a href="" onClick={() => localStorage.removeItem('user')}>Logout</a>}
        {props.user && <Link to="/user"><span className="login_user"><Stack direction="row"><Avatar sx={{width: 24, height: 24}} src="https://avatars.githubusercontent.com/u/89871393?v=4"/> {props.user}</Stack></span></Link>}
      </span>
    </nav>
  )
}
