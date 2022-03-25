import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

export default function LinearProgressWithLabel(props) {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress className="progress_bar" color="inherit" variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography style={{color: "white"}} variant="body2" color="text.secondary">{ props ? `${props.value}%` : `0%`}</Typography>
      </Box>
    </Box>
    </div>
  )
}