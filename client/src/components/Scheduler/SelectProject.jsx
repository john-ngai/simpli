import * as React from 'react';
import useAppData from '../../hooks/useAppData';
import SelectProjectItem from './SelectProjectItem';
import SelectDeliverable from './SelectDeliverable';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';




export default function SelectProject(props) {
  const { state, getDeliverables, setDeliverable, getSelectedDeliverable } = useAppData();

  const {onChange} = props;

  const deliverables = getDeliverables(state, state.project);
  const selectedDel = getSelectedDeliverable(state);

  console.log("state =", state.deliverables);
  console.log("SELECTED DEL=", selectedDel);

  const projectList = props.projects.map(project =>
    <SelectProjectItem 
    key={project.id}
    id={project.id}
    name={project.name}
    selected={project.id === props.value}
    setProject={onChange}
    />
  );

  // const [project, setProject] = React.useState('');

  // const handleChange = event => {
  //   setProject(event.target.value);
  // };

  return (
    // <Box sx={{ minWidth: 175 }}>
    //   <FormControl fullWidth>
    //     <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
    //     <Select
    //       labelId="demo-simple-select-label"
    //       id="demo-simple-select"
    //       value={project}
    //       label="Select Project"
    //       onChange={handleChange}
    //     >
    //       <MenuItem value={'projectID1'}>Project Name #1</MenuItem>
    //       <MenuItem value={'projectID2'}>Project Name #2</MenuItem>
    //       <MenuItem value={'projectID3'}>Project Name #3</MenuItem>
    //     </Select>
    //   </FormControl>
    // </Box>

    // <SelectDeliverable deliverables={deliverables} selectedDel={selectedDel} onClick={setDeliverable}  />


      <List sx={{width: 'auto'}} component="div">
          {projectList}
      </List>
  );
}
