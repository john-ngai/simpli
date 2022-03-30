import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";
import { Avatar, Stack } from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}

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
        {props.user && <a href="/login" onClick={() => localStorage.removeItem('user')}>Logout</a>}
        {props.user && <Link to="/user"><span className="login_user"><Stack direction="row"><Avatar sx={{width: 24, height: 24}} src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"/> {props.user}</Stack></span></Link>}
      </span>
    </nav>
  )
}
