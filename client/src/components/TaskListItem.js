import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskListItem(props) {
  return (
    <li className="task_list_item"
      onClick=""
    >
      <CheckCircleOutlineIcon id="completed_task" className="mui_icons" />
      <div id="task_list_item_container">
        <div id="task_list_item_header">
          <span className="task_name">{props.name}</span>
          <PriorityHighIcon id="important_task" className="mui_icons" />
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
