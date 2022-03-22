import React from 'react';
import './TaskListItem.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskListItem(props) {
  const { task, onToggle, onClick } = props;
  // console.log("PROPS SELECTED:", props.selected);
  // const taskClass = classNames("task_list_item", {
  //   "task_list_item--selected": props.selected
  // })

  return (
    <li className="task_list_item">
      <CheckCircleOutlineIcon id={props.complete ? "completed_task" : "incomplete_task"} className="mui_icons" onClick={() => onClick(task.id)} />
      {/* <CheckCircleOutlineIcon id="complete_task" className="mui_icons" /> */}
      <div id="task_list_item_container">
        <div id="task_list_item_header">
          <span className="task_name">{props.name}</span>
          <PriorityHighIcon id={props.selected ? "important_task" : "low_priority"} onClick={() => onToggle(task.id)} />
        </div>
        <span className="task_description">{props.description}</span>
        <span className="task_updates">
          <EditIcon id="edit_task" className="mui_icons" />
          <DeleteIcon id="delete_task" className="mui_icons" />
        </span>
      </div>
    </li>
  );
}
