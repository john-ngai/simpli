import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectDelListItem(props) {
  const { id, name, setDeliverable } = props;
  return (
    <ListItemButton>
      <ListItemText 
      primary={name}
      onClick={()=>{setDeliverable(id)}} 
      />
    </ListItemButton>
  );
}