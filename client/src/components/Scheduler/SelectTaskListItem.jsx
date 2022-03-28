import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectTaskListItem(props) {
  const { id, name, setTask } = props;
  
  return(
    <ListItemButton >
      <ListItemText 
      id={id}
      primary={name}
      primaryTypographyProps={{
        fontSize: 12
      }}
      onClick={setTask}
      />
    </ListItemButton>
  );
}