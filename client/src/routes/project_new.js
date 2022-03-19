import React, { useState } from 'react';
import { useNavigate } from "react-router";
import useAppData from '../hooks/useAppData';
import axios from 'axios';

export default function NewProject() {
  const { state } = useAppData();
  const navigate = useNavigate();
  
  const projects = state.projects;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  
  const validate = () => {
    if (!name & !description) {
      return setError('Please fill the form before saving')
    }
    if (!name) {
      return setError('Project name cannot be blank')
    }
    if (!description) {
      setError('Project description cannot be blank')
      return;
    }
    // Clear any previous error messages before saving.
    setError('');
  };

  const saveProject = () => {
    const project = {
      name: name,
      description: description,
      team_id: 1, /* Hard coded temporarily */
    }
    axios.put('/projects/new', project)
      .then(res => console.log('res =', res.data))
      .then(navigate('/'));
  }

  return (
    <main>
      <h1>Create a New Project</h1>
      <section>
        <span className="project_validation">{error}</span>
        <form onSubmit={event => event.preventDefault()}>
          <label>Project Name:</label>
          <br/>
          <input
            name="name"
            type="text"
            placeholder="Enter Project Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <br/><br/>
          <label>Project Description:</label>
          <br/>
          <textarea
            name="name"
            rows="4"
            cols="50"
            placeholder="Enter Project Description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </form>
        <br/>
        <button onClick={saveProject}>Save</button>
      </section>
    </main>
  );
}
