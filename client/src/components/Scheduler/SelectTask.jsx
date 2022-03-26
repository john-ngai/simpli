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

  // const taskList = props.tasks.map(task => 
  //   <ListItemButton key={task.id} id={task.id} >
  //     <ListItemText 
  //     primary={task.name} 
  //     onClick={() => {onChange(task.id)}}
  //     />
  //   </ListItemButton>
  //   );
    
  return(
    <List sx={{ width: 'auto'}} subheader={
      <ListSubheader sx={{ textDecoration: "underline", '&:hover': { backgroundColor: "lightgray" } }} >Tasks</ListSubheader>
    } >
      {taskList}
    </List>
  )
}