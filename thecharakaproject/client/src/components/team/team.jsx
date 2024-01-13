// Blog.jsx
import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import teamBanner from '../../images/teamBanner.jpg';
import '../../App.css';
const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";

const Team = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${teamBanner})`, // Replace with the actual path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#260251',
        }}
      >
        <CssBaseline />
      </div>
      <Container style={{ marginTop: '40px'}}>
        <Typography variant="h3" gutterBottom sx={{fontFamily: bowlbyFont}}>
          OUR TEAM
        </Typography>
        <Typography variant="body1">
          Stay tuned!
        </Typography>
      </Container>
    </div>
  );
};

export default Team;
