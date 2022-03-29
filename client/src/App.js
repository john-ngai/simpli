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
import NewTask from './components/NewTask';
import { getThemeProps } from '@mui/system';
// Modes
const DELIVERABLES = 'DELIVERABLES';
const TASKS = 'TASKS';
const NEW_PROJECT = 'NEW_PROJECT';
const EDIT_PROJECT = 'EDIT_PROJECT';
const NEW_TASK = 'NEW_TASK';
const EDIT_TASKS = 'EDIT_TASKS'

export default function App() {
  const {
    state,
    setProject, getSelectedProject, saveProject, editProject, deleteProject,
    getDeliverables, setDeliverable, getSelectedDeliverable, deleteDeliverable, saveDeliverable, editDeliverable, setDeliverablesPriority, setTaskPriority, completeTask,
    setTask, getTasks, getSelectedTask, deleteTask, saveTask, showDelivForm, showTaskForm, editTask, percentComplete, deliverablePercentComplete, completedDeliverables, completedTasks,
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
        {!user && <NavBar user={null} />}
        <h1>Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.</h1>
      </div>
    );
  } else {
    user = JSON.parse(localStorage.user);
  }
  // if (selectedDeliverable) {

  //   console.log(selectedDeliverable['total_tasks'])
  // }
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
          completedDeliverables={completedDeliverables}
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
            editDeliverable={editDeliverable}
            selectedProject={selectedProject}
            selectedDeliverable={selectedDeliverable}
            deleteDeliverable={deleteDeliverable}
            completedDeliverables={completedDeliverables}
            completedTasks={completedTasks}
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
            editTask={editTask}
            completedTasks={completedTasks}
          />}

          {mode === EDIT_TASKS &&
            <div>
              <TaskList
                tasks={tasks}
                onChange={setTask}
                deliverable={state.deliverable}
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
                editTask={editTask}
                completedTasks={completedTasks}
              />
              <NewTask
                id={selectedTask.id}
                name={selectedTask.name}
                description={selectedTask.description}
                priority={selectedTask.priority}
                status={selectedTask.status}
                deliverable={state.deliverable}
                saveTask={saveTask}
                editTask={editTask}
              />
            </div>
          }

          {mode === NEW_PROJECT && <Project
            projects={state.projects}
            saveProject={saveProject}
            transition={transition}
          />}

          {mode === EDIT_PROJECT && <Project
            projects={state.projects}
            editProject={editProject}
            transition={transition}
            id={selectedProject.id}
            name={selectedProject.name}
            description={selectedProject.description}
            completed_deliverables={selectedProject['completed_deliverables']}
            total_deliverables={selectedProject['total_deliverables']}
          />}
        </div>
      </main>
    </div>
  );
}
