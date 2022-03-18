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
    Promise.all([
      axios.get('/users')
    ])
    .then((all) => {
      console.log(all[0].data) 
      setState(prev => ({...prev, users: all[0].data}))
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      {console.log(state.users[0].name)}
      <p>{state.users[0].email}</p>
    </div>
  );
}

export default App;
