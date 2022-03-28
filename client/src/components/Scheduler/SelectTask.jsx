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
    setTask={()=>{onChange(task.id)}}
    />
    );
    
  return(
    <List sx={{ width: 'auto'}} subheader={
      <ListSubheader sx={{ fontSize: 16, fontWeight: "bold", textDecoration: "underline"}} >Tasks</ListSubheader>
    } >
      {taskList}
    </List>
  )
}