import { useState, useEffect } from "react";
import axios from "axios";

export default function useAppData() {
  // Container for the state and all helper functions.
  const appData = {};

  // Empty state structure.
  const [state, setState] = useState({
    project: null,
    projects: {},
    deliverable: null,
    deliverables: {},
    tasks: {},
    teams: {},
    users: {},
    showDelivForm: false,
    showTaskForm: false
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

  // Save a new project.
  const saveProject = newProject => {
    const project = newProject.id;
    const projects = {
      ...state.projects,
      [newProject.id]: newProject
    };
    setState({ ...state, project, projects });
  }
  appData.saveProject = saveProject;

  // Edit an existing project.
  const editProject = project => {  
    const { id, name, description, team_id } = project;
    const projects = {
      ...state.projects,
      [id]: {
        ...state.projects[project.id], // Get the missing count key.
        id,
        name,
        description,
        team_id
      }
    }
    setState({ ...state, projects });
  }
  appData.editProject = editProject;

  // Delete the currently selected project id.
  const deleteProject = project_id => {
    // Declare a new projects object to hold the updated projects data.
    const projects = {};
    // Loop through each project from state,
    for (const project of Object.values(state.projects)) {
      // If the project's id is not equal to the selected project id,
      if (project.id !== project_id) {
        // Add the project to the projects object.
        projects[project.id] = project;
      }
    }
    return axios.delete(`/projects/${project_id}`)
      .then(() => setState({ ...state, projects }));  
  }
  appData.deleteProject = deleteProject;

  // Set the currently selected deliverable id.
  const setDeliverable = deliverable => setState({ ...state, deliverable });
  appData.setDeliverable = setDeliverable;

  // Set showDelivForm 
  const setShowDelivForm = showDelivForm => setState({ ...state, showDelivForm });
  const showDelivForm = () => {
    setShowDelivForm(!state.showDelivForm)
  }
  appData.showDelivForm = showDelivForm

  // Set showTaskForm 
  const setShowTaskForm = showTaskForm => setState({ ...state, showTaskForm });
  const showTaskForm = () => {
    setShowTaskForm(!state.showTaskForm)
  }
  appData.showTaskForm = showTaskForm

  // Return selected project object.
  const getSelectedProject = state => {
    const project_id = state.project;
    const projects = Object.values(state.projects);
    for (const project of projects) {
      if (project.id === project_id) {
        return project;
      }
    }
  }
  appData.getSelectedProject = getSelectedProject;

  // Return an array of deliverables matching the selected project id.
  const getDeliverables = (state, project_id) => {
    const allDeliverables = Object.values(state.deliverables);
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

  // Return the selected deliverable object.
  const getSelectedDeliverable = state => {
    const deliverable_id = state.deliverable;
    const deliverables = Object.values(state.deliverables);
    for (const deliverable of deliverables) {
      if (deliverable.id === state.deliverable) {
        return deliverable;
      }
    }
  }
  appData.getSelectedDeliverable = getSelectedDeliverable;

  // Return an array of tasks matching the selected deliverable id.
  const getTasks = (state, deliverable_id) => {
    const allTasks = Object.values(state.tasks);
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

  // toggle deliverables priority
  const setDeliverablesPriority = (id) => {
    const allDeliverables = Object.values(state.deliverables);

    let updDeliverable;

    allDeliverables.forEach(deliverable => {
      if (deliverable.id === id) {

        deliverable.priority = !deliverable.priority;
        updDeliverable = deliverable;
      }
    });

    const deliverables = {
      ...state.deliverables,
      [id]: updDeliverable
    }

    axios.put(`/deliverables/${id}`, updDeliverable)
      .then(() => {
        setState({ ...state, deliverables });
      })
      .catch(err => console.log(err));
  }
  appData.setDeliverablesPriority = setDeliverablesPriority;

  const getTask = (id) => {
    const allTasks = Object.values(state.tasks);
    return allTasks.find((task) => task.id === id);
  }
  appData.getTask = getTask;


  const setTaskPriority = (id) => {

    const allTasks = Object.values(state.tasks);
    // new task data with the priority set to the opposite of what it is
    let updateTask;
    allTasks.forEach(task => {
      if (task.id === id) {
        task.priority = !task.priority;
        updateTask = task;
      }
    });


    const tasks = {
      ...state.tasks,
      [id]: updateTask
    }

    // make an axios PUT req to update the task data
    axios.put(`/tasks/${id}`, updateTask)
      .then(() => {
        setState({ ...state, tasks });
      })
      .catch(err => console.log("ERROR:", err));
  }
  appData.setTaskPriority = setTaskPriority;

  const percentComplete = (state, project) => {
    const selectedDelivs = getDeliverables(state, project)
    let numCompleted = 0;
    let numNotCompleted = 0;
    selectedDelivs.forEach(deliv => {
      if (deliv.status === 'completed') {
        numCompleted++;
      } else {
        numNotCompleted++;
      }
    })
    return Math.round((numCompleted / (numNotCompleted + numCompleted)) * 100);
  }
  appData.percentComplete = percentComplete

  const deliverablePercentComplete = (state, deliverable) => {
    const selectedTasks = getTasks(state, deliverable)
    let numCompleted = 0;
    let numNotCompleted = 0;
    selectedTasks.forEach(task => {
      if (task.status === 'completed') {
        numCompleted++;
      } else {
        numNotCompleted++;
      }
    })
    return Math.round((numCompleted / (numNotCompleted + numCompleted)) * 100);
  }
  appData.deliverablePercentComplete = deliverablePercentComplete


  return appData;
}
