import React from 'react';
import className from 'classnames';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function TaskListItem(props) {
  const { task, onToggle } = props;

  return (
    <li className="task_list_item">
      <span className="task_name">{props.name}</span>
      <span className="task_description">{props.description}</span>
      <PriorityHighIcon className="PriorityHighIcon priority" onClick={() => onToggle(task.id)} />
    </li>
  )
}