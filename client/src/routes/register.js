import { React, useState } from 'react';
import axios from 'axios';
import useAppData from '../hooks/useAppData';

export default function Register() {

  const {
    state,
    setUser
  } = useAppData();

  state.user = {
    name: '',
    email: '',
    password: ''
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password } = state.user;

    alert(`name: ${name}, email: ${email}, password: ${password}`);
  }

  function handleChange(event) {
    event.preventDefault();
    const value = event.target.value;

    setUser({
      [event.target.user]: value
    });
  }

  // console.log("TEST", setUser);

  return (
    <main>
      <h1>Register Page</h1>
      <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <label>Name:
          <input type="text" user='name' value={state.user.name} />
          </label>
          <br />
          <label>Email:
            <input type="text" user='email' value={state.user.email} />
          </label>
          <br />
          <label>Password:
            <input type="text" user='password' value={state.user.password} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </main >
  );
}
