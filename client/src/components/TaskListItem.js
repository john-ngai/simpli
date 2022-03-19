import React from 'react';

export default function TaskListItem(props) {
  return (
    <li className="task_list_item">
      <span className="task_name">{props.name}</span>
      <span className="task_description">{props.description}</span>
    </li>
  )
}