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
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

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
  const handleOpen = () => {
    setOpen(!open);
  }

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
// console.log(selectedProject)
console.log(mode)
  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name} />}

      <main id="scheduler_main">

        <aside id="menu">
        <List sx={{ width: '100%', maxWidth: 300 }}>
            <ListItemButton onClick={handleOpen}>
              <ListItemText 
              primary="Select Project" 
              primaryTypographyProps={{
              color: 'primary',
              fontWeight: 'bold'
              }} 
              />

            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <SelectProject 
              projects={Object.values(state.projects)} 
              // value={state.project} 
              onChange={setProject}
              onClick={handleOpen}
              transition={transition}
              />

            </Collapse>
          </List>
          <br />
          <span><strong>Completed</strong></span>
          <br /><br />
          <span>7 of 12 Deliverables</span>
          <br /><br />
          <span>32 of 54 Tasks</span>
          <br /><br />
          <AddCircleIcon id="schedule_task" className="mui_icons"
            onClick={() => {
              transition('DELIVERABLES')
              handleOpenForm()
            }}
          />
        <div>
          <PopupForm 
          openForm={openForm}
          handleOpenForm={handleOpenForm}
          selectedTask={selectedTask}
          selectedProject={selectedProject}
          />
        </div>
        </aside>


        <Calendar project={state.project}/>

      </main>
    </div>
    
  );
}
