import './App.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAppData from './hooks/useAppData';

import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';
import DeliverableList from './components/DeliverableList';

function App() {
  const {
    state,
    setProject
  } = useAppData();

  const getDeliverablesForProject = function(state, project) {
    let result = [];
    let projects = state.projects
    let deliverables = state.deliverables

    for (const selectedProject of projects) {
      if (selectedProject.name === project) {
        // console.log(selectedProject)
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
            />
          </nav>
        </section>
      </main>
    </div>
  );
}

export default App;
