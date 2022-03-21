import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import DevApp from './DevApp'; // Remove test code or change component name to 'App'.
import Register from './routes/register';
import Login from './routes/login';
import NewProject from './routes/project_new';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DevApp />}/>
      <Route path="register" element={<Register />}/>
      <Route path="login" element={<Login />}/>
      <Route path="projects/new" element={<NewProject />}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
