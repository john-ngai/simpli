import './App.css';
import { React, useState, useEffect } from 'react';
import axios from 'axios';
import useAppData from './hooks/useAppData';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  const { state } = useAppData();

  // const userList = (state.users).map((user) => {
  //   console.log(user)
  //   return (user.name)
  // })

  return (
    <div>
      <NavBar />
      <main className="layout">
        <section className="projects">
          <nav>
            <ProjectList
              projects={state.projects}
            />
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
    </div>
  );
}

export default App;
