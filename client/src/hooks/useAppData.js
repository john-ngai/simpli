import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  // Container for the state and all helper functions.
  const appData = {};

  // Empty state structure.
  const [state, setState] = useState({
    project: null,
    projects: [],
    deliverable: null,
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

  // Set the currently selected project id.
  const setProject = project => setState({ ...state, project });
  appData.setProject = setProject;

  // Delete the currently selected project id.
  const deleteProject = (state, project_id) => {
    // Declare a new projects array to hold the updated projects data.
    const projects = [];
  
    // Loop through each project from state,
    for (const project of state.projects) {
      // If the project's id is not equal to the selected project id,
      if (project.id !== project_id) {
        // Add the project to the projects array.
        projects.push([project]);
      }
    }
    // console.log('project_id =', project_id); // Remove test code.

    
  }
  appData.deleteProject = deleteProject;

  // Set the currently selected deliverable id.
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

  // Return an array of tasks matching the selected deliverable id.
  const getTasks = (state, deliverable_id) => {
    const allTasks = state.tasks;
    const selectedTasks = [];
    // Loop through each task from state,
    for (const task of allTasks) {
      // If the task's deliverable id matches the current deliverable_id,
      if (task.deliverable_id === deliverable_id) {
        // Add the task to the selectedTasks array.
        selectedTasks.push(task);
      }
    }
    return selectedTasks;
  }
  appData.getTasks = getTasks;

  return appData;
}
