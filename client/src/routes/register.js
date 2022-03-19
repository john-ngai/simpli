import { React, useState } from 'react';
import axios from 'axios';
import useAppData from '../hooks/useAppData';

export default function Register() {
  const { state } = useAppData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validation = () => {
    if (name === "") {
      setError("A name is required");
      return;
    }

    if (email === "") {
      setError("An email is required");
      return;
    }

    if (password === "") {
      setError("A password is required");
      return;
    }

    setError("");

  }

  return (
    <main>
      <h1>Register Page</h1>
      <div>
        <section className="user_validation">{error}</section>
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
          <button type="submit" onChange={validation}>Register</button>
        </form>
      </div>
    </main >
  );
}
