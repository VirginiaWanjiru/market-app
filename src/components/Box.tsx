import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function BoxSystemProps() {
  return (
    
    <Box
      height={200}
      width={100}
      my={10}
      display="flex"
      alignItems="center"
      gap={30}
      p={10}
      
    >
      <h1>Your Farming Partner for Crop and LiveStock Prosperity</h1>
    </Box>
    
  );
}