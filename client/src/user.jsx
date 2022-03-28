import React from 'react';
import Teams from './Teams';
import './App.scss';

export default function User() {
  // console.log("user??", JSON.parse(localStorage.user));
  let currentUser = JSON.parse(localStorage.user);
  // console.log("CURRENTLY", currentUser.team_id);

  // TEST CODE
  const users = [
    {
      id: 1,
      name: "Rick Sanchez",
      email: "rick.sandchez@gmail.com",
      password: "picklerick",
      team_id: 1
      },
      {
      id: 2,
      name: "Lisa Simpson",
      email: "lisa.simpson@gmail.com",
      password: "ehhhhh",
      team_id: 2
      },
      {
      id: 3,
      name: "Link",
      email: "link@yahoo.com",
      password: "hyrule",
      team_id: 1
      },
      {
      id: 4,
      name: "Simon Bell",
      email: "simon_bel123@mail.ca",
      password: "dracula",
      team_id: 3
      },
      {
      id: 5,
      name: "Ultron",
      email: "all_might@academia.jp",
      password: "plusUltra",
      team_id: 1
      },
      {
      id: 6,
      name: "Mario Marucci",
      email: "mario@mushroomkindom.jp",
      password: "plumber79",
      team_id: 1
      }
  ];
  // TEST CODE

  const getUsers = (users, currentUser)=> {
    const allUsers = Object.values(users);
    const selectedUsers = [];
    const teamID = currentUser.team_id;

    for (const user of allUsers) {
      if (user.team_id === teamID) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }

  const team = getUsers(users, currentUser);

  console.log("TESTING", team);

  const teamList = team.map(user => 
    <Teams />
    );
  
  return (
    <div>
      <h1>Hello World</h1>
      {teamList}
    </div>
  )
}