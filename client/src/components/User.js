import React from 'react'
import Navbar from './NavBar'
import ProjectList from './ProjectList'
import Teams from './Teams'
import { Avatar } from '@mui/material'
import './User.scss'
import "./Teams.scss";
import useAppData from '../hooks/useAppData'
import useVisualMode from '../hooks/useVisualMode'


export default function User() {
  const user = JSON.parse(localStorage.user)
  const {state, setProject, deleteProject, percentComplete, completedDeliverables, setUser, getUsers} = useAppData();
  const {transition} = useVisualMode();

  console.log(user)

  const team = getUsers(state, user);

  const teamList = team.map((member) => (
    <Teams
      key={member.id}
      teamID={member.team_id}
      name={member.name}
      email={member.email}
    />
  ));

  return (
    <div>
      <Navbar user={user.name} />
      <div className="container">
        <div id="user-info">
          <Avatar sx={{width: 150, height: 150}} src="https://avatars.githubusercontent.com/u/89871393?v=4"/>
          <h2>{user.name}</h2>
          {user.email}
        </div>
        <div id="team-info">
          <h2>Team: {user.team_id}</h2>
          <h4>Team members: </h4>
          <table>
        <thead>
          <tr>
            <th>Team ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {teamList}
      </table>
        </div>
      </div>
      <div className="projects">
        <h3>Ongoing Projects:</h3>
        {user.team_code}
      </div>
    </div>
  )
}