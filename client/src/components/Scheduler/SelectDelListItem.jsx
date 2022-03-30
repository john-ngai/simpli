import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function SelectDelListItem(props) {
  const { id, name, setDeliverable } = props;

  const selected = props.selected ? 'selected_item' : null;

  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <ListItemButton id={selected}
      onClick={handleOpen}
    >
      <ListItemText className="ListItemText"
        onClick={setDeliverable}
        id={id}
        primary={name}
        primaryTypographyProps={{
          fontSize: 12
        }}
      />
      {/* {!open ? <ExpandMore /> : <ExpandLess />} */}
    </ListItemButton>
  );
}
