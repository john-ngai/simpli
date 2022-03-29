import React from 'react';
import './TaskList.scss';
import TaskListItem from './TaskListItem';
import NewTask from './NewTask';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useAppData from '../hooks/useAppData';
import useVisualMode from '../hooks/useVisualMode';
import LinearProgressWithLabel from './MUI/LinearProgress';

// Modes
const NEW_TASK = 'NEW_TASK';
const EDIT_TASK = 'EDIT_TASK';

export default function TaskList(props) {
  const { state, deliverablePercentComplete, completedTasks } = useAppData();
  const { mode, transition } = useVisualMode(null);
  const taskInfo = props.tasks.map(task => {
    // console.log(completedTasks(state, task.deliverable_id))
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
        transition={transition}
        showTaskForm={props.showTaskForm}
        setTask={() => props.onChange(task.id)}
        editTask={props.editTask}
        deleteTask={() => props.deleteTask(task.id)}
        completedTasks={props.completedTasks(state, task.deliverable_id)}
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
        <span id="deliverable_stats">{props.selectedDeliverable['completed_tasks']} of {props.selectedDeliverable.count} Tasks Completed
        </span>

        <span className="task_progress"><LinearProgressWithLabel value={Math.round((props.selectedDeliverable['completed_tasks'] / props.selectedDeliverable.count) * 100)}/></span>


        <AddCircleIcon id="new_task" className="mui_icons"
          onClick={() => {
            // onClick={props.showTaskForm} // Change to transition
            if (!mode) {
              transition(NEW_TASK);
            } else {
              transition(null);
            }
          }}
        />
      </div>

      <KeyboardBackspaceIcon id="back_button" className="mui_icons"
        onClick={() => { props.transition('DELIVERABLES') }}
      />

      {mode === NEW_TASK &&
        <NewTask
          deliverable={props.deliverable}
          transition={transition}
          saveTask={props.saveTask}
          priority={props.priority}
          status={props.status}
          editTask={props.editTask}
        />
      }

      {mode === EDIT_TASK &&
        <NewTask
          deliverable={props.deliverable}
          transition={transition}
          status={props.selectedTask.status}
          editTask={props.editTask}
          id={props.selectedTask.id}
          name={props.selectedTask.name}
          description={props.selectedTask.description}
          priority={props.selectedTask.priority}
        />
      }

      {taskInfo}
    </section>
  );
}
