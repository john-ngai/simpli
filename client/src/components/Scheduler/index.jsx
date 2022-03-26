// import React, { Fragment } from 'react';
import { React, useState } from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import Calendar from './Calendar';
import PopupForm from './Form';

// Material-UI
import AddCircleIcon from '@mui/icons-material/AddCircle';
// Hooks
import useAppData from '../../hooks/useAppData';
import useVisualMode from '../../hooks/useVisualMode';


export default function Scheduler(props) {
  let user = null;
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(!openForm);
  const { state, getSelectedProject, getDeliverables, getSelectedDeliverable, getTasks, getSelectedTask } = useAppData();

  const [open, setOpen] = useState(true);

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

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name} />}

      <main id="scheduler_main">

        <aside id="menu">
          <br />

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
          />
        </div>
        </aside>


        <Calendar />

      </main>
    </div>
    
  );
}
