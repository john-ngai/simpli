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

// Modes
const DELIVERABLES = 'DELIVERABLES';
const PROJECTS = 'PROJECTS';
const TASKS = 'TASKS';
const SAVING = 'SAVING';

export default function App() {
  const {
    state,
    setProject, setDeliverable,
    getDeliverables, getTasks,
    setDeliverablesPriority,
    setTaskPriority,
    deleteProject,
    showDelivForm, showTaskForm
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
              projects={Object.values(state.projects)}
              value={state.project}
              onChange={setProject}
              transition={transition}
              deleteProject={deleteProject}
            />
          </nav>
        </section>
        <section className="deliverables">
          {mode === DELIVERABLES && <DeliverableList
            deliverables={deliverables}
            onChange={setDeliverable}
            transition={transition}
            onToggle={setDeliverablesPriority}
          />}
          {mode === TASKS && <TaskList
            tasks={tasks}
            onToggle={setTaskPriority}
            onClick={transition}
            project={state.project}
            showFormBoolean={state.showDelivForm}
            showDelivForm={showDelivForm}
          />}
          {mode === TASKS && <TaskList
            tasks={tasks}
            deliverable={state.deliverable}
            showFormBoolean={state.showTaskForm}
            showTaskForm={showTaskForm}
          />}
        </section>
      </main>
    </div>
  );
}
