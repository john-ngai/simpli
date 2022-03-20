// Dependencies
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Stylesheets
import './App.css';

// Hooks
import useAppData from './hooks/useAppData';
import useVisualMode from './hooks/useVisualMode';

// Components
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import DeliverableList from './components/DeliverableList';
import TaskList from './components/TaskList';
import TempTasks from './components/TempTasks'; // Remove test code.

// Modes
const DELIVERABLES = 'DELIVERABLE';
const TASKS = 'TASKS';


export default function App() {
  const { state, setProject, setDeliverable, getDeliverables } = useAppData();
  const { mode, transition } = useVisualMode(DELIVERABLES);

  const deliverables = getDeliverables(state, state.project);

  









  const getTasksForDeliverable = function (state, project, deliverable) {
    let result = [];
    let projects = state.projects;
    let deliverables = state.deliverables
    let tasks = state.tasks
    // This can be compressed a lot by calling getDeliverablesForProject, I just hadn't done it yet for testing purposes
    for (const selectedProject of projects) {
      if (selectedProject.name === project) {
        for (const selectedDelivs of deliverables) {
          if (selectedDelivs.project_id === selectedProject.id) {
            for (const selectedTasks of tasks) {
              // Need the second half of this if statement to get the selected deliverable rather than selectedDelivs(which returns all delivs for given project)(I kind of messed up on the naming convention here)
              if (selectedTasks.deliverable_id === selectedDelivs.id) {
                console.log("Task: ", selectedTasks)
                result.push(selectedTasks)
              }
            }
          }
        }
      }
    }
    return result
  }





  return (
    <div>
      <NavBar users={state.users} />

      <button onClick={() => transition(DELIVERABLES)}>Deliverables</button>
      <button onClick={() => transition(TASKS)}>Tasks</button>
      
      <main className="layout">
        <section className="projects">
          <nav>
            <ProjectList
              projects={state.projects}
              value={state.project}
              onChange={setProject}
            />
          </nav>
        </section>

        <section className="deliverables">
          {mode === DELIVERABLES && <DeliverableList
            deliverables={deliverables}
            onChange={setDeliverable}
            onClick={transition}
          /> }
          {/* {mode === DELIVERABLES && <DeliverableList /> } */}
          {mode === TASKS && <TempTasks /> }
        </section>
      </main>

    </div>
  );
}
