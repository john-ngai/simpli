import React from 'react';

export default function DeliverableListItem(props) {
  return (
    <li className="deliverable_list_item"
      onClick={() => {
        props.setDeliverable(props.id);
        props.transition('TASKS');
      }}
    >
      <span className="deliverable_name">{props.name}</span>
      <span className="deliverable_description">{props.description}</span>
      <aside>Tasks remaining: {props.count}</aside>
    </li>
  )
}