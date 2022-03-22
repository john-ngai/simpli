// Dependencies
import React, { useState } from 'react';
import axios from 'axios';
// Hooks
import useAppData from '../../hooks/useAppData';

export default function Project(props) {
  const { state } = useAppData();
  const projects = state.projects;
  
  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [error, setError] = useState('');
  
  const save = () => {
    const project = {
      name: name,
      description: description,
      team_id: 1, /* Hard coded temporarily */
    }
    axios.put('/projects/new', project)
      .then(res => {
        project.id = res.data.id;
        props.saveProject(project);
      })
  }

  const validate = () => {
    if (!name & !description) {
      return setError('**Please fill the form before saving**')
    }
    if (!name) {
      return setError('**Project name cannot be blank**')
    }
    if (!description) {
      setError('**Project description cannot be blank**')
      return;
    }
    // Clear any previous error messages before saving.
    setError('')
    save();
  };

  return (
    <div>
      <h1>{props.id ? 'Edit Project' : 'Create a New Project'}</h1>

      <span className="project_validation"><b>{error}</b></span>

      <form onSubmit={event => event.preventDefault()}>
        <label>Project Name:</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="Enter Project Name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <br /><br />        

        <label>Project Description:</label>
        <br />
        <textarea
          name="name"
          rows="4"
          cols="50"
          placeholder="Enter Project Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <br /><br />

        <button onClick={() => props.back()}>Back</button>
        <button onClick={() => validate()}>Save</button>
      </form>
    </div>
  );
}
