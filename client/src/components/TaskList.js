import React from 'react';
import TaskListItem from './TaskListItem';
import NewTask from './NewTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function TaskList(props) {
  const taskInfo = props.tasks.map(task => {
    return (
      <TaskListItem
        key={task.id}
        name={task.name}
        description={task.description}
      />
    )
  })

  return (
    <section>
      <div id="deliverable_details">
        <span id="deliverable_name">Project Name: Deliverable Name</span>
        <span id="deliverable_description">Deliverable Description</span>
        <span id="deliverable_stats">3 of 13 (23%) Tasks Completed</span>
        <AddCircleIcon id="new_task" className="mui_icons"
          onClick={props.showTaskForm}
        />

        {props.showFormBoolean &&
          <NewTask
            deliverable={props.deliverable}
          />
        }
      </div>

      { taskInfo }
    </section>
  );
}
