import React from 'react';
import DeliverableListItem from './DeliverableListItem';

// Container for each DeliverableListItem.
export default function DeliverableList(props) {
  const listItem = props.deliverables.map(deliverable =>
    <DeliverableListItem
      key={deliverable.id}
      name={deliverable.name}
      description={deliverable.description}
      setDeliverable={props.onChange}
    />
  );
  
  return (
    <ul className="deliverable_item_list">
      { listItem }
    </ul>
  );
}
