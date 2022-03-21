import { React, useState } from 'react';
import useAppData from '../hooks/useAppData';
import useVisualMode from '../hooks/useVisualMode';
import DeliverableListItem from './DeliverableListItem';
import NewDeliverable from './NewDeliverable';


// Container for each DeliverableListItem.
export default function DeliverableList(props) {
  const { state, showForm } = useAppData
  const { transition } = useVisualMode(null);

  const listItem = props.deliverables.map(deliverable =>
    <DeliverableListItem
      key={deliverable.id}
      id={deliverable.id}
      name={deliverable.name}
      description={deliverable.description}
      count={deliverable.count}
      setDeliverable={props.onChange}
      transition={props.onClick}
    />
  );

  // const newForm = function(
  //   state.showForm &&
  //   <NewDeliverable 
  //     project={props.project}
  //   />)

  // {state.showForm &&
  //   <NewDeliverable 
  //     project={state.project}
  //   />}

  return (
    <div>
      {/* <button className="newDeliverableButton" onClick={() => {
        {props.showForm}; transition('DELIVERABLES')}}>New Deliverable
      </button>

      {props.showForm &&
        <NewDeliverable 
          project={props.project}
        />} */}
      <ul className="deliverable_item_list">
        { listItem }
      </ul>
    </div>
  );
}
