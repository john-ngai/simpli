import React from 'react';
import TaskListItem from './TaskListItem';
import NewTask from './NewTask';

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