import './App.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAppData from './hooks/useAppData';

import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import DeliverableList from './components/DeliverableList';
import TaskList from './components/TaskList';

function App() {
  const {
    state,
    setProject,
    setDeliverable
  } = useAppData();

  const getDeliverablesForProject = function(state, project) {
    let result = [];
    let projects = state.projects;
    let deliverables = state.deliverables;

    for (const selectedProject of projects) {
      if (selectedProject.name === project) {
        for (const selectedDelivs of deliverables) {
          if (selectedDelivs.project_id === selectedProject.id) {
            console.log("Deliverable: ", selectedDelivs)
            result.push(selectedDelivs)
          }
        }
      }
    }
    return result
  }

  const getTasksForDeliverable = function(state, project, deliverable) {
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
          <nav>
            <DeliverableList
              deliverables={getDeliverablesForProject(state, state.project)}
              value={state.deliverable}
              onChange={setDeliverable}
            />
            {/* Need to hide and reveal when clicked */}
            <TaskList 
              tasks={getTasksForDeliverable(state, state.project, state.deliverables)}
            />
            {/* ------------------ */}
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
