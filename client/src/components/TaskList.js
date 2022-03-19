import React from 'react';
import TaskListItem from './TaskListItem';

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
    <ul className="task_item_list">
      {taskInfo}
    </ul>
  )
}