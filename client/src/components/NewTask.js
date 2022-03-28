import { React, useState } from "react";
import axios from "axios";
import './NewTask.scss';
// Material-UI
import { Button } from '@mui/material';

export default function NewTask(props) {
  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [priority, setPriority] = useState(props.priority || false);
  const [status, setStatus] = useState(props.status || false);


  const save = () => {
    const task = {
      name: name,
      description: description,
      priority: priority,
      status: status,
      deliverable_id: props.deliverable
    }
    if (!props.id) {
      axios.put('/tasks/new', task)
        .then(res => {
          task.id = res.data.id
          props.saveTask(task)
          props.transition(null);
        });
    } else {
      task.id = props.id;
      axios.put(`/tasks/${task.id}`, task)
        .then(() => {
          props.editTask(task)
          props.transition(null);
        })
    }
  }

  return (
    <form className="new_deliverable_container"
      onSubmit={event => {
        event.preventDefault();
        props.showTaskForm();
      }}
    >
      <div id="container_form">
        <input id="input_name"
          name="name"
          type="text"
          placeholder="Enter Task Title"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <br />
        <textarea id="textarea_description"
          name="description"
          type="text"
          placeholder="Enter Deliverable Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />

        <br />

        <div id="buttons">
          <Button id="button_cancel"
            variant="outlined"
            onClick={() => props.transition(null)}
          >Cancel</Button>

          <Button id="button_save"
            variant="outlined"
            onClick={() => save()}
          >Save</Button>
        </div>
      </div>
    </form >
  );
}
