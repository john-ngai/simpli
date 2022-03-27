import { React } from 'react';
import useAppData from '../hooks/useAppData';
import DeliverableListItem from './DeliverableListItem';
import NewDeliverable from './NewDeliverable';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './DeliverableList.scss';
import useVisualMode from '../hooks/useVisualMode';
import LinearProgressWithLabel from './MUI/LinearProgress';

// Container for each DeliverableListItem.
export default function DeliverableList(props) {
  const { state, deliverablePercentComplete, completedDeliverables, percentComplete, completedTasks } = useAppData();
  const { transition } = useVisualMode(null);

  const listItem = props.deliverables.map(deliverable =>
    <DeliverableListItem
      key={deliverable.id}
      id={deliverable.id}
      name={deliverable.name}
      description={deliverable.description}
      count={deliverable.count}
      selected={deliverable.priority}
      onToggle={props.onToggle}
      setDeliverable={props.onChange}
      transition={props.transition}
      showDelivForm={props.showDelivForm}
      editDeliverable={props.editDeliverable}
      deliverablePercentComplete={deliverablePercentComplete(state, deliverable.id)}
      completedDeliverables={props.completedDeliverables}
      completedTasks={completedTasks(state, deliverable.id)}
      deleteDeliverable={event => {
        event.stopPropagation();
        props.deleteDeliverable(props.selectedDeliverable.id);
      }}
    />
  );

  return (
    <section>
      <div id="project_details">
        <span id="project_name">{props.selectedProject.name}</span>
        <span id="project_description">{props.selectedProject.description}</span>
        
        <span id="project_stats">{completedDeliverables(state, props.project)} of {props.selectedProject.count} Deliverables Completed
        </span>
        <span className="deliverable_progress"><LinearProgressWithLabel value={Math.round((completedDeliverables(state, props.project) / props.selectedProject.count) * 100)}/></span>

        <AddCircleIcon id="new_deliverable" className="mui_icons"
          onClick={() => {
            props.showDelivForm()
          }}
        />
      </div>

      {props.showFormBoolean &&
        <NewDeliverable
          project={props.project}
          transition={transition}
          showDelivForm={props.showDelivForm}
          saveDeliverable={props.saveDeliverable}
          id={props.id}
          name={props.name}
          description={props.description}
          priority={props.priority}
          status={props.status}
          editDeliverable={props.editDeliverable}
        />
      }
      { listItem}
    </section>
  );
}
