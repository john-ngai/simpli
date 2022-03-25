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

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      value: "Sunday",
      label: "Sunday"
    },
    {
      value: "Monday",
      label: "Monday"
    },
    {
      value: "Tuesday",
      label: "Tuesday"
    },
    {
      value: "Wednesday",
      label: "Wednesday"
    },
    {
      value: "Thursday",
      label: "Thursday"
    },
    {
      value: "Friday",
      label: "Friday"
    },
    {
      value: "Saturday",
      label: "Saturday"
    }
  ]


  const [value, setValue] = useState(new Date());
  const [day, setDay] = useState('Monday')

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };


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
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={popupStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Schedule a Task
        </Typography>
        <FormControl sx={{ width: '50ch' }}>
          <TextField
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
          />
          <div style={{display:"flex"}} >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Start Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="End Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          </div>
          <TextField
            id="standard-select-day"
            select
            label="Select"
            value={day}
            onChange={handleDayChange}
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
        <Button variant="outlined" size="small">
          Save
        </Button>
      </Box>
    </Modal>
  </div>

  );
}