import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectProject() {
  const [project, setProject] = React.useState('');

  const handleChange = event => {
    setProject(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={project}
          label="Select Project"
          onChange={handleChange}
        >
          <MenuItem value={'projectID1'}>Project Name #1</MenuItem>
          <MenuItem value={'projectID2'}>Project Name #2</MenuItem>
          <MenuItem value={'projectID3'}>Project Name #3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
