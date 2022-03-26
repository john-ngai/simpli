import * as React from 'react';
import useAppData from '../../hooks/useAppData';
import { List, ListItemButton, ListItemText } from '@mui/material';

export default function SelectDeliverable(props) {
  const {state} = useAppData();
  const {onClick} = props;

  const delList = props.deliverables.map(deliverable => {
    <delListItem 
    key={deliverable.id} 
    id={deliverable.id} 
    name={deliverable.name} 
    setDeliverable={onClick} 
    />;
  });

  return (
    <List sx={{ width: 'auto' }} >
      {delList}
    </List>
    // <ListItemButton>
    //   <ListItemText primary={name} />
    // </ListItemButton>
  );
}