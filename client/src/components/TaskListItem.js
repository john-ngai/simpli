import React from 'react';

export default function TaskListItem(props) {
  const { id, onToggle } = props;

  return (
    <li className="task_list_item" onClick={() => onToggle(id)}>
      <span className="task_name">{props.name}</span>
      <span className="task_description">{props.description}</span>
    </li>
  )
}