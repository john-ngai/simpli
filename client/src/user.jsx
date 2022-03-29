import React from "react";
import Teams from "./Teams";
import "./App.scss";
import "./Teams.scss";
import useAppData from "./hooks/useAppData";
import { Link } from "react-router-dom";

export default function User() {
  // console.log("user??", JSON.parse(localStorage.user));
  let currentUser = JSON.parse(localStorage.user);
  const { state } = useAppData();

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
      {/* TEMPORARY BUTTON. DELETE LATER. */}
      <button>
        <Link to='/'>Home</Link>
      </button>
    </div>
  );
}
