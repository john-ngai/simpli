import { React, useState } from 'react';
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PopupForm(props) {
  const { state, setState, schedule, scheduleItem, selectedTask } = useAppData();
  const [valueStartTime, setValueStartTime] = useState(new Date(0, 0, 0, 7));
  const [valueEndTime, setValueEndTime] = useState(new Date(0, 0, 0, 8));
  const [day, setDay] = useState('');
  const [task_id, setTask_id] = useState('');

  const saveSchedule = (newScheduleItem) => {
    const scheduleItem = newScheduleItem.task_id;
    const schedule = {
      ...state.schedule,
      [newScheduleItem.id]: newScheduleItem
    };
    setState({ ...state, scheduleItem, schedule })
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
      start_time: formatAMPM(valueStartTime),
      end_time: formatAMPM(valueEndTime),
      day_id: day,
      task_id: 1
    }
    console.log(scheduleItem)
    axios.put('/schedule/new', scheduleItem)
      .then(res => {
        // scheduleItem.id = res.data.id
        // console.log('res: ', res.data)
        // saveSchedule(scheduleItem)
      })
  }

  const data = {
    "1": {
      "id":1, 
      "start_time":"12pm", 
      "end_time":"2pm", 
      "day_id":2, 
      "task": {
        "id":2,
        "name":"Clean out the closet",
        "description":"Place valuables somewhere safe"
      }
    }
  }
  // To access values: 
  // defaultValue={data[1].task.name}

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


  // const [valueStartTime, setValueStartTime] = useState(new Date(0, 0, 0, 7));
  // const [valueEndTime, setValueEndTime] = useState(new Date(0, 0, 0, 8));

  // const [day, setDay] = useState('Monday')

  // const handleDayChange = (event) => {
  //   setDay(event.target.value);
  // };


  const popupStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
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
        <FormControl sx={{ width: '50ch' }}>
          {/* <TextField
            id="standard-helperText"
            label="Task Name"
            // defaultValue={data[1].task.name}
            helperText="Task Name"
            variant="standard"
          />
          <TextField
            id="standard-helperText"
            label="Task Description"
            // defaultValue={data[1].task.description}
            helperText="Task Description"
            variant="standard"
          /> */}
          <TextField
          id="standard-helperText"
          label="Task ID"
          value={task_id}
          onChange={event => setTask_id(event.target.value)}
          helperText="Task ID"
          variant="standard"
          />
          <div style={{display:"flex"}} >
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
          }}>
          Save
        </Button>
      </Box>
    </Modal>
  </div>

  );
}