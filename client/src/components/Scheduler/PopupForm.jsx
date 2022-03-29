import { React, useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button } from '@mui/material';
import useAppData from '../../hooks/useAppData';
import axios from 'axios';
import SelectProject from './SelectProject';
import SelectDeliverable from './SelectDeliverable';
import SelectTask from './SelectTask';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import useVisualMode from '../../hooks/useVisualMode';
import { withTheme } from '@emotion/react';
const DELIVERABLES = "DELIVERABLES";
const TASKS = "TASKS";

export default function PopupForm(props) {
  const [valueStartTime, setValueStartTime] = useState(new Date(0, 0, 0, 7));
  const [valueEndTime, setValueEndTime] = useState(new Date(0, 0, 0, 8));
  const [day, setDay] = useState('');
  const [task_id, setTask_id] = useState('');
  const { state, setProject, getSelectedProject, getDeliverables, setDeliverable, getSelectedDeliverable, setTask, getTasks, getSelectedTask, saveSchedule } = useAppData();
  const { mode, transition } = useVisualMode(null);
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  }

  const selectedProject = getSelectedProject(state);
  // const deliverables = getDeliverables(state, state.project);

  let selectedDel = getSelectedDeliverable(props.state);
  const tasks = getTasks(props.state, props.state.deliverable);
  let selectedTask = getSelectedTask(props.state);

  let deliverables2;
  if (props.selectedProject) {
    deliverables2 = getDeliverables(props.state, props.selectedProject.id);
  }

  function formatAMPM(date) {
    var hours = date.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strTime = hours + ampm;
    return strTime;
  }

  const save = () => {
    const scheduleItem = {
      day_id: day,
      project_id: props.selectedProject.id,
      start_time: formatAMPM(valueStartTime),
      end_time: formatAMPM(valueEndTime),
      task: {
        id: selectedTask.id,
        name: selectedTask.name,
        description: selectedTask.description
      }
    }
    axios.put('/schedule/new', scheduleItem)
      .then(res => {
        scheduleItem.id = res.data.id;
        props.saveSchedule(scheduleItem);
      })
  }

  const days = [
    {
      value: 1,
      label: "Sunday"
    },
    {
      value: 2,
      label: "Monday"
    },
    {
      value: 3,
      label: "Tuesday"
    },
    {
      value: 4,
      label: "Wednesday"
    },
    {
      value: 5,
      label: "Thursday"
    },
    {
      value: 6,
      label: "Friday"
    },
    {
      value: 7,
      label: "Saturday"
    }
  ]

  const popupStyle = {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    bgcolor: 'darkGrey',
    color: 'inherit',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={props.openForm}
        onClose={() => {
          transition(null);
          props.setDeliverable(null);
          props.setTask(null);
          // props.handleOpenForm();
          props.transition(null);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Schedule a Task
          </Typography>

          <List sx={{ width: '500px', maxWidth: '500px' }}>
            <div style={{ display: "flex" }} >
              <Collapse in={open} timeout="auto" unmountOnExit>
                <SelectDeliverable
                  projects={Object.values(state.projects)}
                  deliverables={deliverables2}
                  onChange={props.setDeliverable}
                  selectedDel={selectedDel}
                  value={selectedProject}
                  selectedProject={props.selectedProject}
                  onClick={handleOpen}
                  transition={transition}
                />
              </Collapse>
              
              {mode === TASKS &&
                <Fragment>
                  <SelectTask
                    tasks={tasks}
                    onChange={props.setTask}
                    selectedProject={selectedProject}
                    selectedDel={selectedDel}
                    selectedTask={selectedTask}
                  />
                </Fragment>
              }

            </div>
          </List>
          {selectedTask &&
            <div>
              <FormControl sx={{ width: '500px' }}>
                <div style={{ display: "flex" }} >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      renderInput={(params) => <TextField {...params} />}
                      label="Start Time"
                      value={valueStartTime}
                      views={["hours"]}
                      onChange={newValue => setValueStartTime(newValue)}
                      minTime={new Date(0, 0, 0, 7)}
                      maxTime={new Date(0, 0, 0, 23, 59)}
                      shouldDisableTime={(timeValue, clockType) => {
                        if (clockType === 'minutes' && timeValue !== 0) {
                          return true;
                        }
                        return false;
                      }}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      renderInput={(params) => <TextField sx={{ color: 'white' }} {...params} />}
                      label="End Time"
                      value={valueEndTime}
                      views={["hours"]}
                      onChange={newValue => setValueEndTime(newValue)}
                      minTime={new Date(0, 0, 0, 7)}
                      maxTime={new Date(0, 0, 0, 23, 59)}
                      shouldDisableTime={(timeValue, clockType) => {
                        if (clockType === 'minutes' && timeValue !== 0) {
                          return true;
                        }
                        return false;
                      }}
                    />
                  </LocalizationProvider>
                </div>
                <TextField sx={{ width: '500px', color: 'white' }}
                  id="standard-select-day"
                  select
                  label="Select"
                  value={day}
                  onChange={event => setDay(event.target.value)}
                  helperText="Select a day"
                  variant="standard"
                >
                  {days.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <Button variant="outlined" size="small" onClick={() => {
                save()
                props.handleOpenForm()
              }}>
                Save
              </Button>
            </div>}
        </Box>
      </Modal>
    </div>
  );
}