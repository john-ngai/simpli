import './App.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAppData from './hooks/useAppData';

import ProjectList from './components/ProjectList';
import DeliverableList from './components/DeliverableList';

function App() {
  const { 
    state, 
    setProject 
  } = useAppData();

  // const userList = (state.users).map((user) => {
  //   console.log(user)
  //   return (user.name)
  // })


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
    <main className="layout">
      <section className="projects">
        <nav>
          <ProjectList
            projects={state.projects}
            value={state.project}
            onChange={setProject}
          />
        </nav>
        
        
        {/* REMINDER: Remove test code */}
        <nav>
          <li className="project_list_item">
            <span className="project_name">
              <Link to="/register">Register</Link>
            </span>
          </li>

          <li className="project_list_item">
            <span className="project_name">
              <Link to="/login">Login</Link>
            </span>
          </li>
        </nav>
        {/* REMINDER: Remove test code */}
      
      
      </section>
      <section className="deliverables">
        <nav>
          <DeliverableList 
            deliverables={getDeliverablesForProject(state, state.project)}
          />
        </nav>
      </section>
    </main>
  );
}

export default App;
