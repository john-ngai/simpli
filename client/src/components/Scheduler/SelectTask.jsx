import React from 'react';
import SelectTaskListItem from './SelectTaskListItem';
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

export default function SelectTask(props) {
  const {onChange} = props;

  const taskList = props.tasks.map(task =>
    <SelectTaskListItem 
    key={task.id}
    id={task.id}
    name={task.name}
    selected={
      props.selectedTask ? task.id === props.selectedTask.id : null
    }
    setTask={()=>{onChange(task.id)}}
    />
    );
    
  return(
    <List sx={{ width: 'auto'}} subheader={
      <ListSubheader sx={{ fontSize: 16, fontWeight: "bold", textDecoration: "underline", backgroundColor: "inherit", color: 'black'  }} >Tasks</ListSubheader>
    } >
      {taskList}
    </List>
  )
}