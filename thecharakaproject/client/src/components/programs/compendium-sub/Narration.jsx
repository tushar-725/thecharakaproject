// Research.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../App.css';
import narrationImg from '../../../images/narrationImg.jpeg';

const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";
const merriweatherFont = "'Merriweather', serif";

const Research = () => {
  return (
    <Box>
        <Container style={{fontFamily: merriweatherFont}}>
        {/* Heading */}
        <Box sx={{ textAlign: 'center', marginTop: '6rem', marginBottom: '3rem' }}>
            <Typography variant="h3" sx={{ fontFamily: bowlbyFont}}><span style={{color: '#260251', textDecoration: 'underline'}}>Monthly</span> <span style={{color: '#DF6805', textDecoration: 'underline'}}>Narration</span></Typography>
        </Box>

        {/* Image and short description section */}
        <Grid container spacing={0} sx={{ alignItems: 'center' }}>
            {/* Image on the left */}
            <Grid item xs={16} md={6}>
            <Box sx={{ display: 'flex', textAlign: 'left'}}>
                <img
                src={narrationImg} // Replace with your image source
                alt="Research Image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </Box>
            </Grid>

            {/* Short line with 3 bullet points on the right */}
            <Grid item xs={16} md={6} style={{paddingLeft: '0px', textAlign: 'left'}}>
            <Box sx={{paddingLeft: '0', fontSize: '14px', fontFamily:  merriweatherFont, fontWeight: 300}}>
                <Typography fontFamily={merriweatherFont} fontSize={16}>
                Passionate about healthcare? Curious about captivating medical storytelling?
                <br/><br/>" Monthly Narration" is your chance to combine both, earn remote work hours, and unlock academic credits!
                <br/><br/>Here's what you get:
                </Typography>
                <ul style={{lineHeight: '1.5', fontSize: 17}}>
                <li>Sharpen your research skills: Analyze data, synthesize evidence and craft impactful narratives.</li>
                <li>Master medical storytelling: Learn to captivate readers with your insights and engage them in complex topics.</li>
                <li>Connect with industry leaders: Gain valuable remote work experience with top healthcare organizations.</li>
                <li>Build your academic profile: Enhance your resume and stand out from the crowd with recognized credits.</li>
                </ul>
                <Box sx={{ textAlign: 'center', margin: '1.5rem 0' }}>
                    <Button variant="contained" color="primary" component={Link} to="https://docs.google.com/forms/d/e/1FAIpQLSeOwX7EhaVXafzhrQVzJHbVLWyJAacc5tfya14HQxp74-VI3w/closedform"
                    target='_blank'>
                    JOIN US
                    </Button>
                </Box>
            </Box>
            </Grid>
        </Grid>

        {/* Line separating the sections */}
        <Box sx={{ borderBottom: '1px solid #ccc', margin: '2rem 0' }} />

        {/* Line separating the sections */}
        <Box sx={{ borderBottom: '1px solid #ccc', margin: '2rem 0' }} />

        {/* Text with bullet points section */}
        <Box sx={{ marginBottom: '2rem', textAlign: 'left', fontFamily: merriweatherFont, fontSize: '18px' }}>
            <Typography fontSize={18}>
            Here's how it works:
            </Typography>
            <ul style={{lineHeight: '2', fontSize: 16}}>
            <li>Every month, we explore a new, captivating theme based on a trending medical event. Think World Immunization Week, Mental Health Awareness Month, or groundbreaking research discoveries.</li>
            <li>Craft a compelling narrative review: Delve into the topic, weaving insightful research, engaging storytelling, and your unique perspective.</li>
            <li>Get rewarded for your expertise: Submit your polished review to our prestigious conference and potentially win 16 hours of remote work with a leading healthcare organization.</li>
            <li>Boost your academic profile: Earn 0.6 ECTS credits for your exceptional work, further enriching your professional journey.</li>
            </ul>
            <Typography fontSize={18}>
            Monthly Narration is more than just a program; it's a community. Join fellow medical enthusiasts, share your passion for narratives, and gain valuable feedback from experienced mentors.
            </Typography>
        </Box>
        </Container>
        <Box sx={{ display: 'flex', height: '90px', backgroundColor: '#EDEDED', textAlign: 'left'}} >
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant='h6' sx={{fontFamily: merriweatherFont , fontWeight: 900, justifyContent: 'center'}}>
                MANUSCRIPTS SUBMITTED UNDER MONTHLY NARRATION
                </Typography>
            </Container>
        </Box>
        <Box sx={{ display: 'flex', height: '120px', backgroundColor: '#000', color: '#FFF', textAlign: 'left'}} >
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant='h6' sx={{fontFamily: merriweatherFont , textDecoration: 'underline', fontWeight: 900, justifyContent: 'center'}}>
                CELEBRATING  Crohn's and Colitis Awareness Week (December 1-7)
                </Typography>
                <Typography variant='h6' noWrap component={Link} to="https://archive.interconf.center/index.php/2709-4685/article/view/4974" target='_blank' sx={{ textDecoration: 'none', color: '#FFF' }}>
                Tailoring treatment: a comprehensive review of precision medicine and biological therapies in inflammatory bowel disease
                </Typography>
            </Container>
        </Box>
    </Box>
  );
};

export default Research;
