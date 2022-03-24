import { React, useState } from "react";
import axios from "axios";

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
          console.log("completed")
          props.editDeliverable(deliverable)
        })
    }
  }

  return (
    <main className="new_deliverable_container">
      <section className="new_deliverable">
        <form onSubmit={event => {
          event.preventDefault();
          }}>
          {/* Name */}
          <label>Deliverable Title:</label>
          <input name="name" type="text" placeholder="Enter Deliverable Title" value={name} onChange={event => setName(event.target.value)}>
          </input>
          {/* Description */}
          <label>Description:</label>
          <input name="description" type="text" placeholder="Enter Deliverable Description" value={description} onChange={event => setDescription(event.target.value)}>
          </input>
          {/* Priority */}
          <label>High Priority?:</label>
          <input name="priority" type="checkbox" value={priority} onChange={event => setPriority(prevCheck => !prevCheck)}>
          </input>
          {/* Status */}
          <label>Completed?:</label>
          <input name="status" type="checkbox" value={status} onChange={event => setStatus(prevCheck => !prevCheck)}>
          </input>
        <button onClick={() => save()}>Save</button>
        <button onClick={props.showDelivForm}>Cancel</button>
        </form>
      </section>
    </main>
  )
}