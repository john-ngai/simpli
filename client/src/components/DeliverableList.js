import React from 'react';
import DeliverableListItem from './DeliverableListItem';

export default function DeliverableList(props) {
  const deliverableInfo = props.deliverables.map(deliverable => {
    return (
      <DeliverableListItem 
        key={deliverable.id}
        name={deliverable.name}
        description={deliverable.description}
      />
    )
  })

  return (
    <ul className="deliverable_item_list">
      {deliverableInfo}
    </ul>
  )
}