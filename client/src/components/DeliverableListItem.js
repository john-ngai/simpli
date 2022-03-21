import React from 'react';
import classNames from 'classnames';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function DeliverableListItem(props) {
  const { id, onToggle } = props;
  // console.log("TEST2", props);

  const deliverableClass = classNames("deliverable_list_item", {
    "deliverable_list_item--selected": props.selected
  })
  return (
    <li className={deliverableClass}
      onClick={props.setDeliverable}>
      <PriorityHighIcon onDoubleClick={() => onToggle(id)} />
      <span className="deliverable_name">{props.name}</span>
      <span className="deliverable_description">{props.description}</span>
      <aside>Tasks remaining: {props.count}</aside>
    </li >
  )
}