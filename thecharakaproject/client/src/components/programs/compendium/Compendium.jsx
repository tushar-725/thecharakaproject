// Compendium.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../App.css';
import researchImg from '../../../images/researchImg.jpeg';
import narrationImg from '../../../images/narrationImg.jpeg';
import compendiumImg from '../../../images/compendiumImg.jpg';

const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";

const Compendium = () => {
  return (
    <Box>
        {/* Heading */}
        <Box sx={{backgroundImage:`url(${compendiumImg})`
        , backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem'}}>
        <Container
            sx={{
            textAlign: 'center', // Adjust background color as needed
            color: '#000',
            padding: '5rem',
            }}
        >
            <Typography variant="h2" sx={{fontFamily: bowlbyFont, color: '#FFF', textShadow: '6px 6px #DF6805'}}>Compendium</Typography>
        </Container>

        {/* Brief description */}
    </Box>

        {/* Cards section */}
        <Box>
            <Container>
                <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <Typography variant="body1" sx={{fontWeight: 600}}>
                    Compendium brings to you, our initiatives to make research more mainstream. We have training projects, SWGs (small working groups), 
                    FFA (Free-for-all) communities, and a lot more in planning to help medical students pursue research along side their Medical Education.
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {/* Card 1 */}
                    <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: '4px 8px 8px rgba(0,0,0,0.1)', borderRadius: '20px', border: '1px solid #ccc', transition: 'transform 0.3s ease-in-out' }}>
                        <CardActionArea component={Link} to="/research-101">
                        <Grid container spacing={2}>
                            {/* Image on the left */}
                            <Grid item xs={5}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={researchImg} // Replace with your image source
                                alt="Research 101"
                            />
                            </Grid>
                            {/* Heading and description on the right */}
                            <Grid item xs={7}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                <Link to="/research-101" style={{ textDecoration: 'underline', color: '#260251', fontWeight: 600 }}>
                                    Research 101
                                </Link>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" marginTop={3}>
                                Research 101 is a comprehensive program that equips medical students with skills in various aspects of research, fostering a supportive community for research enthusiasts.
                                </Typography>
                            </CardContent>
                            </Grid>
                        </Grid>
                        </CardActionArea>
                    </Card>
                    </Grid>

                    {/* Card 2 */}
                    <Grid item xs={12} md={6}>
                    <Card sx={{ boxShadow: '4px 8px 8px rgba(0,0,0,0.1)', borderRadius: '20px', border: '1px solid #ccc', transition: 'transform 0.3s ease-in-out' }}>
                        <CardActionArea component={Link} to="/monthly-narration">
                        <Grid container spacing={2}>
                            {/* Image on the left */}
                            <Grid item xs={5}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={narrationImg} // Replace with your image source
                                alt="Monthly Narration"
                            />
                            </Grid>
                            {/* Heading and description on the right */}
                            <Grid item xs={7}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                <Link to="/monthly-narration" style={{ textDecoration: 'underline', color: '#260251', fontWeight: 600 }}>
                                    Monthly Narration
                                </Link>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" marginTop={3}>
                                Monthly Narration offers a unique opportunity for healthcare enthusiasts to sharpen research skills, master medical storytelling, 
                                connect with industry leaders for remote work experience, and build an outstanding academic profile with recognized credits.
                                </Typography>
                            </CardContent>
                            </Grid>
                        </Grid>
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
  );
};

export default Compendium;
