import { React } from 'react';
import DeliverableListItem from './DeliverableListItem';
import NewDeliverable from './NewDeliverable';


// Container for each DeliverableListItem.
export default function DeliverableList(props) {
  const listItem = props.deliverables.map(deliverable =>
    <DeliverableListItem
      key={deliverable.id}
      id={deliverable.id}
      name={deliverable.name}
      description={deliverable.description}
      count={deliverable.count}
      setDeliverable={() => {
        props.onChange(deliverable.id);
        props.transition('TASKS');
      }}
      selected={deliverable.priority}

      onToggle={props.onToggle}
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
        {listItem}
      </ul>
    </div>
  );
}
