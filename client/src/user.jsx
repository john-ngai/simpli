import React from "react";
import Teams from "./Teams";
import "./App.scss";
import "./Teams.scss";
import useAppData from "./hooks/useAppData";

export default function User() {
  // console.log("user??", JSON.parse(localStorage.user));
  let currentUser = JSON.parse(localStorage.user);
  const { state } = useAppData();
  console.log("users=", state.users);

  // TEST CODE
  // const users = [
  //   {
  //     id: 1,
  //     name: "Rick Sanchez",
  //     email: "rick.sandchez@gmail.com",
  //     password: "picklerick",
  //     team_id: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Lisa Simpson",
  //     email: "lisa.simpson@gmail.com",
  //     password: "ehhhhh",
  //     team_id: 2,
  //   },
  //   {
  //     id: 3,
  //     name: "Link",
  //     email: "link@yahoo.com",
  //     password: "hyrule",
  //     team_id: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "Simon Bell",
  //     email: "simon_bel123@mail.ca",
  //     password: "dracula",
  //     team_id: 3,
  //   },
  //   {
  //     id: 5,
  //     name: "Ultron",
  //     email: "all_might@academia.jp",
  //     password: "plusUltra",
  //     team_id: 1,
  //   },
  //   {
  //     id: 6,
  //     name: "Mario Marucci",
  //     email: "mario@mushroomkindom.jp",
  //     password: "plumber79",
  //     team_id: 1,
  //   },
  //   {
  //     id: 7,
  //     name: "Vivian",
  //     email: "vivian@gmail.com",
  //     password: "password",
  //     team_id: 1
  //     }
  // ];
  // TEST CODE

  const getUsers = (state, currentUser) => {
    const allUsers = Object.values(state.users);
    const selectedUsers = [];
    const teamID = currentUser.team_id;

    for (const user of allUsers) {
      if (user.team_id === teamID) {
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  };

  const team = getUsers(state, currentUser);

  console.log("TEAM", team);

  const teamList = team.map((user) => (
    <Teams 
    key={user.id} 
    teamID={user.team_id}
    name={user.name}
    email={user.email}  
    />
  ));

  return (
    <div>
      <h1>User's Team</h1>
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
  );
}
