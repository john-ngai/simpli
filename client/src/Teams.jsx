import React from 'react';

export default function Teams(props) {
  return(
 
      <tbody>
        <tr>
          <th>{props.teamID}</th>
          <th>{props.name}</th>
        </tr>
      </tbody>
  )
}