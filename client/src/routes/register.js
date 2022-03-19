import { React, useState } from 'react';
import axios from 'axios';
import useAppData from '../hooks/useAppData';

export default function Register() {
  const {
    state,
    setUser
  } = useAppData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleChange(event) {
    event.preventDefault();
    // const value = event.target.value;

  }


  return (
    <main>
      <h1>Register Page</h1>
      <div>
        <form onSubmit={(e) => e.preventDefault()} >
          <label>Name:
          <input type="text" value={name} onChange={handleChange} />
          </label>
          <br />
          <label>Email:
            <input type="text" user='email' value={email} />
          </label>
          <br />
          <label>Password:
            <input type="text" user='password' value={password} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </main >
  );
}
