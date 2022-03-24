import React from 'react';
import NavBar from '../components/NavBar';

export default function Scheduler() {

  let user = null;
  if (!localStorage.user) {
    return (
      <div id="container">
        {!user && <NavBar user={null} />}
        <h1>Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.</h1>
      </div>
    );
  } else {
    user = JSON.parse(localStorage.user);
  }
  
  return (
    <div id="scheduler_container">
      {user && <NavBar user={user.name}/>}
      <main>
        <h1>Scheduler</h1>
      </main>
    </div>
  );
}
