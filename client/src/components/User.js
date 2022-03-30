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

  // console.log(user)

  const team = getUsers(state, user);

  // console.log(team[0].team_code)

  const teamList = team.map((member) => (
    <Teams
      key={member.id}
      // teamID={member.team_id}
      name={member.name}
      email={member.email}
    />
  ));

  // const teamCode = () => {
  //   if (team[0].team_code) {
  //     return team[0].team_code
  //   } else {
  //     return "No team code :("
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
          {/* <h2>Team Code: {teamCode} </h2> */}
          <h4>Team members: </h4>
          <table>
        <thead>
          <tr>
            {/* <th>Team ID</th> */}
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {teamList}
      </table>
        </div>
      </div>
      {/* <div className="projects">
        <h3>Ongoing Projects:</h3>
        {user.team_code}
      </div> */}
    </div>
  )
}