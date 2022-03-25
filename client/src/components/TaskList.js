import React from 'react';
import './TaskList.scss';
import TaskListItem from './TaskListItem';
import NewTask from './NewTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useAppData from '../hooks/useAppData';
import LinearProgressWithLabel from './MUI/LinearProgress';

export default function TaskList(props) {
  const {state, deliverablePercentComplete, completedTasks } = useAppData();
  const taskInfo = props.tasks.map(task => {
    return (
      <TaskListItem
        key={task.id}
        id={task.id}
        task={task}
        name={task.name}
        selected={task.priority}
        status={task.status}
        description={task.description}
        onToggle={props.onToggle}
        onClick={props.completeTask}
        transition={props.transition}
        showTaskForm={props.showTaskForm}
        setTask={() => props.onChange(task.id)}
        editTask={props.editTask}
        deleteTask={() => props.deleteTask(task.id)}
      />
    )
  })

  return (
    <section>
      <div id="deliverable_details">
        <span id="deliverable_name">
          {props.selectedProject.name}: {props.selectedDeliverable.name}
        </span>
        <span id="deliverable_description">{props.selectedDeliverable.description}</span>
        <span id="deliverable_stats">{completedTasks(state, props.deliverable)} of {props.selectedDeliverable.count} Tasks Completed
        <LinearProgressWithLabel value={deliverablePercentComplete(state, props.deliverable)}/>
        </span>
        <AddCircleIcon id="new_task" className="mui_icons"
          onClick={props.showTaskForm}
        />

        {props.showFormBoolean &&
          <NewTask
            deliverable={props.deliverable}
            transition={props.transition}
            showTaskForm={props.showTaskForm}
            saveTask={props.saveTask}
            id={props.id}
            name={props.name}
            description={props.description}
            priority={props.priority}
            status={props.status}
            editTask={props.editTask}
          />
        }
      </div>

      { taskInfo}
      <button onClick={() => {props.transition('DELIVERABLES')}}>Back</button>
    </section>
  );
}
