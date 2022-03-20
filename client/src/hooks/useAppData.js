import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  const appData = {};

  // Default state.
  const [state, setState] = useState({
    project: null,
    projects: [],
    deliverables: [],
    tasks: [],
    teams: [],
    users: [],
  });

  // GET state data.
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
      setState(prev => ({
        ...prev,
        projects: projects.data,
        deliverables: deliverables.data,
        tasks: tasks.data,
        teams: teams.data,
        users: users.data
      }))
    })
  }, [])
  appData.state = state;
  
  const setProject = project => setState({ ...state, project });
  appData.setProject = setProject;
  const setDeliverable = deliverable => setState({ ...state, deliverable });
  appData.setDeliverable = setDeliverable;
  
  // Return an array of deliverables matching the selected project id.
  const getDeliverables = (state, project_id) => {
    const allDeliverables = state.deliverables;
    const selectedDeliverables = [];
    // Loop through each deliverable from state,
    for (const deliverable of allDeliverables) {
      // If the deliverable's project id matches the current project_id,
      if (deliverable.project_id === project_id) {
        // Add the deliverable to the selectedDeliverables array.
        selectedDeliverables.push(deliverable);
      }
    }
    return selectedDeliverables;
  }
  appData.getDeliverables = getDeliverables;

  return appData;
}