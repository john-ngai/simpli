import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Scheduler from './components/Scheduler';
import Register from './components/Register';
import Login from './components/Login';
// import User from './user';
import reportWebVitals from './reportWebVitals';
import User from './components/User';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="scheduler" element={<Scheduler />}/>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="user" element={<User />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
