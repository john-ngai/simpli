import React from 'react';

export default function DeliverableListItem(props) {
  return (
    <li>
      <span className="deliverable_name">{props.name}</span>
      <span className="deliverable_description">{props.description}</span>
    </li>
  )
}