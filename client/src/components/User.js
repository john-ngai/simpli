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
  const {state, getUsers, teamInfo} = useAppData();
  const {transition} = useVisualMode();

  const team = getUsers(state, user);

  const teamList = team.map((member) => (
    <Teams
      key={member.id}
      name={member.name}
      email={member.email}
    />
  ));

  // const teamName = () => {
  //   if (teamInfo) {
  //     return teamInfo.name
  //   } 
  // }

  // const teamCode = () => {
  //   if (teamInfo) {
  //     return teamInfo.code
  //   } 
  // }

  return (
    <div>
      <Navbar user={user.name} />
      <div className="container">
        <div id="user-info">
        <Avatar sx={{width: 150, height: 150}} src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"/>
          <h2>{user.name}</h2>
          {user.email}
        </div>
        <div id="team-info">
          {/* <h2>Team Name: <strong>{teamName()}</strong></h2>
          <h3>Team Registration Code: <strong>{teamCode()}</strong> </h3> */}
          <h2>Team Name: Lighthouse Dream Team</h2>
          <h3>Team Registration Code: lighthouse</h3>
          <h4>Team members: </h4>
          <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {teamList}
      </table>
        </div>
      </div>
    </div>
  )
}