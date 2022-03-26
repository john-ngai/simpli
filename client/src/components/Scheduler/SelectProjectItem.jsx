import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectProjectItem(props) {
  const {id, name, setProject} = props;
  return (
    <ListItemButton>
      <ListItemText 
      id={id} 
      primary={name} 
      primaryTypographyProps={{
        textAlign: 'left',
        fontSize: 12
      }}
      onClick={setProject} />
    </ListItemButton>
  );
}