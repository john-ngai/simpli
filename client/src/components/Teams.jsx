import React from 'react';

export default function Teams(props) {
  return(
 
      <tbody>
        <tr>
          <td>{props.teamID}</td>
          <td>{props.name}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
  )
}