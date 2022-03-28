import React from 'react';
import Teams from './Teams';
import './App.scss';

export default function User() {
  console.log("user??", JSON.parse(localStorage.user));
  return (
    <div>
      <h1>Hello World</h1>
      <Teams />
    </div>
  )
}