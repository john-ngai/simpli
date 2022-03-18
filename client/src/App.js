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
    axios.get('http://localhost:8080/users')
    .then(res => {

      setState(prev => ({
        ...prev,
        users: res.data
      }));

    })
  }, [])

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <p>{!data.name ? "Loading.." : data.name}</p>  */}
      {console.log(state.users)}
    </div>
  );
}

export default App;
