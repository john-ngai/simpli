import './App.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("nothing");

  useEffect(() => {
    axios.get('/users')
    .then(res => {
      console.log(res.data[0]) 
      setData(res.data[0].email)
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{!data ? "Loading.." : data}</p>
    </div>
  );
}

export default App;
