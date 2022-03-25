import { React, useState, useMemo } from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import SelectProject from './SelectProject';
import PopupForm from './Form';
// Material-UI
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import { TextField } from '@mui/material';
// import TimePicker from '@mui/lab/TimePicker';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import MenuItem from '@mui/material/MenuItem';
// import { Typography, Button } from '@mui/material';

export default function Scheduler(props) {
  let user = null;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  // const data = {
  //   "1": {
  //     "id":1, 
  //     "start_time":"12pm", 
  //     "end_time":"2pm", 
  //     "day_id":2, 
  //     "task": {
  //       "id":2,
  //       "name":"Clean out the closet",
  //       "description":"Place valuables somewhere safe"
  //     }
  //   }
  // }
  // // To access values: 
  // // defaultValue={data[1].task.name}

  // const days = [
  //   {
  //     value: "Sunday",
  //     label: "Sunday"
  //   },
  //   {
  //     value: "Monday",
  //     label: "Monday"
  //   },
  //   {
  //     value: "Tuesday",
  //     label: "Tuesday"
  //   },
  //   {
  //     value: "Wednesday",
  //     label: "Wednesday"
  //   },
  //   {
  //     value: "Thursday",
  //     label: "Thursday"
  //   },
  //   {
  //     value: "Friday",
  //     label: "Friday"
  //   },
  //   {
  //     value: "Saturday",
  //     label: "Saturday"
  //   }
  // ]


  // const [value, setValue] = useState(new Date());
  // const [day, setDay] = useState('Monday')

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  // const handleDayChange = (event) => {
  //   setDay(event.target.value);
  // };


  // const popupStyle = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 500,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

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
console.log(open)
  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name} />}

      <main id="scheduler_main">

        <aside id="menu">
          <br />
          <SelectProject />
          <br />
          <span><strong>Completed</strong></span>
          <br /><br />
          <span>7 of 12 Deliverables</span>
          <br /><br />
          <span>32 of 54 Tasks</span>
          <br /><br />
          <AddCircleIcon id="schedule_task" className="mui_icons"
            onClick={handleOpen}  
          />
        </aside>
        <PopupForm 
        open={open}
        handleOpen={handleOpen}
        />
{/* 
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
         */}
        <section id="calendar">
          <table id="table">
            <tr>
              <td class="table header time"><b>Time</b></td>
              <td class="table header"><b>SUNDAY</b></td>
              <td class="table header"><b>MONDAY</b></td>
              <td class="table header"><b>TUESDAY</b></td>
              <td class="table header"><b>WEDNESDAY</b></td>
              <td class="table header"><b>THURSDAY</b></td>
              <td class="table header"><b>FRIDAY</b></td>
              <td class="table header"><b>SATURDAY</b></td>
            </tr>

            <tr>
              <td class="table time">7 AM</td>
              <td id="sun_7am" class="table item"></td>
              {/* <td id="sun_7am" class="table item booked completed">Research best front-end frameworks</td> */}
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">8 AM</td>
              <td id="sun_8am" class="table item booked completed"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">9 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">10 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">11 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">12 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">1 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">2 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">3 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">4 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">5 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">6 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">7 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">8 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">9 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">10 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">11 PM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

            <tr>
              <td class="table time">12 AM</td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item"></td>
              <td class="table item last"></td>
            </tr>

          </table>
        </section>

      </main>
    </div>
    
  );
}
