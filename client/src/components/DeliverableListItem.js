import React from 'react';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function DeliverableListItem(props) {
  const { id, onToggle } = props;
  console.log("TEST2", props);

  return (
    <li className="deliverable_list_item"
      onClick={() => {
        props.setDeliverable(props.id);
        props.transition('TASKS');
      }}
    >
      <span className="deliverable_name">{props.name}</span>
      <PriorityHighIcon onClick={() => onToggle(props.id)} />
      <span className="deliverable_description">{props.description}</span>
    </li>
  )
}