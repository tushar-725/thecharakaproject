// Home.jsx
import React from 'react';
import { Container, Typography, CssBaseline, Box, IconButton } from '@mui/material';
import bgimage from '../../images/GIF.gif';
import '../../App.css';
import twitterIcon from '../../images/twitter.png';
import instagramIcon from '../../images/insta.png';
import linkedinIcon from '../../images/linkedin.png';
import threadsIcon from '../../images/threads.png';
import telegramIcon from '../../images/telegram.png';

const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";

const Home = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Box
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <CssBaseline />
          <Container sx={{justifyContent: 'center'}}>
            <Typography variant="h2" component="div" fontFamily={bowlbyFont} style={{ color: '#000', marginBottom: '16px' }}>
              The <span style={{color: '#260251'}}>C<span style={{textDecoration: 'underline'}}>haraka </span></span><span style={{textDecoration: 'underline'}}>Proj</span>ect
            </Typography>
            <Typography variant="h6" style={{ color: '#000'}}>
              <span style={{color: '#260251', fontWeight: 900}}>विद्यायामृतमश्नुते - </span>In knowledge, one attains immortality
            </Typography>
            
          </Container>
      </Box>
      <Box
        sx={{textAlign: 'left', fontFamily: 'bowlbyFont'}}
      >
        <Container sx={{border: 1, m: 2, mx: 'auto', borderRadius: '20px', borderColor: '#260251', borderWidth: '3px'}}>
            <Typography variant="subtitle1" style={{ color: 'black', fontWeight: '600'}} sx={{paddingTop: '32px', paddingBottom: '32px'}}>
              "विद्यायामृतमश्नुते" (Vidyāyāmṛtam-aśnute) translates to "In knowledge, one attains immortality.<br/><br/>

              "Knowledge" in Medicine is an insatiable pursuit of fully understanding Human biology and every potential threat to it. Charaka was 
              incepted with the intention of promoting academia and research along with a healthy niche that propagates productive Medical 
              Education and Medical Science.<br/><br/>

              Charaka is a Medical Science and Education Community named after the principal contributor to the ancient Indian Medicine sciences.<br/><br/>

              The Community aims to propagate academia and instill the values of Responsible Research and Innovation in medical students. 
              The pursuit of research in Medicine is paramount for it fosters innovation and augments healthcare's efficacy and patient outcomes.<br/><br/>
              The community is an Initiative, run by medical students.
            </Typography>
        </Container>
      </Box>
      <Box>
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f2f2f2' }}>
        <IconButton href="https://www.linkedin.com/company/thecharakaproject" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
        </IconButton>
        <IconButton href="https://www.instagram.com/thecharakaproject/" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
        </IconButton>
        <IconButton href="https://twitter.com/CharakaProject" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter" style={{ width: '22px', height: '22px' }} />
        </IconButton>
        <IconButton href="https://www.threads.net/@thecharakaproject" target="_blank" rel="noopener noreferrer">
        <img src={threadsIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
        </IconButton>
        <IconButton href="https://t.me/thecharakaproject" target="_blank" rel="noopener noreferrer">
        <img src={telegramIcon} alt="Telegram" style={{ width: '24px', height: '24px' }} />
        </IconButton>
      </footer>
      </Box>
    </Box>
  );
};

export default Home;
