// Dependencies
import React from 'react';
// Stylesheets
import './App.scss';
// Hooks
import useAppData from './hooks/useAppData';
import useVisualMode from './hooks/useVisualMode';
// Components
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import DeliverableList from './components/DeliverableList';
import TaskList from './components/TaskList';
import Project from './components/Project';
// Pages
const LOGIN = 'LOGIN';
const SUMMARY = 'SUMMARY';
// Modes
const DELIVERABLES = 'DELIVERABLES';
const PROJECTS = 'PROJECTS';
const TASKS = 'TASKS';
const SAVING = 'SAVING';
const NEW_PROJECT = 'NEW_PROJECT';
const EDIT_PROJECT = 'EDIT_PROJECT';
const NEW_TASK = 'NEW_TASK';

export default function App() {
  const {
    state,
    setProject, getSelectedProject, saveProject, editProject, deleteProject,
    getDeliverables, setDeliverable, getSelectedDeliverable, deleteDeliverable, saveDeliverable,
    setDeliverablesPriority, setTaskPriority,
    completeTask,
    setTask, getTasks, getSelectedTask, deleteTask, saveTask,
    showDelivForm, showTaskForm,
    percentComplete, deliverablePercentComplete,
  } = useAppData();
  
  const { page, mode, transition, transitionPage, back } = useVisualMode(null);

  const selectedProject = getSelectedProject(state);
  const selectedDeliverable = getSelectedDeliverable(state);
  const selectedTask = getSelectedTask(state);
  const deliverables = getDeliverables(state, state.project);
  const tasks = getTasks(state, state.deliverable);

  let user = null;
  if (!localStorage.user) {
    return (
      <div id="container">
        {!user && <NavBar />}
        <h1>Please <a href="/login">login</a> to view this page.</h1>
      </div>
    );
  } else {
    user = JSON.parse(localStorage.user);
  }

  return (
    <div id="container">
      {user && <NavBar user={user.name} />}

      <main>
        <ProjectList
          projects={Object.values(state.projects)}
          value={state.project}
          onChange={setProject}
          transition={transition}
          deleteProject={deleteProject}
          percentComplete={percentComplete}
        />

        <div id="dashboard">
          {mode === DELIVERABLES && <DeliverableList
            deliverables={deliverables}
            onChange={setDeliverable}
            transition={transition}
            project={state.project}
            onToggle={setDeliverablesPriority}
            showFormBoolean={state.showDelivForm}
            showDelivForm={showDelivForm}
            saveDeliverable={saveDeliverable}
            selectedProject={selectedProject}
            selectedDeliverable={selectedDeliverable}
            deleteDeliverable={deleteDeliverable}
          />}

          {mode === TASKS && <TaskList
            tasks={tasks}
            onChange={setTask}
            deliverable={state.deliverable}
            onToggle={setTaskPriority}
            completeTask={completeTask}
            onClick={transition}
            project={state.project}
            selectedProject={selectedProject}
            selectedDeliverable={selectedDeliverable}
            selectedTask={selectedTask}
            deleteTask={deleteTask}
            showFormBoolean={state.showTaskForm}
            showDelivForm={showDelivForm}
            showTaskForm={showTaskForm}
            deliverablePercentComplete={deliverablePercentComplete}
            saveTask={saveTask}
            transition={transition}
          />}

          {mode === NEW_PROJECT && <Project
            saveProject={saveProject}
            back={back}
            transition={transition}
          />}

          {mode === EDIT_PROJECT && <Project
            editProject={editProject}
            back={back}
            transition={transition}
            id={selectedProject.id}
            name={selectedProject.name}
            description={selectedProject.description}
          />}
        </div>
      </main>
    </div>
  );
}
