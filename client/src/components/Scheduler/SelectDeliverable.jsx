import React, { useState } from 'react';
import useAppData from '../../hooks/useAppData';
import SelectDelListItem from './SelectDelListItem';
import { List, ListItemButton, ListItemText, ListSubheader, Collapse } from '@mui/material';

export default function SelectDeliverable(props) {
  const {state} = useAppData();
  const {onChange, transition} = props;

  const [open, setOpen] = useState(true);

  const delList = props.deliverables.map(deliverable => 
    <SelectDelListItem 
    key={deliverable.id} 
    id={deliverable.id} 
    name={deliverable.name} 
    setDeliverable={() => {
      onChange(deliverable.id);
      transition("TASKS");
    }} 
    />
  );

  // const delList = props.deliverables.map(deliverable =>
  //   <ListItemButton key={deliverable.id} id={deliverable.id} onClick={handleOpen} >
  //     <ListItemText 
  //     primary={deliverable.name}
  //     primaryTypographyProps={{
  //       fontSize: 12
  //     }}
  //     onClick={()=>{onChange(deliverable.id)}} 
  //     />
  //     {!open ? <ExpandMore /> : <ExpandLess />}
  //   </ListItemButton>
  // );

  return (
  <Collapse in={open} timeout="auto" unmountOnExit>
  <List sx={{ width: 'auto'}} subheader={
    <ListSubheader sx={{ textDecoration: "underline", '&:hover': { backgroundColor: "lightgray" } }} >Deliverables</ListSubheader> } >
    {delList}
  </List>
  </Collapse>   
  )
}