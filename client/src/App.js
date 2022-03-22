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
// Modes
const DELIVERABLES = 'DELIVERABLES';
const PROJECTS = 'PROJECTS';
const TASKS = 'TASKS';
const SAVING = 'SAVING';
const NEW_PROJECT = 'NEW_PROJECT';
const EDIT_PROJECT = 'EDIT_PROJECT';
const NEW_DELIVERABLE = 'NEW_DELIVERABLE';
const NEW_TASK = 'NEW_TASK';

export default function App() {
  const {
    state,
    saveProject,
    setProject, setDeliverable,
    getDeliverables, getTasks, showDelivForm, showTaskForm, deleteProject, percentComplete, deliverablePercentComplete
  } = useAppData();

  const { mode, transition, back } = useVisualMode(null);

  const deliverables = getDeliverables(state, state.project);
  const tasks = getTasks(state, state.deliverable);
  return (
    <div id="container">
      <NavBar users={state.users} />
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
            onClick={transition}
            project={state.project}
            showFormBoolean={state.showDelivForm}
            showDelivForm={showDelivForm}
            deliverablePercentComplete={deliverablePercentComplete}
          />}

          {mode === TASKS && <TaskList
            tasks={tasks}
            deliverable={state.deliverable}
            showFormBoolean={state.showTaskForm}
            showTaskForm={showTaskForm}
          />}

          {mode === NEW_PROJECT && <Project
            saveProject={saveProject}
            back={back}
            transition={transition}
          />}
        </div>
      </main>
    </div>
  );
}
