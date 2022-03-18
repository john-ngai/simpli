import './App.css';
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAppData from './hooks/useAppData';
import ProjectList from './components/ProjectList';

function App() {
  const { state } = useAppData();

  // const userList = (state.users).map((user) => {
  //   console.log(user)
  //   return (user.name)
  // })

  return (
    <main className="layout">
      <section className="projects">
        <nav>
          <ProjectList
            projects={state.projects}
          />
        </nav>
        <nav>
          {/* REMINDER: Remove test code */}
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
          {/* REMINDER: Remove test code */}
        </nav>
      </section>
      <section className="deliverables">
        <nav>
          <li className="deliverable_list_item">
            <span className="deliverable_name">Clean master bedroom</span>
            <span className="deliverable_description"></span>
          </li>
          <li className="deliverable_list_item">
            <span className="deliverable_name">Clean master bedroom</span>
            <span className="deliverable_description"></span>
          </li>
        </nav>
      </section>
    </main>
  );
}

export default App;
