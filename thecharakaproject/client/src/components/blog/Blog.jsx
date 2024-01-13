// Blog.jsx
import React from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import blogBanner from '../../images/blog2.jpg';
import '../../App.css';
const bowlbyFont = "'Bowlby One SC', sans-serif";
const yatraOneFont = "'Yatra One', system-ui";

const Blog = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${blogBanner})`, // Replace with the actual path
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
        <Container>
          <Typography variant='h1' component="div" sx={{fontFamily: bowlbyFont}}>
            Blogs...
          </Typography>
        </Container>
      </div>
      <Container style={{ marginTop: '40px'}}>
        <Typography variant="h4" gutterBottom sx={{fontFamily: bowlbyFont}}>
          Coming Soon...
        </Typography>
        <Typography variant="body1">
          Stay tuned!
        </Typography>
      </Container>
    </div>
  );
};

export default Blog;
