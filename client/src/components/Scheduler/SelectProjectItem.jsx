import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function SelectProjectItem(props) {
  const {id, name, setProject} = props;

  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] =React.useState(1);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleListItemClick = (event, selectedIndex) => {
    setSelectedIndex(selectedIndex);
  }

  return (
    <ListItemButton
    id="selected" 
    selected={selectedIndex === 0}
    onClick={setProject}> 
      <ListItemText 
      id={id}
      primary={name} 
      primaryTypographyProps={{
        textAlign: 'left',
        fontSize: 14
      }}
      onClick={handleOpen} />
      {/* {!open ? <ExpandMore /> : <ExpandLess />} */}
    </ListItemButton>
  );
}