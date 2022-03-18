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
      axios.get('/projects'),
      axios.get('/deliverables'),
      axios.get('/tasks'),
      axios.get('/teams'),
      axios.get('/users')
    ])
    .then((all) => {
      const [projects, deliverables, tasks, teams, users] = all;
      setState(prev => ({...prev, projects: projects.data, deliverables: deliverables.data, tasks: tasks.data, teams: teams.data, users: users.data}))
    })
  }, [])
  return (
    <div className="App">
      <h1>Hello World</h1>
      {console.log(state)}
      {/* {state.users[0].name} */}
    </div>
  );
}

export default App;
