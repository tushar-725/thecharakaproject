// Vivaad.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import SamvaadImg from '../../../images/samvaad.jpeg';
import samvaadBanner from '../../../images/samvaadBanner4.jpg';
import '../../../App.css';
const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";

const Samvaad = () => {
  return (
    <Box>
        <Box sx={{backgroundImage:`url(${samvaadBanner})`
            , backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
            <Container
                sx={{
                textAlign: 'center', // Adjust background color as needed
                color: '#000',
                padding: '5rem',
                }}
            >
                <Typography variant="h2" sx={{fontFamily: bowlbyFont, color: '#FFF', textShadow: '6px 6px #DA6CB9'}}>Samvaad - Pen Pal Program</Typography>
            </Container>
        </Box>

        {/* Second portion with image and content */}
        <Box
            sx={{
            backgroundColor: '#ffffff', // Adjust background color as needed
              paddingTop: '40px', // 25% for the heading + 75% for this portion
            }}
        >
            <Container>
                <Grid container spacing={3}>
                {/* Image on the left */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={SamvaadImg} // Replace with your image source
                        alt="Book Club"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                    </Paper>
                </Grid>
                {/* Content on the right */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ padding: 2, textAlign: 'left' }}>
                    <Typography variant="h3" sx={{ fontFamily: yatraOneFont, color: '#dd78be'}}>वसुधैव कुटुम्बकम्।</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight:600}}>
                    <br/>It is a profound philosophy that represents the idea that the entire world is but one, interconnected, and hence should be seen 
                    as one family, having a sense of belongingness, among all people regardless of the differences in nationality, culture, or background.<br/><br/>
                    Samvaad is an initiative to bring together students from across the network and engage in communication. The pen pal program would try 
                    to connect people with similar interests. 
                    </Typography>
                    {/* Add more content as needed */}
                    </Box>
                </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
  );
};

export default Samvaad;
