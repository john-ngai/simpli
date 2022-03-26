import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Avatar, Button, TextField, Grid, Box, Container, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import NavBar from '../components/NavBar';
import NavBar from '../NavBar';
import './index.scss';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validation = () => {
    if (!email) {
      return setError("A email is required");
    }
    if (!password) {
      return setError("A password is required");
    }
    // clears errors messages
    setError("");
    // will need to update with cookies later on
    loginUser(email, password);
  }

  const loginUser = (email, password) => {
    const user = {
      email: email,
      password: password
    }

    axios.post('/login', user)
      .then(res => {
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data));
          navigate('/');
        } else {
          setError('Wrong password');
        }
      })
      .catch(() => setError('Not a registered email'));
  }

  return (
    <div id="container_login">
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Box>
          <Avatar>

          </Avatar>
          <Typography>Login Page</Typography>
          <div>
            <Box className="user_validation">{error}</Box>
            <br />
            <FormGroup onSubmit={(e) => e.preventDefault()} >
              
                <TextField label="Email" type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <TextField label="Password" type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit" onClick={validation}>Login</button>
             
            </FormGroup>
          </div>
        </Box>
      </Container>
    </div>
  );
}

