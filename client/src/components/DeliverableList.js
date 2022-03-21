import { React } from 'react';
import useAppData from '../hooks/useAppData';
import DeliverableListItem from './DeliverableListItem';
import NewDeliverable from './NewDeliverable';


// Container for each DeliverableListItem.
export default function DeliverableList(props) {
  const { state, deliverablePercentComplete } = useAppData();
  const listItem = props.deliverables.map(deliverable =>
    <DeliverableListItem
      key={deliverable.id}
      id={deliverable.id}
      name={deliverable.name}
      description={deliverable.description}
      count={deliverable.count}
      setDeliverable={props.onChange}
      transition={props.onClick}
      deliverablePercentComplete={deliverablePercentComplete(state, deliverable.id)}
    />
  );

  return (
    <div>
      <button className="newDeliverableButton" 
      onClick={props.showDelivForm}
      >New Deliverable
      </button>

      {props.showFormBoolean &&
        <NewDeliverable 
          project={props.project}
        />}

      <ul className="deliverable_item_list">
        { listItem }
      </ul>
    </div>
  );
}
