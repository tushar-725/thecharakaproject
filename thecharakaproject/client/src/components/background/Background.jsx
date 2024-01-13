import { Box, Typography } from '@mui/material';
import bgimage from '../../images/GIF.gif';
import '../../App.css';

const font = "'Bebas Neue', sans-serif";
const bowlFon = "'Bowlby One SC', sans-serif";

const Background = () => {
    return (
        <Box>
            <Box
                class="bgimage"
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundSize: "cover",
                    height: "100vh",
            }}> 
            </Box>
            
        </Box>
    )
}

export default Background;

