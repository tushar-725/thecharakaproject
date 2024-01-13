// Vivaad.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import VivaadImg from '../../../images/vivaadImg.jpeg';
import vivaadBanner from '../../../images/vivaadBanner.jpg';
import '../../../App.css';
const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";

const Vivaad = () => {
  return (
    <Box>
        <Box sx={{backgroundImage:`url(${vivaadBanner})`
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
                <Typography variant="h2" sx={{fontFamily: bowlbyFont, color: '#FFF', textShadow: '6px 6px #DF6805'}}>Vivaad - The Book Club</Typography>
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
                        src={VivaadImg} // Replace with your image source
                        alt="Book Club"
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                    </Paper>
                </Grid>
                {/* Content on the right */}
                <Grid item xs={12} md={8}>
                    <Box sx={{ padding: 2, textAlign: 'left' }}>
                    <Typography variant="h3" sx={{ fontFamily: yatraOneFont, color: '#f59e2d'}}>विद्यायामृतमश्नुते ज्ञानेनैवानुपश्यति।</Typography>
                    <Typography variant="subtitle1" sx={{fontWeight:600}}>
                    <br/>This literally translates to "Through knowledge, one attains immortality; only through wisdom does one see" <br/><br/>
                    Vivaad was an initiative to unite people with ideas and encapsulate the essence of their viewpoints and differing 
                    opinions. We hope to bring healthy engaging discussions to the table from across the network and establish an ecosystem of ideas.
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

export default Vivaad;
