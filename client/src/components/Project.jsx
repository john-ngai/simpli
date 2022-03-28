// Dependencies
import React, { useState } from 'react';
import axios from 'axios';
// Styling
import './Project.scss';
// Hooks
import useAppData from '../hooks/useAppData';
import authHeader from '../services/authHeader';
// Material-UI
import { Button } from '@mui/material';

export default function Project(props) {
  // const { state } = useAppData();
  // const projects = state.projects;
  const { completed_deliverables, total_deliverables } = props.projects;

  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [error, setError] = useState('');

  const save = () => {
    const project = {
      name,
      description,
      completed_deliverables,
      total_deliverables
    };
    // Save a new project or edit an existing project.
    if (!props.id) {
      axios.put('/projects', project, { headers: authHeader() })
        .then(res => {
          project.id = res.data.id;
          project['team_id'] = res.data['team_id'];
          props.saveProject(project);
          props.transition('DELIVERABLES');
        })
    } else {
      project.id = props.id;
      axios.put(`projects/${project.id}`, project, { headers: authHeader() })
        .then(res => {
          project['team_id'] = res.data['team_id'];
          props.editProject(project);
          props.transition('DELIVERABLES');
        });
    }
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
    <div id="container_project_new_edit">
      <span id="title">{props.id ? 'Edit Project' : 'Create a New Project'}</span>
      
      <div id="container_form">
        <span id="project_validation"><b>{error}</b></span>
        <form onSubmit={event => event.preventDefault()}>
          <input
            id="input_name"
            name="project name"
            type="text"
            maxLength="80"
            placeholder="Enter Project Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />

          <br /><br />

          <textarea
            id="textarea_description"
            name="project description"
            rows="2"
            cols="61"
            maxLength="80"
            placeholder="Enter Project Description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />

          <br /><br />

          <Button id="button_cancel"
            variant="outlined"
            onClick={() => props.transition('DELIVERABLES')}
          >Cancel</Button>

          <Button id="button_save"
            variant="outlined"
            onClick={() => validate()}
          >Save</Button>
        </form>
      </div>
    </div>
  );
}