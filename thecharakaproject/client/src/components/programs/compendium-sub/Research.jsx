// Research.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../../App.css';
import researchImg from '../../../images/researchImg.jpeg';

const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";
const merriweatherFont = "'Merriweather', serif";

const Research = () => {
  return (
    <Box>
        <Container style={{fontFamily: merriweatherFont}}>
        {/* Heading */}
        <Box sx={{ textAlign: 'center', marginTop: '6rem', marginBottom: '3rem' }}>
            <Typography variant="h3" sx={{ fontFamily: bowlbyFont}}><span style={{color: '#260251', textDecoration: 'underline'}}>Research</span> <span style={{color: '#DF6805', textDecoration: 'underline'}}>101</span></Typography>
        </Box>

        {/* Image and short description section */}
        <Grid container spacing={0} sx={{ alignItems: 'center' }}>
            {/* Image on the left */}
            <Grid item xs={16} md={6}>
            <Box sx={{ display: 'flex', textAlign: 'left'}}>
                <img
                src={researchImg} // Replace with your image source
                alt="Research Image"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
            </Box>
            </Grid>

            {/* Short line with 3 bullet points on the right */}
            <Grid item xs={16} md={6} style={{paddingLeft: '0px', textAlign: 'left'}}>
            <Box sx={{paddingLeft: '0', fontSize: '18px', fontFamily:  merriweatherFont, fontWeight: 300}}>
                <Typography fontFamily={merriweatherFont} fontSize={18}>
                Are you a med student ready to dive into the exciting world of research? Research 101 is your ultimate launchpad, 
                equipping you with the essential skills to tackle:
                </Typography>
                <br/>
                <ul style={{lineHeight: '1.5', fontSize: 17}}>
                <li>Narrative Reviews: Master the art of weaving a compelling story from existing research, informing and enlightening readers.</li>
                <li>Systematic Reviews & Meta-Analyses: Become a data detective, critically analyzing and synthesizing evidence to draw powerful conclusions.</li>
                <li>Letters to the Editor & Case Reports: Learn to effectively share your unique insights and experiences with the medical community.</li>
                </ul>
                <Box sx={{ textAlign: 'center', margin: '2rem 0' }}>
                    <Button variant="contained" color="primary" component={Link} to="https://docs.google.com/forms/d/e/1FAIpQLScSQ0orcWZGcdmRFYFYAjUunKplP1ILnuaOJ7B8M2zGniW9GQ/viewform"
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
            No prior research experience? No problem! This beginner-friendly module starts you from the ground up, covering:
            </Typography>
            <ul style={{lineHeight: '2', fontSize: 16}}>
            <li>Research fundamentals: Understand the different types of research, ethical considerations, and effective search strategies.</li>
            <li>Writing for impact: Craft clear, concise, and persuasive research manuscripts that grab the attention of editors and readers.</li>
            <li>Statistics 101: Demystify statistical concepts to analyze data confidently and communicate results effectively.</li>
            <li>Publication essentials: Navigate the world of academic journals, understand peer review, and learn how to get your research published.</li>
            </ul>
            <Typography fontSize={18}>
            Research 101 is more than just knowledge. It's a community where you can connect with fellow med students, share experiences, and ask questions 
            in a supportive environment.<br/> <br/>
            Boost your resume, enhance your critical thinking skills, and contribute to the medical field. Enroll in Research 101 and unlock your full research potential!
            </Typography>
        </Box>
        <Box sx={{ height: '30px' }} />
        </Container>
    </Box>
  );
};

export default Research;
