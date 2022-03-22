import React from 'react';
import './TaskList.scss';
import TaskListItem from './TaskListItem';
import NewTask from './NewTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useAppData from '../hooks/useAppData';

export default function TaskList(props) {
  const {state, showTaskForm} = useAppData
  const taskInfo = props.tasks.map(task => {
    return (
      <TaskListItem
        key={task.id}
        id={task.id}
        task={task}
        name={task.name}
        selected={task.priority}
        description={task.description}
        onToggle={props.onToggle}
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
          onClick={console.log(props.showTaskForm)}
        />

        {props.showFormBoolean &&
          <NewTask
            deliverable={props.deliverable}
            showTaskForm={props.showTaskForm}
            saveTask={props.saveTask}
          />
        }
      </div>

      { taskInfo}
    </section>
  );
}
