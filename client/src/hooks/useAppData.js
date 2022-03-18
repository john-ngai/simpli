import { React, useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const appData = {};

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

  appData.state = state;
  
  return appData;
}