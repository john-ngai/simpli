import React from 'react'
import Navbar from './NavBar'
import ProjectList from './ProjectList'
import { Avatar } from '@mui/material'
import './User.scss'
import useAppData from '../hooks/useAppData'
import useVisualMode from '../hooks/useVisualMode'


export default function User() {
  const user = JSON.parse(localStorage.user)
  const {state, setProject, deleteProject, percentComplete, completedDeliverables} = useAppData();
  const {transition} = useVisualMode();
  return (
    <div>
      <Navbar user={user.name} />
      <div class="container">
        <div id="user-info">
          <Avatar sx={{width: 150, height: 150}} src="https://avatars.githubusercontent.com/u/89871393?v=4"/>
          <h2>{user.name}</h2>
          {user.email}
        </div>
        <div id="team-info">
          <h2>Team: {user.team_id}</h2>
          <h4>Team members: </h4>
        </div>
      </div>
      <div class="projects">
        <h3>Ongoing Projects:</h3>
        
      </div>
    </div>
  )
}