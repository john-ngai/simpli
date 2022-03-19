import { React, useState } from 'react';
import axios from 'axios';
import useAppData from '../hooks/useAppData';

export default function Register() {
  return (
    <main>
      <h1>Register Page</h1>
      <div>
        <form>
          <label>Name:
          <input type="text" />
          </label>
          <br />
          <label>Email:
            <input type="text" />
          </label>
          <br />
          <label>Password:
            <input type="text" />
          </label>
        </form>
      </div>
    </main >
  );
}
