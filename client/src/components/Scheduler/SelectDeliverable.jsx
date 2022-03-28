import React, { useState } from 'react';
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
  <div>
    <ListSubheader sx={{ fontSize: 16, fontWeight: "bold", textDecoration: "underline", backgroundColor: "inherit", color: 'white' }} >Deliverables</ListSubheader>
    {delList}
  </div> 
  )
}