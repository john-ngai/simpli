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
import NewDeliverable from './components/NewDeliverable';
import NewTask from './components/NewTask';

// Modes
const DELIVERABLES = 'DELIVERABLES';
const TASKS = 'TASKS';

export default function App() {
  const {
    state,
    setProject, setDeliverable,
    getDeliverables, getTasks, showDelivForm, showTaskForm
  } = useAppData();
  
  const { mode, transition } = useVisualMode(null);

  const deliverables = getDeliverables(state, state.project);
  const tasks = getTasks(state, state.deliverable);

  return (
    <div>
      <NavBar users={state.users} />
      <main className="layout">
        <section className="projects">
          <nav>
            <ProjectList
              projects={state.projects}
              value={state.project}
              onChange={setProject}
              onClick={transition}
            />
          </nav>
        </section>
        <section className="deliverables">
        {/* <div>
          <button className="newDeliverableButton" onClick={() => {
            showDelivForm(); transition('DELIVERABLES')}}>New Deliverable
          </button>
          {state.showDelivForm &&
          <NewDeliverable 
            project={state.project}
          />}
          <button className="newTaskButton" onClick={() => {
            showTaskForm(); transition('TASKS')}}>New Task
          </button>
          {state.showTaskForm &&
          <NewTask 
            deliverable={state.deliverable}
          />}
        </div> */}
          {mode === DELIVERABLES && <DeliverableList
            deliverables={deliverables}
            onChange={setDeliverable}
            onClick={transition}
            project={state.project}
            showFormBoolean={state.showDelivForm}
            showDelivForm={showDelivForm}
          />}
          {mode === TASKS && <TaskList
            tasks={tasks}
          />}
        </section>
      </main>
    </div>
  );
}
