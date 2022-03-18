import './App.css';
import {React, useState, useEffect} from 'react';
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
      <section className="sidebar">
        <h1>Hello World</h1>
        <nav>
        <ProjectList 
          projects={state.projects}
        />
        </nav>
      </section>
      <section className="summary">
        {/* {userList} */}
      </section>
    </main>
  );
}

export default App;
