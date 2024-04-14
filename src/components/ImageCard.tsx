import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ paddingTop:2,width: 600 }}>
      <CardMedia
        sx={{ height: 300,
            width:600
         }}
        image="images.jpeg"
        title="tractor pic"
      />
      
      <CardActions>
      <Button variant="contained" 
         color="success"  
         >Get Started</Button>

         <Button variant="outlined" 
         color="success"  
         >See Shop</Button>
      </CardActions>
    </Card>
  );
}