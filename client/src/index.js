import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Schedule from './routes/Schedule';
import Schedule2 from './routes/Schedule2';
import Register from './routes/register';
import Login from './routes/login';
import NewProject from './routes/project_new';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/Schedule" element={<Schedule />} /> */}
      <Route path="/Schedule" element={<Schedule2 />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="projects/new" element={<NewProject />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
