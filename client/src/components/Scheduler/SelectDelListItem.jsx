import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function SelectDelListItem(props) {
  const { id, name, setDeliverable } = props;

  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <ListItemButton onClick={handleOpen} >
      <ListItemText
      // id={id}
      id="selected"
      primary={name}
      primaryTypographyProps={{
        fontSize: 12
      }}
      onClick={setDeliverable} 
      />
      {!open ? <ExpandMore /> : <ExpandLess />}
    </ListItemButton>
  );
}