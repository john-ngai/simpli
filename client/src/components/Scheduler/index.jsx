// import React, { Fragment } from 'react';
import { React, useState, useMemo, Fragment } from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import SelectProject from './SelectProject';
import Calendar from './Calendar';
import PopupForm from './PopupForm';
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

// Modes
const NEW_EVENT = 'NEW_EVENT';
const EDIT_EVENT = 'EDIT_EVENT';

export default function Scheduler() {
  let user = null;
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => setOpenForm(!openForm);
  const { state, setProject, getSelectedProject, getDeliverables, setDeliverable, getSelectedDeliverable, setTask, setScheduleItem, getTasks, getSelectedTask, completedDeliverables, completedTasksForProject, totalTasksForProject, saveSchedule, deleteScheduleItem, toggleComplete } = useAppData();
  const { mode, transition } = useVisualMode(null);

  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  }
  const selectedProject = getSelectedProject(state);
  const selectedDeliverable = getSelectedDeliverable(state);
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
            <Collapse in={!open} timeout="auto" unmountOnExit>
              <SelectProject
                projects={Object.values(state.projects)}
                onChange={setProject}
                onClick={handleOpen}
                transition={transition}
              />
            </Collapse>
          </List>

          <br />

          {selectedProject &&
            <div>
              <span><strong>Progress</strong></span>
              <br /><br />
              <span>{completedDeliverables(state, state.project)} of {selectedProject.count} Deliverables Completed</span>
              <br /><br />

              <span>{completedTasksForProject(state, state.project)} of {totalTasksForProject(state, state.project)} Tasks Completed</span>
              <br /><br />

              <AddCircleIcon id="schedule_task" className="mui_icons"
                onClick={() => {
                  setScheduleItem(null, null, null);
                  transition(NEW_EVENT);
                  // handleOpenForm(); // Remove legacy code.
                }}
              />
            </div>
          }
        </aside>

        {mode === NEW_EVENT &&
          <PopupForm
            state={state}
            // openForm={openForm} // Remove legacy code.
            openForm={true}
            // handleOpenForm={handleOpenForm} // Remove legacy code.
            setDeliverable={setDeliverable}
            setTask={setTask}
            selectedProject={selectedProject}
            selectedDeliverable={selectedDeliverable}
            selectedTask={selectedTask}
            saveSchedule={saveSchedule}
            value={state.project}
            transition={transition}
            mode={mode}
            setScheduleItem={setScheduleItem}
          />
        }

        {mode === EDIT_EVENT &&
          <PopupForm
            state={state}
            // openForm={openForm} // Remove legacy code.
            openForm={true}
            // handleOpenForm={handleOpenForm} // Remove legacy code.
            setDeliverable={setDeliverable}
            setTask={setTask}
            selectedProject={selectedProject}
            selectedDeliverable={selectedDeliverable}
            selectedTask={selectedTask}
            saveSchedule={saveSchedule}
            value={state.project}
            transition={transition}
            mode={mode}
            edit={true}
            setScheduleItem={setScheduleItem}

            deleteScheduleItem={deleteScheduleItem}
            toggleComplete={toggleComplete}
          />
        }

        <Calendar
          project={state.project}
          schedule={state.schedule}
          setScheduleItem={setScheduleItem}
          transition={transition}
        />

      </main>
    </div>

  );
}
