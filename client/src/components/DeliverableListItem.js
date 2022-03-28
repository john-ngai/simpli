import './DeliverableListItem.scss';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgressWithLabel from './MUI/CircularProgressWithLabel';
import LinearProgressWithLabel from './MUI/LinearProgress';

import React from 'react';
import classNames from 'classnames';
import useAppData from '../hooks/useAppData';

export default function DeliverableListItem(props) {
  const { id, onToggle } = props;
  const { state, completedTasks } = useAppData()
  const handleClick = (e) => {
    e.stopPropagation();
    onToggle(id);
  }

  return (
    <li className="deliverable_list_item"
      onClick={() => {
        props.setDeliverable(props.id);
        props.transition('TASKS');
    }}
    id={props.selected ? "priority_del" : "deliverable_list_item"}
    >
      
      <div id="box">
      { props.count > 0 ? <CircularProgressWithLabel value={Math.round((props.completedTasks / props.count) * 100)}/> : <CircularProgressWithLabel value={0}/> }
      </div>


      <div id="box2">

      <div id="deliverable_list_item_header">
        <span className="deliverable_name">{props.name}</span>
        
        <span className="important_del">
          <PriorityHighIcon id={props.selected ? "important_deliverable" : "low_priority"} onClick={handleClick} />
        </span>
      </div>
      
      <span className="deliverable_description">{props.description}</span>
      
      <span className="deliverable_tasks">{(props.count - props.completedTasks)} out of {props.count} Tasks Remaining</span>

      <span className="deliverable_updates">
        <EditIcon id="edit_deliverable" className="mui_icons" 
          onClick={event => {
            event.stopPropagation();
            props.setDeliverable(props.id);
            props.transition2('EDIT_DELIVERABLE');
          }}
        />
        <DeleteIcon id="delete_deliverable" className="mui_icons"
          onClick={props.deleteDeliverable}
        />
      </span>

      </div>
    </li>
  )
}
