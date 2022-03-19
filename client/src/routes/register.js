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
  }

  return (
    <main>
      <h1>Register Page</h1>
      <div>
        <section className="user_validation">{error}</section>
        <form onSubmit={(e) => e.preventDefault()} >
          <label>Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>Password:
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </main >
  );
}
