import { React, useState } from "react";
import axios from "axios";
import './NewDeliverable.scss';
// Material-UI
import { Button } from '@mui/material';

export default function NewDeliverable(props) {
  const [name, setName] = useState(props.name || '');
  const [description, setDescription] = useState(props.description || '');
  const [priority, setPriority] = useState(props.priority || false);
  const [status, setStatus] = useState(props.status || false);


  const save = () => {
    const deliverable = {
      name: name,
      description: description,
      priority: priority,
      status: status,
      project_id: props.project
    }
    if (!props.id) {
      axios.put('/deliverables/new', deliverable)
        .then(res => {
          deliverable.id = res.data.id
          console.log('res: ', res.data)
          props.saveDeliverable(deliverable)
        })
    } else {
      deliverable.id = props.id;
      axios.put(`/deliverables/${deliverable.id}`, deliverable)
        .then(() => {
          props.editDeliverable(deliverable)
        })
    }
  }

  return (
    <form className="new_deliverable_container"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <div id="container_form">
        <input id="input_name"
          name="name"
          type="text"
          placeholder="Enter Deliverable Title"
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

        {/* <label>High Priority?:</label>
        <input name="priority" type="checkbox" value={priority} onChange={event => setPriority(prevCheck => !prevCheck)} /> */}
        {/* <label>Completed?:</label>
        <input name="status" type="checkbox" value={status} onChange={event => setStatus(prevCheck => !prevCheck)} /> */}

        <br />

        <div id="buttons">
          <Button id="button_cancel"
            variant="outlined"
            onClick={props.showDelivForm}
          >Cancel</Button>

          <Button id="button_save"
            variant="outlined"
            onClick={() => save()}
          >Save</Button>
        </div>
      </div>
    </form>
  );
}
