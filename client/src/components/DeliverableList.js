import { React } from 'react';
import DeliverableListItem from './DeliverableListItem';
import NewDeliverable from './NewDeliverable';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './DeliverableList.scss';


// Container for each DeliverableListItem.
export default function DeliverableList(props) {
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

  return (
    <section>
      <div id="project_details">
        <span id="project_name">Project Name</span>
        <span id="project_description">Project Description</span>
        <span id="project_stats">3 of 5 (60%) Deliverables Completed</span>
        <AddCircleIcon id="new_deliverable" className="mui_icons"
          onClick={props.showDelivForm}
        />
      </div>

      {props.showFormBoolean &&
        <NewDeliverable 
          project={props.project}
        />
      }

      { listItem }
    </section>
  );
}
