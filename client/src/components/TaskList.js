import React from 'react';
import TaskListItem from './TaskListItem';
import NewTask from './NewTask';

export default function TaskList(props) {
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
    <div>
      <button className="newTaskButton"
        onClick={props.showTaskForm}
      >New Task
      </button>

      {props.showFormBoolean &&
        <NewTask
          deliverable={props.deliverable}
        />}

      <ul className="task_item_list">
        {taskInfo}
      </ul>
    </div>
  )
}