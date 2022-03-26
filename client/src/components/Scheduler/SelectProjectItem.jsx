import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function SelectProjectItem(props) {
  const {id, name, setProject} = props;

  const handleOpen = () => {
    setOpen(!open);
  }
  const [open, setOpen] = React.useState(true);

  return (
    <ListItemButton onClick={handleOpen}> 
      <ListItemText 
      id={id} 
      primary={name} 
      primaryTypographyProps={{
        textAlign: 'left',
        fontSize: 14
      }}
      onClick={setProject} />
      {!open ? <ExpandMore /> : <ExpandLess />}
    </ListItemButton>
  );
}