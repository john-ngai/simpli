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
const NEW_TASK = 'NEW_TASK';
const EDIT_DELIVERABLES = 'EDIT_DELIVERABLES'
export default function App() {
  const {
    state,
    setProject, getSelectedProject, saveProject, editProject, deleteProject,
    getDeliverables, setDeliverable, getSelectedDeliverable, deleteDeliverable, saveDeliverable, editDeliverable,
    setDeliverablesPriority, setTaskPriority,
    completeTask,
    setTask, getTasks, getSelectedTask, deleteTask, saveTask,
    showDelivForm, showTaskForm,
    percentComplete, deliverablePercentComplete
  } = useAppData();

  const { mode, transition, back } = useVisualMode(null);

  const selectedProject = getSelectedProject(state);
  const selectedDeliverable = getSelectedDeliverable(state);
  const selectedTask = getSelectedTask(state);
  const deliverables = getDeliverables(state, state.project);
  const tasks = getTasks(state, state.deliverable);
// console.log(selectedDeliverable)

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

          {mode === EDIT_DELIVERABLES && <DeliverableList
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
            setDeliverable={setDeliverable}
            editDeliverable={editDeliverable}

            id={selectedDeliverable.id}
            name={selectedDeliverable.name}
            description={selectedDeliverable.description}
            priority={selectedDeliverable.priority}
            status={selectedDeliverable.status}
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
