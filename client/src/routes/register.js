import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import useAppData from '../hooks/useAppData';

export default function Register() {
  const { state } = useAppData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    registerUser(name, email, password);
  };

  function registerUser(name, email, password) {
    // new user
    const user = {
      name: name,
      email: email,
      password: password,
      team_id: 1 //temporary id assigned. Will need to update later
    }
    console.log("New user registered!", user);

    return axios.put('http://localhost:8080/users', { user })
      .then(res => console.log('success?', res))
      .then(navigate('/'))
      .catch(err => console.log('failed?', err));

  }

  return (
    <main>
      <h1>Register Page</h1>
      <div>
        <section className="user_validation">{error}</section>
        <br />
        <form onSubmit={(e) => e.preventDefault()} >
          <label>Name:
          <input type="text" value={name} placeholder="Enter your full name" onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>Email:
            <input type="text" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>Password:
            <input type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit" onClick={validation}>Register</button>
        </form>
      </div>
    </main >
  );
}
