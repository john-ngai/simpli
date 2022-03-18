import './App.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");
  const [state, setState] = useState({
    projects: [],
    deliverables: [],
    tasks: [],
    teams: [],
    users: [],
  });

  

  useEffect(() => {
    axios.get('/users')
    .then(res => {
      // console.log(res.data) 
      setState(prev => ({...prev, users: res.data}))
      console.log(state.users)
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
