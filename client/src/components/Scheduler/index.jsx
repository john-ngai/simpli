import React from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import SelectProject from './SelectProject';
<<<<<<< HEAD
import Calendar from './Calendar';
=======
import SelectDeliverable from './SelectDeliverable';
>>>>>>> feature/scheduler-menu
// Material-UI
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// Hooks
import useAppData from '../../hooks/useAppData';
import useVisualMode from '../../hooks/useVisualMode';

const DELIVERABLES = "DELIVERABLES";


export default function Scheduler() {
  const { state, setProject, getSelectedProject, getDeliverables, setDeliverable, getSelectedDeliverable } = useAppData();
  const {mode, transition} = useVisualMode(null);

  const [open, setOpen] = React.useState(true);

  const selectedProject = getSelectedProject(state);
  const deliverables = getDeliverables(state, state.project);
  const selectedDel = getSelectedDeliverable(state);

  // console.log("state =", state.deliverables);
  // console.log("SELECTED DEL=", selectedDel);

  let user = null;
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
// console.log("STATE.PROJECT", state.project);
  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name} />}

      <main id="scheduler_main">

        <aside id="menu">
          <br />
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
              {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
                { mode === DELIVERABLES && <SelectDeliverable
                deliverables={deliverables}
                onChange={setDeliverable} 
                selectedDel={selectedDel}
                selectedProject={selectedProject}
                /> }
              {/* </Collapse> */}
            </Collapse>
          </List>
          <br />
          <span><strong>Completed</strong></span>
          <br /><br />
          <span>7 of 12 Deliverables</span>
          <br /><br />
          <span>32 of 54 Tasks</span>
          <br /><br />
          <AddCircleIcon id="schedule_task" className="mui_icons" />
        </aside>

        <Calendar />

      </main>
    </div>
  );
}
