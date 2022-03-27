import React from 'react';
import './TaskListItem.scss';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useAppData from '../hooks/useAppData';

export default function TaskListItem(props) {
  const { task, onToggle, onClick } = props;
  let {state, completedTasks} = useAppData();

  return (
    <li className="task_list_item">
      <CheckCircleOutlineIcon id={props.status ? "completed_task" : "incomplete_task"} className="mui_icons" onClick={() => {
        onClick(task.id)
        // props.completedTasks = props.completedTasks + 1
        }} />
      {/* <CheckCircleOutlineIcon id="completed_task" className="mui_icons"
        onClick={() => props.setTask()} // Do not remove.
      /> */}
      <div id="task_list_item_container">
        <div id="task_list_item_header">
          <span className="task_name">{props.name}</span>
          <PriorityHighIcon id={props.selected ? "important_task" : "low_priority"}
            onClick={() => {
              onToggle(task.id);
              props.setTask(); // Do not remove.
            }}
          />
        </div>
        <span className="task_description">{props.description}</span>
        <span className="task_updates">
          <EditIcon id="edit_task" className="mui_icons"
            onClick={event => {
              event.stopPropagation()
              props.setTask()
              props.transition('EDIT_TASK');
            }} 
          />
          <DeleteIcon id="delete_task" className="mui_icons"
            onClick={() => {
              props.setTask();
              props.deleteTask();
            }}
          />
        </span>
      </div>
    </li>
  );
}
