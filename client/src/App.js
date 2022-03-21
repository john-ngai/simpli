// Dependencies
import React from 'react';
// Stylesheets
import './App.css';
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
    getDeliverables, getTasks,
    deleteProject,
  } = useAppData();

  const { mode, transition, back } = useVisualMode(null);

  const deliverables = getDeliverables(state, state.project);
  const tasks = getTasks(state, state.deliverable);

  return (
    <div>
      <NavBar users={state.users} />
      
      <button onClick={() => transition(NEW_PROJECT)}>NEW_PROJECT</button>

      <main className="layout">
        <section className="projects">
          <nav>
            <ProjectList
              projects={state.projects}
              value={state.project}
              onChange={setProject}
              transition={transition}
              deleteProject={deleteProject}
            />
          </nav>
        </section>
        <section className="deliverables">

          {mode === NEW_PROJECT && <Project
            saveProject={saveProject}
            back={back}
          />}

          {mode === DELIVERABLES && <DeliverableList
            deliverables={deliverables}
            onChange={setDeliverable}
            onClick={transition}
          />}
          {mode === TASKS && <TaskList
            tasks={tasks}
          />}
        </section>
      </main>
    </div>
  );
}
