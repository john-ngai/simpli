import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { FormGroup, FormControl, TextField } from '@mui/material';

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
    // user data
    const user = {
      email: email,
      password: password
    }

    axios.get('/login', user)
      .then(res => console.log("success?", res.data))
      .then(navigate('/'));
    // .catch(err => console.log("failed", err));
  }

  const handleClick = () => {
    navigate('/');
  }

  return (
    <main>
      <button onClick={handleClick}>Back to Home</button>
      <h1>Login Page</h1>

      <div>
        <section className="user_validation">{error}</section>
        <br />

        <FormGroup onSubmit={(e) => e.preventDefault()} >
          <FormControl>
            <TextField label="Email" type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            <br />
            <TextField label="Password" type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button type="submit" onClick={validation}>Login</button>
          </FormControl>
        </FormGroup>

      </div>
    </main>
  );
}

