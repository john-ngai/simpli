import './App.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import useAppData from './hooks/useAppData';
import ProjectList from './components/ProjectList';

function App() {
  const { 
    state, 
    setProject 
  } = useAppData();

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
            value={state.project}
            onChange={setProject}
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
  );
}

export default App;
