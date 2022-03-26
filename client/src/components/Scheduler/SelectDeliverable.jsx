import * as React from 'react';
import useAppData from '../../hooks/useAppData';
import SelectDelListItem from './SelectDelListItem';
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';

export default function SelectDeliverable(props) {
  const {state} = useAppData();
  const {onChange} = props;

  // const delList = props.deliverables.map(deliverable => 
  //   <SelectDelListItem 
  //   key={deliverable.id} 
  //   id={deliverable.id} 
  //   name={deliverable.name} 
  //   setDeliverable={onChange} 
  //   />
  // );

  const delList = props.deliverables.map(deliverable =>
    <ListItemButton key={deliverable.id} id={deliverable.id} >
      <ListItemText 
      primary={deliverable.name}
      primaryTypographyProps={{
        fontSize: 12
      }}
      onClick={()=>{onChange(deliverable.id)}} 
      />
    </ListItemButton>
  );

  return (
  <List sx={{ width: 'auto'}} subheader={
    <ListSubheader sx={{ textDecoration: "underline", '&:hover': { backgroundColor: "lightgray" } }} >Deliverables</ListSubheader>
  } >
    {delList}
  </List>    
  )
}