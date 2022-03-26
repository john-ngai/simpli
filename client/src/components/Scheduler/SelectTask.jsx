import React from 'react';
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

export default function SelectTask(props) {
  const {onChange} = props;

  const taskList = props.tasks.map(task => 
    <ListItemButton key={task.id} id={task.id} >
      <ListItemText 
      primary={task.name} 
      onClick={() => {onChange(task.id)}}
      />
    </ListItemButton>
    );
    
  return(
    <List sx={{ width: 'auto'}} subheader={
      <ListSubheader sx={{ textDecoration: "underline", '&:hover': { backgroundColor: "lightgray" } }} >Tasks</ListSubheader>
    }>

    </List>
  )
}