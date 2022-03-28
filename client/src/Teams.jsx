import React from 'react';

export default function Teams(props) {
  return(
    <table>
      <tbody>
        <tr>
          <th>{props.teamID}</th>
          <th>{props.name}</th>
        </tr>
      </tbody>
    </table>
  )
}