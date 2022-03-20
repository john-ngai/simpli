import React from 'react';
import DeliverableListItem from './DeliverableListItem';

// Container for each DeliverableListItem.
export default function DeliverableList(props) {
  // const listItem = props.deliverables.map(deliverable =>
  //   <DeliverableListItem
  //     key={deliverable.id}
  //     name={deliverable.name}
  //     description={deliverable.description}
  //     selected={deliverable.name === props.value}
  //     setDeliverable={props.onChange}
  //   />
  // );
  
  // return (
  //   <ul className="deliverable_item_list">
  //     { listItem }
  //   </ul>
  // );
  
  const deliverableInfo = props.deliverables.map(deliverable => {
    return (
      <DeliverableListItem 
        key={deliverable.id}
        name={deliverable.name}
        description={deliverable.description}
        setDeliverable={props.onChange}
      />
    )
  })

  return (
    <ul className="deliverable_item_list">
      {deliverableInfo}
    </ul>
  )
  /**/
}
