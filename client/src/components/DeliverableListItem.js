import './DeliverableListItem.scss';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react';

export default function DeliverableListItem(props) {
  return (
    <li className="deliverable_list_item"
      onClick={() => {
        props.setDeliverable(props.id);
        props.transition('TASKS');
      }}
    >
      <div id="deliverable_list_item_header">
        <span className="deliverable_name">{props.name}</span>
        <PriorityHighIcon id="important_deliverable" className="mui_icons" />
      </div>
      <span className="deliverable_description">{props.description}</span>
      <span className="deliverable_tasks">{props.count} Tasks Remaining</span>
      {props.count > 0 ? <aside>Percent Complete: {props.deliverablePercentComplete}%</aside> : <aside>No Tasks Yet! </aside>}
      <span className="deliverable_updates">
        <EditIcon id="edit_deliverable" className="mui_icons" />
        <DeleteIcon id="delete_deliverable" className="mui_icons" />
      </span>
    </li>
  )
}
