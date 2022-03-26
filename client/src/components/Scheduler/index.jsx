// import React, { Fragment } from 'react';
import { React, useState, useMemo, Fragment } from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import SelectProject from './SelectProject';
import Calendar from './Calendar';
import PopupForm from './Form';
import SelectDeliverable from './SelectDeliverable';
import SelectTask from './SelectTask';
// Material-UI
import AddCircleIcon from '@mui/icons-material/AddCircle';

// Hooks
import useAppData from '../../hooks/useAppData';
import useVisualMode from '../../hooks/useVisualMode';

const DELIVERABLES = "DELIVERABLES";
const TASKS = "TASKS";

export default function Scheduler(props) {
  let user = null;
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(!openForm);
  const { state, setProject, getSelectedProject, getDeliverables, setDeliverable, getSelectedDeliverable, setTask, getTasks, getSelectedTask } = useAppData();
  const {mode, transition} = useVisualMode(null);
  
  const [open, setOpen] = useState(true);

  const selectedProject = getSelectedProject(state);
  const deliverables = getDeliverables(state, state.project);
  const selectedDel = getSelectedDeliverable(state);
  const tasks = getTasks(state, state.deliverable);
  const selectedTask = getSelectedTask(state);

  if (!localStorage.user) {
    return (
      <div id="scheduler_container">
        {!user && <NavBar user={null} />}
        <h1>Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.</h1>
      </div>
    );
  } else {
    user = JSON.parse(localStorage.user);
  }

  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name} />}

      <main id="scheduler_main">

        <aside id="menu">
          <br />
          <span><strong>Completed</strong></span>
          <br /><br />
          <span>7 of 12 Deliverables</span>
          <br /><br />
          <span>32 of 54 Tasks</span>
          <br /><br />
          <AddCircleIcon id="schedule_task" className="mui_icons"
            onClick={handleOpenForm}
          />
        <div>
          <PopupForm 
          openForm={openForm}
          handleOpenForm={handleOpenForm}
          selectedTask={selectedTask}
          />
        </div>
        </aside>


        <Calendar />

      </main>
    </div>
    
  );
}
