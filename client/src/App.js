import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:8080/users').then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
