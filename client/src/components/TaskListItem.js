import React from 'react';
import classNames from 'classnames';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function TaskListItem(props) {
  const { task, onToggle } = props;
  // console.log("PROPS SELECTED:", props.selected);
  const taskClass = classNames("task_list_item", {
    "task_list_item--selected": props.selected
  })

  return (
    <li className={taskClass} >
      <span className="task_name">{props.name}</span>
      <span className="task_description">{props.description}</span>
      <PriorityHighIcon className={props.selected ? "high_priority" : "low_priority"} onClick={() => onToggle(task.id)} />
    </li>
  )
}