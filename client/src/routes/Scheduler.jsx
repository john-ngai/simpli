import React from 'react';
import NavBar from '../components/NavBar';
import './Scheduler.scss';
import Calendar from './Calendar';

export default function Scheduler() {

  let user = null;
  if (!localStorage.user) {
    return (
      <div id="scheduler_container">
        {!user && <NavBar user={null} />}
        <h1>Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.</h1>
      </div>
    );
  } else {
    user = JSON.parse(localStorage.user);
  }
  
  return (
    <div id="scheduler_container">
      {/* {user && <NavBar user={user.name}/>} */}
    
      {/* <main id="scheduler_main"> */}
    
      <Calendar />
      
      {/* </main> */}
    </div>
  );
}
