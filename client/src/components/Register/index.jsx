import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { FormGroup, FormControl, TextField } from '@mui/material';
import useAppData from '../../hooks/useAppData';
import NavBar from '../NavBar';
import './index.scss'; // Temporary

export default function Register() {
  const { state } = useAppData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [team, setTeam] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const validation = () => {
    // check if all input fields have valid info from user, if not, error messages will be displayed
    if (!name) {
      setError("A name is required");
      return;
    }
    if (!email) {
      setError("An email is required");
      return;
    }
    if (!password) {
      setError("A password is required");
      return;
    }
    // resets setError to prev state and saves the registered user
    setError("");
    registerUser(name, email, password, team);
  };

  // POST /register
  const registerUser = (name, email, password, team) => {
    const user = { name, email, password, team };
    axios.post('/register', user)
      .then(res => {
        const error = res.data.error;
        switch (error) {
          case 'registered email':
            return setError("Email already registered");
            break;
          case 'invalid team':
            return setError("Invalid team code - Leave blank to create a new team");
            break;
        }
        localStorage.setItem('user', JSON.stringify(res.data));
        return navigate('/');
      })
  }

  return (
    <div id="container_register">
      <NavBar />
      <main>
        <section>
          <h1>Registration Page</h1>
          <div>
            <section className="user_validation">{error}</section>
            <br />
            <FormGroup onSubmit={(e) => e.preventDefault()} >
              <FormControl>
                <TextField label="Name" type="text" value={name} placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
                <br />
                <TextField label="Email" type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <TextField label="Password" type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <br />

                <TextField label="Team" type="text" value={team} placeholder="Enter team code" onChange={(e) => setTeam(e.target.value)} />
                <br />

                <button type="submit" onClick={validation}>Register</button>
              </FormControl>
            </FormGroup>
          </div>
        </section>
      </main>
    </div>
  );
}

