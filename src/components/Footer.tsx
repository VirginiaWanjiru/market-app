// Footer.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" align="center" style={{ marginTop: '7rem' }}>
        &copy; 2024 Mkulima WebApp. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
