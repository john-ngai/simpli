import { React, useState } from 'react';
import './index.scss';
// Components
import NavBar from '../NavBar';
import SelectProject from './SelectProject';
// Material-UI
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import PopupForm from './Form'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl } from '@mui/material';

export default function Scheduler() {
  let user = null;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const popupStyle = {
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
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={popupStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
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
