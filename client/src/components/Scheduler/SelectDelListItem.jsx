import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectDelListItem(props) {
  const { id, name, setDeliverable } = props;
  return (
    <ListItemButton>
      <ListItemText 
      sx={{
        bgcolor: "lightgrey"
      }}
      primary={name}
      primaryTypographyProps={{
        fontSize: 12
      }}
      onClick={()=>{setDeliverable(id)}} 
      />
    </ListItemButton>
  );
}