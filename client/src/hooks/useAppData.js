import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const appData = {};

  const [state, setState] = useState({
    project: "Spring Cleaning",
    projects: [],
    deliverables: [],
    tasks: [],
    teams: [],
    users: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('/projects'),
      axios.get('/deliverables'),
      axios.get('/tasks'),
      axios.get('/teams'),
      axios.get('/user'),
    ]).then(/**/)
  })
}