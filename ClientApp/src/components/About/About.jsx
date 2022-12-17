import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// --- MUI --- // 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



import {
    sxAboutContent,
    sxPostedItem,

} from '../_sxStyles/_sxStyles';

function About() {

    return (
        <Box sx={sxAboutContent}>

            <Typography variant='p' sx={sxPostedItem}>
                This is the post info
            </Typography>

            <h2>hello from about bitches</h2>
            <h2>hello from about bitches</h2>
            <h2>hello from about bitches</h2>
            <h2>hello from about bitches</h2>
            <h2>hello from about bitches</h2>
        </Box>
    );
}

export default About;