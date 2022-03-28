import React from 'react';

export default function Teams(props) {
  return(
    <table>
      <thead>
        <tr>
          <th>Team ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{props.teamID}</th>
          <th>{props.name}</th>
        </tr>
      </tbody>
    </table>
  )
}