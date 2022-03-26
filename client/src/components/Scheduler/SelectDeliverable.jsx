import React, { useState } from 'react';
import useAppData from '../../hooks/useAppData';
import SelectDelListItem from './SelectDelListItem';
import { List, ListSubheader, Collapse } from '@mui/material';

export default function SelectDeliverable(props) {
  const {onChange, transition} = props;

  const [open, setOpen] = useState(true);

  const delList = props.deliverables.map(deliverable => 
    <SelectDelListItem 
    key={deliverable.id} 
    id={deliverable.id} 
    name={deliverable.name} 
    selected={deliverable.id === props.value}
    setDeliverable={() => {
      onChange(deliverable.id);
      transition("TASKS");
    }} 
    />
  );

  return (
  <Collapse in={open} timeout="auto" unmountOnExit>
  <List sx={{ width: 'auto', maxWidth: 200 }} subheader={
    <ListSubheader sx={{ textDecoration: "underline", '&:hover': { backgroundColor: "lightgray" } }} >Deliverables</ListSubheader> } >
    {delList}
  </List>
  </Collapse>   
  )
}