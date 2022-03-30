import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SelectTaskListItem(props) {
  const { id, name, setTask } = props;

  const selected = props.selected ? 'selected_item' : null;

  return (
    <ListItemButton id={selected}>
      <ListItemText className="ListItemText"
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
