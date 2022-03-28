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
  const deliverables = getDeliverables(state, state.project);
  const selectedDel = getSelectedDeliverable(state);
  const tasks = getTasks(state, state.deliverable);
  const selectedTask = getSelectedTask(state);
  
  let deliverables2;
  if (props.selectedProject) {
    deliverables2 = getDeliverables(state, props.selectedProject.id);
  }
  console.log('deliverables2 =', deliverables2); // Remove test code.

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
      start_time: formatAMPM(valueStartTime),
      end_time: formatAMPM(valueEndTime),
      day_id: day,
      task_id: selectedTask.id
    }
    axios.put('/schedule/new', scheduleItem)
      .then(res => {
        scheduleItem.id = res.data.id
        // console.log('res: ', res.data)
        saveSchedule(scheduleItem)
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: /*'background.paper',*/ 'red',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  return (
    <div>
      <Modal
        open={props.openForm}
        onClose={props.handleOpenForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Schedule a Task
          </Typography>
          
          <List sx={{ width: '100%', maxWidth: 700 }}>
                <div style={{display:"flex"}} >
              <Collapse in={open} timeout="auto" unmountOnExit>
                { mode === DELIVERABLES && <SelectDeliverable
                projects={Object.values(state.projects)}
                deliverables={deliverables2}
                onChange={setDeliverable} 
                selectedDel={selectedDel}
                value={selectedProject}
                selectedProject={props.selectedProject}
                onClick={handleOpen}
                transition={transition}
                /> }
              </Collapse>
              { mode === TASKS && 
              <Fragment>
              <SelectDeliverable
              deliverables={deliverables}
              onChange={setDeliverable} 
              selectedDel={selectedDel}
              selectedProject={selectedProject}
              transition={transition}
              /> 
              <SelectTask
                tasks={tasks}
                onChange={setTask}
                selectedProject={selectedProject}
                selectedDel={selectedDel}
                selectedTask={selectedTask}
              />
            </Fragment>
                }
              </div>
            {/* </Collapse> */}
          </List>
          {selectedTask &&
            <div>
              <FormControl sx={{ width: '50ch' }}>
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
                      renderInput={(params) => <TextField {...params} />}
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
                <TextField
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
                // setProject(null)
                // setDeliverable(null)
                // setTask(null)
              }}>
                Save
              </Button>
            </div>}
        </Box>
      </Modal>
    </div>

  );
}