import * as React from 'react';
import useAppData from '../../hooks/useAppData';
import SelectDelListItem from './SelectDelListItem';
import { List, ListItemButton, ListItemText } from '@mui/material';

export default function SelectDeliverable(props) {
  const {state} = useAppData();
  const {onClick, setDeliverable} = props;

  // const delList = props.deliverables.map(deliverable => {
  //   <SelectDelListItem 
  //   key={deliverable.id} 
  //   id={deliverable.id} 
  //   name={deliverable.name} 
  //   setDeliverable={onClick} 
  //   />;
  // });

  const delList = props.deliverables.map(deliverable => 
    <ListItemButton key={deliverable.id} id={deliverable.id} >
      <ListItemText 
      primary={deliverable.name}
      onClick={()=>{setDeliverable(deliverable.id)}} 
      />
    </ListItemButton>
  );

  return (
  <List sx={{ width: 'auto' }} >
    {delList}
  </List>    
  )
}