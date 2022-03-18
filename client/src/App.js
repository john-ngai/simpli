import './App.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';
import useAppData from './hooks/useAppData';

function App() {
  const { state } = useAppData();

  const userList = (state.users).map((user) => {
    console.log(user)
    return (user.name)
    
  })

  // const projectList = (state.projects).map((project) => {
  //   return (
  //     <Project
  //     name={project.name}
  //     description={project.description}
  //     />
  //     );
  // })

  return (
    <main className="layout">
      <section className="sidebar">
      <h1>Hello World</h1>
      {/* {!state.users[0] ? "" : console.log(state)} */}
      {userList}
      </section>
      <section className="summary">

      </section>
    </main>
  );
}

export default App;
